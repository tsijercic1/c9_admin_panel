<template>
  <v-container>
    <h1>Courses</h1>
    <v-container class="d-flex pa-0 ">
      <CourseCard v-for="course in courses" :key="course.id" :course="course" />
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
    // var self = this;
    const response = await fetch(`/services/courses.php`, {
      method: "post",
      body: ``,
      headers: {
        Accept: "application/json"
      }
    });
    const body = await response.json();
    console.log(body);
    this.courses = body.data;
    //         [
    //   {
    //     id: 1,
    //     name: "Razvoj Programskih Rješenja",
    //     groups: [
    //       {id: 11, name: "Grupa 1"},
    //       {id: 12, name: "Grupa 2"},
    //       {id: 13, name: "Grupa 3"},
    //       {id: 13, name: "Grupa 4"}
    //     ]
    //   },
    //   {
    //     id: 2,
    //     name: "Tehnike Programiranja",
    //     groups: [
    //       {id: 21, name: "Grupa 1"},
    //       {id: 22, name: "Grupa 2"},
    //       {id: 23, name: "Grupa 3"},
    //       {id: 24, name: "Grupa 4"},
    //       {id: 25, name: "Grupa 5"},
    //       {id: 26, name: "Grupa 6"},
    //       {id: 27, name: "Grupa 7"},
    //       {id: 28, name: "Grupa 8"},
    //       {id: 29, name: "Grupa 9"},
    //       {id: 20, name: "Grupa 10"}
    //     ]
    //   }
    // ];
  },
  computed: {
    x: () => {
      // let self = this;
        fetch(`/services/courses.php`, {
          method: "post",
          body: ``,
          headers: {
            Accept: "application/json"
          }
        }).then(response => {
          const body = response.json();
          console.log(body);
          self.courses = [
            {
              id: 1,
              name: "Razvoj Programskih Rješenja",
              groups: [
                {id: 11, name: "Grupa 1"},
                {id: 12, name: "Grupa 2"},
                {id: 13, name: "Grupa 3"},
                {id: 13, name: "Grupa 4"}
              ]
            },
            {
              id: 2,
              name: "Tehnike Programiranja",
              groups: [
                {id: 21, name: "Grupa 1"},
                {id: 22, name: "Grupa 2"},
                {id: 23, name: "Grupa 3"},
                {id: 24, name: "Grupa 4"},
                {id: 25, name: "Grupa 5"},
                {id: 26, name: "Grupa 6"},
                {id: 27, name: "Grupa 7"},
                {id: 28, name: "Grupa 8"},
                {id: 29, name: "Grupa 9"},
                {id: 20, name: "Grupa 10"}
              ]
            }
          ];
        });


    }
  }
};
</script>
