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
import { gameStatisticsService } from "@/services";

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
        text: "Username",
        value: "login"
      },
      {
        text: "Name",
        value: "realName"
      }
    ];
    const groupId = this.$route.query.groupId;
    console.log(groupId);
    await this.getAssignmentInfo();
    if (groupId) {
      this.groupId = groupId;
      const body = await gameStatisticsService.getGroupMembers(groupId);
      if (body.success === true) {
        this.group = body.data;
        this.members = body.data.members;
        for (const [index, member] of this.members.entries()) {
          await this.getStudentInfo(index, member);
        }
      }
    }
  },
  methods: {
    async getAssignmentInfo() {
      const body = await gameStatisticsService.getAssignments();
      body.data.children.forEach(assignment => {
        this.headers.push({
          text: assignment.path,
          value: "lesson" + assignment.id
        });
      });
    },
    async getStudentInfo(index, student) {
      const body = await gameStatisticsService.getStudentInfo(student.login);
      if (body.success === true) {
        for (const [key, value] of Object.entries(body.data)) {
          console.log(key);
          console.log(typeof key);
          const object = { ...this.members[index] };
          object["lesson" + key] = value
            .reduce((result, task) => result + task.points, 0)
            .toFixed(2);
          this.members.splice(index, 1, object);
          console.log(typeof value);
        }
      }
      console.log(student);
      console.log(this.headers);
      console.log(this.members);
    },
    studentClicked(student) {
      this.$router.push(`/game/student?username=${student.login}`);
    }
  }
};
</script>

<style scoped></style>
