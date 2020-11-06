export default {
  async createAssignment({
    name,
    displayName,
    points,
    challengePoints,
    active
  }) {
    let response = await fetch(
      "/services/uup_game.php?action=createAssignment",
      {
        method: "post",
        headers: {
          Accept: "application/json"
        },
        body: JSON.stringify({
          name,
          displayName,
          points,
          challengePoints,
          active
        })
      }
    );
    let body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async editAssignment({ id, name, points, challengePoints, active }) {
    let response = await fetch(
      `/services/uup_game.php?action=editAssignment&assignmentId=${id}`,
      {
        method: "post",
        headers: {
          Accept: "application/json"
        },
        body: JSON.stringify({
          name,
          points,
          challengePoints,
          active
        })
      }
    );
    let body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async createTask({ assignmentId, name, displayName, category, hint }) {
    let response = await fetch(
      `/services/uup_game.php?action=createTask&assignmentId=${assignmentId}`,
      {
        method: "post",
        headers: {
          Accept: "application/json"
        },
        body: JSON.stringify({
          name,
          displayName,
          category,
          hint
        })
      }
    );
    let body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async editTask({ id, name, categoryId, hint }) {
    let response = await fetch(
      `/services/uup_game.php?action=editTask&taskId=${id}`,
      {
        method: "post",
        headers: {
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: name,
          category: categoryId,
          hint: hint
        })
      }
    );
    let body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async deleteTask(id) {
    let response = await fetch(
      `/services/uup_game.php?action=deleteTask&taskId=${id}`,
      {
        method: "delete",
        headers: {
          Accept: "application/json"
        }
      }
    );
    let body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async createFile({ taskId, name, show, binary, content }) {
    let response = await fetch(
      `/services/uup_game.php?action=createTaskFile&taskId=${taskId}`,
      {
        method: "post",
        headers: {
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: name,
          show: show,
          binary: binary,
          content: content
        })
      }
    );
    let body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async editFile({ taskId, name, show, binary, content }) {
    let response = await fetch(
      `/services/uup_game.php?action=editTaskFile&taskId=${taskId}`,
      {
        method: "post",
        headers: {
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: name,
          show: show,
          binary: binary,
          content: content
        })
      }
    );
    let body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async deleteFile({ taskId, filename }) {
    let response = await fetch(
      `/services/uup_game.php?action=deleteTaskFile&taskId=${taskId}&name=${filename}`,
      {
        method: "delete",
        headers: {
          Accept: "application/json"
        }
      }
    );
    let body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async getFileContent({ taskId, filename }) {
    let response = await fetch(
      `/services/uup_game.php?action=getTaskFileContent&taskId=${taskId}&name=${filename}`,
      {
        method: "get",
        headers: {
          Accept: "application/json"
        }
      }
    );
    let body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  }
};
