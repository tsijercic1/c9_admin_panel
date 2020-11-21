<template>
  <v-card>
    <v-card-title>Delete task</v-card-title>
    <v-card-subtitle>/{{ task.parent.name }}/{{ task.name }}</v-card-subtitle>
    <v-card-text>Are you sure you want to delete this task?</v-card-text>
    <v-card-actions>
      <v-btn @click="exit" :disabled="isProcessing">Cancel</v-btn>
      <v-btn @click="submit" :disabled="isProcessing">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { gameService } from "@/services";

export default {
  name: "DeleteTask",
  props: {
    task: Object,
    exit: Function,
    refresh: Function
  },
  data() {
    return {
      isProcessing: false
    };
  },
  methods: {
    async submit() {
      this.isProcessing = true;
      let body = await gameService.deleteTask(this.task.scrapedId);
      this.isProcessing = false;
      if (!body.success) {
        this.$notify({
          type: "bad",
          group: "main",
          title: "Delete task",
          text: `${body.message || "An error has occurred."}`
        });
        return false;
      }
      this.refresh();
      this.exit();
      this.$notify({
        type: "good",
        group: "main",
        title: "Delete task",
        text: `Task ${this.task.name} deleted.`
      });
    }
  },
  mounted() {
    this._keyListener = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.submit();
      } else if (e.key === "Escape") {
        e.preventDefault();
        this.exit();
      }
    };
    document.addEventListener('keydown', this._keyListener);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this._keyListener);
    this._keyListener = undefined;
  }
};
</script>

<style scoped></style>
