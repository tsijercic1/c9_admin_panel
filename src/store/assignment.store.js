export default {
  state: {
    assignments: []
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
    assignmentsForCourse: state => courseId => {
      if(!courseId) {
        console.log(courseId);
      }
      return state.assignments;
    }
  },
  actions: {
    refreshAssignments(context) {
      const assignments = [
        {
          id: 1,
          "type": "tutorial",
          "name": "Tutorijal 1",
          "path": "TP/T1",
          "hidden": "false",
          "items": [
            {
              "id": 1001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/T1/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 1002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/T1/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 1003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/T1/Z3",
              "files": [
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 1004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/T1/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 3,
          "type": "tutorial",
          "name": "Tutorijal 2",
          "path": "TP/T2",
          "hidden": "false",
          "items": [
            {
              "id": 3001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/T2/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 3002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/T2/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 3003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/T2/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 3004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/T2/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 3005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/T2/Z5",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 5,
          "type": "tutorial",
          "name": "Tutorijal 3",
          "path": "TP/T3",
          "hidden": "false",
          "items": [
            {
              "id": 5001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/T3/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 5002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/T3/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 5003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/T3/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 5004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/T3/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 5005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/T3/Z5",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 5006,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/T3/Z6",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 5007,
              "type": "zadatak",
              "name": "Zadatak 7",
              "path": "TP/T3/Z7",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 5008,
              "type": "zadatak",
              "name": "Zadatak 8",
              "path": "TP/T3/Z8",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 8,
          "type": "tutorial",
          "name": "Tutorijal 4",
          "path": "TP/T4",
          "hidden": "false",
          "items": [
            {
              "id": 8001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/T4/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 8002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/T4/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 8003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/T4/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 8004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/T4/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 8005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/T4/Z5",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 10,
          "type": "tutorial",
          "name": "Tutorijal 5",
          "path": "TP/T5",
          "hidden": "false",
          "items": [
            {
              "id": 10001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/T5/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 10002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/T5/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 10003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/T5/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 10004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/T5/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 10005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/T5/Z5",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 10006,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/T5/Z6",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 10007,
              "type": "zadatak",
              "name": "Zadatak 7",
              "path": "TP/T5/Z7",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 12,
          "type": "tutorial",
          "name": "Tutorijal 6",
          "path": "TP/T6",
          "hidden": "false",
          "items": [
            {
              "id": 12001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/T6/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 12002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/T6/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 12003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/T6/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 12004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/T6/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 12005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/T6/Z5",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 12006,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/T6/Z6",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 16,
          "type": "tutorial",
          "name": "Tutorijal 7",
          "path": "TP/T7",
          "hidden": "false",
          "items": [
            {
              "id": 16001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/T7/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 16002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/T7/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 16003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/T7/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 16004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/T7/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 16005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/T7/Z5",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 16006,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/T7/Z6",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 16007,
              "type": "zadatak",
              "name": "Zadatak 7",
              "path": "TP/T7/Z7",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 16008,
              "type": "zadatak",
              "name": "Zadatak 8",
              "path": "TP/T7/Z8",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 16009,
              "type": "zadatak",
              "name": "Zadatak 9",
              "path": "TP/T7/Z9",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 16010,
              "type": "zadatak",
              "name": "Zadatak 10",
              "path": "TP/T7/Z10",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 17,
          "type": "tutorial",
          "name": "Tutorijal 8",
          "path": "TP/T8",
          "hidden": "false",
          "items": [
            {
              "id": 17001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/T8/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 17002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/T8/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 17003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/T8/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 17004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/T8/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 17005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/T8/Z5",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 17006,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/T8/Z6",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 19,
          "type": "tutorial",
          "name": "Tutorijal 9",
          "path": "TP/T9",
          "hidden": "false",
          "items": [
            {
              "id": 19001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/T9/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 19002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/T9/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 19003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/T9/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 19004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/T9/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 19005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/T9/Z5",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 22,
          "type": "tutorial",
          "name": "Tutorijal 10",
          "path": "TP/T10",
          "hidden": "false",
          "items": [
            {
              "id": 22001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/T10/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 22002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/T10/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 22003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/T10/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 22004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/T10/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 22005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/T10/Z5",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 23,
          "type": "tutorial",
          "name": "Tutorijal 11",
          "path": "TP/T11",
          "hidden": "false",
          "items": [
            {
              "id": 23001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/T11/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 23002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/T11/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 23003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/T11/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 23004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/T11/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 23005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/T11/Z5",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 25,
          "type": "tutorial",
          "name": "Tutorijal 12",
          "path": "TP/T12",
          "hidden": "false",
          "items": [
            {
              "id": 25001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/T12/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 25002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/T12/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 25003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/T12/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 25004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/T12/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 25005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/T12/Z5",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 25006,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/T12/Z6",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 27,
          "type": "tutorial",
          "name": "Tutorijal 13",
          "path": "TP/T13",
          "hidden": "false",
          "items": [
            {
              "id": 27001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/T13/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 27002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/T13/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 27003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/T13/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 27004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/T13/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main.cpp",
                  "binary": false,
                  "show": true
                }
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 30,
          "type": "homework",
          "name": "Tutorijal 14",
          "path": "TP/Z14",
          "homework_id": 4746,
          "hidden": "false",
          "items": [
            {
              "id": 30001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/Z14/Z1",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/Z14/Z2",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/Z14/Z3",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/Z14/Z4",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 8006,
          "type": "homework",
          "name": "Zada\u0107a 1",
          "path": "TP/Z1",
          "homework_id": 5618,
          "hidden": "false",
          "items": [
            {
              "id": 8007,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/Z1/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 8008,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/Z1/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 8009,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/Z1/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 8010,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/Z1/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 16011,
          "type": "homework",
          "name": "Zada\u0107a 2",
          "path": "TP/Z2",
          "homework_id": 5702,
          "hidden": "false",
          "items": [
            {
              "id": 16012,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/Z2/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 16013,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/Z2/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 16014,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/Z2/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 16015,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/Z2/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 19006,
          "type": "homework",
          "name": "Zada\u0107a 3",
          "path": "TP/Z3",
          "homework_id": 5757,
          "hidden": "false",
          "items": [
            {
              "id": 19007,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/Z3/Z1",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 19008,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/Z3/Z2",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 19009,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/Z3/Z3",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 19010,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/Z3/Z4",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 19011,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/Z3/Z5",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 19012,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/Z3/Z6",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 23006,
          "type": "homework",
          "name": "Zada\u0107a 4",
          "path": "TP/Z4",
          "homework_id": 5795,
          "hidden": "false",
          "items": [
            {
              "id": 23007,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/Z4/Z1",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 23008,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/Z4/Z2",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 23009,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/Z4/Z3",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 23010,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/Z4/Z4",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 23011,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/Z4/Z5",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 23012,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/Z4/Z6",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 30006,
          "type": "homework",
          "name": "Zada\u0107a 5",
          "path": "TP/Z5",
          "homework_id": 5872,
          "hidden": "false",
          "items": [
            {
              "id": 30007,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/Z5/Z1",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30008,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/Z5/Z2",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30009,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/Z5/Z3",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30010,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/Z5/Z4",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30011,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/Z5/Z5",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30012,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/Z5/Z6",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 17007,
          "type": "exam",
          "name": "Ispit 1",
          "path": "TP/Ispit1",
          "hidden": true,
          "items": [
            {
              "id": 17008,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/Ispit1/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 17009,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/Ispit1/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 17010,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/Ispit1/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 17011,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/Ispit1/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 17012,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/Ispit1/Z5",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 17013,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/Ispit1/Z6",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 17014,
          "type": "exam",
          "name": "Ispit 2",
          "path": "TP/Ispit2",
          "hidden": true,
          "items": [
            {
              "id": 17015,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/Ispit2/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 17016,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/Ispit2/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 17017,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/Ispit2/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 17018,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/Ispit2/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 17019,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/Ispit2/Z5",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 17020,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/Ispit2/Z6",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 30013,
          "type": "exam",
          "name": "Ispit 3",
          "path": "TP/Ispit3",
          "homework_id": 5966,
          "hidden": true,
          "items": [
            {
              "id": 30014,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/Ispit3/Z1",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30015,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/Ispit3/Z2",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30016,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/Ispit3/Z3",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30017,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/Ispit3/Z4",
              "files": [
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 30018,
          "type": "exam",
          "name": "Ispit 4",
          "path": "TP/Ispit4",
          "homework_id": 5967,
          "hidden": true,
          "items": [
            {
              "id": 30019,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/Ispit4/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30020,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/Ispit4/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30021,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/Ispit4/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30022,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/Ispit4/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 30023,
          "type": "exam",
          "name": "Ispit 5",
          "path": "TP/Ispit5",
          "homework_id": 6015,
          "hidden": true,
          "items": [
            {
              "id": 30024,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/Ispit5/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30025,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/Ispit5/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30026,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/Ispit5/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30027,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/Ispit5/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30028,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/Ispit5/Z5",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30029,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/Ispit5/Z6",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 30030,
          "type": "exam",
          "name": "Ispit 6",
          "path": "TP/Ispit6",
          "homework_id": 6016,
          "hidden": true,
          "items": [
            {
              "id": 30031,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/Ispit6/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30032,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/Ispit6/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30033,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/Ispit6/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30034,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/Ispit6/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 30035,
          "type": "exam",
          "name": "Ispit 7",
          "path": "TP/Ispit7",
          "homework_id": 6036,
          "hidden": true,
          "items": [
            {
              "id": 30036,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/Ispit7/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30037,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/Ispit7/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30038,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/Ispit7/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30039,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/Ispit7/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30040,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/Ispit7/Z5",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30041,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/Ispit7/Z6",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 30042,
          "type": "exam",
          "name": "Ispit 8",
          "path": "TP/Ispit8",
          "homework_id": 6037,
          "hidden": true,
          "items": [
            {
              "id": 30043,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/Ispit8/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30044,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/Ispit8/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30045,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/Ispit8/Z3",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 30046,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/Ispit8/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": ".zadaca",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 2,
          "type": "independent",
          "name": "ZSR 1",
          "path": "TP/ZSR1",
          "hidden": "false",
          "items": [
            {
              "id": 2001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/ZSR1/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/ZSR1/Z2",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/ZSR1/Z3",
              "files": [
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/ZSR1/Z4",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/ZSR1/Z5",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2006,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/ZSR1/Z6",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2007,
              "type": "zadatak",
              "name": "Zadatak 7",
              "path": "TP/ZSR1/Z7",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2008,
              "type": "zadatak",
              "name": "Zadatak 8",
              "path": "TP/ZSR1/Z8",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2009,
              "type": "zadatak",
              "name": "Zadatak 9",
              "path": "TP/ZSR1/Z9",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2010,
              "type": "zadatak",
              "name": "Zadatak 10",
              "path": "TP/ZSR1/Z10",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2011,
              "type": "zadatak",
              "name": "Zadatak 11",
              "path": "TP/ZSR1/Z11",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2012,
              "type": "zadatak",
              "name": "Zadatak 12",
              "path": "TP/ZSR1/Z12",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2013,
              "type": "zadatak",
              "name": "Zadatak 13",
              "path": "TP/ZSR1/Z13",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2014,
              "type": "zadatak",
              "name": "Zadatak 14",
              "path": "TP/ZSR1/Z14",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2015,
              "type": "zadatak",
              "name": "Zadatak 15",
              "path": "TP/ZSR1/Z15",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2016,
              "type": "zadatak",
              "name": "Zadatak 16",
              "path": "TP/ZSR1/Z16",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2017,
              "type": "zadatak",
              "name": "Zadatak 17",
              "path": "TP/ZSR1/Z17",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2018,
              "type": "zadatak",
              "name": "Zadatak 18",
              "path": "TP/ZSR1/Z18",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2019,
              "type": "zadatak",
              "name": "Zadatak 19",
              "path": "TP/ZSR1/Z19",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2020,
              "type": "zadatak",
              "name": "Zadatak 20",
              "path": "TP/ZSR1/Z20",
              "files": [
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2021,
              "type": "zadatak",
              "name": "Zadatak 21",
              "path": "TP/ZSR1/Z21",
              "files": [
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2022,
              "type": "zadatak",
              "name": "Zadatak 22",
              "path": "TP/ZSR1/Z22",
              "files": [
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2023,
              "type": "zadatak",
              "name": "Zadatak 23",
              "path": "TP/ZSR1/Z23",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2024,
              "type": "zadatak",
              "name": "Zadatak 24",
              "path": "TP/ZSR1/Z24",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2025,
              "type": "zadatak",
              "name": "Zadatak 25",
              "path": "TP/ZSR1/Z25",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2026,
              "type": "zadatak",
              "name": "Zadatak 26",
              "path": "TP/ZSR1/Z26",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2027,
              "type": "zadatak",
              "name": "Zadatak 27",
              "path": "TP/ZSR1/Z27",
              "files": [
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2028,
              "type": "zadatak",
              "name": "Zadatak 28",
              "path": "TP/ZSR1/Z28",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2029,
              "type": "zadatak",
              "name": "Zadatak 29",
              "path": "TP/ZSR1/Z29",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2030,
              "type": "zadatak",
              "name": "Zadatak 30",
              "path": "TP/ZSR1/Z30",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2031,
              "type": "zadatak",
              "name": "Zadatak 31",
              "path": "TP/ZSR1/Z31",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2032,
              "type": "zadatak",
              "name": "Zadatak 32",
              "path": "TP/ZSR1/Z32",
              "files": [
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2033,
              "type": "zadatak",
              "name": "Zadatak 33",
              "path": "TP/ZSR1/Z33",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 2034,
              "type": "zadatak",
              "name": "Zadatak 34",
              "path": "TP/ZSR1/Z34",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                {
                  "filename": "main (1).cpp",
                  "binary": false,
                  "show": true
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 4,
          "type": "independent",
          "name": "ZSR 2",
          "path": "TP/ZSR2",
          "hidden": "false",
          "items": [
            {
              "id": 4001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/ZSR2/Z1",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/ZSR2/Z2",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/ZSR2/Z3",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/ZSR2/Z4",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/ZSR2/Z5",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4006,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/ZSR2/Z6",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4007,
              "type": "zadatak",
              "name": "Zadatak 7",
              "path": "TP/ZSR2/Z7",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4008,
              "type": "zadatak",
              "name": "Zadatak 8",
              "path": "TP/ZSR2/Z8",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4009,
              "type": "zadatak",
              "name": "Zadatak 9",
              "path": "TP/ZSR2/Z9",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4010,
              "type": "zadatak",
              "name": "Zadatak 10",
              "path": "TP/ZSR2/Z10",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4011,
              "type": "zadatak",
              "name": "Zadatak 11",
              "path": "TP/ZSR2/Z11",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4012,
              "type": "zadatak",
              "name": "Zadatak 12",
              "path": "TP/ZSR2/Z12",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4013,
              "type": "zadatak",
              "name": "Zadatak 13",
              "path": "TP/ZSR2/Z13",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4014,
              "type": "zadatak",
              "name": "Zadatak 14",
              "path": "TP/ZSR2/Z14",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4015,
              "type": "zadatak",
              "name": "Zadatak 15",
              "path": "TP/ZSR2/Z15",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4016,
              "type": "zadatak",
              "name": "Zadatak 16",
              "path": "TP/ZSR2/Z16",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4017,
              "type": "zadatak",
              "name": "Zadatak 17",
              "path": "TP/ZSR2/Z17",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4018,
              "type": "zadatak",
              "name": "Zadatak 18",
              "path": "TP/ZSR2/Z18",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4019,
              "type": "zadatak",
              "name": "Zadatak 19",
              "path": "TP/ZSR2/Z19",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4020,
              "type": "zadatak",
              "name": "Zadatak 20",
              "path": "TP/ZSR2/Z20",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4021,
              "type": "zadatak",
              "name": "Zadatak 21",
              "path": "TP/ZSR2/Z21",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4022,
              "type": "zadatak",
              "name": "Zadatak 22",
              "path": "TP/ZSR2/Z22",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4023,
              "type": "zadatak",
              "name": "Zadatak 23",
              "path": "TP/ZSR2/Z23",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4024,
              "type": "zadatak",
              "name": "Zadatak 24",
              "path": "TP/ZSR2/Z24",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4025,
              "type": "zadatak",
              "name": "Zadatak 25",
              "path": "TP/ZSR2/Z25",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4026,
              "type": "zadatak",
              "name": "Zadatak 26",
              "path": "TP/ZSR2/Z26",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4027,
              "type": "zadatak",
              "name": "Zadatak 27",
              "path": "TP/ZSR2/Z27",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4028,
              "type": "zadatak",
              "name": "Zadatak 28",
              "path": "TP/ZSR2/Z28",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4029,
              "type": "zadatak",
              "name": "Zadatak 29",
              "path": "TP/ZSR2/Z29",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4030,
              "type": "zadatak",
              "name": "Zadatak 30",
              "path": "TP/ZSR2/Z30",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4031,
              "type": "zadatak",
              "name": "Zadatak 31",
              "path": "TP/ZSR2/Z31",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4032,
              "type": "zadatak",
              "name": "Zadatak 32",
              "path": "TP/ZSR2/Z32",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4033,
              "type": "zadatak",
              "name": "Zadatak 33",
              "path": "TP/ZSR2/Z33",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4034,
              "type": "zadatak",
              "name": "Zadatak 34",
              "path": "TP/ZSR2/Z34",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4035,
              "type": "zadatak",
              "name": "Zadatak 35",
              "path": "TP/ZSR2/Z35",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4036,
              "type": "zadatak",
              "name": "Zadatak 36",
              "path": "TP/ZSR2/Z36",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4037,
              "type": "zadatak",
              "name": "Zadatak 37",
              "path": "TP/ZSR2/Z37",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4038,
              "type": "zadatak",
              "name": "Zadatak 38",
              "path": "TP/ZSR2/Z38",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4039,
              "type": "zadatak",
              "name": "Zadatak 39",
              "path": "TP/ZSR2/Z39",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4040,
              "type": "zadatak",
              "name": "Zadatak 40",
              "path": "TP/ZSR2/Z40",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4041,
              "type": "zadatak",
              "name": "Zadatak 41",
              "path": "TP/ZSR2/Z41",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4042,
              "type": "zadatak",
              "name": "Zadatak 42",
              "path": "TP/ZSR2/Z42",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4043,
              "type": "zadatak",
              "name": "Zadatak 43",
              "path": "TP/ZSR2/Z43",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4044,
              "type": "zadatak",
              "name": "Zadatak 44",
              "path": "TP/ZSR2/Z44",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 4045,
              "type": "zadatak",
              "name": "Zadatak 45",
              "path": "TP/ZSR2/Z45",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 6,
          "type": "independent",
          "name": "ZSR 3",
          "path": "TP/ZSR3",
          "hidden": "false",
          "items": [
            {
              "id": 6001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/ZSR3/Z1",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/ZSR3/Z2",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/ZSR3/Z3",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/ZSR3/Z4",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/ZSR3/Z5",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6006,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/ZSR3/Z6",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6007,
              "type": "zadatak",
              "name": "Zadatak 7",
              "path": "TP/ZSR3/Z7",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6008,
              "type": "zadatak",
              "name": "Zadatak 8",
              "path": "TP/ZSR3/Z8",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6009,
              "type": "zadatak",
              "name": "Zadatak 9",
              "path": "TP/ZSR3/Z9",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6010,
              "type": "zadatak",
              "name": "Zadatak 10",
              "path": "TP/ZSR3/Z10",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6011,
              "type": "zadatak",
              "name": "Zadatak 11",
              "path": "TP/ZSR3/Z11",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6012,
              "type": "zadatak",
              "name": "Zadatak 12",
              "path": "TP/ZSR3/Z12",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6013,
              "type": "zadatak",
              "name": "Zadatak 13",
              "path": "TP/ZSR3/Z13",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6014,
              "type": "zadatak",
              "name": "Zadatak 14",
              "path": "TP/ZSR3/Z14",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6015,
              "type": "zadatak",
              "name": "Zadatak 15",
              "path": "TP/ZSR3/Z15",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6016,
              "type": "zadatak",
              "name": "Zadatak 16",
              "path": "TP/ZSR3/Z16",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6017,
              "type": "zadatak",
              "name": "Zadatak 17",
              "path": "TP/ZSR3/Z17",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6018,
              "type": "zadatak",
              "name": "Zadatak 18",
              "path": "TP/ZSR3/Z18",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6019,
              "type": "zadatak",
              "name": "Zadatak 19",
              "path": "TP/ZSR3/Z19",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6020,
              "type": "zadatak",
              "name": "Zadatak 20",
              "path": "TP/ZSR3/Z20",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6021,
              "type": "zadatak",
              "name": "Zadatak 21",
              "path": "TP/ZSR3/Z21",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6022,
              "type": "zadatak",
              "name": "Zadatak 22",
              "path": "TP/ZSR3/Z22",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6023,
              "type": "zadatak",
              "name": "Zadatak 23",
              "path": "TP/ZSR3/Z23",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6024,
              "type": "zadatak",
              "name": "Zadatak 24",
              "path": "TP/ZSR3/Z24",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6025,
              "type": "zadatak",
              "name": "Zadatak 25",
              "path": "TP/ZSR3/Z25",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6026,
              "type": "zadatak",
              "name": "Zadatak 26",
              "path": "TP/ZSR3/Z26",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6027,
              "type": "zadatak",
              "name": "Zadatak 27",
              "path": "TP/ZSR3/Z27",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6028,
              "type": "zadatak",
              "name": "Zadatak 28",
              "path": "TP/ZSR3/Z28",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6029,
              "type": "zadatak",
              "name": "Zadatak 29",
              "path": "TP/ZSR3/Z29",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6030,
              "type": "zadatak",
              "name": "Zadatak 30",
              "path": "TP/ZSR3/Z30",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6031,
              "type": "zadatak",
              "name": "Zadatak 31",
              "path": "TP/ZSR3/Z31",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6032,
              "type": "zadatak",
              "name": "Zadatak 32",
              "path": "TP/ZSR3/Z32",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6033,
              "type": "zadatak",
              "name": "Zadatak 33",
              "path": "TP/ZSR3/Z33",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6034,
              "type": "zadatak",
              "name": "Zadatak 34",
              "path": "TP/ZSR3/Z34",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6035,
              "type": "zadatak",
              "name": "Zadatak 35",
              "path": "TP/ZSR3/Z35",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6036,
              "type": "zadatak",
              "name": "Zadatak 36",
              "path": "TP/ZSR3/Z36",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6037,
              "type": "zadatak",
              "name": "Zadatak 37",
              "path": "TP/ZSR3/Z37",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6038,
              "type": "zadatak",
              "name": "Zadatak 38",
              "path": "TP/ZSR3/Z38",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6039,
              "type": "zadatak",
              "name": "Zadatak 39",
              "path": "TP/ZSR3/Z39",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6040,
              "type": "zadatak",
              "name": "Zadatak 40",
              "path": "TP/ZSR3/Z40",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": true,
              "items": []
            },
            {
              "id": 6041,
              "type": "zadatak",
              "name": "Zadatak 41",
              "path": "TP/ZSR3/Z41",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6042,
              "type": "zadatak",
              "name": "Zadatak 42",
              "path": "TP/ZSR3/Z42",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6043,
              "type": "zadatak",
              "name": "Zadatak 43",
              "path": "TP/ZSR3/Z43",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6044,
              "type": "zadatak",
              "name": "Zadatak 44",
              "path": "TP/ZSR3/Z44",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6045,
              "type": "zadatak",
              "name": "Zadatak 45",
              "path": "TP/ZSR3/Z45",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6046,
              "type": "zadatak",
              "name": "Zadatak 46",
              "path": "TP/ZSR3/Z46",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6047,
              "type": "zadatak",
              "name": "Zadatak 47",
              "path": "TP/ZSR3/Z47",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6048,
              "type": "zadatak",
              "name": "Zadatak 48",
              "path": "TP/ZSR3/Z48",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6049,
              "type": "zadatak",
              "name": "Zadatak 49",
              "path": "TP/ZSR3/Z49",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6050,
              "type": "zadatak",
              "name": "Zadatak 50",
              "path": "TP/ZSR3/Z50",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6051,
              "type": "zadatak",
              "name": "Zadatak 51",
              "path": "TP/ZSR3/Z51",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6052,
              "type": "zadatak",
              "name": "Zadatak 52",
              "path": "TP/ZSR3/Z52",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6053,
              "type": "zadatak",
              "name": "Zadatak 53",
              "path": "TP/ZSR3/Z53",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6054,
              "type": "zadatak",
              "name": "Zadatak 54",
              "path": "TP/ZSR3/Z54",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6055,
              "type": "zadatak",
              "name": "Zadatak 55",
              "path": "TP/ZSR3/Z55",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 6056,
              "type": "zadatak",
              "name": "Zadatak 56",
              "path": "TP/ZSR3/Z56",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 9,
          "type": "independent",
          "name": "ZSR 4",
          "path": "TP/ZSR4",
          "hidden": "false",
          "items": [
            {
              "id": 9001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/ZSR4/Z1",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/ZSR4/Z2",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/ZSR4/Z3",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/ZSR4/Z4",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/ZSR4/Z5",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9006,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/ZSR4/Z6",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9007,
              "type": "zadatak",
              "name": "Zadatak 7",
              "path": "TP/ZSR4/Z7",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9008,
              "type": "zadatak",
              "name": "Zadatak 8",
              "path": "TP/ZSR4/Z8",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9009,
              "type": "zadatak",
              "name": "Zadatak 9",
              "path": "TP/ZSR4/Z9",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9010,
              "type": "zadatak",
              "name": "Zadatak 10",
              "path": "TP/ZSR4/Z10",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9011,
              "type": "zadatak",
              "name": "Zadatak 11",
              "path": "TP/ZSR4/Z11",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9012,
              "type": "zadatak",
              "name": "Zadatak 12",
              "path": "TP/ZSR4/Z12",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9013,
              "type": "zadatak",
              "name": "Zadatak 13",
              "path": "TP/ZSR4/Z13",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9014,
              "type": "zadatak",
              "name": "Zadatak 14",
              "path": "TP/ZSR4/Z14",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9015,
              "type": "zadatak",
              "name": "Zadatak 15",
              "path": "TP/ZSR4/Z15",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9016,
              "type": "zadatak",
              "name": "Zadatak 16",
              "path": "TP/ZSR4/Z16",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9017,
              "type": "zadatak",
              "name": "Zadatak 17",
              "path": "TP/ZSR4/Z17",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9018,
              "type": "zadatak",
              "name": "Zadatak 18",
              "path": "TP/ZSR4/Z18",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9019,
              "type": "zadatak",
              "name": "Zadatak 19",
              "path": "TP/ZSR4/Z19",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9020,
              "type": "zadatak",
              "name": "Zadatak 20",
              "path": "TP/ZSR4/Z20",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9021,
              "type": "zadatak",
              "name": "Zadatak 21",
              "path": "TP/ZSR4/Z21",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9022,
              "type": "zadatak",
              "name": "Zadatak 22",
              "path": "TP/ZSR4/Z22",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9023,
              "type": "zadatak",
              "name": "Zadatak 23",
              "path": "TP/ZSR4/Z23",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9024,
              "type": "zadatak",
              "name": "Zadatak 24",
              "path": "TP/ZSR4/Z24",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9025,
              "type": "zadatak",
              "name": "Zadatak 25",
              "path": "TP/ZSR4/Z25",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9026,
              "type": "zadatak",
              "name": "Zadatak 26",
              "path": "TP/ZSR4/Z26",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9027,
              "type": "zadatak",
              "name": "Zadatak 27",
              "path": "TP/ZSR4/Z27",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9028,
              "type": "zadatak",
              "name": "Zadatak 28",
              "path": "TP/ZSR4/Z28",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9029,
              "type": "zadatak",
              "name": "Zadatak 29",
              "path": "TP/ZSR4/Z29",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9030,
              "type": "zadatak",
              "name": "Zadatak 30",
              "path": "TP/ZSR4/Z30",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9031,
              "type": "zadatak",
              "name": "Zadatak 31",
              "path": "TP/ZSR4/Z31",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9032,
              "type": "zadatak",
              "name": "Zadatak 32",
              "path": "TP/ZSR4/Z32",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9033,
              "type": "zadatak",
              "name": "Zadatak 33",
              "path": "TP/ZSR4/Z33",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9034,
              "type": "zadatak",
              "name": "Zadatak 34",
              "path": "TP/ZSR4/Z34",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9035,
              "type": "zadatak",
              "name": "Zadatak 35",
              "path": "TP/ZSR4/Z35",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9036,
              "type": "zadatak",
              "name": "Zadatak 36",
              "path": "TP/ZSR4/Z36",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9037,
              "type": "zadatak",
              "name": "Zadatak 37",
              "path": "TP/ZSR4/Z37",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9038,
              "type": "zadatak",
              "name": "Zadatak 38",
              "path": "TP/ZSR4/Z38",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9039,
              "type": "zadatak",
              "name": "Zadatak 39",
              "path": "TP/ZSR4/Z39",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9040,
              "type": "zadatak",
              "name": "Zadatak 40",
              "path": "TP/ZSR4/Z40",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9041,
              "type": "zadatak",
              "name": "Zadatak 41",
              "path": "TP/ZSR4/Z41",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9042,
              "type": "zadatak",
              "name": "Zadatak 42",
              "path": "TP/ZSR4/Z42",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9043,
              "type": "zadatak",
              "name": "Zadatak 43",
              "path": "TP/ZSR4/Z43",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9044,
              "type": "zadatak",
              "name": "Zadatak 44",
              "path": "TP/ZSR4/Z44",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9045,
              "type": "zadatak",
              "name": "Zadatak 45",
              "path": "TP/ZSR4/Z45",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9046,
              "type": "zadatak",
              "name": "Zadatak 46",
              "path": "TP/ZSR4/Z46",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9047,
              "type": "zadatak",
              "name": "Zadatak 47",
              "path": "TP/ZSR4/Z47",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9048,
              "type": "zadatak",
              "name": "Zadatak 48",
              "path": "TP/ZSR4/Z48",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9049,
              "type": "zadatak",
              "name": "Zadatak 49",
              "path": "TP/ZSR4/Z49",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9050,
              "type": "zadatak",
              "name": "Zadatak 50",
              "path": "TP/ZSR4/Z50",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9051,
              "type": "zadatak",
              "name": "Zadatak 51",
              "path": "TP/ZSR4/Z51",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9052,
              "type": "zadatak",
              "name": "Zadatak 52",
              "path": "TP/ZSR4/Z52",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9053,
              "type": "zadatak",
              "name": "Zadatak 53",
              "path": "TP/ZSR4/Z53",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9054,
              "type": "zadatak",
              "name": "Zadatak 54",
              "path": "TP/ZSR4/Z54",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9055,
              "type": "zadatak",
              "name": "Zadatak 55",
              "path": "TP/ZSR4/Z55",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9056,
              "type": "zadatak",
              "name": "Zadatak 56",
              "path": "TP/ZSR4/Z56",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 9057,
              "type": "zadatak",
              "name": "Zadatak 57",
              "path": "TP/ZSR4/Z57",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 11,
          "type": "independent",
          "name": "ZSR 5",
          "path": "TP/ZSR5",
          "hidden": "false",
          "items": [
            {
              "id": 11001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/ZSR5/Z1",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/ZSR5/Z2",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/ZSR5/Z3",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/ZSR5/Z4",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/ZSR5/Z5",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11006,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/ZSR5/Z6",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11007,
              "type": "zadatak",
              "name": "Zadatak 7",
              "path": "TP/ZSR5/Z7",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11008,
              "type": "zadatak",
              "name": "Zadatak 8",
              "path": "TP/ZSR5/Z8",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11009,
              "type": "zadatak",
              "name": "Zadatak 9",
              "path": "TP/ZSR5/Z9",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11010,
              "type": "zadatak",
              "name": "Zadatak 10",
              "path": "TP/ZSR5/Z10",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11011,
              "type": "zadatak",
              "name": "Zadatak 11",
              "path": "TP/ZSR5/Z11",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11012,
              "type": "zadatak",
              "name": "Zadatak 12",
              "path": "TP/ZSR5/Z12",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11013,
              "type": "zadatak",
              "name": "Zadatak 13",
              "path": "TP/ZSR5/Z13",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11014,
              "type": "zadatak",
              "name": "Zadatak 14",
              "path": "TP/ZSR5/Z14",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11015,
              "type": "zadatak",
              "name": "Zadatak 15",
              "path": "TP/ZSR5/Z15",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11016,
              "type": "zadatak",
              "name": "Zadatak 16",
              "path": "TP/ZSR5/Z16",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11017,
              "type": "zadatak",
              "name": "Zadatak 17",
              "path": "TP/ZSR5/Z17",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11018,
              "type": "zadatak",
              "name": "Zadatak 18",
              "path": "TP/ZSR5/Z18",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11019,
              "type": "zadatak",
              "name": "Zadatak 19",
              "path": "TP/ZSR5/Z19",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11020,
              "type": "zadatak",
              "name": "Zadatak 20",
              "path": "TP/ZSR5/Z20",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11021,
              "type": "zadatak",
              "name": "Zadatak 21",
              "path": "TP/ZSR5/Z21",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11022,
              "type": "zadatak",
              "name": "Zadatak 22",
              "path": "TP/ZSR5/Z22",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11023,
              "type": "zadatak",
              "name": "Zadatak 23",
              "path": "TP/ZSR5/Z23",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11024,
              "type": "zadatak",
              "name": "Zadatak 24",
              "path": "TP/ZSR5/Z24",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11025,
              "type": "zadatak",
              "name": "Zadatak 25",
              "path": "TP/ZSR5/Z25",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11026,
              "type": "zadatak",
              "name": "Zadatak 26",
              "path": "TP/ZSR5/Z26",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11027,
              "type": "zadatak",
              "name": "Zadatak 27",
              "path": "TP/ZSR5/Z27",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11028,
              "type": "zadatak",
              "name": "Zadatak 28",
              "path": "TP/ZSR5/Z28",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11029,
              "type": "zadatak",
              "name": "Zadatak 29",
              "path": "TP/ZSR5/Z29",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11030,
              "type": "zadatak",
              "name": "Zadatak 30",
              "path": "TP/ZSR5/Z30",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11031,
              "type": "zadatak",
              "name": "Zadatak 31",
              "path": "TP/ZSR5/Z31",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11032,
              "type": "zadatak",
              "name": "Zadatak 32",
              "path": "TP/ZSR5/Z32",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11033,
              "type": "zadatak",
              "name": "Zadatak 33",
              "path": "TP/ZSR5/Z33",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11034,
              "type": "zadatak",
              "name": "Zadatak 34",
              "path": "TP/ZSR5/Z34",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11035,
              "type": "zadatak",
              "name": "Zadatak 35",
              "path": "TP/ZSR5/Z35",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11036,
              "type": "zadatak",
              "name": "Zadatak 36",
              "path": "TP/ZSR5/Z36",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11037,
              "type": "zadatak",
              "name": "Zadatak 37",
              "path": "TP/ZSR5/Z37",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11038,
              "type": "zadatak",
              "name": "Zadatak 38",
              "path": "TP/ZSR5/Z38",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11039,
              "type": "zadatak",
              "name": "Zadatak 39",
              "path": "TP/ZSR5/Z39",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11040,
              "type": "zadatak",
              "name": "Zadatak 40",
              "path": "TP/ZSR5/Z40",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11041,
              "type": "zadatak",
              "name": "Zadatak 41",
              "path": "TP/ZSR5/Z41",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11042,
              "type": "zadatak",
              "name": "Zadatak 42",
              "path": "TP/ZSR5/Z42",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11043,
              "type": "zadatak",
              "name": "Zadatak 43",
              "path": "TP/ZSR5/Z43",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11044,
              "type": "zadatak",
              "name": "Zadatak 44",
              "path": "TP/ZSR5/Z44",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11045,
              "type": "zadatak",
              "name": "Zadatak 45",
              "path": "TP/ZSR5/Z45",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11046,
              "type": "zadatak",
              "name": "Zadatak 46",
              "path": "TP/ZSR5/Z46",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11047,
              "type": "zadatak",
              "name": "Zadatak 47",
              "path": "TP/ZSR5/Z47",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11048,
              "type": "zadatak",
              "name": "Zadatak 48",
              "path": "TP/ZSR5/Z48",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11049,
              "type": "zadatak",
              "name": "Zadatak 49",
              "path": "TP/ZSR5/Z49",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11050,
              "type": "zadatak",
              "name": "Zadatak 50",
              "path": "TP/ZSR5/Z50",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11051,
              "type": "zadatak",
              "name": "Zadatak 51",
              "path": "TP/ZSR5/Z51",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11052,
              "type": "zadatak",
              "name": "Zadatak 52",
              "path": "TP/ZSR5/Z52",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11053,
              "type": "zadatak",
              "name": "Zadatak 53",
              "path": "TP/ZSR5/Z53",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11054,
              "type": "zadatak",
              "name": "Zadatak 54",
              "path": "TP/ZSR5/Z54",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 11055,
              "type": "zadatak",
              "name": "Zadatak 55",
              "path": "TP/ZSR5/Z55",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        },
        {
          "id": 14,
          "type": "independent",
          "name": "ZSR 6",
          "path": "TP/ZSR6",
          "hidden": "false",
          "items": [
            {
              "id": 14001,
              "type": "zadatak",
              "name": "Zadatak 1",
              "path": "TP/ZSR6/Z1",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14002,
              "type": "zadatak",
              "name": "Zadatak 2",
              "path": "TP/ZSR6/Z2",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14003,
              "type": "zadatak",
              "name": "Zadatak 3",
              "path": "TP/ZSR6/Z3",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14004,
              "type": "zadatak",
              "name": "Zadatak 4",
              "path": "TP/ZSR6/Z4",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14005,
              "type": "zadatak",
              "name": "Zadatak 5",
              "path": "TP/ZSR6/Z5",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14006,
              "type": "zadatak",
              "name": "Zadatak 6",
              "path": "TP/ZSR6/Z6",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14007,
              "type": "zadatak",
              "name": "Zadatak 7",
              "path": "TP/ZSR6/Z7",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14008,
              "type": "zadatak",
              "name": "Zadatak 8",
              "path": "TP/ZSR6/Z8",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14009,
              "type": "zadatak",
              "name": "Zadatak 9",
              "path": "TP/ZSR6/Z9",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14010,
              "type": "zadatak",
              "name": "Zadatak 10",
              "path": "TP/ZSR6/Z10",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14011,
              "type": "zadatak",
              "name": "Zadatak 11",
              "path": "TP/ZSR6/Z11",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14012,
              "type": "zadatak",
              "name": "Zadatak 12",
              "path": "TP/ZSR6/Z12",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14013,
              "type": "zadatak",
              "name": "Zadatak 13",
              "path": "TP/ZSR6/Z13",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14014,
              "type": "zadatak",
              "name": "Zadatak 14",
              "path": "TP/ZSR6/Z14",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14015,
              "type": "zadatak",
              "name": "Zadatak 15",
              "path": "TP/ZSR6/Z15",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14016,
              "type": "zadatak",
              "name": "Zadatak 16",
              "path": "TP/ZSR6/Z16",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14017,
              "type": "zadatak",
              "name": "Zadatak 17",
              "path": "TP/ZSR6/Z17",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14018,
              "type": "zadatak",
              "name": "Zadatak 18",
              "path": "TP/ZSR6/Z18",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14019,
              "type": "zadatak",
              "name": "Zadatak 19",
              "path": "TP/ZSR6/Z19",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14020,
              "type": "zadatak",
              "name": "Zadatak 20",
              "path": "TP/ZSR6/Z20",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14021,
              "type": "zadatak",
              "name": "Zadatak 21",
              "path": "TP/ZSR6/Z21",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14022,
              "type": "zadatak",
              "name": "Zadatak 22",
              "path": "TP/ZSR6/Z22",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14023,
              "type": "zadatak",
              "name": "Zadatak 23",
              "path": "TP/ZSR6/Z23",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14024,
              "type": "zadatak",
              "name": "Zadatak 24",
              "path": "TP/ZSR6/Z24",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14025,
              "type": "zadatak",
              "name": "Zadatak 25",
              "path": "TP/ZSR6/Z25",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14026,
              "type": "zadatak",
              "name": "Zadatak 26",
              "path": "TP/ZSR6/Z26",
              "files": [
                {
                  "filename": ".autotest",
                  "binary": false,
                  "show": false
                },
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14027,
              "type": "zadatak",
              "name": "Zadatak 27",
              "path": "TP/ZSR6/Z27",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14028,
              "type": "zadatak",
              "name": "Zadatak 28",
              "path": "TP/ZSR6/Z28",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14029,
              "type": "zadatak",
              "name": "Zadatak 29",
              "path": "TP/ZSR6/Z29",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14030,
              "type": "zadatak",
              "name": "Zadatak 30",
              "path": "TP/ZSR6/Z30",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14031,
              "type": "zadatak",
              "name": "Zadatak 31",
              "path": "TP/ZSR6/Z31",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14032,
              "type": "zadatak",
              "name": "Zadatak 32",
              "path": "TP/ZSR6/Z32",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14033,
              "type": "zadatak",
              "name": "Zadatak 33",
              "path": "TP/ZSR6/Z33",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            },
            {
              "id": 14034,
              "type": "zadatak",
              "name": "Zadatak 34",
              "path": "TP/ZSR6/Z34",
              "files": [
                "main.cpp"
              ],
              "hidden": "false",
              "items": []
            }
          ],
          "files": [
            "main.cpp"
          ]
        }
      ];
      context.commit("setAssignments", assignments);
    }
  }
};
