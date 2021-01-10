export default {
  async getFileContent(student, path, isHistory) {
    const location = isHistory === true ? "History" : "Work";
    const action = `student${location}Read`;
    const url = `/services/game_statistics.php?action=${action}&student=${student}&path=${path}`;
    let response = await fetch(url, {
      method: "get",
      headers: {
        Accept: "application/json"
      }
    });
    let body = await response.json();
    if (!body.success) {
      if (body.message && body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async getGroups() {
    let response = await fetch("/services/game_statistics.php?action=groups", {
      method: "get",
      headers: {
        Accept: "application/json"
      }
    });
    let body = await response.json();
    if (!body.success) {
      if (body.message && body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async getGroupMembers(groupId) {
    let response = await fetch(
      `/services/game_statistics.php?action=groupMembers&groupId=${groupId}`,
      {
        method: "get",
        headers: {
          Accept: "application/json"
        }
      }
    );
    let body = await response.json();
    if (!body.success) {
      if (body.message && body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async getStudentInfo(username) {
    let response = await fetch(
      `/services/game_statistics.php?action=studentInfo&student=${username}`,
      {
        method: "get",
        headers: {
          Accept: "application/json"
        }
      }
    );
    let body = await response.json();
    if (!body.success) {
      if (body.message && body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async getLeaderboard() {
    let response = await fetch(
      "/services/game_statistics.php?action=leaderboard",
      {
        method: "get",
        headers: {
          Accept: "application/json"
        }
      }
    );
    let body = await response.json();
    if (!body.success) {
      if (body.message && body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async getGeneral() {
    let response = await fetch("/services/game_statistics.php?action=general", {
      method: "get",
      headers: {
        Accept: "application/json"
      }
    });
    let body = await response.json();
    if (!body.success) {
      if (body.message && body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  },
  async getAssignments() {
    let response = await fetch(
      "/services/game_statistics.php?action=getAssignments",
      {
        method: "get",
        headers: {
          Accept: "application/json"
        }
      }
    );
    let body = await response.json();
    if (!body.success) {
      if (body.message && body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  }
};
