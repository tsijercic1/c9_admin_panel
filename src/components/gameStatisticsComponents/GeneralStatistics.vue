<template>
  <v-card>
    <v-card-title>General</v-card-title>
    <v-row>
      <v-col cols="6">
        <v-card-subtitle>
          Number of players:
        </v-card-subtitle>
      </v-col>
      <v-col cols="6">
        <v-card-subtitle>
          {{ players }}
        </v-card-subtitle>
      </v-col>
      <v-col cols="6">
        <v-card-subtitle>
          Number of power ups in the game:
        </v-card-subtitle>
      </v-col>
      <v-col cols="6">
        <v-card-subtitle>
          {{powerUpsInGame}}
        </v-card-subtitle>
      </v-col>
      <v-col cols="6">
        <v-card-subtitle>
          Number of used power ups in the game:
        </v-card-subtitle>
      </v-col>
      <v-col cols="6">
        <v-card-subtitle>
          {{usedPowerUps}}
        </v-card-subtitle>
      </v-col>
      <v-col cols="6">
        <v-card-subtitle>
          Number of unused power ups in the game:
        </v-card-subtitle>
      </v-col>
      <v-col cols="6">
        <v-card-subtitle>
          {{unusedPowerUps}}
        </v-card-subtitle>
      </v-col>
    </v-row>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
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
            v-for="student in bestStudents"
            :key="student.username"
        >
          <td>{{ student.realName }}</td>
          <td>{{ student.points }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import {gameStatisticsService} from "@/services";
export default {
  name: "GeneralStatistics",
  data() {
    return {
      players: 0,
      powerUpsInGame: 0,
      usedPowerUps: 0,
      unusedPowerUps: 0,
      bestStudents: []
    };
  },
  async mounted() {
    const body = await gameStatisticsService.getGeneral();
    if (body.success === true) {
      this.players = body.data.players;
      this.powerUpsInGame = body.data.powerupsInGame;
      this.usedPowerUps = body.data.usedPowerups;
      this.unusedPowerUps = body.data.unusedPowerups;
      this.bestStudents = body.data.bestStudents;
    }
  }
}
</script>

<style scoped>

</style>