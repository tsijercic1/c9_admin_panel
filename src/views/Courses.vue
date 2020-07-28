<template>
  <v-container>
    <h1>Courses</h1>
    <v-container>
      <CourseCard v-for="course in courses" :key="course.id" :course="course"/>
    </v-container>
  </v-container>
</template>

<script>
import CourseCard from "../components/CourseCard";

export default {
  name: "Courses",
  components: {
    CourseCard
  },
  computed: {
    courses() {
      return this.$store.getters.courses;
    }
  },
  mounted() {
    this.$store.dispatch("refreshCourses");
  }
};
</script>
