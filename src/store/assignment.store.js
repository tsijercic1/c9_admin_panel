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
    },
    autotestFile() {
      return {
        "id": 56181,
        "name": "Tehnike programiranja (2019/2020), Zada\u0107a 1, zadatak 1",
        "language": "C++",
        "required_compiler": "g++",
        "preferred_compiler": "g++",
        "compiler_features": [],
        "compiler_options": "-std=c++11 -O1 -Wall -Wuninitialized -Winit-self -Wfloat-equal -Wno-sign-compare -Werror=implicit-function-declaration -Werror=vla -pedantic -lm -pass-exit-codes",
        "compiler_options_debug": "-std=c++11 -ggdb -lm -pass-exit-codes",
        "compile": "true",
        "run": "false",
        "test": "true",
        "debug": "true",
        "profile": "true",
        "test_specifications": [
          {
            "id": 108,
            "require_symbols": [],
            "replace_symbols": [],
            "code": "//AT1 - definisanje i testiranje main funkcije (za parametar true)\n//Za sva pitanja vezana za autotestove za ovaj zadatak, javiti se na e-mail bcocalic1@etf.unsa.ba\n\n\n_main();",
            "global_above_main": "",
            "global_top": "",
            "running_params": {
              "timeout": "10",
              "vmem": "1000000",
              "stdin": "14 191 233 43 -313 142 13 121 678 -151 23 -12 727 173 656 1\n"
            },
            "expected": [
              "Unesite broj elemenata niza: Unesite elemente niza: Unesite parametar (1 ili 0): Izdvojeni elementi su: 121, -151, 656"
            ],
            "expected_exception": "false",
            "expected_crash": "false",
            "ignore_whitespace": "false",
            "regex": "false",
            "substring": "false"
          },
          {
            "id": 109,
            "require_symbols": [],
            "replace_symbols": [],
            "code": "//AT2 - testiranje main funkcije (za parametar false)\n\n_main();",
            "global_above_main": "",
            "global_top": "",
            "running_params": {
              "timeout": "10",
              "vmem": "1000000",
              "stdin": "15 191 100 233 43 -313 142 13 121 678 -151 23 -12 727 173 656 0\n"
            },
            "expected": [
              "Unesite broj elemenata niza: Unesite elemente niza: Unesite parametar (1 ili 0): Izdvojeni elementi su: 100, 233, 142, 13, 23, 173"
            ],
            "expected_exception": "false",
            "expected_crash": "false",
            "ignore_whitespace": "false",
            "regex": "false",
            "substring": "false"
          },
          {
            "id": 110,
            "require_symbols": [],
            "replace_symbols": [],
            "code": "//AT3 - testiranje main funkcije (za parametar true, sa ponavljanjem)\n\n_main();",
            "global_above_main": "",
            "global_top": "",
            "running_params": {
              "timeout": "10",
              "vmem": "1000000",
              "stdin": "17 191 233 14 43 -313 233 142 -12 13 121 678 -151 23 -12 727 173 656 1\n"
            },
            "expected": [
              "Unesite broj elemenata niza: Unesite elemente niza: Unesite parametar (1 ili 0): Izdvojeni elementi su: 121, -151, 656"
            ],
            "expected_exception": "false",
            "expected_crash": "false",
            "ignore_whitespace": "false",
            "regex": "false",
            "substring": "false"
          },
          {
            "id": 111,
            "require_symbols": [],
            "replace_symbols": [],
            "code": "//AT4 - testiranje main funkcije (za parametar false, sa ponavljanjem)\n\n_main();",
            "global_above_main": "",
            "global_top": "",
            "running_params": {
              "timeout": "10",
              "vmem": "1000000",
              "stdin": "18 191 100 233 656 43 -313 142 13 121 100 678 -151 23 -12 727 191 173 656 0"
            },
            "expected": [
              "Unesite broj elemenata niza: Unesite elemente niza: Unesite parametar (1 ili 0): Izdvojeni elementi su: 100, 233, 142, 13, 23, 173"
            ],
            "expected_exception": "false",
            "expected_crash": "false",
            "ignore_whitespace": "false",
            "regex": "false",
            "substring": "false"
          },
          {
            "id": 112,
            "require_symbols": [],
            "replace_symbols": [],
            "code": "//AT5 - testiranje main funkcije (za parametar true, sa ponavljanjem)\n\n_main();",
            "global_above_main": "",
            "global_top": "",
            "running_params": {
              "timeout": "10",
              "vmem": "1000000",
              "stdin": "20 191 233 14 43 -313 233 142 -12 13 121 678 -151 121 -151 656 23 -12 727 173 656 1"
            },
            "expected": [
              "Unesite broj elemenata niza: Unesite elemente niza: Unesite parametar (1 ili 0): Izdvojeni elementi su: 121, -151, 656"
            ],
            "expected_exception": "false",
            "expected_crash": "false",
            "ignore_whitespace": "false",
            "regex": "false",
            "substring": "false"
          },
          {
            "id": 113,
            "require_symbols": [],
            "replace_symbols": [],
            "code": "//AT6 - testiranje main funkcije (za parametar false, sa ponavljanjem)\n\n_main();",
            "global_above_main": "",
            "global_top": "",
            "running_params": {
              "timeout": "10",
              "vmem": "1000000",
              "stdin": "22 191 100 233 656 233 43 -313 142 13 142 121 100 678 13 -151 23 -12 727 23 191 173 656 0\n"
            },
            "expected": [
              "Unesite broj elemenata niza: Unesite elemente niza: Unesite parametar (1 ili 0): Izdvojeni elementi su: 100, 233, 142, 13, 23, 173"
            ],
            "expected_exception": "false",
            "expected_crash": "false",
            "ignore_whitespace": "false",
            "regex": "false",
            "substring": "false"
          }
        ]
      };
    }
  },
  actions: {
    refreshAssignments(context) {
      let assignments = [
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
      assignments = [
        {
          "id": 1,
          "type": "Folder",
          "tasks": 11,
          "name": "Primjeri iz knjige",
          "items" : [
            {
              "id": 10,
              "type": "Poglavlje",
              "tasks": 11,
              "path": "P1",
              "name": "Poglavlje 1. Prvi koraci",
              "items" : [
                {
                  "id": 100,
                  "name": "1.1 Hello World",
                  "items" : [
                    {
                      "id": 1000,
                      "name": "str. 21",
                      "path": "Z1",
                      "files" : [ "1.0.0.1.c" ]
                    },
                    {
                      "id": 1001,
                      "name": "str. 24a",
                      "path": "Z2",
                      "files" : [ "1.1.1.1.c" ]
                    },
                    {
                      "id": 1002,
                      "name": "str. 24b",
                      "path": "Z3",
                      "files" : [ "1.1.1.2.c" ]
                    },
                    {
                      "id": 1003,
                      "name": "str. 24c",
                      "path": "Z4",
                      "files" : [ "1.1.1.3.c" ]
                    },
                    {
                      "id": 1004,
                      "name": "str. 25 - greška",
                      "path": "Z5",
                      "files" : [ "1.1.3.1-greska.c" ]
                    }
                  ]
                },
                {
                  "id": 101,
                  "name": "1.2 Promjenljive i ulaz/izlaz",
                  "items" : [
                    {
                      "id": 1010,
                      "name": "str. 27",
                      "path": "Z6",
                      "files" : [ "1.2.0.1.c" ]
                    },
                    {
                      "id": 1011,
                      "name": "str. 32",
                      "path": "Z7",
                      "files" : [ "1.2.4.1.c" ]
                    },
                    {
                      "id": 1012,
                      "name": "str. 37a",
                      "path": "Z8",
                      "files" : [ "1.2.9.1.cpp" ]
                    },
                    {
                      "id": 1013,
                      "name": "str. 37b",
                      "path": "Z9",
                      "files" : [ "1.2.9.2.cpp" ]
                    }
                  ]
                },
                {
                  "id": 102,
                  "name": "1.3 Rješavanje programskih zadataka",
                  "items" : [
                    {
                      "id": 1020,
                      "name": "str. 39",
                      "path": "Z10",
                      "files" : [ "1.3.0.1.c" ]
                    },
                    {
                      "id": 1021,
                      "name": "str. 40",
                      "path": "Z11",
                      "files" : [ "1.3.1.1.c" ]
                    }
                  ]
                }
              ],
              "task_files": {
                "1": [
                  "1.0.0.1.c"
                ],
                "2": [
                  "1.1.1.1.c"
                ],
                "3": [
                  "1.1.1.2.c"
                ],
                "4": [
                  "1.1.1.3.c"
                ],
                "5": [
                  "1.1.3.1-greska.c"
                ],
                "6": [
                  "1.2.0.1.c"
                ],
                "7": [
                  "1.2.4.1.c"
                ],
                "8": [
                  "1.2.9.1.cpp"
                ],
                "9": [
                  "1.2.9.2.cpp"
                ],
                "10": [
                  "1.3.0.1.c"
                ],
                "11": [
                  "1.3.1.1.c"
                ]
              },
              "homework_id": "0",
              "hidden": "false"
            },
            {
              "id": 11,
              "type": "Poglavlje",
              "tasks": 11,
              "path": "P2",
              "name": "Poglavlje 2. Uslovi",
              "items" : [
                {
                  "id": 110,
                  "name": "2.1 Vrste grananja",
                  "items" : [
                    {
                      "id": 1100,
                      "name": "str. 45",
                      "path": "Z1",
                      "files" : [ "2.1.1.1.c" ]
                    },
                    {
                      "id": 1101,
                      "name": "str. 46 - greška",
                      "path": "Z2",
                      "files" : [ "2.1.1.2-greska.c" ]
                    }
                  ]
                },
                {
                  "id": 111,
                  "name": "2.3 Alternativa",
                  "items" : [
                    {
                      "id": 1110,
                      "name": "str. 48",
                      "path": "Z3",
                      "files" : [ "2.3.0.1.c" ]
                    }
                  ]
                },
                {
                  "id": 112,
                  "name": "2.5 Višestruki izbor",
                  "items" : [
                    {
                      "id": 1120,
                      "name": "str. 54 - greška",
                      "path": "Z4",
                      "files" : [ "2.5.0.1-greska.c" ]
                    },
                    {
                      "id": 1121,
                      "name": "str. 55 - greška",
                      "path": "Z5",
                      "files" : [ "2.5.0.2-greska.c" ]
                    },
                    {
                      "id": 1122,
                      "name": "str. 56a",
                      "path": "Z6",
                      "files" : [ "2.5.0.3.c" ]
                    },
                    {
                      "id": 1123,
                      "name": "str. 56b",
                      "path": "Z7",
                      "files" : [ "2.5.0.4.c" ]
                    },
                    {
                      "id": 1124,
                      "name": "str. 59a",
                      "path": "Z8",
                      "files" : [ "2.5.2.1.c" ]
                    },
                    {
                      "id": 1125,
                      "name": "str. 59b",
                      "path": "Z9",
                      "files" : [ "2.5.2.2.c" ]
                    },
                    {
                      "id": 1126,
                      "name": "str. 60 - greška",
                      "path": "Z10",
                      "files" : [ "2.5.2.3-greska.c" ]
                    }
                  ]
                },
                {
                  "id": 113,
                  "name": "2.6 Kontrola toka naredbom goto",
                  "items" : [
                    {
                      "id": 1130,
                      "name": "str. 61",
                      "path": "Z11",
                      "files" : [ "2.6.0.1.c" ]
                    }
                  ]
                }
              ],
              "task_files": {
                "1": [
                  "2.1.1.1.c"
                ],
                "2": [
                  "2.1.1.2-greska.c"
                ],
                "3": [
                  "2.3.0.1.c"
                ],
                "4": [
                  "2.5.0.1-greska.c"
                ],
                "5": [
                  "2.5.0.2-greska.c"
                ],
                "6": [
                  "2.5.0.3.c"
                ],
                "7": [
                  "2.5.0.4.c"
                ],
                "8": [
                  "2.5.2.1.c"
                ],
                "9": [
                  "2.5.2.2.c"
                ],
                "10": [
                  "2.5.2.3-greska.c"
                ],
                "11": [
                  "2.6.0.1.c"
                ]
              },
              "homework_id": "0",
              "hidden": "false"
            },
            {
              "id": 12,
              "type": "Poglavlje",
              "tasks": 5,
              "name": "Poglavlje 3. Skok u svijet programiranja",
              "path": "P3",
              "items" : [
                {
                  "id": 120,
                  "name": "3.1 Predstavljanje podataka u memoriji računara",
                  "items" : [
                    {
                      "id": 1200,
                      "name": "str. 72a",
                      "path": "Z1",
                      "files" : [ "3.1.6.1.c" ]
                    },
                    {
                      "id": 1201,
                      "name": "str. 72b - greška",
                      "path": "Z2",
                      "files" : [ "3.1.6.2-greska.c" ]
                    },
                    {
                      "id": 1202,
                      "name": "str. 72c",
                      "path": "Z3",
                      "files" : [ "3.1.6.3.c" ]
                    },
                    {
                      "id": 1203,
                      "name": "str. 77",
                      "path": "Z4",
                      "files" : [ "3.1.8.1.c" ]
                    }
                  ]
                },
                {
                  "id": 121,
                  "name": "3.2 Operatori",
                  "items" : [
                    {
                      "id": 1210,
                      "name": "str. 82",
                      "path": "Z5",
                      "files" : [ "3.2.2.1.c" ]
                    }
                  ]
                }
              ],
              "task_files": {
                "1": [
                  "3.1.6.1.c"
                ],
                "2": [
                  "3.1.6.2-greska.c"
                ],
                "3": [
                  "3.1.6.3.c"
                ],
                "4": [
                  "3.1.8.1.c"
                ],
                "5": [
                  "3.2.2.1.c"
                ]
              },
              "homework_id": "0",
              "hidden": "false"
            },
            {
              "id": 13,
              "type": "Poglavlje",
              "tasks": 31,
              "name": "Poglavlje 4. Petlje",
              "path": "P4",
              "items" : [
                {
                  "id": 130,
                  "name": "4.1 for petlja",
                  "items" : [
                    {
                      "id": 1300,
                      "name": "str. 88",
                      "path": "Z1",
                      "files" : [ "4.1.0.1.c" ]
                    },
                    {
                      "id": 1301,
                      "name": "str. 91a",
                      "path": "Z2",
                      "files" : [ "4.1.1.1.c" ]
                    },
                    {
                      "id": 1302,
                      "name": "str. 91b",
                      "path": "Z3",
                      "files" : [ "4.1.2.1.c" ]
                    },
                    {
                      "id": 1303,
                      "name": "str. 93",
                      "path": "Z4",
                      "files" : [ "4.1.3.1.c" ]
                    },
                    {
                      "id": 1304,
                      "name": "str. 94",
                      "path": "Z5",
                      "files" : [ "4.1.4.1.c" ]
                    },
                    {
                      "id": 1305,
                      "name": "str. 95a",
                      "path": "Z6",
                      "files" : [ "4.1.4.2.c" ]
                    },
                    {
                      "id": 1306,
                      "name": "str. 95b",
                      "path": "Z7",
                      "files" : [ "4.1.4.3.c" ]
                    },
                    {
                      "id": 1307,
                      "name": "str. 96a",
                      "path": "Z8",
                      "files" : [ "4.1.4.4.c" ]
                    },
                    {
                      "id": 1308,
                      "name": "str. 96b",
                      "path": "Z9",
                      "files" : [ "4.1.4.5.c" ]
                    },
                    {
                      "id": 1309,
                      "name": "str. 97",
                      "path": "Z10",
                      "files" : [ "4.1.5.1.c" ]
                    },
                    {
                      "id": 1310,
                      "name": "str. 98a",
                      "path": "Z11",
                      "files" : [ "4.1.6.1.c" ]
                    },
                    {
                      "id": 1311,
                      "name": "str. 98b",
                      "path": "Z12",
                      "files" : [ "4.1.6.2.c" ]
                    },
                    {
                      "id": 1312,
                      "name": "str. 99",
                      "path": "Z13",
                      "files" : [ "4.1.6.3.c" ]
                    },
                    {
                      "id": 1313,
                      "name": "str. 100",
                      "path": "Z14",
                      "files" : [ "4.1.7.1.c" ]
                    },
                    {
                      "id": 1314,
                      "name": "str. 103",
                      "path": "Z15",
                      "files" : [ "4.1.7.2.c" ]
                    },
                    {
                      "id": 1315,
                      "name": "str. 104",
                      "path": "Z16",
                      "files" : [ "4.1.7.3.c" ]
                    }
                  ]
                },
                {
                  "id": 131,
                  "name": "4.2 while petlja",
                  "path": "P4",
                  "items" : [
                    {
                      "id": 1310,
                      "name": "str. 105",
                      "path": "Z17",
                      "files" : [ "4.2.0.1.c" ]
                    }
                  ]
                },
                {
                  "id": 132,
                  "name": "4.3 do-while petlja",
                  "items" : [
                    {
                      "id": 1320,
                      "name": "str. 108 - greška",
                      "path": "Z18",
                      "files" : [ "4.3.0.1-greska.c" ]
                    },
                    {
                      "id": 1321,
                      "name": "str. 110",
                      "path": "Z19",
                      "files" : [ "4.3.0.2.c" ]
                    }
                  ]
                },
                {
                  "id": 133,
                  "name": "4.4 Primjeri zadataka sa petljama",
                  "items" : [
                    {
                      "id": 1330,
                      "name": "str. 111 - Zadatak 5",
                      "path": "Z20",
                      "files" : [ "4.4.1.1.c" ]
                    },
                    {
                      "id": 1331,
                      "name": "str. 113 - Zadatak 6",
                      "path": "Z21",
                      "files" : [ "4.4.1.2.c" ]
                    },
                    {
                      "id": 1332,
                      "name": "str. 114 - Zadatak 7",
                      "path": "Z22",
                      "files" : [ "4.4.1.3.c" ]
                    },
                    {
                      "id": 1333,
                      "name": "str. 115 - Zadatak 8",
                      "path": "Z23",
                      "files" : [ "4.4.1.4.c" ]
                    },
                    {
                      "id": 1334,
                      "name": "str. 117 - Zadatak 9",
                      "path": "Z24",
                      "files" : [ "4.4.2.1.c" ]
                    },
                    {
                      "id": 1335,
                      "name": "str. 118 - Zadatak 10",
                      "path": "Z25",
                      "files" : [ "4.4.2.2.c" ]
                    },
                    {
                      "id": 1336,
                      "name": "str. 119 - Zadatak 11",
                      "path": "Z26",
                      "files" : [ "4.4.2.3.c" ]
                    },
                    {
                      "id": 1337,
                      "name": "str. 120 - Zadatak 11",
                      "path": "Z27",
                      "files" : [ "4.4.2.4.c" ]
                    },
                    {
                      "id": 1338,
                      "name": "str. 121 - greška",
                      "path": "Z28",
                      "files" : [ "4.4.3.1-greska.c" ]
                    },
                    {
                      "id": 1339,
                      "name": "str. 123",
                      "path": "Z29",
                      "files" : [ "4.4.3.2.c" ]
                    },
                    {
                      "id": 1340,
                      "name": "str. 125 - Zadatak 12",
                      "path": "Z30",
                      "files" : [ "4.4.4.1.c" ]
                    },
                    {
                      "id": 1341,
                      "name": "str. 126 - Zadatak 13",
                      "path": "Z31",
                      "files" : [ "4.4.4.2.c" ]
                    }
                  ]
                }
              ],
              "task_files": {
                "1": [
                  "4.1.0.1.c"
                ],
                "2": [
                  "4.1.1.1.c"
                ],
                "3": [
                  "4.1.2.1.c"
                ],
                "4": [
                  "4.1.3.1.c"
                ],
                "5": [
                  "4.1.4.1.c"
                ],
                "6": [
                  "4.1.4.2.c"
                ],
                "7": [
                  "4.1.4.3.c"
                ],
                "8": [
                  "4.1.4.4.c"
                ],
                "9": [
                  "4.1.4.5.c"
                ],
                "10": [
                  "4.1.5.1.c"
                ],
                "11": [
                  "4.1.6.1.c"
                ],
                "12": [
                  "4.1.6.2.c"
                ],
                "13": [
                  "4.1.6.3.c"
                ],
                "14": [
                  "4.1.7.1.c"
                ],
                "15": [
                  "4.1.7.2.c"
                ],
                "16": [
                  "4.1.7.3.c"
                ],
                "17": [
                  "4.2.0.1.c"
                ],
                "18": [
                  "4.3.0.1-greska.c"
                ],
                "19": [
                  "4.3.0.2.c"
                ],
                "20": [
                  "4.4.1.1.c"
                ],
                "21": [
                  "4.4.1.2.c"
                ],
                "22": [
                  "4.4.1.3.c"
                ],
                "23": [
                  "4.4.1.4.c"
                ],
                "24": [
                  "4.4.2.1.c"
                ],
                "25": [
                  "4.4.2.2.c"
                ],
                "26": [
                  "4.4.2.3.c"
                ],
                "27": [
                  "4.4.2.4.c"
                ],
                "28": [
                  "4.4.3.1-greska.c"
                ],
                "29": [
                  "4.4.3.2.c"
                ],
                "30": [
                  "4.4.4.1.c"
                ],
                "31": [
                  "4.4.4.2.c"
                ]
              },
              "homework_id": "0",
              "hidden": "false"
            },
            {
              "id": 14,
              "type": "Poglavlje",
              "tasks": 25,
              "name": "Poglavlje 5. Nizovi",
              "path": "P5",
              "items" : [
                {
                  "id": 140,
                  "name": "5.1 Rad sa nizovima",
                  "items" : [
                    {
                      "id": 1400,
                      "name": "str. 131a",
                      "path": "Z1",
                      "files" : [ "5.1.0.1.c" ]
                    },
                    {
                      "id": 1401,
                      "name": "str. 131b - greška",
                      "path": "Z2",
                      "files" : [ "5.1.0.2-greska.c" ]
                    },
                    {
                      "id": 1402,
                      "name": "str. 135",
                      "path": "Z3",
                      "files" : [ "5.1.3.1.c" ]
                    },
                    {
                      "id": 1403,
                      "name": "str. 137",
                      "path": "Z4",
                      "files" : [ "5.1.3.2.c" ]
                    },
                    {
                      "id": 1404,
                      "name": "str. 138",
                      "path": "Z5",
                      "files" : [ "5.1.4.1.c" ]
                    },
                    {
                      "id": 1405,
                      "name": "str. 139",
                      "path": "Z6",
                      "files" : [ "5.1.4.2.c" ]
                    },
                    {
                      "id": 1406,
                      "name": "str. 140 - greška",
                      "path": "Z7",
                      "files" : [ "5.1.5.1-greska.c" ]
                    },
                    {
                      "id": 1407,
                      "name": "str. 141",
                      "path": "Z8",
                      "files" : [ "5.1.5.2.c" ]
                    },
                    {
                      "id": 1408,
                      "name": "str. 142",
                      "path": "Z9",
                      "files" : [ "5.1.5.3.c" ]
                    },
                    {
                      "id": 1409,
                      "name": "str. 143",
                      "path": "Z10",
                      "files" : [ "5.1.5.4.c" ]
                    }
                  ]
                },
                {
                  "id": 141,
                  "name": "5.2 Neki algoritmi za rad sa nizovima",
                  "items" : [
                    {
                      "id": 1410,
                      "name": "str. 147",
                      "path": "Z11",
                      "files" : [ "5.2.1.1.c" ]
                    },
                    {
                      "id": 1411,
                      "name": "str. 153",
                      "path": "Z12",
                      "files" : [ "5.2.2.2.c" ]
                    },
                    {
                      "id": 1412,
                      "name": "str. 154",
                      "path": "Z13",
                      "files" : [ "5.2.3.1.c" ]
                    },
                    {
                      "id": 1413,
                      "name": "str. 157",
                      "path": "Z14",
                      "files" : [ "5.2.4.1.c" ]
                    },
                    {
                      "id": 1414,
                      "name": "str. 159",
                      "path": "Z15",
                      "files" : [ "5.2.5.1.c" ]
                    }
                  ]
                },
                {
                  "id": 142,
                  "name": "5.3 Višedimenzionalni nizovi",
                  "items" : [
                    {
                      "id": 1420,
                      "name": "str. 163a",
                      "path": "Z16",
                      "files" : [ "5.3.0.1.c" ]
                    },
                    {
                      "id": 1421,
                      "name": "str. 163b",
                      "path": "Z18",
                      "files" : [ "5.3.1.1.c" ]
                    },
                    {
                      "id": 1422,
                      "name": "str. 164",
                      "path": "Z19",
                      "files" : [ "5.3.1.2.c" ]
                    },
                    {
                      "id": 1423,
                      "name": "str. 165",
                      "path": "Z20",
                      "files" : [ "5.3.1.3.c" ]
                    }
                  ]
                },
                {
                  "id": 143,
                  "name": "5.4 C++ vektori",
                  "items" : [
                    {
                      "id": 1430,
                      "name": "str. 167a",
                      "path": "Z21",
                      "files" : [ "5.4.1.1.cpp" ]
                    },
                    {
                      "id": 1431,
                      "name": "str. 167b",
                      "path": "Z22",
                      "files" : [ "5.4.1.2.cpp" ]
                    },
                    {
                      "id": 1432,
                      "name": "str. 168",
                      "path": "Z23",
                      "files" : [ "5.4.2.1.cpp" ]
                    },
                    {
                      "id": 1433,
                      "name": "str. 170",
                      "path": "Z24",
                      "files" : [ "5.4.3.1.cpp" ]
                    },
                    {
                      "id": 1434,
                      "name": "str. 171",
                      "path": "Z25",
                      "files" : [ "5.4.5.1.cpp" ]
                    }
                  ]
                }
              ],
              "task_files": {
                "1": [
                  "5.1.0.1.c"
                ],
                "2": [
                  "5.1.0.2-greska.c"
                ],
                "3": [
                  "5.1.3.1.c"
                ],
                "4": [
                  "5.1.3.2.c"
                ],
                "5": [
                  "5.1.4.1.c"
                ],
                "6": [
                  "5.1.4.2.c"
                ],
                "7": [
                  "5.1.5.1-greska.c"
                ],
                "8": [
                  "5.1.5.2.c"
                ],
                "9": [
                  "5.1.5.3.c"
                ],
                "10": [
                  "5.1.5.4.c"
                ],
                "11": [
                  "5.2.1.1.c"
                ],
                "12": [
                  "5.2.2.2.c"
                ],
                "13": [
                  "5.2.3.1.c"
                ],
                "14": [
                  "5.2.4.1.c"
                ],
                "15": [
                  "5.2.5.1.c"
                ],
                "16": [
                  "5.3.0.1.c"
                ],
                "17": [
                  "5.3.0.2.c"
                ],
                "18": [
                  "5.3.1.1.c"
                ],
                "19": [
                  "5.3.1.2.c"
                ],
                "20": [
                  "5.3.1.3.c"
                ],
                "21": [
                  "5.4.1.1.cpp"
                ],
                "22": [
                  "5.4.1.2.cpp"
                ],
                "23": [
                  "5.4.2.1.cpp"
                ],
                "24": [
                  "5.4.3.1.cpp"
                ],
                "25": [
                  "5.4.5.1.cpp"
                ]
              },
              "homework_id": "0",
              "hidden": "false"
            },
            {
              "id": 15,
              "type": "Poglavlje",
              "tasks": 19,
              "name": "Poglavlje 6. Funkcije",
              "path": "P6",
              "items" : [
                {
                  "id": 150,
                  "name": "6.1 Uvod u funkcije u C-u",
                  "items" : [
                    {
                      "id": 1500,
                      "name": "str. 178",
                      "path": "Z1",
                      "files" : [ "6.1.1.1.c" ]
                    },
                    {
                      "id": 1501,
                      "name": "str. 180",
                      "path": "Z2",
                      "files" : [ "6.1.2.1.c" ]
                    }
                  ]
                },
                {
                  "id": 151,
                  "name": "6.2 Funkcije u C-u",
                  "items" : [
                    {
                      "id": 1510,
                      "name": "str. 188",
                      "path": "Z3",
                      "files" : [ "6.2.3.1.c" ]
                    },
                    {
                      "id": 1511,
                      "name": "str. 190",
                      "path": "Z4",
                      "files" : [ "6.2.4.1.c" ]
                    },
                    {
                      "id": 1512,
                      "name": "str. 193",
                      "path": "Z5",
                      "files" : [ "6.2.5.1.c" ]
                    },
                    {
                      "id": 1513,
                      "name": "str. 199 - greška",
                      "path": "Z6",
                      "files" : [ "6.2.7.1-greska.c" ]
                    },
                    {
                      "id": 1514,
                      "name": "str. 204",
                      "path": "Z7",
                      "files" : [ "6.2.8.1.c" ]
                    },
                    {
                      "id": 1515,
                      "name": "str. 205",
                      "path": "Z8",
                      "files" : [ "6.2.8.2.c" ]
                    }
                  ]
                },
                {
                  "id": 152,
                  "name": "6.3 Prosljeđivanje nizova funkcijama",
                  "items" : [
                    {
                      "id": 1520,
                      "name": "str. 207",
                      "path": "Z9",
                      "files" : [ "6.3.0.1.c" ]
                    },
                    {
                      "id": 1521,
                      "name": "str. 208a",
                      "path": "Z10",
                      "files" : [ "6.3.0.2.c" ]
                    },
                    {
                      "id": 1522,
                      "name": "str. 208b",
                      "path": "Z11",
                      "files" : [ "6.3.0.3.c" ]
                    },
                    {
                      "id": 1523,
                      "name": "str. 209",
                      "path": "Z12",
                      "files" : [ "6.3.0.4.c" ]
                    },
                    {
                      "id": 1524,
                      "name": "str. 210",
                      "path": "Z13",
                      "files" : [ "6.3.0.5.c" ]
                    },
                    {
                      "id": 1525,
                      "name": "str. 211",
                      "path": "Z14",
                      "files" : [ "6.3.0.6.c" ]
                    }
                  ]
                },
                {
                  "id": 153,
                  "name": "6.4 Rekurzivne funkcije",
                  "items" : [
                    {
                      "id": 1530,
                      "name": "str. 212",
                      "path": "Z15",
                      "files" : [ "6.4.0.1.c" ]
                    },
                    {
                      "id": 1531,
                      "name": "str. 213",
                      "path": "Z16",
                      "files" : [ "6.4.0.2.c" ]
                    },
                    {
                      "id": 1532,
                      "name": "str. 214",
                      "path": "Z17",
                      "files" : [ "6.4.0.3.c" ]
                    },
                    {
                      "id": 1533,
                      "name": "str. 216",
                      "path": "Z18",
                      "files" : [ "6.4.0.4.c" ]
                    },
                    {
                      "id": 1534,
                      "name": "str. 217",
                      "path": "Z19",
                      "files" : [ "6.4.0.5.c" ]
                    }
                  ]
                }
              ],
              "task_files": {
                "1": [
                  "6.1.1.1.c"
                ],
                "2": [
                  "6.1.2.1.c"
                ],
                "3": [
                  "6.2.3.1.c"
                ],
                "4": [
                  "6.2.4.1.c"
                ],
                "5": [
                  "6.2.5.1.c"
                ],
                "6": [
                  "6.2.7.1-greska.c"
                ],
                "7": [
                  "6.2.8.1.c"
                ],
                "8": [
                  "6.2.8.2.c"
                ],
                "9": [
                  "6.3.0.1.c"
                ],
                "10": [
                  "6.3.0.2.c"
                ],
                "11": [
                  "6.3.0.3.c"
                ],
                "12": [
                  "6.3.0.4.c"
                ],
                "13": [
                  "6.3.0.5.c"
                ],
                "14": [
                  "6.3.0.6.c"
                ],
                "15": [
                  "6.4.0.1.c"
                ],
                "16": [
                  "6.4.0.2.c"
                ],
                "17": [
                  "6.4.0.3.c"
                ],
                "18": [
                  "6.4.0.4.c"
                ],
                "19": [
                  "6.4.0.5.c"
                ]
              },
              "homework_id": "0",
              "hidden": "false"
            },
            {
              "id": 16,
              "type": "Poglavlje",
              "tasks": 18,
              "name": "Poglavlje 7. Pokaziva\u010di",
              "path": "P7",
              "items" : [
                {
                  "id": 160,
                  "name": "7.1 Rad sa pokazivačima",
                  "items" : [
                    {
                      "id": 1600,
                      "name": "str. 221",
                      "path": "Z1",
                      "files" : [ "7.0.0.1.c" ]
                    },
                    {
                      "id": 1601,
                      "name": "str. 223",
                      "path": "Z2",
                      "files" : [ "7.0.0.2.c" ]
                    },
                    {
                      "id": 1602,
                      "name": "str. 227",
                      "path": "Z3",
                      "files" : [ "7.3.0.1.c" ]
                    },
                    {
                      "id": 1603,
                      "name": "str. 228",
                      "path": "Z4",
                      "files" : [ "7.3.0.2.c" ]
                    }
                  ]
                },
                {
                  "id": 161,
                  "name": "7.2 Pokazivači kao parametri funkcija",
                  "items" : [
                    {
                      "id": 1610,
                      "name": "str. 229a - greška",
                      "path": "Z5",
                      "files" : [ "7.4.0.1-greska.c" ]
                    },
                    {
                      "id": 1611,
                      "name": "str. 229b",
                      "path": "Z6",
                      "files" : [ "7.4.0.2.c" ]
                    },
                    {
                      "id": 1612,
                      "name": "str. 230",
                      "path": "Z7",
                      "files" : [ "7.4.1.1.c" ]
                    },
                    {
                      "id": 1613,
                      "name": "str. 232",
                      "path": "Z8",
                      "files" : [ "7.4.1.2.c" ]
                    },
                    {
                      "id": 1614,
                      "name": "str. 236 - greška",
                      "path": "Z9",
                      "files" : [ "7.4.2.1-greska.c" ]
                    }
                  ]
                },
                {
                  "id": 162,
                  "name": "7.3 Pokazivači i nizovi",
                  "items" : [
                    {
                      "id": 1620,
                      "name": "str. 246",
                      "path": "Z10",
                      "files" : [ "7.5.4.1.c" ]
                    },
                    {
                      "id": 1621,
                      "name": "str. 251",
                      "path": "Z11",
                      "files" : [ "7.5.5.1.c" ]
                    },
                    {
                      "id": 1622,
                      "name": "str. 252",
                      "path": "Z12",
                      "files" : [ "7.5.5.2.c" ]
                    },
                    {
                      "id": 1623,
                      "name": "str. 253",
                      "path": "Z13",
                      "files" : [ "7.5.5.3.c" ]
                    }
                  ]
                },
                {
                  "id": 163,
                  "name": "7.4 Pokazivači kao povratni tip funkcije",
                  "items" : [
                    {
                      "id": 1630,
                      "name": "str. 255",
                      "path": "Z14",
                      "files" : [ "7.6.0.1.c" ]
                    },
                    {
                      "id": 1631,
                      "name": "str. 256 - greška",
                      "path": "Z15",
                      "files" : [ "7.6.1.1-greska.c" ]
                    },
                    {
                      "id": 1632,
                      "name": "str. 257",
                      "path": "Z16",
                      "files" : [ "7.6.1.2.c" ]
                    },
                    {
                      "id": 1633,
                      "name": "str. 258",
                      "path": "Z17",
                      "files" : [ "7.6.1.3.c" ]
                    },
                    {
                      "id": 1634,
                      "name": "str. 260",
                      "path": "Z18",
                      "files" : [ "7.6.1.4.c" ]
                    }
                  ]
                }
              ],
              "task_files": {
                "1": [
                  "7.0.0.1.c"
                ],
                "2": [
                  "7.0.0.2.c"
                ],
                "3": [
                  "7.3.0.1.c"
                ],
                "4": [
                  "7.3.0.2.c"
                ],
                "5": [
                  "7.4.0.1-greska.c"
                ],
                "6": [
                  "7.4.0.2.c"
                ],
                "7": [
                  "7.4.1.1.c"
                ],
                "8": [
                  "7.4.1.2.c"
                ],
                "9": [
                  "7.4.2.1-greska.c"
                ],
                "10": [
                  "7.5.4.1.c"
                ],
                "11": [
                  "7.5.5.1.c"
                ],
                "12": [
                  "7.5.5.2.c"
                ],
                "13": [
                  "7.5.5.3.c"
                ],
                "14": [
                  "7.6.0.1.c"
                ],
                "15": [
                  "7.6.1.1-greska.c"
                ],
                "16": [
                  "7.6.1.2.c"
                ],
                "17": [
                  "7.6.1.3.c"
                ],
                "18": [
                  "7.6.1.4.c"
                ]
              },
              "homework_id": "0",
              "hidden": "false"
            },
            {
              "id": 17,
              "type": "Poglavlje",
              "tasks": 18,
              "name": "Poglavlje 8. Stringovi",
              "path": "P8",
              "items" : [
                {
                  "id": 170,
                  "name": "8.1 Osnovne operacije nad stringovima",
                  "items" : [
                    {
                      "id": 1700,
                      "name": "str. 266",
                      "path": "Z1",
                      "files" : [ "8.1.1.1.c" ]
                    },
                    {
                      "id": 1701,
                      "name": "str. 269 - Zadatak 1",
                      "path": "Z2",
                      "files" : [ "8.1.2.1.c" ]
                    },
                    {
                      "id": 1702,
                      "name": "str. 270 - Zadatak 2",
                      "path": "Z3",
                      "files" : [ "8.1.2.2.c" ]
                    },
                    {
                      "id": 1703,
                      "name": "str. 272",
                      "path": "Z4",
                      "files" : [ "8.1.2.3.c" ]
                    },
                    {
                      "id": 1704,
                      "name": "str. 274 - Zadatak 3",
                      "path": "Z5",
                      "files" : [ "8.1.2.4.c" ]
                    },
                    {
                      "id": 1705,
                      "name": "str. 277 - Zadatak 4",
                      "path": "Z6",
                      "files" : [ "8.1.2.5.c" ]
                    },
                    {
                      "id": 1706,
                      "name": "str. 278 - Zadatak 5",
                      "path": "Z7",
                      "files" : [ "8.1.2.6.c" ]
                    },
                    {
                      "id": 1707,
                      "name": "str. 280 - Zadatak 6",
                      "path": "Z19",
                      "files" : [ "8.1.3.1.c" ]
                    }
                  ]
                },
                {
                  "id": 171,
                  "name": "8.2 Neki algoritmi za rad sa stringovima",
                  "items" : [
                    {
                      "id": 1710,
                      "name": "str. 282 - Zadatak 7",
                      "path": "Z8",
                      "files" : [ "8.2.1.1.c" ]
                    },
                    {
                      "id": 1711,
                      "name": "str. 283",
                      "path": "Z9",
                      "files" : [ "8.2.2.1.c" ]
                    },
                    {
                      "id": 1712,
                      "name": "str. 284 - Zadatak 8",
                      "path": "Z10",
                      "files" : [ "8.2.3.1.c" ]
                    },
                    {
                      "id": 1713,
                      "name": "str. 287 - Zadatak 9",
                      "path": "Z11",
                      "files" : [ "8.2.4.1.c" ]
                    },
                    {
                      "id": 1714,
                      "name": "str. 289 - Zadatak 10",
                      "path": "Z12",
                      "files" : [ "8.2.5.1.c" ]
                    },
                    {
                      "id": 1715,
                      "name": "str. 290 - Zadatak 11",
                      "path": "Z13",
                      "files" : [ "8.2.6.1.c" ]
                    },
                    {
                      "id": 1716,
                      "name": "str. 291",
                      "path": "Z14",
                      "files" : [ "8.2.6.2.c" ]
                    }
                  ]
                },
                {
                  "id": 172,
                  "name": "8.3 C++ stringovi",
                  "items" : [
                    {
                      "id": 1720,
                      "name": "str. 292",
                      "path": "Z15",
                      "files" : [ "8.3.1.1.cpp" ]
                    },
                    {
                      "id": 1721,
                      "name": "str. 293",
                      "path": "Z16",
                      "files" : [ "8.3.1.2.cpp" ]
                    },
                    {
                      "id": 1722,
                      "name": "str. 294",
                      "path": "Z17",
                      "files" : [ "8.3.3.1.cpp" ]
                    },
                    {
                      "id": 1723,
                      "name": "str. 295",
                      "path": "Z18",
                      "files" : [ "8.3.4.1.cpp" ]
                    }
                  ]
                }
              ],
              "task_files": {
                "15": [
                  "8.3.1.1.cpp"
                ],
                "16": [
                  "8.3.1.2.cpp"
                ],
                "17": [
                  "8.3.3.1.cpp"
                ],
                "18": [
                  "8.3.4.1.cpp"
                ]
              },
              "homework_id": "0",
              "hidden": "false"
            },
            {
              "id": 18,
              "type": "Poglavlje",
              "tasks": 5,
              "name": "Poglavlje 9. Vlastiti tipovi",
              "path": "P9",
              "items" : [
                {
                  "id": 181,
                  "name": "9.2 Pobrojani tip (enum)",
                  "items" : [
                    {
                      "id": 1810,
                      "name": "str. 302",
                      "path": "Z1",
                      "files" : [ "9.2.0.1.c" ]
                    }
                  ]
                },
                {
                  "id": 182,
                  "name": "9.3 Strukturni tip podataka (struct)",
                  "items" : [
                    {
                      "id": 1820,
                      "name": "str. 308",
                      "path": "Z2",
                      "files" : [ "9.3.5.1.c" ]
                    },
                    {
                      "id": 1821,
                      "name": "str. 309 - Zadatak 1",
                      "path": "Z3",
                      "files" : [ "9.3.5.2.c" ]
                    },
                    {
                      "id": 1822,
                      "name": "str. 312 - Zadatak 2",
                      "path": "Z4",
                      "files" : [ "9.3.6.1.c" ]
                    },
                    {
                      "id": 1823,
                      "name": "str. 314 - Zadatak 3",
                      "path": "Z5",
                      "files" : [ "9.3.7.1.c" ]
                    }
                  ]
                }
              ],
              "task_files": {
                "1": [
                  "9.2.0.1.c"
                ],
                "2": [
                  "9.3.5.1.c"
                ],
                "3": [
                  "9.3.5.2.c"
                ],
                "4": [
                  "9.3.6.1.c"
                ],
                "5": [
                  "9.3.7.1.c"
                ]
              },
              "homework_id": "0",
              "hidden": "false"
            },
            {
              "id": 19,
              "type": "Poglavlje",
              "tasks": 12,
              "name": "Poglavlje 10. Datoteke",
              "path": "P10",
              "items" : [
                {
                  "id": 191,
                  "name": "10.2 Rad sa datotekama u C-u",
                  "items" : [
                    {
                      "id": 1910,
                      "name": "str. 326",
                      "path": "Z1",
                      "files" : [ "10.2.1.1.c" ]
                    },
                    {
                      "id": 1911,
                      "name": "str. 328",
                      "path": "Z2",
                      "files" : [ "10.2.1.2.c" ]
                    },
                    {
                      "id": 1912,
                      "name": "str. 330 - Zadatak 1",
                      "path": "Z3",
                      "files" : [ "10.2.2.1.c" ]
                    },
                    {
                      "id": 1913,
                      "name": "str. 331",
                      "path": "Z4",
                      "files" : [ "10.2.2.2.c" ]
                    },
                    {
                      "id": 1914,
                      "name": "str. 332",
                      "path": "Z5",
                      "files" : [ "10.2.2.3.c" ]
                    },
                    {
                      "id": 1915,
                      "name": "str. 335",
                      "path": "Z6",
                      "files" : [ "10.2.3.1.c" ]
                    },
                    {
                      "id": 1916,
                      "name": "str. 336",
                      "path": "Z7",
                      "files" : [ "10.2.3.2.c" ]
                    },
                    {
                      "id": 1917,
                      "name": "str. 338 - Zadatak 2",
                      "path": "Z8",
                      "files" : [ "10.2.3.3.c" ]
                    }
                  ]
                },
                {
                  "id": 192,
                  "name": "10.3 Baze podataka",
                  "items" : [
                    {
                      "id": 1920,
                      "name": "str. 341 - Zadatak 3",
                      "path": "Z9",
                      "files" : [ "10.3.0.1.c" ]
                    },
                    {
                      "id": 1921,
                      "name": "str. 342",
                      "path": "Z10",
                      "files" : [ "10.3.0.2.c" ]
                    }
                  ]
                },
                {
                  "id": 193,
                  "name": "10.4 Binarne datoteke",
                  "items" : [
                    {
                      "id": 1930,
                      "name": "str. 344",
                      "path": "Z11",
                      "files" : [ "10.4.1.1.c" ]
                    },

                    {
                      "id": 1931,
                      "name": "str. 345",
                      "path": "Z12",
                      "files" : [ "10.4.1.2.c" ]
                    }
                  ]
                }
              ],
              "task_files": {
                "1": [
                  "10.2.1.1.c"
                ],
                "2": [
                  "10.2.1.2.c"
                ],
                "3": [
                  "10.2.2.1.c"
                ],
                "4": [
                  "10.2.2.2.c"
                ],
                "5": [
                  "10.2.2.3.c"
                ],
                "6": [
                  "10.2.3.1.c"
                ],
                "7": [
                  "10.2.3.2.c"
                ],
                "8": [
                  "10.2.3.3.c"
                ],
                "9": [
                  "10.3.0.1.c"
                ],
                "10": [
                  "10.3.0.2.c"
                ],
                "11": [
                  "10.4.1.1.c"
                ],
                "12": [
                  "10.4.1.2.c"
                ]
              },
              "homework_id": "0",
              "hidden": "false"
            },
            {
              "id": 110,
              "type": "Poglavlje",
              "tasks": 25,
              "name": "Dodatak C. Pokaziva\u010di",
              "path": "P12",
              "items" : [
                {
                  "id": 1101,
                  "name": "C.1 Dopune uvodnog poglavlja o pokazivačima",
                  "items" : [
                    {
                      "id": 11010,
                      "name": "str. 362",
                      "path": "Z1",
                      "files" : [ "12.1.3.1.c" ]
                    }
                  ]
                },
                {
                  "id": 1102,
                  "name": "C.2 Dinamička alokacija memorije",
                  "items" : [
                    {
                      "id": 11020,
                      "name": "str. 368 - Zadatak 1",
                      "path": "Z2",
                      "files" : [ "12.2.1.1.c" ]
                    },
                    {
                      "id": 11021,
                      "name": "str. 375",
                      "path": "Z3",
                      "files" : [ "12.2.3.1.c" ]
                    },
                    {
                      "id": 11022,
                      "name": "str. 379",
                      "path": "Z4",
                      "files" : [ "12.2.3.2.c" ]
                    },
                    {
                      "id": 11023,
                      "name": "str. 380 - Zadatak 2",
                      "path": "Z5",
                      "files" : [ "12.2.3.3.c" ]
                    }
                  ]
                },
                {
                  "id": 1103,
                  "name": "C.3 Višestruki pokazivači",
                  "items" : [
                    {
                      "id": 11030,
                      "name": "str. 382",
                      "path": "Z6",
                      "files" : [ "12.3.0.1.c" ]
                    },
                    {
                      "id": 11031,
                      "name": "str. 384 - Zadatak 3",
                      "path": "Z7",
                      "files" : [ "12.3.1.1.c" ]
                    },
                    {
                      "id": 11032,
                      "name": "str. 387",
                      "path": "Z8",
                      "files" : [ "12.3.2.1.c" ]
                    },
                    {
                      "id": 11033,
                      "name": "str. 389",
                      "path": "Z9",
                      "files" : [ "12.3.2.2.c" ]
                    },
                    {
                      "id": 11034,
                      "name": "str. 390",
                      "path": "Z10",
                      "files" : [ "12.3.2.3.c" ]
                    },
                    {
                      "id": 11035,
                      "name": "str. 392",
                      "path": "Z11",
                      "files" : [ "12.3.3.1.c" ]
                    },
                    {
                      "id": 11036,
                      "name": "str. 393",
                      "path": "Z12",
                      "files" : [ "12.3.3.2.c" ]
                    },
                    {
                      "id": 11037,
                      "name": "str. 394 - greška",
                      "path": "Z13",
                      "files" : [ "12.3.3.3-greska.c" ]
                    },
                    {
                      "id": 11038,
                      "name": "str. 395 - Zadatak 4",
                      "path": "Z14",
                      "files" : [ "12.3.3.4.c" ]
                    },
                    {
                      "id": 11039,
                      "name": "str. 398a",
                      "path": "Z15",
                      "files" : [ "12.3.4.1.c" ]
                    },
                    {
                      "id": 11040,
                      "name": "str. 398b - Zadatak 5",
                      "path": "Z16",
                      "files" : [ "12.3.5.1.c" ]
                    },
                    {
                      "id": 11041,
                      "name": "str. 399",
                      "path": "Z17",
                      "files" : [ "12.3.5.2.c" ]
                    },
                    {
                      "id": 11042,
                      "name": "str. 400",
                      "path": "Z18",
                      "files" : [ "12.3.5.3.c" ]
                    },
                    {
                      "id": 11043,
                      "name": "str. 402",
                      "path": "Z19",
                      "files" : [ "12.3.5.4.c" ]
                    }
                  ]
                },
                {
                  "id": 1105,
                  "name": "C.4 Pokazivači na funkcije",
                  "items" : [
                    {
                      "id": 11050,
                      "name": "str. 403",
                      "path": "Z20",
                      "files" : [ "12.4.0.1.c" ]
                    },
                    {
                      "id": 11051,
                      "name": "str. 409 - Zadatak 6",
                      "path": "Z21",
                      "files" : [ "12.4.0.2.c" ]
                    },
                    {
                      "id": 11052,
                      "name": "str. 411 - Zadatak 7",
                      "path": "Z22",
                      "files" : [ "12.4.0.3.c" ]
                    },
                    {
                      "id": 11053,
                      "name": "str. 412 - Zadatak 8",
                      "path": "Z23",
                      "files" : [ "12.4.0.4.c" ]
                    },
                    {
                      "id": 11054,
                      "name": "str. 415 - Zadatak 9",
                      "path": "Z24",
                      "files" : [ "12.4.0.5.c" ]
                    },
                    {
                      "id": 11055,
                      "name": "str. 417",
                      "path": "Z25",
                      "files" : [ "12.4.0.6.c" ]
                    }
                  ]
                }
              ],
              "task_files": {
                "1": [
                  "12.1.3.1.c"
                ],
                "2": [
                  "12.2.1.1.c"
                ],
                "3": [
                  "12.2.3.1.c"
                ],
                "4": [
                  "12.2.3.2.c"
                ],
                "5": [
                  "12.2.3.3.c"
                ],
                "6": [
                  "12.3.0.1.c"
                ],
                "7": [
                  "12.3.1.1.c"
                ],
                "8": [
                  "12.3.2.1.c"
                ],
                "9": [
                  "12.3.2.2.c"
                ],
                "10": [
                  "12.3.2.3.c"
                ],
                "11": [
                  "12.3.3.1.c"
                ],
                "12": [
                  "12.3.3.2.c"
                ],
                "13": [
                  "12.3.3.3-greska.c"
                ],
                "14": [
                  "12.3.3.4.c"
                ],
                "15": [
                  "12.3.4.1.c"
                ],
                "16": [
                  "12.3.5.1.c"
                ],
                "17": [
                  "12.3.5.2.c"
                ],
                "18": [
                  "12.3.5.3.c"
                ],
                "19": [
                  "12.3.5.4.c"
                ],
                "20": [
                  "12.4.0.1.c"
                ],
                "21": [
                  "12.4.0.2.c"
                ],
                "22": [
                  "12.4.0.3.c"
                ],
                "23": [
                  "12.4.0.4.c"
                ],
                "24": [
                  "12.4.0.5.c"
                ],
                "25": [
                  "12.4.0.6.c"
                ]
              },
              "homework_id": "0",
              "hidden": "false"
            }
          ],
          "homework_id": "0",
          "hidden": "false"
        },
        {
          "id" : 2,
          "type" : "Folder",
          "name" : "Zbirka zadataka",
          "items" : [
            {
              "id" : 20,
              "type" : "Poglavlje",
              "name" : "Poglavlje 1: Prvi koraci",
              "path" : "Z1",
              "items" : [
                {
                  "id" : 2000,
                  "name" : "Zadatak 1",
                  "path" : "Z1",
                  "files" : [ "main.c" ]
                },
                {
                  "id" : 2001,
                  "name" : "Zadatak 2",
                  "path" : "Z2",
                  "files" : [ "main.c" ]
                },
                {
                  "id" : 2002,
                  "name" : "Zadatak 3",
                  "path" : "Z3",
                  "files" : [ "main.c" ]
                },
                {
                  "id" : 2003,
                  "name" : "Zadatak 4",
                  "path" : "Z4",
                  "files" : [ "main.c" ]
                },
                {
                  "id" : 2004,
                  "name" : "Zadatak 5",
                  "path" : "Z5",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 2005,
                  "name" : "Zadatak 6",
                  "path" : "Z6",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 2006,
                  "name" : "Zadatak 7",
                  "path" : "Z7",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 2007,
                  "name" : "Zadatak 8",
                  "path" : "Z8",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 2008,
                  "name" : "Zadatak 9",
                  "path" : "Z9",
                  "files" : [ "main.c", ".autotest" ]
                }
              ],
              "homework_id": "0",
              "hidden" : "false"
            },
            {
              "id" : 30,
              "type" : "Poglavlje",
              "name" : "Poglavlje 2: Uslovi i grananje",
              "path" : "Z2",
              "items" : [
                {
                  "id" : 3000,
                  "name" : "Zadatak 1",
                  "path" : "Z1",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3001,
                  "name" : "Zadatak 2",
                  "path" : "Z2",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3002,
                  "name" : "Zadatak 3",
                  "path" : "Z3",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3003,
                  "name" : "Zadatak 4",
                  "path" : "Z4",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3004,
                  "name" : "Zadatak 5",
                  "path" : "Z5",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3005,
                  "name" : "Zadatak 6",
                  "path" : "Z6",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3006,
                  "name" : "Zadatak 7",
                  "path" : "Z7",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3007,
                  "name" : "Zadatak 8",
                  "path" : "Z8",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3008,
                  "name" : "Zadatak 9",
                  "path" : "Z9",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3009,
                  "name" : "Zadatak 10",
                  "path" : "Z10",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3010,
                  "name" : "Zadatak 11",
                  "path" : "Z11",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3011,
                  "name" : "Zadatak 12",
                  "path" : "Z12",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3012,
                  "name" : "Zadatak 13",
                  "path" : "Z13",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3013,
                  "name" : "Zadatak 14",
                  "path" : "Z14",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3014,
                  "name" : "Zadatak 15",
                  "path" : "Z15",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3015,
                  "name" : "Zadatak 16",
                  "path" : "Z16",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3016,
                  "name" : "Zadatak 17",
                  "path" : "Z17",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3017,
                  "name" : "Zadatak 18",
                  "path" : "Z18",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3018,
                  "name" : "Zadatak 19",
                  "path" : "Z19",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3019,
                  "name" : "Zadatak 20",
                  "path" : "Z20",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 3020,
                  "name" : "Zadatak 21",
                  "path" : "Z21",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                }
              ],
              "homework_id": "0",
              "hidden" : "false"
            },
            {
              "id" : 40,
              "type" : "Poglavlje",
              "name" : "Poglavlje 4: Petlje",
              "path" : "Z3",
              "items" : [
                {
                  "id" : 4000,
                  "name" : "Zadatak 1",
                  "path" : "Z1",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4001,
                  "name" : "Zadatak 2",
                  "path" : "Z2",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4002,
                  "name" : "Zadatak 3",
                  "path" : "Z3",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4003,
                  "name" : "Zadatak 4",
                  "path" : "Z4",
                  "files" : [ "main.c", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4004,
                  "name" : "Zadatak 5",
                  "path" : "Z5",
                  "files" : [ "main.c", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4005,
                  "name" : "Zadatak 6",
                  "path" : "Z6",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4006,
                  "name" : "Zadatak 7",
                  "path" : "Z7",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4007,
                  "name" : "Zadatak 8",
                  "path" : "Z8",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4008,
                  "name" : "Zadatak 9",
                  "path" : "Z9",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4009,
                  "name" : "Zadatak 10",
                  "path" : "Z10",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4010,
                  "name" : "Zadatak 11",
                  "path" : "Z11",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4011,
                  "name" : "Zadatak 12",
                  "path" : "Z12",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4012,
                  "name" : "Zadatak 13",
                  "path" : "Z13",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4013,
                  "name" : "Zadatak 14",
                  "path" : "Z14",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4014,
                  "name" : "Zadatak 15",
                  "path" : "Z15",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4015,
                  "name" : "Zadatak 16",
                  "path" : "Z16",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4016,
                  "name" : "Zadatak 17",
                  "path" : "Z17",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4017,
                  "name" : "Zadatak 18",
                  "path" : "Z18",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4018,
                  "name" : "Zadatak 19",
                  "path" : "Z19",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4019,
                  "name" : "Zadatak 20",
                  "path" : "Z20",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4020,
                  "name" : "Zadatak 21",
                  "path" : "Z21",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4021,
                  "name" : "Zadatak 22",
                  "path" : "Z22",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4022,
                  "name" : "Zadatak 23",
                  "path" : "Z23",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4023,
                  "name" : "Zadatak 24",
                  "path" : "Z24",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4024,
                  "name" : "Zadatak 25",
                  "path" : "Z25",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4025,
                  "name" : "Zadatak 26",
                  "path" : "Z26",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4026,
                  "name" : "Zadatak 27",
                  "path" : "Z27",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4027,
                  "name" : "Zadatak 28",
                  "path" : "Z28",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4028,
                  "name" : "Zadatak 29",
                  "path" : "Z29",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4029,
                  "name" : "Zadatak 30",
                  "path" : "Z30",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 4030,
                  "name" : "Zadatak 31",
                  "path" : "Z31",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                }
              ],
              "homework_id": "0",
              "hidden" : "false"
            },
            {
              "id" : 50,
              "type" : "Poglavlje",
              "name" : "Poglavlje 5: Nizovi",
              "path" : "Z4",
              "items" : [
                {
                  "id" : 5000,
                  "name" : "Zadatak 1",
                  "path" : "Z1",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5001,
                  "name" : "Zadatak 2",
                  "path" : "Z2",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5002,
                  "name" : "Zadatak 3",
                  "path" : "Z3",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5003,
                  "name" : "Zadatak 4",
                  "path" : "Z4",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5004,
                  "name" : "Zadatak 5",
                  "path" : "Z5",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5005,
                  "name" : "Zadatak 6",
                  "path" : "Z6",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5006,
                  "name" : "Zadatak 7",
                  "path" : "Z7",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5007,
                  "name" : "Zadatak 8",
                  "path" : "Z8",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5008,
                  "name" : "Zadatak 9",
                  "path" : "Z9",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5009,
                  "name" : "Zadatak 10",
                  "path" : "Z10",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5010,
                  "name" : "Zadatak 11",
                  "path" : "Z11",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5011,
                  "name" : "Zadatak 12",
                  "path" : "Z12",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5012,
                  "name" : "Zadatak 13",
                  "path" : "Z13",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5013,
                  "name" : "Zadatak 14",
                  "path" : "Z14",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5014,
                  "name" : "Zadatak 15",
                  "path" : "Z15",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5015,
                  "name" : "Zadatak 16",
                  "path" : "Z16",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5016,
                  "name" : "Zadatak 17",
                  "path" : "Z17",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5017,
                  "name" : "Zadatak 18",
                  "path" : "Z18",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5018,
                  "name" : "Zadatak 19",
                  "path" : "Z19",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5019,
                  "name" : "Zadatak 20",
                  "path" : "Z20",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5020,
                  "name" : "Zadatak 21",
                  "path" : "Z21",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5021,
                  "name" : "Zadatak 22",
                  "path" : "Z22",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5022,
                  "name" : "Zadatak 23",
                  "path" : "Z23",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5023,
                  "name" : "Zadatak 24",
                  "path" : "Z24",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5024,
                  "name" : "Zadatak 25",
                  "path" : "Z25",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5025,
                  "name" : "Zadatak 26",
                  "path" : "Z26",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5026,
                  "name" : "Zadatak 27",
                  "path" : "Z27",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5027,
                  "name" : "Zadatak 28",
                  "path" : "Z28",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5028,
                  "name" : "Zadatak 29",
                  "path" : "Z29",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 5029,
                  "name" : "Zadatak 30",
                  "path" : "Z30",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                }
              ],
              "homework_id": "0",
              "hidden" : "false"
            },
            {
              "id" : 60,
              "type" : "Poglavlje",
              "name" : "Poglavlje 6: Funkcije",
              "path" : "Z5",
              "items" : [
                {
                  "id" : 6000,
                  "name" : "Zadatak 1",
                  "path" : "Z1",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 6001,
                  "name" : "Zadatak 2",
                  "path" : "Z2",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 6002,
                  "name" : "Zadatak 3",
                  "path" : "Z3",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 6003,
                  "name" : "Zadatak 4",
                  "path" : "Z4",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 6004,
                  "name" : "Zadatak 5",
                  "path" : "Z5",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 6005,
                  "name" : "Zadatak 6",
                  "path" : "Z6",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 6006,
                  "name" : "Zadatak 7",
                  "path" : "Z7",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 6007,
                  "name" : "Zadatak 8",
                  "path" : "Z8",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 6008,
                  "name" : "Zadatak 9",
                  "path" : "Z9",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 6009,
                  "name" : "Zadatak 10",
                  "path" : "Z10",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 6010,
                  "name" : "Zadatak 11",
                  "path" : "Z11",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 6011,
                  "name" : "Zadatak 12",
                  "path" : "Z12",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 6012,
                  "name" : "Zadatak 13",
                  "path" : "Z13",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 6013,
                  "name" : "Zadatak 14",
                  "path" : "Z14",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 6014,
                  "name" : "Zadatak 15",
                  "path" : "Z15",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 6015,
                  "name" : "Zadatak 16",
                  "path" : "Z16",
                  "files" : [ "main.c", ".autotest" ]
                }
              ],
              "homework_id": "0",
              "hidden" : "false"
            },
            {
              "id" : 70,
              "type" : "Poglavlje",
              "name" : "Poglavlje 7: Pokazivači",
              "path" : "Z6",
              "items" : [
                {
                  "id" : 7000,
                  "name" : "Zadatak 1",
                  "path" : "Z1",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 7001,
                  "name" : "Zadatak 2",
                  "path" : "Z2",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 7002,
                  "name" : "Zadatak 3",
                  "path" : "Z3",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 7003,
                  "name" : "Zadatak 4",
                  "path" : "Z4",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 7004,
                  "name" : "Zadatak 5",
                  "path" : "Z5",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 7005,
                  "name" : "Zadatak 6",
                  "path" : "Z6",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 7006,
                  "name" : "Zadatak 7",
                  "path" : "Z7",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 7007,
                  "name" : "Zadatak 8",
                  "path" : "Z8",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 7008,
                  "name" : "Zadatak 9",
                  "path" : "Z9",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 7009,
                  "name" : "Zadatak 10",
                  "path" : "Z10",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 7010,
                  "name" : "Zadatak 11",
                  "path" : "Z11",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 7011,
                  "name" : "Zadatak 12",
                  "path" : "Z12",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 7012,
                  "name" : "Zadatak 13",
                  "path" : "Z13",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 7013,
                  "name" : "Zadatak 14",
                  "path" : "Z14",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 7014,
                  "name" : "Zadatak 15",
                  "path" : "Z15",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 7015,
                  "name" : "Zadatak 16",
                  "path" : "Z16",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 7016,
                  "name" : "Zadatak 17",
                  "path" : "Z17",
                  "files" : [ "main.c" ]
                }
              ],
              "homework_id": "0",
              "hidden" : "false"
            },
            {
              "id" : 80,
              "type" : "Poglavlje",
              "name" : "Poglavlje 8: Stringovi",
              "path" : "Z7",
              "items" : [
                {
                  "id" : 8000,
                  "name" : "Zadatak 1",
                  "path" : "Z1",
                  "files" : [ "main.c", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8001,
                  "name" : "Zadatak 2",
                  "path" : "Z2",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8002,
                  "name" : "Zadatak 3",
                  "path" : "Z3",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8003,
                  "name" : "Zadatak 4",
                  "path" : "Z4",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8004,
                  "name" : "Zadatak 5",
                  "path" : "Z5",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8005,
                  "name" : "Zadatak 6",
                  "path" : "Z6",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8006,
                  "name" : "Zadatak 7",
                  "path" : "Z7",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8007,
                  "name" : "Zadatak 8",
                  "path" : "Z8",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8008,
                  "name" : "Zadatak 9",
                  "path" : "Z9",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8009,
                  "name" : "Zadatak 10",
                  "path" : "Z10",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8010,
                  "name" : "Zadatak 11",
                  "path" : "Z11",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8011,
                  "name" : "Zadatak 12",
                  "path" : "Z12",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8012,
                  "name" : "Zadatak 13",
                  "path" : "Z13",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8013,
                  "name" : "Zadatak 14",
                  "path" : "Z14",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8014,
                  "name" : "Zadatak 15",
                  "path" : "Z15",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8015,
                  "name" : "Zadatak 16",
                  "path" : "Z16",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8016,
                  "name" : "Zadatak 17",
                  "path" : "Z17",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8017,
                  "name" : "Zadatak 18",
                  "path" : "Z18",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8018,
                  "name" : "Zadatak 19",
                  "path" : "Z19",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8019,
                  "name" : "Zadatak 20",
                  "path" : "Z20",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8020,
                  "name" : "Zadatak 21",
                  "path" : "Z21",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8021,
                  "name" : "Zadatak 22",
                  "path" : "Z22",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8022,
                  "name" : "Zadatak 23",
                  "path" : "Z23",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8023,
                  "name" : "Zadatak 24",
                  "path" : "Z24",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8024,
                  "name" : "Zadatak 25",
                  "path" : "Z25",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8025,
                  "name" : "Zadatak 26",
                  "path" : "Z26",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8026,
                  "name" : "Zadatak 27",
                  "path" : "Z27",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8027,
                  "name" : "Zadatak 28",
                  "path" : "Z28",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8028,
                  "name" : "Zadatak 29",
                  "path" : "Z29",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8029,
                  "name" : "Zadatak 30",
                  "path" : "Z30",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8030,
                  "name" : "Zadatak 31",
                  "path" : "Z31",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8031,
                  "name" : "Zadatak 32",
                  "path" : "Z32",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8032,
                  "name" : "Zadatak 33",
                  "path" : "Z33",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 8033,
                  "name" : "Zadatak 34",
                  "path" : "Z34",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                }
              ],
              "homework_id": "0",
              "hidden" : "false"
            },
            {
              "id" : 90,
              "type" : "Poglavlje",
              "name" : "Poglavlje 9: Vlastiti tipovi podataka",
              "path" : "Z8",
              "items" : [
                {
                  "id" : 9000,
                  "name" : "Zadatak 1",
                  "path" : "Z1",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 9001,
                  "name" : "Zadatak 2",
                  "path" : "Z2",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 9002,
                  "name" : "Zadatak 3",
                  "path" : "Z3",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 9003,
                  "name" : "Zadatak 4",
                  "path" : "Z4",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 9004,
                  "name" : "Zadatak 5",
                  "path" : "Z5",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 9005,
                  "name" : "Zadatak 6",
                  "path" : "Z6",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 9006,
                  "name" : "Zadatak 7",
                  "path" : "Z7",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 9007,
                  "name" : "Zadatak 8",
                  "path" : "Z8",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 9008,
                  "name" : "Zadatak 9",
                  "path" : "Z9",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 9009,
                  "name" : "Zadatak 10",
                  "path" : "Z10",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 9010,
                  "name" : "Zadatak 11",
                  "path" : "Z11",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 9011,
                  "name" : "Zadatak 12",
                  "path" : "Z12",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 9012,
                  "name" : "Zadatak 13",
                  "path" : "Z13",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 9013,
                  "name" : "Zadatak 14",
                  "path" : "Z14",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 9014,
                  "name" : "Zadatak 15",
                  "path" : "Z15",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 9015,
                  "name" : "Zadatak 16",
                  "path" : "Z16",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 9016,
                  "name" : "Zadatak 17",
                  "path" : "Z17",
                  "files" : [ "main.c", ".autotest"]
                }
              ],
              "homework_id": "0",
              "hidden" : "false"
            },
            {
              "id" : 990,
              "type" : "Poglavlje",
              "name" : "Poglavlje 10: Datoteke",
              "path" : "Z9",
              "items" : [
                {
                  "id" : 10000,
                  "name" : "Zadatak 1",
                  "path" : "Z1",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 10001,
                  "name" : "Zadatak 2",
                  "path" : "Z2",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 10002,
                  "name" : "Zadatak 3",
                  "path" : "Z3",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 10003,
                  "name" : "Zadatak 4",
                  "path" : "Z4",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 10004,
                  "name" : "Zadatak 5",
                  "path" : "Z5",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 10005,
                  "name" : "Zadatak 6",
                  "path" : "Z6",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 10006,
                  "name" : "Zadatak 7",
                  "path" : "Z7",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 10007,
                  "name" : "Zadatak 8",
                  "path" : "Z8",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 10008,
                  "name" : "Zadatak 9",
                  "path" : "Z9",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 10009,
                  "name" : "Zadatak 10",
                  "path" : "Z10",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 10010,
                  "name" : "Zadatak 11",
                  "path" : "Z11",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" } ]
                },
                {
                  "id" : 10011,
                  "name" : "Zadatak 12",
                  "path" : "Z12",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" }, "ocjene.dat" ]
                },
                {
                  "id" : 10012,
                  "name" : "Zadatak 13",
                  "path" : "Z13",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" }, "drzave.dat" ]
                },
                {
                  "id" : 10013,
                  "name" : "Zadatak 14",
                  "path" : "Z14",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 10014,
                  "name" : "Zadatak 15",
                  "path" : "Z15",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 10015,
                  "name" : "Zadatak 16",
                  "path" : "Z16",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 10016,
                  "name" : "Zadatak 17",
                  "path" : "Z17",
                  "files" : [ "main.c", ".autotest" ]
                },
                {
                  "id" : 10017,
                  "name" : "Zadatak 18",
                  "path" : "Z18",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" }, {"filename": "oblici.dat", "binary": "true", "show" : "true"} ]
                },
                {
                  "id" : 10018,
                  "name" : "Zadatak 19",
                  "path" : "Z19",
                  "files" : [ "main.c", ".autotest", { "filename": "postavka.jpg", "binary" : "true", "show" : "true" }, {"filename" : "artikli.bin", "binary": "true", "show" : "true"} ]
                }
              ],
              "homework_id": "0",
              "hidden" : "false"
            }
          ],
          "hidden" : "false"
        }
      ];
      context.commit("setAssignments", assignments);
    }
  }
};
