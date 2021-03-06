<template>
  <v-container>
    <v-overlay :value="showOverlay">
      <template v-if="overlayAction === 'Create assignment'">
        <CreateAssignment
          :exit="hideOverlay"
          :refresh="refreshAssignments"
          :path="selectedNode.path"
          :course="course"
        />
      </template>
      <template v-if="overlayAction === 'Edit assignment'">
        <EditAssignment
          :exit="hideOverlay"
          :refresh="refreshAssignments"
          :assignment="selectedNode"
          :course="course"
        ></EditAssignment>
      </template>
      <template v-if="overlayAction === 'Delete assignment'">
        <DeleteAssignment
          :exit="hideOverlay"
          :refresh="refreshAssignments"
          :assignment="selectedNode"
          :course="course"
        />
      </template>
      <template v-if="overlayAction === 'Create file'">
        <CreateFile
          :exit="hideOverlay"
          :refresh="refreshAssignments"
          :assignment="selectedNode"
          :course="course"
        />
      </template>
      <template v-if="overlayAction === 'Delete file'">
        <DeleteFile
          :exit="hideOverlay"
          :refresh="refreshAssignments"
          :file="selectedNode"
          :course="course"
        />
      </template>
    </v-overlay>
    <h1>
      Assignments
      <v-icon @click="onClick('Create assignment', { path: '' })"
        >mdi-plus
      </v-icon>
    </h1>
    <div>
      <vue-context ref="menu" v-slot="{ data }">
        <template v-if="data !== null && data !== undefined">
          <li>
            <a
              v-if="assignmentEligible(data)"
              @click.prevent="onClick('Create assignment', data)"
            >
              Create assignment
            </a>
            <a
              v-if="fileEligible(data)"
              @click.prevent="onClick('Create file', data)"
            >
              Create file
            </a>
          </li>
          <li>
            <a
              v-if="data.isDirectory"
              @click.prevent="onClick('Edit assignment', data)"
            >
              Edit assignment
            </a>
          </li>
          <li>
            <a
              v-if="data.isDirectory"
              @click.prevent="onClick('Delete assignment', data)"
            >
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
              <v-icon
                v-if="item.isDirectory"
                @contextmenu.prevent="$refs.menu.open($event, item)"
              >
                {{ open ? "mdi-folder-open" : "mdi-folder" }}
              </v-icon>
              <v-icon
                v-else
                @contextmenu.prevent="$refs.menu.open($event, item)"
              >
                {{ fileTypes[extensionRegex.exec(item.name)[1]] }}
              </v-icon>
            </template>
            <template v-slot:label="{ item }">
              <v-list-item-title
                @contextmenu.prevent="$refs.menu.open($event, item)"
              >
                {{
                  item.name +
                    (item.isDirectory === true ? ` (${item.path})` : "")
                }}
              </v-list-item-title>
            </template>
          </v-treeview>
        </v-col>
        <v-col cols="9">
          <v-card class="sticky" tile elevation="2">
            <FileEditor
              ref="fileEditor"
              :course="course"
              class="editorWrapper"
            />
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
import { mapGetters } from "vuex";
import VueContext from "vue-context";
import "vue-context/src/sass/vue-context.scss"; // Alternatively import into a stylesheet instead
import FileEditor from "@/components/course/assignment/FileEditor";
import CreateAssignment from "@/components/course/assignment/CreateAssignment";
import EditAssignment from "@/components/course/assignment/EditAssignment";
import DeleteAssignment from "@/components/course/assignment/DeleteAssignment";
import CreateFile from "@/components/course/assignment/CreateFile";
import DeleteFile from "@/components/course/assignment/DeleteFile";
import { extensionRegex, fileTypes } from "@/constants";

export default {
  components: {
    DeleteFile,
    CreateFile,
    DeleteAssignment,
    VueContext,
    FileEditor,
    EditAssignment,
    CreateAssignment
  },
  mounted() {},
  data() {
    return {
      selectedNode: undefined,
      loading: false,
      showOverlay: false,
      overlayAction: "",
      extensionRegex,
      fileTypes,
      globalIdCounter: 1,
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
      active: [],
      editorText: "This is initialValue.",
      editorOptions: {
        hideModeSwitch: false
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
          };
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
      this.selectedNode = data;
      this.loading = true;
      this.overlayAction = text;
      this.showOverlay = true;
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
        console.log("FILE: " + item.name);
      } else {
        this.editorText = "";
        console.log("FOLDER: " + item.name);
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
        root.children.forEach(element => {
          let result = this.findInTree(element, wanted);
          if (result.success === true) {
            if (!result.path) {
              result.path = root.path;
            }
            response = result;
          }
        });
        return response;
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
