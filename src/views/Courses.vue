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
      this.courses = [
        {
          id: 1,
          name: "Uvod u programiranje"
        },
        {
          id: 2,
          name: "Osnove računarstva"
        },
        {
          id: 3,
          name: "Razvoj softvera"
        },
        {
          id: 4,
          name: "Tehnike programiranja"
        },
        {
          id: 5,
          name: "Razvoj Softvera"
        }
      ];
    }
  };
</script>
