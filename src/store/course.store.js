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
    courses(state) {
      return state.courses;
    }
  },
  actions: {
    refreshCourses(context) {
      const courses = [
        {
          id: 1,
          name: "Course 1",
          groups: [
            {
              id: 6,
              name: "All students"
            },
            {
              id: 7,
              name: "Group 1"
            },
            {
              id: 8,
              name: "Group 2"
            },
            {
              id: 9,
              name: "Group 3"
            },
            {
              id: 10,
              name: "Group 4"
            },
            {
              id: 11,
              name: "Group 5"
            },
            {
              id: 12,
              name: "Group 6"
            },
            {
              id: 13,
              name: "Group 7"
            },
            {
              id: 14,
              name: "Group 8"
            },
            {
              id: 15,
              name: "Group 9"
            }
          ]
        },
        {
          id: 2,
          name: "Course 2",
          groups: [
            {
              id: 16,
              name: "All students"
            },
            {
              id: 17,
              name: "Group 1"
            },
            {
              id: 18,
              name: "Group 2"
            },
            {
              id: 19,
              name: "Group 3"
            }
          ]
        },
        {
          id: 3,
          name: "Course 3",
          groups: [
            {
              id: 26,
              name: "All students"
            },
            {
              id: 27,
              name: "Group 1"
            },
            {
              id: 28,
              name: "Group 2"
            },
            {
              id: 29,
              name: "Group 3"
            },
            {
              id: 30,
              name: "Group 4"
            },
            {
              id: 31,
              name: "Group 5"
            },
            {
              id: 32,
              name: "Group 6"
            }
          ]
        },
        {
          id: 4,
          name: "Course 4",
          groups: [
            {
              id: 36,
              name: "All students"
            },
            {
              id: 37,
              name: "Group 1"
            },
            {
              id: 38,
              name: "Group 2"
            },
            {
              id: 39,
              name: "Group 3"
            },
            {
              id: 40,
              name: "Group 4"
            },
            {
              id: 41,
              name: "Group 5"
            },
            {
              id: 42,
              name: "Group 6"
            },
            {
              id: 43,
              name: "Group 7"
            },
            {
              id: 44,
              name: "Group 8"
            }
          ]
        },
        {
          id: 5,
          name: "Course 5",
          groups: [
            {
              id: 46,
              name: "All students"
            },
            {
              id: 47,
              name: "Group 1"
            },
            {
              id: 48,
              name: "Group 2"
            },
            {
              id: 49,
              name: "Group 3"
            },
            {
              id: 50,
              name: "Group 4"
            },
            {
              id: 51,
              name: "Group 5"
            },
            {
              id: 52,
              name: "Group 6"
            },
            {
              id: 53,
              name: "Group 7"
            }
          ]
        }
      ];
      context.commit("setCourses", courses);
    }
  }
};
