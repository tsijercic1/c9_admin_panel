<template>
  <v-container>
    <GameBuilder v-if="inTheGame"/>
  </v-container>
</template>


<script>
import GameBuilder from "@/components/GameBuilder";
export default {
  name: "Dashboard",
  components: {GameBuilder},
  data() {
    return {
      inTheGame: false
    };
  },
  async mounted() {
    let response = await fetch("/services/uup_game.php?action=check");
    let body = await response.json();
    this.inTheGame = body.success;
  }
};
</script>
