export default {
  async getCourses() {
    const response = await fetch(`/services/courses.php`, {
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
  async getGroupsForCourse(course) {
    const url = `/services/courses.php?course_id=${course.id}${
      course.external ? "&X" : ""
    }&year=${course.year}&groups`;
    const response = await fetch(url, {
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
  async getMembersForGroupInCourse(group, course) {
    const response = await fetch(
      `/services/courses.php?course_id=${course.id}&group_id=${group.id}&members`,
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
  }
};
