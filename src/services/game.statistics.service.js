export default {
  async getGroups() {
    let response = await fetch("/services/game_statistics.php?action=groups", {
      method: "get",
      headers: {
        Accept: "application/json"
      }
    });
    let body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
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
      if (body.message.includes("logged")) {
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
      if (body.message.includes("logged")) {
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
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  }
};
