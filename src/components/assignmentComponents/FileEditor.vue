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
import {codemirror} from "vue-codemirror";
import "codemirror/addon/edit/closebrackets";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

import {Editor} from "@toast-ui/vue-editor";

import {assignmentService} from "@/services";

export default {
name: "FileEditor",
  props: {
    course: Object
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
      modes: {
        c: "text/x-csrc",
        cpp: "text/x-c++src",
        java: "text/x-java",
        json: "application/json",
        javascript: "text/javascript",
        typescript: "text/typescript"
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
      let body = await assignmentService.editFile(this.course, {path: this.file.path,content,show: this.show, binary: this.binary})
      this.isSaving = false;
      if (!body.success) {
        this.$notify({
          type: "bad",
          group: "main",
          title: "Save file",
          text: `${body.message || 'An error has occurred.'}`
        });
        return false;
      }
      this.$notify({
        type: "good",
        group: "main",
        title: "Save file",
        text: `File /${this.file.parent.parent.name}/${this.file.parent.name}/${this.file.name} saved.`
      });
    },
    async refresh(file) {
      this.file = file;
      if (this.$refs.toaster) {
        this.$refs.toaster.invoke("height", "75vh");
        this.$refs.toaster.invoke("setHtml","");
      }
      this.fileContent = "";
      console.log(file);

      if (this.file && this.file.parent) {
        let body = await assignmentService.getFileContent(this.course,{path: this.file.path})
        if (!body.success) {
          return false;
        }
        if (this.$refs.toaster) {
          this.$refs.toaster.invoke("setHtml", body.data.content);
        } else if (this.$refs.mirror) {
          this.fileContent = body.data.content;
        }
        this.binary = this.file.binary;
        this.show = this.file.show;
      }
      if(["autotest", "zadaca", "json", "autotest2"].includes(this.extensionRegex.exec(file.name)[1])) {
        this.cmOptions.mode = this.modes.json;
      } else if (["c"].includes(this.extensionRegex.exec(file.name)[1])) {
        this.cmOptions.mode = this.modes.c;
      } else if (["cpp"].includes(this.extensionRegex.exec(file.name)[1])) {
        this.cmOptions.mode = this.modes.cpp;
      } else if (["java"].includes(this.extensionRegex.exec(file.name)[1])) {
        this.cmOptions.mode = this.modes.java;
      } else if (["js"].includes(this.extensionRegex.exec(file.name)[1])) {
        this.cmOptions.mode = this.modes.javascript;
      } else if (["ts"].includes(this.extensionRegex.exec(file.name)[1])) {
        this.cmOptions.mode = this.modes.typescript;
      }
    }
  }
}
</script>

<style scoped>

</style>