<template>
  <v-card>
    <v-card-title>{{ realName }}</v-card-title>
    <v-progress-linear
        height="25"
        :value="pointPercentage"
    >
      <strong>{{ points }}</strong>
    </v-progress-linear>
    <v-row>
      <v-col cols="5">
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
                :color="getColorOfIcon(item)"
            >
              {{ open ? "mdi-folder-open" : "mdi-folder" }}
            </v-icon>
            <v-icon v-else>
              {{ fileTypes[extensionRegex.exec(item.name)[1]] }}
            </v-icon>
          </template>
          <template v-slot:label="{ item }">
            <v-list-item-title>
              {{ item.name + (item.type !== "file" ? ` (${item.path})` : "") }}
            </v-list-item-title>
            <v-icon v-if="item.type==='assignment' && isAssignmentDone(item)" color="green">mdi-check-bold</v-icon>
            <v-chip v-if="item.type === 'task'" :color="getTaskChipColor(item)">{{item.status}}</v-chip>
            <v-list-item-title v-if="item.type === 'assignment'">
              {{ `${getAssignmentPoints(item)} / ${item.totalPoints}` }}
            </v-list-item-title>
          </template>
        </v-treeview>
      </v-col>
      <v-col cols="7">
        In development
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {gameStatisticsService} from "@/services";
import {fileTypes, extensionRegex, getCategoryColor} from "@/constants";

export default {
  name: "StudentInfo",
  data() {
    return {
      realName: "",
      points: 0,
      assignments: [],
      active: undefined,
      fileTypes,
      extensionRegex
    }
  },
  computed: {
    pointPercentage() {
      return this.points * 100 / 40;
    }
  },
  async mounted() {
    const query = this.$route.query;
    if (Object.keys(query).includes("username")) {
      const body = await gameStatisticsService.getStudentInfo();
      const assignmentBody = await gameStatisticsService.getAssignments();
      console.log(body);
      console.log(assignmentBody);
      if (body.success === true && assignmentBody.success === true) {
        console.log("StudentInfo - Line 80 - OK");
        this.realName = body.student.realName;
        this.points = body.student.totalPoints;
        let assignmentDescriptions = assignmentBody.data.children;
        let assignmentMap = {};
        assignmentDescriptions.forEach(assignmentDescription => {
          assignmentDescription.children.forEach(child => {
            assignmentDescription[child.id] = child;
          });
          assignmentDescription.children = undefined;
          assignmentMap[assignmentDescription.id] = assignmentDescription;
        });
        let assignments = [];
        console.log(Object.keys(body.data))
        for (let assignmentId of Object.keys(body.data)) {
          let assignment = {
            id: 'assignment'+assignmentId,
            scrapedId: assignmentId,
            name: assignmentMap[assignmentId].name,
            path: assignmentMap[assignmentId].path,
            isDirectory: assignmentMap[assignmentId].isDirectory,
            type: assignmentMap[assignmentId].type,
            totalPoints: assignmentMap[assignmentId].data.points
          };
          let children = [];
          body.data[assignmentId].forEach(task => {
            const descriptor = assignmentMap[assignmentId][task.task_id];
            let element = {
              id: assignmentId + "-" + descriptor.id,
              scrapedId: descriptor.id,
              path: descriptor.path,
              name: descriptor.name,
              type: descriptor.type,
              status: task.status,
              taskNumber: task.task_number,
              points: task.points,
              parent: assignment
            };
            children.push(element);
          });
          assignment.children = children;
          assignments.push(
            assignment
          );
        }
        console.log(assignments);
        this.assignments = assignments;
      }
    } else {
      console.log("Student username not set!!!");
    }
  },
  methods: {
    activeChanged(item) {
      console.log("Clicked on: ");
      console.log(item);
    },
    getColorOfIcon(item) {
      if (item.type === "task") {
        if (item.taskNumber < 6) {
          return getCategoryColor("Easy");
        } else if (item.taskNumber < 11) {
          return getCategoryColor("Moderate");
        } else {
          return getCategoryColor("Hard");
        }
      }
      return "";
    },
    isAssignmentDone(assignment) {
      for (const child of assignment.children) {
        if (child.status !== "TURNED IN") {
          return false;
        }
      }
      return true;
    },
    getTaskChipColor(task) {
      if (task.status === "TURNED IN") {
        return "gray lighten-3";
      } else if (task.status === "CURRENT TASK") {
        return "green lighten-3";
      } else if (task.status === "NOT TURNED IN") {
        return "purple lighten-3"
      }
      return "";
    },
    getAssignmentPoints(assignment) {
      let result = 0;
      assignment.children.forEach(task => result += task.points);
      return result;
    }
  }
}
</script>

<style scoped>

</style>