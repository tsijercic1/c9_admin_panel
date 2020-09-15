export default {
  recursiveIdAddition(node, counter) {
    if (!this.hasKey(node, "id")) {
      node.id = node.name + "_" + counter.value;
      counter.value = counter.value + 1;
      if (this.hasKey(node, "children")) {
        for (let child of node.children) {
          this.recursiveIdAddition(child, counter);
        }
      }
    } else if (this.hasKey(node, "children")) {
      for (let child of node.children) {
        this.recursiveIdAddition(child, counter);
      }
    }
  },
  hasKey(object, key) {
    return {}.hasOwnProperty.call(object, key);
  },
  getFullCourseId(course) {
    return (course.external ? "X" : "") + course.id + "_" + course.year;
  },
  tweakAssignmentTree(assignmentTree) {
    let counter = {
      value: 1
    };
    this.recursiveIdAddition(assignmentTree, counter);
    return assignmentTree;
  }
};