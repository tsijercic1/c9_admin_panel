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
          ></v-treeview>
        </v-col>
        <v-col md="9" class="sidebar-container">
          <v-sticky-sidebar
              :config="sidebarConfig"
          >
            <v-card class="inner-tile"
                    v-if='editorType2 === "none"'
                    tile
            >
              <v-card-title>Select a file or an assignment/task</v-card-title>
            </v-card>
            <v-card class="inner-tile"
                    v-else-if='editorType2.type === "html"'
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
                    v-else-if='editorType2.type === "code"'
                    tile
            >
              <v-card-title>A code file has been selected</v-card-title>
              <codemirror v-model="code" :options="cmOptions"/>
            </v-card>
            <v-card class="inner-tile"
                    v-else-if='editorType2.type === "autotest"'
                    tile
            >
              <v-card-title>An autotest file has been selected</v-card-title>
            </v-card>
          </v-sticky-sidebar>

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

// import base style
import "codemirror/lib/codemirror.css";
import "codemirror/addon/edit/closebrackets";
import VStickySidebar from "@/components/VueStickySidebar";

export default {
  components: {
    VStickySidebar,
    editor: Editor,
    viewer: Viewer,
    codemirror
  },
  mounted() {
  },
  data() {
    return {
      sidebarConfig: {
        topSpacing: 28,
        bottomSpacing: 10,
        innerWrapperSelector: ".inner-tile",
      },
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
        autoCloseBrackets: true
      }
    };
  },
  computed: {
    activeSelections() {
      return this.active;
    },
    assignments() {
      const courseId = this.$route.params.course_id;
      let result = this.$store.getters.assignmentsForCourse(courseId);
      return this.constructAssignmentsTree(result);
    },
    editorType2() {
      if (this.active.length !== 0) {
        const name = this.active[0].name;
        if (name === ".autotest" || name === "main.cpp") {
          return {
            type: "code"
          }
        } else if (name === ".zadaca") {
          return {
            type: "html"
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
  watch: {
    activeSelections: "logActive",
  },
  methods: {
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
    logActive() {
      if (this.activeSelections.length !== 0) {
        this.assignments.forEach(element => {
          const result = this.findInTree(element, this.activeSelections[0]);
          if (result.success === true) {
            console.log(result);
          }
        })
      }
      let html = "";
      if (this.$refs.toaster) {
        html = this.$refs.toaster.invoke("getHtml");
      }
    },
    constructAssignmentsTree(assignments) {
      let tree = [];
      assignments.forEach(assignment => {
        let element = {};
        if (assignment.id) {
          element.nodeType = "assignment";
          element.id = assignment.id;
          element.name = assignment.name;
          element.type = assignment.type;
          element.path = assignment.path;
          element.hidden = assignment.hidden;
          element.children = this.constructHomogeneousArrayFromAssignmentItemsProperty(assignment);
          element.children.push(...this.constructHomogeneousArrayFromFilesProperty(assignment, "assignmentFile"));
          tree.push(element);
        }
      });
      return tree;
    },
    constructHomogeneousArrayFromAssignmentItemsProperty(assignment) {
      if (assignment.items) {
        let result = [];
        assignment.items.forEach(item => {
          let element = {};
          if (item.id) {
            element.nodeType = "task";
            element.id = item.id;
            element.name = item.name;
            element.type = item.type;
            element.path = item.path;
            element.hidden = item.hidden;
            element.children = this.constructHomogeneousArrayFromFilesProperty(item, "taskFile");
            result.push(element);
          }
        });
        return result;
      }
      return [];
    },
    constructHomogeneousArrayFromFilesProperty(element, fileNodeType) {
      if (element.files) {
        let result = [];
        element.files.forEach(file => {
          if (file.filename) {
            result.push({
              parentId: element.id,
              id: element.path+"/"+file.filename,
              nodeType: fileNodeType,
              name: file.filename,
              binary: file.binary,
              show: file.show,
            });
          } else {
            result.push({
              parentId: element.id,
              id: element.path+"/"+file,
              nodeType: fileNodeType,
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
</style>