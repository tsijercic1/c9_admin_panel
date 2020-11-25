<template>
  <v-container>
    <GameBuilder v-if="inTheGame" />
  </v-container>
</template>

<script>
import GameBuilder from "@/components/GameBuilder";
export default {
  name: "Dashboard",
  components: { GameBuilder },
  data() {
    return {
      inTheGame: true
    };
  },
  async mounted() {
  }
};
</script>
