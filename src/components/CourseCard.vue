<template>
  <v-card class="ma-4 ml-0" min-width="240" elevation="4">
    <v-card-title class="subtitle-2">
      <router-link :to="courseLink(course.id)">{{ course.name }}</router-link>
    </v-card-title>

    <v-divider/>

    <v-list>
      <v-list-item
        v-for="group in groups"
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
    data() {
      return {
        groups: []
      };
    },
    methods: {
      groupLink: function (id) {
        return `${this.courseLink(this.course.id)}/groups/${id}`;
      },
      courseLink: function (id) {
        return `/courses/${id}`;
      }
    },
    async mounted() {
      const response = await fetch(`/services/courses.php?course_id=${this.course.id}&groups`, {
        method: "get",
        headers: {
          Accept: "application/json"
        }
      });
      const body = await response.json();
      this.groups = body.data.groups;
    }
  };
</script>
