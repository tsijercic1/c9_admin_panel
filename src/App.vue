<template>
  <v-app>
    <navigation v-if="this.$router.history.current.name !== 'Login'" />
    <v-main>
      <router-view />
    </v-main>
    <notifications
      group="main"
      position="bottom right"
      classes="notifications"
    />
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
}

.notifications {
  padding: 10px;
  margin: 0 5px 5px;

  font-size: 12px;

  color: #212121;
  background: #eceff1;
  border-left: 5px solid #b2ebf2;
  &.message {
    background: #eceff1;
    border-left-color: #cfd8dc;
  }
  &.good {
    background: #eceff1;
    border-left-color: #4caf50;
  }
  &.bad {
    background: #eceff1;
    border-left-color: #f44336;
  }
}
</style>
