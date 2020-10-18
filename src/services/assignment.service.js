export default {
  async getAssignments({id, external, year, name}, notify) {
    const response = await fetch(`/services/assignments.php?action=getAssignments&course_id=${id}${external ? "&X" : ""}&year=${year}`, {
      method: "get",
      headers: {
        Accept: "application/json"
      }
    });
    const body = await response.json();
    if (!body.success) {
      notify({
        type: "bad",
        group: "main",
        title: `Getting assignments for ${name}`,
        text: `${body.message || 'An error has occurred.'}`
      });
    }
    return body.data;
  },
  async convertAssignments({id, external, year, name}, notify) {
    const response = await fetch(`/services/assignments.php?action=updateAssignments&course_id=${id}${external ? "&X" : ""}&year=${year}`, {
      method: "get",
      headers: {
        Accept: "application/json"
      }
    });
    const body = await response.json();
    if (!body.success) {
      notify({
        type: "bad",
        group: "main",
        title: `Converting assignments for ${name}`,
        text: `${body.message || 'An error has occurred.'}`
      });
    }
    return body;
  },
  async createAssignment({id, external, year, name: courseName}, {path, name, displayName, type, hidden, homeworkId}, notify) {
    const url = `/services/assignments.php?action=createAssignment&course_id=${id}${external ? "&X" : ""}&year=${year}`;
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
    if (!body.success && notify) {
      notify({
        type: "bad",
        group: "main",
        title: `Creating assignment for ${courseName}`,
        text: `${body.message || 'An error has occurred.'}`
      });
    }
    return body;
  },
  async editAssignment({id, external, year, name: courseName}, {path, displayName, type, hidden, homeworkId}, notify) {
    const url = `/services/assignments.php?action=editAssignment&course_id=${id}${external ? "&X" : ""}&year=${year}`;
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
    if (!body.success && notify) {
      notify({
        type: "bad",
        group: "main",
        title: `Editing assignment for ${courseName}`,
        text: `${body.message || 'An error has occurred.'}`
      });
    }
    return body;
  },
  async deleteAssignment({id, external, year, name: courseName}, {path}, notify) {
    const url = `/services/assignments.php?action=deleteAssignment&course_id=${id}${external ? "&X" : ""}&year=${year}`;
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
    if (!body.success && notify) {
      notify({
        type: "bad",
        group: "main",
        title: `Deleting assignment for ${courseName}`,
        text: `${body.message || 'An error has occurred.'}`
      });
    }
    return body;
  },
  async getFileContent({id, external, year}, {path}, notify) {
    const url = `/services/assignments.php?action=getFileContent&course_id=${id}${external ? "&X" : ""}&year=${year}`;
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
    if (!body.success && notify) {
      notify({
        type: "bad",
        group: "main",
        title: `Getting content of ${path}`,
        text: `${body.message || 'An error has occurred.'}`
      });
    }
    return body;
  },
  async createFile({id, external, year}, {folderPath, name, show, binary, content}, notify) {
    const url = `/services/assignments.php?action=getFileContent&course_id=${id}${external ? "&X" : ""}&year=${year}`;
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
    if (!body.success && notify) {
      notify({
        type: "bad",
        group: "main",
        title: `Creating file ${folderPath+'/'+name}`,
        text: `${body.message || 'An error has occurred.'}`
      });
    }
    return body;
  },
  async editFile({id, external, year}, {path, content, show, binary}, notify) {
    const url = `/services/assignments.php?action=editFile&course_id=${id}${external ? "&X" : ""}&year=${year}`;
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
    if (!body.success && notify) {
      notify({
        type: "bad",
        group: "main",
        title: `Editing content of ${path}`,
        text: `${body.message || 'An error has occurred.'}`
      });
    }
    return body;
  },
  async deleteFile({id, external, year}, {path}, notify) {
    const url = `/services/assignments.php?action=deleteFile&course_id=${id}${external ? "&X" : ""}&year=${year}`;
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
    if (!body.success && notify) {
      notify({
        type: "bad",
        group: "main",
        title: `Deleting file ${path}`,
        text: `${body.message || 'An error has occurred.'}`
      });
    }
    return body;
  }
}