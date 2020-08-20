<template>
  <v-card class="mb-5" min-width="240" elevation="4">
    <v-card-title class="title text-sm-center">
      <router-link :to="courseLink(course.id)">{{ course.name }}</router-link>
    </v-card-title>

    <v-divider/>
    <v-card>
      <v-card-title class="subtitle-1 justify-center">Groups</v-card-title>
      <v-divider/>
      <v-row class="pa-3">
        <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
            v-for="group in course.groups"
            :key="group.id"
        >
          <v-card
              class="pa-3 subtitle-2"
              outlined
              tile
              :to="groupLink(group.id)"
          >
            {{ group.name }}
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Assignments</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row class="pa-3">
            <v-col
                cols="12"
                sm="6"
                md="4"
                lg="3"
                xl="2"
                v-for="assignment in assignments"
                :key="assignment.id"
            >
              <v-card
                  class="pa-3 subtitle-2"
                  outlined
                  tile
                  :to="assignmentsLink()"
              >
                {{ assignment.name }}
              </v-card>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
export default {
  name: "CourseCard",
  props: ["course"],
  methods: {
    groupLink: function (id) {
      return `${this.courseLink(this.course.id)}/groups/${id}`;
    },
    courseLink: function (id) {
      return `/courses/${id}`;
    },
    assignmentsLink: function () {
      return `/assignments/${this.course.id}`
    }
  },
  async mounted() {
  },
  computed: {
    assignments() {
      return this.$store.getters.assignmentsForCourse(this.course);
    }
  }
};
</script>
