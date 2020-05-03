<template>
  <v-app>
    <navigation />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

* {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
</style>
