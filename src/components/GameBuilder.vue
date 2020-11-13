<template>
  <v-container fluid>
    <h1>
      Game lessons
      <v-icon @click="onClick('Create assignment', undefined)">mdi-plus</v-icon>
    </h1>
    <v-overlay :value="overlay">
      <template v-if="overlayAction === 'Create assignment'">
        <CreateAssignment :exit="hideOverlay" :refresh="refreshGame"/>
      </template>
      <template v-if="overlayAction === 'Edit assignment'">
        <EditAssignment
            :exit="hideOverlay"
            :refresh="refreshGame"
            :categories="categories"
            :assignment="modalItem"
        ></EditAssignment>
      </template>
      <template v-if="overlayAction === 'Create task'">
        <CreateTask
            :exit="hideOverlay"
            :refresh="refreshGame"
            :categories="categories"
            :assignment="modalItem"
        />
      </template>
      <template v-if="overlayAction === 'Edit task'">
        <EditTask
            :exit="hideOverlay"
            :refresh="refreshGame"
            :categories="categories"
            :assignment="modalItem.parent"
            :task="modalItem"
        />
      </template>
      <template v-if="overlayAction === 'Delete task'">
        <DeleteTask
            :exit="hideOverlay"
            :refresh="refreshGame"
            :task="modalItem"
        />
      </template>
      <template v-if="overlayAction === 'Create file'">
        <CreateFile
            :exit="hideOverlay"
            :refresh="refreshGame"
            :task="modalItem"
        />
      </template>
      <template v-if="overlayAction === 'Delete file'">
        <DeleteFile
            :exit="hideOverlay"
            :refresh="refreshGame"
            :file="modalItem"
            :task="modalItem.parent"
        />
      </template>
    </v-overlay>
    <vue-context ref="menu" v-slot="{ data }">
      <template v-if="data !== null && data !== undefined">
        <template v-if="data.type === 'assignment'">
          <li>
            <a @click.prevent="onClick('Edit assignment', data)">
              Edit assignment
            </a>
          </li>
          <li>
            <a @click.prevent="onClick('Create task', data)">
              Create task
            </a>
          </li>
        </template>
        <template v-if="data.type === 'task'">
          <li>
            <a @click.prevent="onClick('Edit task', data)">
              Edit task
            </a>
          </li>
          <li>
            <a @click.prevent="onClick('Delete task', data)">
              Delete task
            </a>
          </li>
          <li>
            <a @click.prevent="onClick('Create file', data)">
              Create file
            </a>
          </li>
        </template>
        <template v-if="data.type === 'file'">
          <li>
            <a @click.prevent="onClick('Delete file', data)">
              Delete file
            </a>
          </li>
        </template>
      </template>
    </vue-context>
    <v-row>
      <v-col cols="4">
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
                :color="getColorOfIcon(item)"
            >
              {{ open ? "mdi-folder-open" : "mdi-folder" }}
            </v-icon>
            <v-icon v-else @contextmenu.prevent="$refs.menu.open($event, item)">
              {{ fileTypes[extensionRegex.exec(item.name)[1]] }}
            </v-icon>
          </template>
          <template v-slot:label="{ item }">
            <v-list-item-title
                @contextmenu.prevent="$refs.menu.open($event, item)"
            >
              {{ item.name + (item.type !== "file" ? ` (${item.path})` : "") }}
              <template v-if="item.type === 'assignment'">
                <v-avatar color="blue lighten-4" style="font-size: smaller" size="24" class="ml-2 my-auto">
                  {{ getNumberOfTasksInCategory(item, 'Easy') }}
                </v-avatar>
                <v-avatar color="green lighten-4" style="font-size: smaller" size="24" class="ml-2 my-auto">
                  {{ getNumberOfTasksInCategory(item, 'Moderate') }}
                </v-avatar>
                <v-avatar color="red lighten-4" style="font-size: smaller" size="24" class="ml-2 my-auto">
                  {{ getNumberOfTasksInCategory(item, 'Hard') }}
                </v-avatar>
              </template>
            </v-list-item-title>
          </template>
        </v-treeview>
      </v-col>
      <v-col cols="8">
        <v-card class="sticky" tile elevation="2">
          <FileEditor
              :service="service"
              ref="fileEditor"
              class="editorWrapper"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueContext from "vue-context";
import "vue-context/src/sass/vue-context.scss";
import CreateAssignment from "@/components/gameComponents/CreateAssignment";
import EditAssignment from "@/components/gameComponents/EditAssignment";
import CreateTask from "@/components/gameComponents/CreateTask";
import EditTask from "@/components/gameComponents/EditTask";
import FileEditor from "@/components/gameComponents/FileEditor";
import DeleteTask from "@/components/gameComponents/DeleteTask";
import DeleteFile from "@/components/gameComponents/DeleteFile";
import CreateFile from "@/components/gameComponents/CreateFile";
import {gameService} from "@/services";
import {fileTypes,extensionRegex} from "@/constants";

export default {
  components: {
    CreateFile,
    DeleteFile,
    DeleteTask,
    FileEditor,
    EditTask,
    CreateTask,
    EditAssignment,
    CreateAssignment,
    VueContext
  },
  name: "GameBuilder",
  data() {
    return {
      service: {
        name: "uup_game.php",
        actions: {
          getContent: "getTaskFileContent",
          saveContent: "editTaskFile"
        }
      },
      modalItem: undefined,
      overlay: false,
      overlayAction: "",
      assignments: [],
      active: [],
      categories: [],
      fileTypes,
      extensionRegex
    };
  },
  async mounted() {
    await this.refreshGame();
  },
  methods: {
    hideOverlay() {
      this.overlay = false;
    },
    showOverLay() {
      this.overlay = true;
    },
    activeChanged(active) {
      this.file = undefined;
      if (active.length !== 0) {
        this.treeItemClicked(active[0]);
      } else {
        this.$refs.fileEditor.refresh(undefined);
      }
    },
    async treeItemClicked(item) {
      if (!item.isDirectory) {
        this.$refs.fileEditor.refresh(item);
      } else {
        this.$refs.fileEditor.refresh(undefined);
      }
    },
    onClick(action, item) {
      this.overlayAction = action;
      this.modalItem = item;
      this.showOverLay();
    },
    fixIds(item, parent) {
      if (item) {
        if (parent !== null) {
          item.parent = parent;
        }
        if (item.type === "file") {
          item.id = item.path;
        } else {
          item.scrapedId = item.id;
          item.id = item.id + "." + item.type;
        }
        if (item.children) {
          item.children.forEach(child => this.fixIds(child, item));
        }
      }
    },
    async refreshGame() {
      let assignments = [];
      let categories = [];

      let body = await gameService.getTaskCategories();
      if (!body.success) {
        return false;
      }
      categories = body.data;
      body = await gameService.getAssignments();
      if (!body.success) {
        return false;
      }
      assignments = body.data.children;
      assignments.forEach(item => this.fixIds(item, null));
      this.assignments = assignments;
      this.categories = categories;
      return true;
    },
    getNumberOfTasksInCategory(assignment, category) {
      if (assignment.type === "assignment") {
        let id = 1;
        this.categories.forEach(c => c.name === category ? id = c.id : "");
        let numberOfTasks = 0;
        if (assignment.children) {
          assignment.children.forEach(task => {
            if (task.data.category === id) {
              numberOfTasks++;
            }
          });
        }
        return numberOfTasks;
      }
      return 0;
    },
    getColorOfIcon(node) {
      if (node.type === 'task') {
        const id = node.data.category;
        for (const category of this.categories) {
          if (category.id === id) {
            if (category.name === "Easy") {
              return "blue lighten-4";
            } else if (category.name === "Moderate") {
              return "green lighten-4";
            }
            return "red lighten-4";
          }
        }
        return "";
      }
    }
  }
};
</script>

<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 15px;
}

.editorWrapper {
  height: 75vh;
  overflow-y: hidden;
  clear: both;
}
</style>
