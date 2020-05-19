<template>
  <v-card class="ma-4 ml-0" min-width="240" elevation="4">
    <v-card-title class="subtitle-2">
      <router-link :to="courseLink(course.id)">{{ course.name }}</router-link>
    </v-card-title>

    <v-divider />

    <v-list>
      <v-list-item
        v-for="group in course.groups"
        :key="group.id"
        :to="groupLink(group.id)"
      >
        <v-list-item-content>
          {{ group.name }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "CourseCard",
  props: ["course"],
  methods: {
    groupLink: function(id) {
      return `${this.courseLink(this.course.id)}/groups/${id}`;
    },
    courseLink: function(id) {
      return `/courses/${id}`;
    }
  }
};
</script>
