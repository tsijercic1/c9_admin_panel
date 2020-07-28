<template>
  <v-card class="" min-width="240" elevation="4">
    <v-card-title class="subtitle-2 text-sm-center">
      <router-link :to="courseLink(course.id)">{{ course.name }}</router-link>
    </v-card-title>

    <v-divider/>

    <v-container fluid>
      <v-row justify="center">
        <v-col
            cols="10"
            md="4"
            lg="3"
            xl="2"
            v-for="group in course.groups"
            :key="group.id"
        >
            <v-card
                class="pa-4"
                outlined
                tile
                :to="groupLink(group.id)"
            >
              {{group.name}}
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "CourseCard",
  props: ["course"],
  methods: {
    groupLink: function (id) {
      return `${this.courseLink(this.id)}/groups/${id}`;
    },
    courseLink: function (id) {
      return `/courses/${id}`;
    }
  },
  async mounted() {
  }
};
</script>
