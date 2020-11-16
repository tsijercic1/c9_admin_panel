<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Place
          </th>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Points
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="(student, index) in students"
            :key="student.student"
            @click="studentClicked(student.student)"
        >
          <td>{{index+1}}.</td>
          <td>{{ student.realName }}</td>
          <td>{{ student.points }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import {gameStatisticsService} from "@/services";

export default {
name: "Leaderboard",
  data() {
    return {
      students: []
    }
  },
  async mounted() {
    const body = await gameStatisticsService.getLeaderboard();
    if (body.success === true) {
      const students = body.data;
      this.students = students.filter(student => student.points !== null);
    }
  },
  methods: {
    studentClicked(username) {
      this.$router.push(`/game/student?username=${username}`);
    }
  }
}
</script>

<style scoped>

</style>