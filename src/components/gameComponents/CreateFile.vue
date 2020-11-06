<template>
  <v-card class="pa-5 px-8" dark>
    <v-card-title>Create file</v-card-title>
    <v-form v-model="valid">
      <v-text-field
        label="Name"
        v-model="name"
        :rules="[notEmpty]"
      ></v-text-field>
      <v-checkbox label="Show" v-model="show"></v-checkbox>
      <v-checkbox label="Binary" v-model="binary"></v-checkbox>
    </v-form>
    <v-card-actions>
      <v-btn @click="exit" :disabled="isProcessing">Cancel</v-btn>
      <v-btn @click="create" :disabled="isProcessing">Create</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { gameService } from "@/services";

export default {
  name: "CreateFile",
  props: {
    task: Object,
    refresh: Function,
    exit: Function
  },
  data() {
    return {
      isProcessing: false,
      valid: false,
      binary: false,
      show: true,
      notEmpty: v => (v || "").length > 0 || "This field cannot be empty"
    };
  },
  methods: {
    async create() {
      if (this.valid) {
        this.isProcessing = true;
        let body = await gameService.createFile({
          taskId: this.task.scrapedId,
          name: this.name,
          show: this.show,
          binary: this.binary,
          content: ""
        });
        this.isProcessing = false;
        if (!body.success) {
          this.$notify({
            type: "bad",
            group: "main",
            title: "Create file",
            text: `${body.message || "An error has occurred."}`
          });
          return false;
        }
        this.refresh();
        this.exit();
        this.$notify({
          type: "good",
          group: "main",
          title: "Create file",
          text: `File ${this.name} created.`
        });
      }
    }
  }
};
</script>

<style scoped></style>
