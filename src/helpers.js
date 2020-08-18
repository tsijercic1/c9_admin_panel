export default {
  getFullCourseId(course) {
    return (course.external?"X":"") + course.id + "_" + course.year;
  }
};