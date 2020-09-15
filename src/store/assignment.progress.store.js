import Helpers from '@/helpers';

export default {
  state: {
    statistics: {}
  },
  mutations: {
    addCourse(state, course) {
      if (!Helpers.hasKey(state.statistics, course)) {
        state.statistics[course] = {};
      }
    },
    addStudentToCourse(state, {course, student}) {
      if (Helpers.hasKey(state.statistics, course) && !Helpers.hasKey(state.statistics[course], student)) {
        state.statistics[course][student] = {};
      }
    },
    addInfoToCourseSubPath(state, {pathArray, student, info}) {
      const course = pathArray[0];
      if (Helpers.hasKey(state.statistics, course) && Helpers.hasKey(state.statistics[course], student)) {
        let target = state.statistics[course][student];
        target.path = course;
        if (pathArray.length > 1) {
          const [, ...subs] = pathArray;
          for (let item of subs) {
            if (!Helpers.hasKey(target, "assignments")) {
              target.assignments = {};
            }
            if (!Helpers.hasKey(target.assignments, item)) {
              target.assignments[item] = {
                path: target.path + "/" + item
              };
            }
            target = target.assignments[item];
          }
        }
        target.assignments = info.assignments;
        target.stats = info.stats;
        target.lastAccess = info.lastAccess;
      }
    }
  },
  getters: {}
}