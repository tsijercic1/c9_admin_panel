<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card tile>
          <v-card-title>Some numbers</v-card-title>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Label
                  </th>
                  <th class="text-left">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="number in numbers" :key="number.label">
                  <td>{{ number.label }}</td>
                  <td>{{ number.value }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col>
        <v-card tile>
          <v-card-title>
            Best Students
          </v-card-title>
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
                  @click="studentClicked(student.username)"
                >
                  <td>{{ student.realName }}</td>
                  <td>{{ student.points }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { gameStatisticsService } from "@/services";

export default {
  name: "GeneralStatistics",
  data() {
    return {
      bestStudents: [],
      numbers: []
    };
  },
  async mounted() {
    const body = await gameStatisticsService.getGeneral();
    if (body.success === true) {
      this.numbers = [
        {
          label: "Number of players",
          value: body.data.players
        },
        {
          label: "Number of tokens in the game: ",
          value: body.data.tokensInGame
        },
        {
          label: "Number of power-ups in the game:",
          value: body.data.powerUpsInGame
        },
        {
          label: "Number of used power-ups in the game:",
          value: body.data.usedPowerUps
        },
        {
          label: "Number of unused power-ups in the game:",
          value: body.data.unusedPowerUps
        }
      ];
      this.bestStudents = body.data.bestStudents;
    }
  },
  methods: {
    studentClicked(username) {
      this.$router.push(`/game/student?username=${username}`);
    }
  }
};
</script>

<style scoped></style>
