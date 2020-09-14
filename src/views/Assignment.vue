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
              <v-icon v-if='!item.type.includes("File")'>
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
              <v-card-title>An html file has been selected</v-card-title>
              <editor
                  ref="toaster"
                  :initialValue="editorText"
                  :options="editorOptions"
              ></editor>
              <viewer
                  :initialValue="editorText"
                  :options="editorOptions"
              ></viewer>
            </v-card>
            <v-card class="inner-tile"
                    v-else-if='rawEditorFileExtensions.includes(editorType.type)'
                    tile
            >
              <v-card-title>{{ this.active[0].name }}</v-card-title>
              <codemirror ref="mirror" v-model="code" :options="cmOptions"/>
            </v-card>
          </div>

        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

import {Editor, Viewer} from "@toast-ui/vue-editor";
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
    // VStickySidebar,
    editor: Editor,
    viewer: Viewer,
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
        hideModeSwitch: false
      },
      language: "x-csrc",
      code: "#include<stdio.h>\n\nint main(){}",
      cmOptions: {
        tabSize: 4,
        mode: "text/x-csrc",
        theme: "idea",
        lineNumbers: true,
        line: true,
        autoCloseBrackets: true,
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
      let result = this.assignmentsForCourse(course);
      return this.recursiveTreeArrayConstruction(result, undefined);
    },
    editorType() {
      if (this.active.length !== 0) {
        const selected = this.active[0];
        if (selected.type.includes("File")) {
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
    activeChanged(active) {
      if (active.length !== 0) {
        this.treeItemClicked(active[0]);
      }
    },
    treeItemClicked(item) {
      if (item.type.includes("File")) {
        console.log('FILE: ' + item.name);
      } else {
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
    async logActive() {
      console.log("Logged active");
      if (this.activeSelections.length !== 0) {
        console.log("Some are active...");
        let result = false;
        this.assignments.forEach(element => {
          const cache = this.findInTree(element, this.activeSelections[0]);
          if (cache) {
            result = cache;
          }
        });
        console.log(result);
        if (result) {
          console.log("result is not false");
          const course = this.courseById(this.$route.params.course_id);
          const url = `/services/assignments.php`
              + `?action=getFileContent`
              + `&course_id=${course.id}`
              + `&${course.external ? "X" : ""}`
              + `&year=${course.year}`;
          const data = {
            filename: result.name,
            path: result.path.substr(course.abbrev.length)
          }
          if (this.$refs.toaster) {
            const response = await fetch(url,
                {
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  method: 'post',
                  body: JSON.stringify(data)
                });
            const body = await response.json();
            const content = body.data.content
            this.$refs.toaster.invoke("setHtml", content);
            console.log(content);
          } else if (this.$refs.mirror) {
            console.log("this should be written to the console!!!");
            const response = await fetch(url,
                {
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  method: 'post',
                  body: JSON.stringify(data)
                });
            const body = await response.json();
            console.log(body);
            let content = body.data.content;
            try {
              if (["autotest", "autotest2", "json", "zadaca"].includes(this.extensionRegex.exec(result.name)[1])) {
                content = await JSON.stringify(await JSON.parse(content), null, 4);
                // content = content.normalize();
              } else {
                console.log("Nije json!");
              }
            } catch (e) {
              console.log("Nije validan json!");
            }
            this.code = content;
            console.log(this.code);
          }
        }
      }
      console.log("end of logging!");
    },
    recursiveTreeArrayConstruction(nodes, parent) {
      let result = [];
      if (nodes === undefined) {
        return result;
      }
      nodes.forEach(node => {
        if (node.id) {
          // It is a directory
          let element = {
            id: node.id,
            type: node.type === undefined ? "folder" : node.type,
            name: node.name,
            path: node.path === undefined ? "global" : node.path,
            hidden: node.hidden === undefined ? false : node.hidden,
            children: this.constructHomogeneousArrayFromFilesProperty(node, node.type + "File")
          };
          element.children.push(...this.recursiveTreeArrayConstruction(node.items, node));
          result.push(element);
        } else {
          // It is a file
          if (parent === undefined) {
            parent = {
              id: "global/" + this.globalIdCounter,
              path: "global",
              type: "global"
            };
            this.globalIdCounter++;
          }
          if (typeof node === "string") {
            result.push({
              parentId: parent.id,
              id: parent.path + "/" + node,
              type: parent.type + "File",
              name: node,
              binary: false,
              show: true,
            });
          } else {
            result.push({
              parentId: parent.id,
              id: parent.path + "/" + node.filename,
              type: parent.type + "File",
              name: node.filename,
              binary: node.binary,
              show: node.show,
            });
          }
        }
      });
      return result
    },
    constructHomogeneousArrayFromFilesProperty(element, fileNodeType) {
      if (element.files) {
        let result = [];
        element.files.forEach(file => {
          if (file.filename) {
            result.push({
              parentId: element.id,
              id: element.path + "/" + file.filename,
              type: fileNodeType,
              name: file.filename,
              binary: file.binary,
              show: file.show,
            });
          } else {
            result.push({
              parentId: element.id,
              id: element.path + "/" + file,
              type: fileNodeType,
              name: file,
              binary: false,
              show: true,
            });
          }
        });
        return result;
      }
      return [];
    }
  }
};
</script>

<style>

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 15px;
}
</style>