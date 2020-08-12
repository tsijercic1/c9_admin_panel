<template>
  <v-container>
    <h1>Course {{ $route.params.course_id }}</h1>
    <v-expansion-panels
        :accordion="false"
        :popout="true"
        :inset="false"
        :multiple="false"
        :focusable="true"
        :disabled="false"
        :readonly="false"
        :flat="false"
        :hover="true"
        :tile="false"
    >
      <v-expansion-panel
          v-for="group in course.groups"
          :key="group.id"
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>

export default {
  computed: {
    course() {
      console.log(this.$store.getters.courseById(this.$route.params.course_id));
      return this.$store.getters.courseById(this.$route.params.course_id);
    }
  }
};
</script>

<style></style>
