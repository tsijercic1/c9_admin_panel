import Helpers from "@/helpers";

export default {
  state: {
    assignments: {}
  },
  mutations: {
    setAssignments(state, assignments) {
      state.assignments = assignments;
    }
  },
  getters: {
    assignments: state => {
      return state.assignments;
    },
    assignmentById: state => id => {
      return state.assignments.filter(assignment => assignment.id + "" === id)[0];
    },
    assignmentsForCourse: state => course => {
      return state.assignments[Helpers.getFullCourseId(course)];
    }
  },
  actions: {
    async refreshAssignments(context) {
      let assignments = {};
      const courses = context.getters.courses;
      for(let course of courses) {
        const response = await fetch(`/assignment/ws.php?action=assignments&course=${course.id}${course.external?"&X":""}`, {
          method: "get",
          headers: {
            Accept: "application/json"
          }
        });
        const body = await response.json();
        if (!body.success) {
          return false;
        }
        assignments[Helpers.getFullCourseId(course)] = body.data;
      }
      context.commit("setAssignments", assignments);
    }
  }
};
