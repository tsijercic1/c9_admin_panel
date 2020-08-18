export default {
  state: {
    courses: []
  },
  mutations: {
    setCourses(state, courses) {
      state.courses = courses;
    }
  },
  getters: {
    courses: (state) => {
      return state.courses;
    },
    courseById: (state) => (id) => {
      return state.courses.filter(course => course.id + "" === id)[0];
    }
  },
  actions: {
    async refreshCourses(context) {
      const response = await fetch(`/services/courses.php`, {
        method: "get",
        headers: {
          Accept: "application/json"
        }
      });
      const body = await response.json();
      if (!body.success) {
        return false;
      }
      let courses = body.data;
      for (const course of courses) {
        const response = await fetch(`/services/courses.php?course_id=${course.id}&groups`, {
          method: "get",
          headers: {
            Accept: "application/json"
          }
        });
        const body = await response.json();
        if (!body.success) {
          return false;
        }
        course.groups = body.data.groups;
      }
      context.commit("setCourses", courses);
    }
  }
};
