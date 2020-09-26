<template>
  <v-container>
    <GameBuilder/>
  </v-container>
</template>

<script>
  import GameBuilder from "@/components/GameBuilder";
  export default {
    name: "Dashboard",
    components: {GameBuilder}
  };
</script>
