<template>
  <v-card class="pa-5 px-8" dark>
    <h3 class="text-center mb-3">Edit assignment</h3>
    <v-form v-model="valid">
      <v-text-field label="Name" v-model="displayName" required :rules="[notEmpty]"></v-text-field>
      <v-checkbox label="Hidden" v-model="hidden"></v-checkbox>
      <v-select return-object :items="types" v-model="selectedType"/>
      <v-text-field v-if="selectedType!==undefined&&selectedType==='homework'" label="Homework ID"
                    v-model="homeworkId"></v-text-field>
      <div class="d-flex justify-space-between mt-5">
        <v-btn @click="exit" :disabled="isProcessing">Cancel</v-btn>
        <v-btn @click="update" :disabled="isProcessing">Update</v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
import {assignmentService} from "@/services";

export default {
  name: "EditAssignment",
  props: {
    assignment: Object,
    course: Object,
    refresh: Function,
    exit: Function
  },
  data() {
    return {
      homeworkId: undefined,
      hidden: false,
      selectedType: "tutorial",
      types: ["tutorial", "homework", "independent", "exam", "folder","task"],
      isProcessing: false,
      displayName: "",
      valid: false,
      notEmpty: v => (v || '').length > 0 ||
          'This field cannot be empty',
      noSpaces: v => (v || '').indexOf(' ') < 0 ||
          'No spaces are allowed',
      positive: v => (v || -1) > 0 ||
          'Number must not be negative'
    };
  },
  mounted() {
    this.displayName = this.assignment.name;
    this.selectedType = this.assignment.type;
    this.hidden = this.assignment.hidden;
    this.homeworkId = this.assignment.homeworkId;
  },
  methods: {
    async update() {
      console.log(this.selectedType);
      console.log(this.name);
      console.log(this.displayName);
      console.log(this.homeworkId);
      console.log(this.hidden);
      if (this.valid) {
        this.isProcessing = true;
        console.log(this.path);
        console.log(this.course);
        const body = await assignmentService.editAssignment(this.course,{
          path: this.path,
          displayName: this.displayName,
          type: this.selectedType,
          hidden: this.hidden,
          homeworkId: this.homeworkId
        });
        this.isProcessing = false;
        console.log(body);
        if (!body.success) {
          this.$notify({
            type: "bad",
            group: "main",
            title: "Edit assignment",
            text: `${body.message || 'An error has occurred.'}`
          });
          return false;
        }
        this.refresh();
        this.exit();
        this.$notify({
          type: "good",
          group: "main",
          title: "Edit assignment",
          text: `Assignment ${this.displayName} updated.`
        });
      }
    }
  }
};
</script>

<style scoped>

</style>