<template>
  <v-card>
    <v-card-title>Game</v-card-title>
    <GameStatistics/>
    <GameBuilder v-if="isAdmin"></GameBuilder>
  </v-card>
</template>

<script>
import GameStatistics from "@/components/GameStatistics";
import GameBuilder from "@/components/GameBuilder";

export default {
  name: "Game",
  components: {GameBuilder, GameStatistics},
  data() {
    return {
      isAdmin: false
    };
  },
  mounted() {
    this.isAdmin = this.$store.getters.roles.includes("admin") || this.$store.getters.roles.includes("sysadmin");
  }
}
</script>

<style scoped>

</style>