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
          <vue-sticky-sidebar containerSelector=".sidebar-container" innerWrapperSelector='.inner-tile'>
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
                    v-else-if='editorType.type === "code"'
                    tile
            >
              <v-card-title>A code file has been selected</v-card-title>
              <codemirror v-model="code" :options="cmOptions"/>
              <v-input type="button" @click="toggleTheme()">Change Theme</v-input>
            </v-card>
          </vue-sticky-sidebar>
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
import vueStickySidebar from "vue-sticky-sidebar";

export default {
  components: {
    editor: Editor,
    viewer: Viewer,
    codemirror,
    "vue-sticky-sidebar": vueStickySidebar
  },
  data() {
    return {
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
      this.renameAssignmentPropertyRecursively(result);
      return result;
    },
    editorType() {
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
    }
  },
  watch: {
    activeSelections: "logActive"
  },
  methods: {
    toggleTheme() {
      if (this.cmOptions.theme === "darcula") {
        this.cmOptions.theme = "";
      } else {
        this.cmOptions.theme = "darcula";
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
      console.log(html);
    },
    renameAssignmentPropertyRecursively(assignments) {
      assignments.forEach(assignment => {
        if (assignment.files) {
          assignment.children = assignment.files.map((file, index) => {
            if (typeof file === "string" || file instanceof String) {
              return {
                id: assignment.id + "000" + index,
                name: file,
                binary: false,
                show: true
              };
            } else {
              return {
                id: assignment.id + "000" + index,
                name: file.filename,
                binary: file.binary,
                show: file.show
              };
            }
          });
        }
        if (!assignment.items) {
          return;
        }
        assignment.children = [...assignment.children, ...assignment.items];
        this.renameAssignmentPropertyRecursively(assignment.children);
      });
    }
  }
};
</script>

<style>
</style>