import { courseService } from "@/services";

export default {
  state: {
    courses: []
  },
  mutations: {
    setCourses(state, courses) {
      state.courses = courses;
    },
    updateCourse(state, [courseId, course, vm]) {
      let matching = state.courses.filter(c => c.id === courseId);
      if (matching.length === 0) {
        return;
      }
      matching[0].groups = course.groups;
      vm.$forceUpdate();
    }
  },
  getters: {
    courses: state => {
      return state.courses;
    },
    courseById: state => id => {
      return state.courses?.filter(course => course.id + "" === id)[0];
    },
    groupsForCourseId: state => id =>
      state.courses?.filter(c => c.id === id)[0].groups || [],
    membersOfGroupByGroupIdAndCourseId: state => (courseId, groupId) =>
      state.courses
        ?.filter(c => c.id === courseId)[0]
        .groups?.filter(group => group.id === groupId)[0].members || {}
  },
  actions: {
    async refreshMembers(context, [course, vm]) {
      for (let group of course.groups || []) {
        const body = await courseService.getMembersForGroupInCourse(
          group,
          course
        );
        if (!body.success) {
          this.$notify({
            type: "bad",
            group: "main",
            title: `Getting members of ${group.name} (${course.name})`,
            text: `${body.message || "An error has occurred."}`
          });
          return false;
        }
        group.members = body.data.members;
      }
      context.commit("updateCourse", [course.id, course, vm]);
    },
    async refreshCourses(context) {
      const body = await courseService.getCourses();
      if (!body.success) {
        this.$notify({
          type: "bad",
          group: "main",
          title: "Getting courses",
          text: `${body.message || "An error has occurred."}`
        });
        return false;
      }
      let courses = body.data;
      for (const course of courses) {
        const body = await courseService.getGroupsForCourse(course);
        if (!body.success) {
          this.$notify({
            type: "bad",
            group: "main",
            title: `Getting groups for ${course.name}`,
            text: `${body.message || "An error has occurred."}`
          });
        } else {
          course.groups = body.data.groups;
        }
      }
      context.commit("setCourses", courses);
    }
  }
};
