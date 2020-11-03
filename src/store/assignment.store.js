import Helpers from "@/helpers";
import { assignmentService } from "@/services";

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
      return state.assignments.filter(
        assignment => assignment.id + "" === id
      )[0];
    },
    assignmentsForCourse: state => course => {
      return state.assignments[Helpers.getFullCourseId(course)];
    }
  },
  actions: {
    async refreshAssignments(context) {
      let assignments = {};
      const courses = context.getters.courses;
      for (let course of courses) {
        const body = await assignmentService.getAssignments(course);
        if (!body.success) {
          this.$notify({
            type: "bad",
            group: "main",
            title: "Getting assignments",
            text: `${body.message || "An error has occurred."}`
          });
        } else {
          assignments[
            Helpers.getFullCourseId(course)
          ] = Helpers.tweakAssignmentTree(body.data);
        }
      }
      context.commit("setAssignments", assignments);
    }
  }
};
