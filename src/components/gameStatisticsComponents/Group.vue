<template>
  <v-container>
    <h1 class="text-center mb-3">{{ group ? group.name : "" }}</h1>
    <v-data-table
        :headers="headers"
        :items.sync="members"
        hide-default-footer
        :items-per-page="members.length"
        @click:row="studentClicked"
    >
    </v-data-table>
  </v-container>
</template>

<script>

import {gameStatisticsService} from "@/services";

export default {
  name: "Group",
  data() {
    return {
      groupId: undefined,
      group: undefined,
      members: [],
      headers: []
    };
  },
  async mounted() {
    this.headers = [
      {
        "text": "Username",
        "value": "login"
      },
      {
        "text": "Name",
        "value": "realName"
      },
    ];
    const groupId = this.$route.query.groupId;
    console.log(groupId);
    this.getAssignmentInfo();
    if (groupId) {
      this.groupId = groupId;
      const body = await gameStatisticsService.getGroupMembers(groupId);
      if (body.success === true) {
        this.group = body.data;
        this.members = body.data.members;
        for (const [index, member] of this.members.entries()) {
          this.getStudentInfo(index, member);
        }
      }
    }
  },
  methods: {
    async getAssignmentInfo() {
      const body = await gameStatisticsService.getAssignments();
      body.data.children.forEach(
          assignment => {
            this.headers.push({
              text: assignment.path,
              value: assignment.id + ""
            });
          }
      );
    },
    async getStudentInfo(index, student) {
      const body = await gameStatisticsService.getStudentInfo(student.login);
      if (body.success === true) {
        for (const [key, value] of Object.entries(body.data)) {
          this.members[index][key + ""] = value.reduce((result, task) => result + task.points, 0);
        }
      }
      console.log(student);
    },
    studentClicked(student) {
      this.$router.push(`/game/student?username=${student.login}`);
    }
  }
}
</script>

<style scoped>

</style>