<template>
  <v-card class="pa-5 px-8" dark>
    <h3 class="text-center mb-3">Create assignment</h3>
    <v-form v-model="valid">
      <v-text-field
        label="Name"
        v-model="displayName"
        required
        :rules="[notEmpty]"
      ></v-text-field>
      <v-text-field
        label="Filesystem name"
        v-model="name"
        required
        :rules="[notEmpty, noSpaces]"
      ></v-text-field>
      <v-checkbox label="Hidden" v-model="hidden"></v-checkbox>
      <v-select return-object :items="types" v-model="selectedType" />
      <v-text-field
        v-if="selectedType !== undefined && selectedType === 'homework'"
        label="Homework ID"
        v-model="homeworkId"
      ></v-text-field>
      <div class="d-flex justify-space-between mt-5">
        <v-btn @click="exit" :disabled="isProcessing">Cancel</v-btn>
        <v-btn @click="create" :disabled="isProcessing">Create</v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
import { assignmentService } from "@/services";

export default {
  name: "CreateAssignment",
  props: {
    path: typeof "",
    course: Object,
    refresh: Function,
    exit: Function
  },
  data() {
    return {
      homeworkId: undefined,
      hidden: false,
      selectedType: "tutorial",
      types: ["tutorial", "homework", "independent", "exam", "folder", "task"],
      isProcessing: false,
      name: "",
      displayName: "",
      valid: false,
      notEmpty: v => (v || "").length > 0 || "This field cannot be empty",
      noSpaces: v => (v || "").indexOf(" ") < 0 || "No spaces are allowed",
      positive: v => (v || -1) > 0 || "Number must not be negative"
    };
  },
  methods: {
    async create() {
      console.log(this.selectedType);
      console.log(this.name);
      console.log(this.displayName);
      console.log(this.homeworkId);
      console.log(this.hidden);
      if (this.valid) {
        this.isProcessing = true;
        console.log(this.path);
        console.log(this.course);
        const body = await assignmentService.createAssignment(this.course, {
          path: this.path,
          name: this.name,
          displayName: this.displayName,
          type: this.selectedType,
          hidden: this.hidden,
          homeworkId: this.homeworkId
        });
        this.isProcessing = false;
        if (!body.success) {
          console.log(body);
          this.$notify({
            type: "bad",
            group: "main",
            title: "Create assignment",
            text: `${body.message || "An error has occurred."}`
          });
          return false;
        }
        this.refresh();
        this.exit();
        this.$notify({
          type: "good",
          group: "main",
          title: "Create assignment",
          text: `Assignment ${this.displayName} created.`
        });
      }
    }
  }
};
</script>

<style scoped></style>
