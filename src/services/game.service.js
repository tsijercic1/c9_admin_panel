export default {
  async getTaskCategories() {
    return {
      "success": true,
      "code": 200,
      "data": [
        {
          "id": 1,
          "name": "Easy",
          "points_percent": 0.06667,
          "tokens": 20,
          "tasks_per_category": 5
        },
        {
          "id": 2,
          "name": "Moderate",
          "points_percent": 0.06667,
          "tokens": 20,
          "tasks_per_category": 5
        },
        {
          "id": 3,
          "name": "Hard",
          "points_percent": 0.06667,
          "tokens": 20,
          "tasks_per_category": 5
        }
      ]
    };
  },
  async getAssignments() {
    return {
      "success": true, "code": 200, "data": {
        "name": "Game", "isDirectory": true, "type": "Root", "children": [{
          "id": 2,
          "path": "/L1",
          "name": "Lekcija 1: Ulaz/izlaz i grananje",
          "isDirectory": true,
          "type": "assignment",
          "children": [
            {
              "id": 6,
              "path": "/L1/Z1",
              "name": "Ime i prezime",
              "isDirectory": true,
              "type": "task",
              "children": [{
                "path": "/L1/Z1/task.html",
                "name": "task.html",
                "isDirectory": false,
                "type": "file",
                "data": {"binary": false, "show": true}
              }, {
                "path": "/L1/Z1/main.c",
                "name": "main.c",
                "isDirectory": false,
                "type": "file",
                "data": {"binary": false, "show": true}
              }, {
                "path": "/L1/Z1/.autotest2",
                "name": ".autotest2",
                "isDirectory": false,
                "type": "file",
                "data": {"binary": false, "show": false}
              }],
              "data": {"category": 1, "hint": "Koristite printf da ispi\u0161ete tra\u017eenu poruku na ekranu."}
            }],
          "data": {"active": true, "points": 4, "challengePoints": 2}
        }
        ]
      }
    };
  },
  async createAssignment({
                           name,
                           displayName,
                           points,
                           challengePoints,
                           active
                         }) {
    return {
      success: true,
      code: 200,
      message: `Successfully created ${displayName} ${name} ${points} ${challengePoints} ${active}`
    }
  },
  async editAssignment({id, name, points, challengePoints, active}) {
    return {
      success: true,
      code: 200,
      message: `Successfully edited ${id} ${name} ${points} ${challengePoints} ${active}`
    }
  },
  async createTask({assignmentId, name, displayName, category, hint}) {
    return {
      success: true,
      code: 200,
      message: `Successfully edited ${assignmentId} ${name} ${displayName} ${category} ${hint}`
    };
  },
  async editTask({id, name, categoryId, hint}) {
    return {
      success: true,
      code: 200,
      message: `Successfully edited ${id} ${name} ${categoryId} ${hint}`
    }
  },
  async deleteTask(id) {
    return {
      success: true,
      code: 200,
      message: `Successfully deleted ${id}`
    }
  },
  async createFile({taskId, name, show, binary, content}) {
    return {
      success: true,
      code: 200,
      message: `Successfully created ${taskId} ${name} ${show} ${binary} ${content}`
    }
  },
  async editFile({taskId, name, show, binary, content}) {
    return {
      success: true,
      code: 200,
      message: `Successfully edited ${taskId} ${name} ${show} ${binary} ${content}`
    }
  },
  async deleteFile({taskId, filename}) {
    return {
      success: true,
      code: 200,
      message: `Successfully deleted ${taskId} ${filename}`
    }
  },
  async getFileContent({taskId, filename}) {
    console.log(taskId);
    console.log(filename);
    return {
      "success": true,
      "code": 200,
      "data": {
        "content": "<h1>Zadatak</h1>\n<p>Napišite funkciju pod imenom daj_prost koja nema parametara, a svaki put kada se pozove vraća sljedeći prost broj. Kada prvi put pozovete funkciju, ona treba vratiti broj 2, drugi put treba vratiti broj 3, zatim broj 5, 7, 11 itd.</p>\n<p>Ovu funkciju iskoristite u programu koji omogućuje korisniku da unese prirodne brojeve A i B takve da je A&lt;B, a zatim ispisuje sumu svih prostih brojeva strogo većih od A a strogo manjih od B. U ovom programu se obavezno mora iskoristiti napravljena funkcija daj_prost, ne smiju se računati prosti brojevi na neki drugi način.</p>\n<p>Primjer ulaza i izlaza:</p>\n<pre><code>    \n\tUnesite brojeve A i B: 0 15\n\tA nije prirodan broj.\n\tUnesite brojeve A i B: 5 -5\n\tA nije manje od B.\n\tUnesite brojeve A i B: 10 10\n\tA nije manje od B.\n\tUnesite brojeve A i B: -5 -7\n\tA nije prirodan broj.\n\tUnesite brojeve A i B: 2 10\n\tSuma prostih brojeva izmedju 2 i 10 je 15.\n</code></pre>\n<p>Objašnjenje: 3+5+7 = 15.</p>\n"
      }
    }
  }
};
