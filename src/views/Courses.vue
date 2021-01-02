<template>
  <v-container>
    <h1>Courses</h1>
    <v-container>
      <CourseCard v-for="course in courses" :key="course.id" :course="course" />
    </v-container>
  </v-container>
</template>

<script>
import CourseCard from "../components/course/CourseCard";
import { mapGetters } from "vuex";

export default {
  name: "Courses",
  components: {
    CourseCard
  },
  computed: {
    ...mapGetters(["courses"])
  },
  async mounted() {
    await this.$store.dispatch("refreshCourses");
    await this.$store.dispatch("refreshAssignments");
  }
};
</script>
