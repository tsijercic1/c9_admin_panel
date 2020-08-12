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
    refreshCourses(context) {
      const courses = [
        {
          id: 1,
          name: "Course 1",
          groups: [
            {
              id: 6,
              name: "All students",
              members: {
                "username1": "Real Name 1",
                "username2": "Real Name 2",
                "username3": "Real Name 3",
                "username4": "Real Name 4",
                "username5": "Real Name 5"
              }
            },
            {
              id: 7,
              name: "Group 1",
              members: {
                "username6": "Real Name 6",
                "username7": "Real Name 7",
                "username8": "Real Name 8",
                "username9": "Real Name 9",
                "username10": "Real Name 10",
                "username11": "Real Name 11"
              }
            },
            {
              id: 8,
              name: "Group 2",
              members: {
                "username16": "Real Name 16",
                "username17": "Real Name 17",
                "username18": "Real Name 18",
                "username19": "Real Name 19",
                "username110": "Real Name 110",
                "username113": "Real Name 113",
                "username114": "Real Name 114",
                "username116": "Real Name 116",
              }
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
