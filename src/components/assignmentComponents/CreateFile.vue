<template>
  <v-card class="pa-5 px-8" dark>
    <v-card-title>Create file</v-card-title>
    <v-form v-model="valid">
      <v-text-field label="Name" v-model="name" :rules="[notEmpty]"></v-text-field>
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
import {assignmentService} from "@/services";

export default {
  name: "CreateFile",
  props: {
    exit: Function,
    refresh: Function,
    course: Object,
    assignment: Object
  },
  data() {
    return {
      isProcessing: false,
      valid: false,
      binary: false,
      show: true,
      name: "",
      notEmpty: v => (v || '').length > 0 ||
          'This field cannot be empty'
    };
  },
  methods: {
    async create() {
      if (this.valid) {
        this.isProcessing = true;
        console.log("PATH: " + this.path);
        let body = await assignmentService.createFile(this.course, {
          folderPath: this.assignment.path,
          name: this.name,
          binary: this.binary,
          show: this.show,
          content: ""
        });
        this.isProcessing = false;
        console.log(body);
        if (!body.success) {
          this.$notify({
            type: "bad",
            group: "main",
            title: "Create file",
            text: `${body.message || 'An error has occurred.'}`
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
}
</script>

<style scoped>

</style>