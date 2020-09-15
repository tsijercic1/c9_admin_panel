<template>
  <v-container>
    <h1>Assignments</h1>
    <v-container fluid>
      <v-row>
        <v-col md="3">
          <v-treeview
              activatable
              dense
              hoverable
              :items="assignments"
              return-object
              :active.sync="active"
              @update:active="activeChanged(active)"
          >
            <template v-slot:prepend="{ item, open }" v->
              <v-icon v-if='item.isDirectory'>
                {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
              </v-icon>
              <v-icon v-else>
                {{ fileTypes[extensionRegex.exec(item.name)[1]] }}
              </v-icon>
            </template>
          </v-treeview>
        </v-col>
        <v-col md="9" class="sidebar-container">
          <div class="sticky">
            <v-card class="inner-tile"
                    v-if='editorType === "none"'
                    tile
            >
              <v-card-title>Select a file or an assignment/task</v-card-title>
            </v-card>
            <v-card class="inner-tile"
                    v-else-if='editorType.type === "html"'
                    tile
            >
              <v-card-title>
                <span class="headline">{{ this.active[0].name }}</span>
                <v-spacer/>
                <v-btn @click="saveFile()">Save</v-btn>
              </v-card-title>
              <div class="editorWrapper">
                <editor
                    ref="toaster"
                    :initialValue="editorText"
                    :options="editorOptions"
                    height="100%"
                ></editor>
              </div>
            </v-card>
            <v-card class="inner-tile"
                    v-else-if='rawEditorFileExtensions.includes(editorType.type)'
                    tile
            >
              <v-card-title>
                <span class="headline">{{ this.active[0].name }}</span>
                <v-spacer/>
                <v-btn @click="saveFile()">Save</v-btn>
              </v-card-title>
              <div class="editorWrapper">
                <codemirror
                    ref="mirror"
                    v-model="editorText"
                    :options="cmOptions"
                    id="codemirror"
                />
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import "@/assets/styles/codemirror.css";

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

import {Editor} from "@toast-ui/vue-editor";
import "codemirror/mode/clike/clike";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/idea.css";
import "codemirror/theme/darcula.css";
import "codemirror/theme/ayu-mirage.css";
import {codemirror} from "vue-codemirror";
import "codemirror/addon/edit/closebrackets";
import {mapGetters} from "vuex";

export default {
  components: {
    editor: Editor,
    codemirror
  },
  mounted() {
  },
  data() {
    return {
      extensionRegex: /(?:\.([^.]+))?$/,
      fileTypes: {
        html: 'mdi-language-html5',
        c: 'mdi-language-c',
        cpp: 'mdi-language-cpp',
        js: 'mdi-nodejs',
        json: 'mdi-code-json',
        md: 'mdi-language-markdown',
        pdf: 'mdi-file-pdf',
        png: 'mdi-file-image',
        txt: 'mdi-file-document-outline',
        autotest: 'mdi-cog',
        autotest2: 'mdi-cog',
        zadaca: 'mdi-arrow-top-right-thick'
      },
      globalIdCounter: 1,
      rawEditorFileExtensions: ["c", "cpp", "java", "js", "mat", "php", "autotest", "zadaca", "json", "txt", "autotest2"],
      active: [],
      editorText: "This is initialValue.",
      editorOptions: {
        hideModeSwitch: false,
      },
      language: "x-csrc",
      code: "",
      cmOptions: {
        tabSize: 4,
        mode: "text/x-csrc",
        theme: "idea",
        lineNumbers: true,
        line: true,
        autoCloseBrackets: true,
        viewportMargin: Infinity
      }
    };
  },
  computed: {
    ...mapGetters(["courseById", "assignmentsForCourse"]),
    activeSelections() {
      return this.active;
    },
    assignments() {
      const courseId = this.$route.params.course_id;
      const course = this.courseById(courseId);
      let assignments = this.assignmentsForCourse(course);
      if (assignments === undefined) {
        assignments = [];
      } else {
        assignments = assignments.children;
      }
      return assignments;
    },
    editorType() {
      if (this.active.length !== 0) {
        const selected = this.active[0];
        if (!selected.isDirectory) {
          return {
            type: this.extensionRegex.exec(selected.name)[1]
          }
        } else {
          return "none";
        }
      }
      return "none";
    },
    sidebarContent(selectedItem) {
      return selectedItem;
    }
  },
  methods: {
    saveFile() {
      console.log(this.editorText);
    },
    activeChanged(active) {
      if (active.length !== 0) {
        this.treeItemClicked(active[0]);
      }
    },
    async treeItemClicked(item) {
      if (!item.isDirectory) {
        const courseId = this.$route.params.course_id;
        const course = this.courseById(courseId);
        console.log(course);
        let response = await fetch(`/services/assignments.php?action=getFileContent&course_id=${course.id}${course.external ? "&X" : ""}&year=${course.year}`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({path: item.path})
        });
        response = await response.json();
        if (response.success) {
          let content = response.data.content;
          if (this.$refs.mirror) {
            console.log(this.$refs.mirror);
            let tooth = this.$refs.mirror;
            if (tooth.$refs.textarea) {

              tooth.$refs.textarea.rows = 60;
            }
            try {
              if (["autotest", "autotest2", "json", "zadaca"].includes(this.extensionRegex.exec(item.name)[1])) {
                content = await JSON.stringify(await JSON.parse(content), null, 4);
                // content = content.normalize();
              } else {
                console.log("Nije json!");
              }
            } catch (e) {
              console.log("Nije validan json!");
            }
          } else if (this.$refs.toaster) {
            this.$refs.toaster.invoke("setHtml", content);
          }
          this.editorText = content;
        }
        console.log('FILE: ' + item.name);
      } else {
        this.editorText = "";
        console.log('FOLDER: ' + item.name);
      }
    },
    findInTree(root, wanted) {
      if (root.id === wanted.id && root.name === wanted.name) {
        return {
          name: root.name,
          success: true
        };
      } else {
        if (!root.children) {
          return false;
        }
        let response = false;
        root.children.forEach(
            element => {
              let result = this.findInTree(element, wanted);
              if (result.success === true) {
                if (!result.path) {
                  result.path = root.path;
                }
                response = result;
              }
            }
        );
        return response;
      }
    },
  }
};

</script>

<style lang="scss" scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 15px;
}

.inner-tile {
}

.editorWrapper {
  height: 75vh;
  overflow-y: scroll;
  clear: both;
}
</style>