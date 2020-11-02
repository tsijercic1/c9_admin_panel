<template>
  <v-card>
    <v-card-title>Delete assignment</v-card-title>
    <v-card-subtitle>{{ assignment.name }} ({{ assignment.path }})</v-card-subtitle>
    <v-card-text>Are you sure you want to delete this task?</v-card-text>
    <v-card-actions>
      <v-btn @click="exit" :disabled="isProcessing">Cancel</v-btn>
      <v-btn @click="submit" :disabled="isProcessing">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {assignmentService} from "@/services";

export default {
  name: "DeleteAssignment",
  props: {
    course: Object,
    assignment: Object,
    refresh: Function,
    exit: Function
  },
  data() {
    return {
      isProcessing: false
    };
  },
  methods: {
    async submit() {
      this.isProcessing = true;
      const body = await assignmentService.deleteAssignment(this.course, this.assignment);
      this.isProcessing = false;
      if (!body.success) {
        this.$notify({
          type: "bad",
          group: "main",
          title: "Delete assignment",
          text: `${body.message || 'An error has occurred.'}`
        });
        return false;
      }
      this.refresh();
      this.exit();
      this.$notify({
        type: "good",
        group: "main",
        title: "Delete assignment",
        text: `Assignment ${this.assignment.name} deleted.`
      });
    }
  }
}
</script>

<style scoped>

</style>