export default {
  async getAssignments({ id, external, year }) {
    const response = await fetch(
      `/services/assignments.php
      ?action=getAssignments
      &course_id=${id}${external ? "&X" : ""}
      &year=${year}`,
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
  async convertAssignments({ id, external, year }) {
    const response = await fetch(
      `/services/assignments.php
      ?action=updateAssignments
      &course_id=${id}${external ? "&X" : ""}
      &year=${year}`,
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
  async createAssignment(
    { id, external, year },
    { path, name, displayName, type, hidden, homeworkId }
  ) {
    const url = `/services/assignments.php
      ?action=createAssignment
      &course_id=${id}${external ? "&X" : ""}
      &year=${year}`;
    const response = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json"
      },
      body: JSON.stringify({
        path,
        name,
        displayName,
        type,
        hidden,
        homeworkId
      })
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
  async editAssignment(
    { id, external, year },
    { path, displayName, type, hidden, homeworkId }
  ) {
    const url = `/services/assignments.php
      ?action=editAssignment
      &course_id=${id}${external ? "&X" : ""}
      &year=${year}`;
    const response = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json"
      },
      body: JSON.stringify({
        path,
        displayName,
        type,
        hidden,
        homeworkId
      })
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
  async deleteAssignment({ id, external, year }, { path }) {
    const url = `/services/assignments.php?action=deleteAssignment&course_id=${id}${
      external ? "&X" : ""
    }&year=${year}`;
    const response = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json"
      },
      body: JSON.stringify({
        path
      })
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
  async getFileContent({ id, external, year }, { path }) {
    const url = `/services/assignments.php
      ?action=getFileContent
      &course_id=${id}${external ? "&X" : ""}
      &year=${year}`;
    const response = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json"
      },
      body: JSON.stringify({
        path
      })
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
  async createFile(
    { id, external, year },
    { folderPath, name, show, binary, content }
  ) {
    const url = `/services/assignments.php?action=getFileContent&course_id=${id}${
      external ? "&X" : ""
    }&year=${year}`;
    const response = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json"
      },
      body: JSON.stringify({
        folderPath,
        name,
        show,
        binary,
        content
      })
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
  async editFile({ id, external, year }, { path, content, show, binary }) {
    const url = `/services/assignments.php?action=editFile&course_id=${id}${
      external ? "&X" : ""
    }&year=${year}`;
    console.log(content);
    const response = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json"
      },
      body: JSON.stringify({
        path,
        content,
        show,
        binary
      })
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
  async deleteFile({ id, external, year }, { path }) {
    const url = `/services/assignments.php?action=deleteFile&course_id=${id}${
      external ? "&X" : ""
    }&year=${year}`;
    const response = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json"
      },
      body: JSON.stringify({
        path
      })
    });
    const body = await response.json();
    if (!body.success) {
      if (body.message.includes("logged")) {
        const event = new Event("logout");
        document.dispatchEvent(event);
      }
    }
    return body;
  }
};
