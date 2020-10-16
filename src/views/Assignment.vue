<template>
  <v-container>
    <h1>Assignments</h1>
    <div>
      <vue-context ref="menu" v-slot="{ data }">
        <template v-if="data!==null && data!==undefined">
                  <li>
                    <a v-if="assignmentEligible(data)" @click.prevent="onClick('Add assignment', data)">
                      Add assignment
                    </a>
                    <a v-if="fileEligible(data)" @click.prevent="onClick('Add file', data)">
                      Add file
                    </a>
                  </li>
                  <li>
                    <a v-if="data.isDirectory" @click.prevent="onClick('Edit assignment', data)">
                      Edit assignment
                    </a>
                    <a v-else @click.prevent="onClick('Edit file', data)">
                      Edit file
                    </a>
                  </li>
                  <li>
                    <a v-if="data.isDirectory" @click.prevent="onClick('Delete assignment', data)">
                      Delete assignment
                    </a>
                    <a v-else @click.prevent="onClick('Delete file', data)">
                      Delete file
                    </a>
                  </li>
        </template>
      </vue-context>
    </div>
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
            <template v-slot:prepend="{ item, open }">
              <v-icon v-if='item.isDirectory' @contextmenu.prevent="$refs.menu.open($event, item )">
                {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
              </v-icon>
              <v-icon v-else @contextmenu.prevent="$refs.menu.open($event, item )" >
                {{ fileTypes[extensionRegex.exec(item.name)[1]] }}
              </v-icon>
            </template>
            <template v-slot:label="{item}">
              <v-list-item-title @contextmenu.prevent="$refs.menu.open($event, item )">
                {{item.name}}
              </v-list-item-title>
            </template>
          </v-treeview>
        </v-col>
        <v-col cols="9">
          <v-card class="sticky" tile elevation="2">
            <FileEditor ref="fileEditor" :course="course" class="editorWrapper"/>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import "@/assets/styles/codemirror.css";

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

import "codemirror/mode/clike/clike";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/idea.css";
import "codemirror/theme/darcula.css";
import "codemirror/theme/ayu-mirage.css";
import "codemirror/addon/edit/closebrackets";
import {mapGetters} from "vuex";
import VueContext from 'vue-context';
import 'vue-context/src/sass/vue-context.scss'; // Alternatively import into a stylesheet instead
import FileEditor from "@/components/assignmentComponents/FileEditor";
export default {
  components: {
    VueContext,
    FileEditor
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
    course() {
      const courseId = this.$route.params.course_id;
      return this.courseById(courseId);
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
    assignmentEligible(item) {
      let result = true;
      if (!item.isDirectory) {
        result = false;
      }
      if (item.children) {
        item.children.forEach(child => {
          if (!child.isDirectory) {
            result=false;
          }});
      }
      return result;
    },
    fileEligible(item) {
      let result = true;
      if (!item.isDirectory) {
        result = false;
      }
      if (item.children) {
        item.children.forEach(child => {
          if (child.isDirectory) {
            result=false;
          }});
      }
      return result;
    },
    onClick(text, data) {
      alert(`You clicked "${text}"!`);
      console.log(data);
      // => { foo: 'bar' }
    },
    treeAction(element) {
      console.log(element);
    },
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
        this.$refs.fileEditor.refresh(item);
        // let response = await fetch(`/services/assignments.php?action=getFileContent&course_id=${course.id}${course.external ? "&X" : ""}&year=${course.year}`, {
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   method: 'POST',
        //   body: JSON.stringify({path: item.path})
        // });
        // response = await response.json();
        // if (response.success) {
        //   let content = response.data.content;
        //   if (this.$refs.mirror) {
        //     console.log(this.$refs.mirror);
        //     let tooth = this.$refs.mirror;
        //     if (tooth.$refs.textarea) {
        //
        //       tooth.$refs.textarea.rows = 60;
        //     }
        //     try {
        //       if (["autotest", "autotest2", "json", "zadaca"].includes(this.extensionRegex.exec(item.name)[1])) {
        //         content = await JSON.stringify(await JSON.parse(content), null, 4);
        //         // content = content.normalize();
        //       } else {
        //         console.log("Nije json!");
        //       }
        //     } catch (e) {
        //       console.log("Nije validan json!");
        //     }
        //   } else if (this.$refs.toaster) {
        //     this.$refs.toaster.invoke("setHtml", content);
        //   }
        //   this.editorText = content;
        // }
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