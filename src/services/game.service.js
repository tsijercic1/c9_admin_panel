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
  async createTask({ id, name, displayName, category, hint }) {
    let response = await fetch(
      `/services/uup_game.php?action=createTask&assignmentId=${id}`,
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
  }
};
