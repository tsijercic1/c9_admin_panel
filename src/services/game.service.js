export default {
  async getTaskCategories() {
    const response = await fetch(
      "/services/uup_game.php?action=getTaskCategories",
      {
        method: "get",
        headers: {
          Accept: "application/json"
        }
      }
    );
    const body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async getAssignments() {
    const response = await fetch("/services/uup_game.php?action=getAssignments&A", {
      method: "get",
      headers: {
        Accept: "application/json"
      }
    });
    const body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async createAssignment({
    name,
    displayName,
    points,
    challengePoints,
    active
  }) {
    const response = await fetch(
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
    const body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async editAssignment({ id, name, points, challengePoints, active }) {
    const response = await fetch(
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
    const body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async createTask({ assignmentId, name, displayName, category, hint }) {
    const response = await fetch(
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
    const body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async editTask({ id, name, categoryId, hint }) {
    const response = await fetch(
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
    const body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async deleteTask(id) {
    const response = await fetch(
      `/services/uup_game.php?action=deleteTask&taskId=${id}`,
      {
        method: "delete",
        headers: {
          Accept: "application/json"
        }
      }
    );
    const body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async createFile({ taskId, name, show, binary, content }) {
    const response = await fetch(
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
    const body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async editFile({ taskId, name, show, binary, content }) {
    const response = await fetch(
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
    const body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async deleteFile({ taskId, filename }) {
    const response = await fetch(
      `/services/uup_game.php?action=deleteTaskFile&taskId=${taskId}&name=${filename}`,
      {
        method: "delete",
        headers: {
          Accept: "application/json"
        }
      }
    );
    const body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async getFileContent({ taskId, filename }) {
    console.log(`Getting ${filename} ${Date.now()}`);
    const response = await fetch(
      `/services/uup_game.php?action=getTaskFileContent&taskId=${taskId}&name=${filename}`,
      {
        method: "get",
        headers: {
          Accept: "application/json"
        }
      }
    );
    console.log(`Response got here ${Date.now()}`);
    const body = await response.json();
    console.log(`Converted to json ${Date.now()}`);
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    console.log(`Checked the body ${Date.now()}`)
    return body;
  },
  async deployFile(taskId, fileName) {
    const response = await fetch(
      `/services/uup_game.php?action=deployFile&taskId=${taskId}&fileName=${fileName}`,
      {
        method: "post",
        headers: {
          Accept: "application/json"
        }
      }
    );
    console.log(`Deployment responose: ${JSON.stringify(response)}`);
  }
};
