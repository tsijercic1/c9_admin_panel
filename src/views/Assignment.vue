<template>
  <v-container>
    <v-overlay :value="showOverlay">
      <v-card ref="overlayChildRef" id="overlayChildId">

      </v-card>
<!--      <template v-if="overlayAction ==='Create assignment'">-->
<!--        <CreateAssignment :exit="hideOverlay" :refresh="refreshAssignments" :path="'/'" :course="course"/>-->
<!--      </template>-->
<!--      <template v-if="overlayAction ==='Edit assignment'">-->
<!--        <EditAssignment :exit="hideOverlay" :refresh="refreshAssignments" :categories="categories"-->
<!--                        :assignment="modalItem"></EditAssignment>-->
<!--      </template>-->
<!--      <template v-if="overlayAction ==='Delete task'">-->
<!--        <DeleteTask :exit="hideOverlay" :refresh="refreshAssignments" :task="modalItem"/>-->
<!--      </template>-->
<!--      <template v-if="overlayAction ==='Create file'">-->
<!--        <CreateFile :exit="hideOverlay" :refresh="refreshAssignments" :task="modalItem"/>-->
<!--      </template>-->
<!--      <template v-if="overlayAction ==='Delete file'">-->
<!--        <DeleteFile :exit="hideOverlay" :refresh="refreshAssignments" :file="modalItem" :task="modalItem.parent"/>-->
<!--      </template>-->
    </v-overlay>
    <h1>Assignments</h1>
    <div>
      <vue-context ref="menu" v-slot="{ data }">
        <template v-if="data!==null && data!==undefined">
          <li>
            <a v-if="assignmentEligible(data)" @click.prevent="onClick('Create assignment', data)">
              Create assignment
            </a>
            <a v-if="fileEligible(data)" @click.prevent="onClick('Create file', data)">
              Create file
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
              <v-icon v-else @contextmenu.prevent="$refs.menu.open($event, item )">
                {{ fileTypes[extensionRegex.exec(item.name)[1]] }}
              </v-icon>
            </template>
            <template v-slot:label="{item}">
              <v-list-item-title @contextmenu.prevent="$refs.menu.open($event, item )">
                {{ item.name }}
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
// import CreateAssignment from "@/components/assignmentComponents/CreateAssignment";
// import Vue from 'vue';

export default {
  components: {
    VueContext,
    FileEditor
  },
  mounted() {
  },
  data() {
    return {
      loading: false,
      showOverlay: false,
      overlayAction: "",
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
    hideOverlay() {
      this.showOverlay = false;
      const parent = document.getElementById("overlayChildId");
      const children = parent.childNodes;
      for (let child of children) {
        parent.removeChild(child);
      }
    },
    insertOverlayChild(element) {
      const ref = this.$refs.overlayChildRef;
      if (ref === undefined) {
        setTimeout(() => {
          this.insertOverlayChild(element)
        }, 1000);
      } else {
        ref.$el.appendChild(element);
        this.loading = false;
        this.showOverlay = true;
      }
    },
    refreshAssignments() {
      this.$store.dispatch("refreshAssignments");
    },
    assignmentEligible(item) {
      let result = true;
      if (!item.isDirectory) {
        result = false;
      }
      if (item.children) {
        item.children.forEach(child => {
          if (!child.isDirectory) {
            result = false;
          }
        });
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
            result = false;
          }
        });
      }
      return result;
    },
    onClick(text, data) {
      this.loading = true;
      this.showOverlay = true;
      const instance = this.prepareInstance(text,data);
      console.log(instance);
      if (instance !== undefined) {
        this.insertOverlayChild(instance.$el);
      }
      // alert(`You clicked "${text}"!`);
      console.log(data);
      // => { foo: 'bar' }
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
        await this.$refs.fileEditor.refresh(item);
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
    prepareInstance(text, data) {
      if (text === 'Create assignment') {
        console.log("Pre extending")
        // const InstanceClass = Vue.extend(CreateAssignment);
        // const instance = new InstanceClass({
        //   propsData: {
        //     path: data.path,
        //     course: this.course,
        //     exit: this.hideOverlay,
        //     refresh: this.refreshAssignments,
        //   }
        // });
        // console.log("Post extending")
        // instance.$mount();
        // console.log("Mounted")
        console.log(data);
        return undefined;
      } else {
        return undefined;
      }
    }
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