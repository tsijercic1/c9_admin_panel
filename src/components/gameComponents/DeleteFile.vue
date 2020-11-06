<template>
  <v-card>
    <v-card-title>Delete file</v-card-title>
    <v-card-subtitle
      >/{{ task.parent.name }}/{{ task.name }}/{{ file.name }}</v-card-subtitle
    >
    <v-card-text>Are you sure you want to delete this file?</v-card-text>
    <v-card-actions>
      <v-btn @click="exit" :disabled="isProcessing">Cancel</v-btn>
      <v-btn @click="submit" :disabled="isProcessing">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { gameService } from "@/services";

export default {
  name: "DeleteFile",
  props: {
    task: Object,
    file: Object,
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
      let body = await gameService.deleteFile({
        taskId: this.task.scrapedId,
        filename: this.file.name
      });
      this.isProcessing = false;
      if (!body.success) {
        this.$notify({
          type: "bad",
          group: "main",
          title: "Delete file",
          text: `${body.message || "An error has occurred."}`
        });
        return false;
      }
      this.refresh();
      this.exit();
      this.$notify({
        type: "good",
        group: "main",
        title: "Delete file",
        text: `File ${this.name} deleted.`
      });
    }
  }
};
</script>

<style scoped></style>
