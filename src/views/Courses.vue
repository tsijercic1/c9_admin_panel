<template>
  <v-container>
    <h1>Courses</h1>
    <v-container class="d-flex pa-0 ">
      <CourseCard v-for="course in courses" :key="course.id" :course="course"/>
    </v-container>
  </v-container>
</template>

<script>
  import CourseCard from "../components/CourseCard";

  export default {
    name: "Courses",
    data() {
      return {
        courses: []
      }
    },
    components: {
      CourseCard
    },
    async mounted() {
      const response = await fetch(`/services/courses.php`, {
        method: "get",
        headers: {
          Accept: "application/json"
        }
      });
      const body = await response.json();
      this.courses = body.data;
    }
  };
</script>
