<template>
  <v-container>
    <v-card-title class="justify-center">Game</v-card-title>
    <v-tabs v-model="activeTab" color="deep-purple" centered>
      <v-tab>Leaderboard</v-tab>
      <v-tab>Groups</v-tab>
      <v-tab>General</v-tab>
      <v-tab v-if="isAdmin">Builder</v-tab>

      <v-tab-item>
        <leaderboard />
      </v-tab-item>
      <v-tab-item>
        <groups />
      </v-tab-item>
      <v-tab-item>
        <general-statistics />
      </v-tab-item>
      <v-tab-item>
        <game-builder />
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import Leaderboard from "@/components/game/statistics/Leaderboard";
import GeneralStatistics from "@/components/game/statistics/GeneralStatistics";
import Groups from "@/components/game/statistics/Groups";
import GameBuilder from "@/components/game/Builder";

export default {
  name: "Game",
  components: { GameBuilder, Groups, GeneralStatistics, Leaderboard },
  data() {
    return {
      isAdmin: false,
      activeTab: undefined
    };
  },
  mounted() {
    this.isAdmin =
      this.$store.getters.roles.includes("admin") ||
      this.$store.getters.roles.includes("sysadmin");
  },
  watch: {
    activeTab(tab) {
      console.log(tab);
    }
  }
};
</script>

<style scoped></style>
