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
    data() {
      return {
        courses: []
      }
    },
    components: {
      CourseCard
    },
    async mounted() {
      this.courses = [
        {
          id: 1,
          name: "Course 1"
        },
        {
          id: 2,
          name: "Course 2"
        },
        {
          id: 3,
          name: "Course 3"
        },
        {
          id: 4,
          name: "Course 4"
        },
        {
          id: 5,
          name: "Course 5"
        }
      ];
    }
  };
</script>
