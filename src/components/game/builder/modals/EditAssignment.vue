<template>
  <v-card class="pa-5 px-8" dark>
    <h3 class="text-center mb-3">Edit assignment</h3>
    <v-form ref="form" v-model="valid">
      <v-text-field
        label="Name"
        v-model="name"
        required
        :rules="[notEmpty]"
      ></v-text-field>
      <v-text-field
        type="number"
        step="0.5"
        label="Points"
        v-model="points"
        :rules="[nonNegative]"
      ></v-text-field>
      <v-text-field
        type="number"
        step="0.5"
        label="Challenge points"
        v-model="challengePoints"
        :rules="[nonNegative]"
      ></v-text-field>
      <v-checkbox label="Active" v-model="active"></v-checkbox>
      <div class="d-flex justify-space-between mt-5">
        <v-btn @click="exit" :disabled="isProcessing">Cancel</v-btn>
        <v-btn @click="submit" :disabled="isProcessing">Update</v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
import { gameService } from "@/services";

export default {
  name: "EditAssignment",
  props: {
    assignment: Object,
    refresh: Function,
    exit: Function
  },
  data() {
    return {
      isProcessing: false,
      name: "",
      points: 0,
      challengePoints: 0,
      active: false,
      valid: true,
      notEmpty: v => (v || "").length > 0 || "This field cannot be empty",
      noSpaces: v => (v || "").indexOf(" ") < 0 || "No spaces are allowed",
      nonNegative: v => v >= 0 || "Number must not be negative"
    };
  },
  mounted() {
    this._keyListener = e => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.submit();
      } else if (e.key === "Escape") {
        e.preventDefault();
        this.exit();
      }
    };
    document.addEventListener("keydown", this._keyListener);
    console.log("Form Validation");
    console.log(this.valid);
    this.name = this.assignment.name;
    this.points = this.assignment.data.points;
    this.challengePoints = this.assignment.data.challengePoints;
    this.active = this.assignment.data.active;
  },
  methods: {
    async submit() {
      if (this.valid) {
        this.isProcessing = true;
        let body = await gameService.editAssignment({
          id: this.assignment.scrapedId,
          name: this.name,
          points: this.points,
          challengePoints: this.challengePoints,
          active: this.active
        });
        this.isProcessing = false;
        if (!body.success) {
          this.$notify({
            type: "bad",
            group: "main",
            title: "Edit assignment",
            text: `${body.message || "An error has occurred."}`
          });
          return false;
        }
        this.refresh();
        this.exit();
        this.$notify({
          type: "good",
          group: "main",
          title: "Edit assignment",
          text: `Assignment ${this.name} updated.`
        });
      }
    }
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this._keyListener);
    this._keyListener = undefined;
  }
};
</script>

<style scoped></style>
