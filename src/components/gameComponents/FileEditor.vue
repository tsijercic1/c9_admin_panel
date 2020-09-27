<template>
  <div style="height: 100%">
    <v-card class="inner-tile" v-if="editable.type === 'none'" tile>
      <v-card-title>Select a file</v-card-title>
    </v-card>
    <v-card class="inner-tile" v-else-if="editable.type === 'html'" tile>
      <v-card-title>
        <span class="headline">{{ file.name }}</span>
        <v-spacer/>
        <v-checkbox label="Binary" v-model="binary"></v-checkbox>
        <v-spacer/>
        <v-checkbox label="Show" v-model="show"></v-checkbox>
        <v-spacer/>
        <v-btn @click="save()">Save</v-btn>
      </v-card-title>
      <div>
        <editor ref="toaster" :options="editorOptions" height="75vh"></editor>
      </div>
    </v-card>
    <v-card v-else-if="rawEditorFileExtensions.includes(editable.type)" tile>
      <v-card-title>
        <span class="headline">{{ file.name }}</span>
        <v-spacer/>
        <v-checkbox label="Binary" v-model="binary"></v-checkbox>
        <v-spacer/>
        <v-checkbox label="Show" v-model="show"></v-checkbox>
        <v-spacer/>
        <v-btn @click="save()" :disabled="isSaving">Save</v-btn>
      </v-card-title>
      <div>
        <codemirror
            ref="mirror"
            v-model="fileContent"
            :options="cmOptions"
            id="codemirror"
        />
      </div>
    </v-card>
  </div>
</template>

<script>
import "@/assets/styles/codemirror.css";

import "codemirror/mode/clike/clike";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/idea.css";
import "codemirror/theme/darcula.css";
import "codemirror/theme/ayu-mirage.css";
import "codemirror/mode/vue/vue.js";
import {codemirror} from "vue-codemirror";
import "codemirror/addon/edit/closebrackets";

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

import {Editor} from "@toast-ui/vue-editor";

export default {
  name: "FileEditor",
  props: {
    service: Object
  },
  components: {
    codemirror,
    Editor
  },
  data() {
    return {
      binary: false,
      show: true,
      fileContent: "",
      file: undefined,
      extensionRegex: /(?:\.([^.]+))?$/,
      editorOptions: {
        hideModeSwitch: false
      },
      cmOptions: {
        tabSize: 4,
        mode: "text/x-csrc",
        theme: "idea",
        lineNumbers: true,
        line: true,
        autoCloseBrackets: true,
        viewportMargin: Infinity
      },
      rawEditorFileExtensions: [
        "c",
        "cpp",
        "java",
        "js",
        "mat",
        "php",
        "autotest",
        "zadaca",
        "json",
        "txt",
        "autotest2"
      ],
      isSaving: false
    };
  },
  computed: {
    editable() {
      if (this.file && !this.file.isDirectory) {
        return {
          type: this.extensionRegex.exec(this.file.name)[1]
        };
      } else {
        return {type: "none"};
      }
    }
  },
  methods: {
    async save() {
      this.isSaving = true;
      let content = "";
      if (this.$refs.toaster) {
        content = this.$refs.toaster.invoke("getHtml");
      } else if (this.$refs.mirror) {
        content = this.file.content;
      }
      let response = await fetch(`/services/uup_game.php?action=editTaskFile&taskId=${this.file.parent.scrapedId}`, {
        method: "put",
        headers: {
          Accept: "application/json"
        },
        body: JSON.stringify({name: this.file.name, content: content, show: this.show, binary: this.binary})
      });
      let body = await response.json();
      this.isSaving = false;
      if (!body.success) {
        return false;
      }
    },
    async refresh(file) {
      if (this.$refs.toaster) {
        this.$refs.toaster.invoke("height", "75vh");
      }
      this.file = file;
      if (this.file && this.file.parent) {
        let response = await fetch(`/services/uup_game.php?action=getTaskFileContent&taskId=${this.file.parent.scrapedId}&name=${this.file.name}`, {
          method: "get",
          headers: {
            Accept: "application/json"
          }
        });
        let body = await response.json();
        if (!body.success) {
          return false;
        }
        if (this.$refs.toaster) {
          this.$refs.toaster.invoke("setHtml", body.data.content);
        } else if (this.$refs.mirror) {
          this.fileContent = body.data.content;
        }
        this.binary = this.file.data.binary;
        this.show = this.file.data.show;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#codemirror {
  height: 75vh;
  overflow-y: scroll;
  clear: both;
}
</style>
