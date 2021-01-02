<template>
  <v-card>
    <v-card-title>Game statistics</v-card-title>
    <GeneralStatistics/>
  </v-card>
</template>

<script>
import GeneralStatistics from "@/components/game/statistics/GeneralStatistics";
export default {
  name: "GameStatistics",
  components: {GeneralStatistics}
};
</script>

<style scoped>

</style>