<template>
  <v-container>
    <h1 class="mb-4">{{ course.name === undefined ? "" : course.name}}</h1>
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
          v-for="group in groupsForCourseId(course.id)"
          :key="group.id"
      >
        <v-expansion-panel-header>{{group.name}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row class="pa-3">
            <v-col
                cols="12"
                sm="6"
                md="4"
                lg="3"
                xl="2"
                v-for="member in Object.keys(membersOfGroupByGroupIdAndCourseId(course.id, group.id))"
                :key="member"
            >
              <v-card
                  class="pa-3 subtitle-2"
                  outlined
                  tile
              >
                {{ group.members[member] }}
              </v-card>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  data() {
    return {
      connection: {}
    }
  },
  computed: {
    ...mapGetters(["membersOfGroupByGroupIdAndCourseId", "groupsForCourseId"]),
    course() {
      return this.$store.getters.courseById(this.$route.params.course_id);
    }
  },
  mounted() {
    this.$store.dispatch("refreshMembers", [this.course, this]);
    console.log(this.course);
    console.log("This was a course when it was mounted")

  },
  created() {
    this.connection = new WebSocket("ws://" + location.host + "/websocket");
    this.connection.onmessage = function(event) {
      console.log(event);
    }
  }
};
</script>

<style></style>
