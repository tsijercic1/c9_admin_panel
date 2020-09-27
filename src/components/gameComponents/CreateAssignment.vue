<template>
  <v-card class="pa-5 px-8" dark>
    <h3 class="text-center mb-3">Create assignment</h3>
    <v-form v-model="valid">
      <v-text-field label="Name" v-model="displayName" required :rules="[notEmpty]"></v-text-field>
      <v-text-field
          label="Filesystem name"
          v-model="name"
          required
          :rules="[notEmpty,noSpaces]"
      ></v-text-field>
      <v-text-field label="Points" v-model="points" :rules="[notEmpty,noSpaces,positive]"></v-text-field>
      <v-text-field label="Challenge points" v-model="challengePoints" :rules="[notEmpty,noSpaces,positive]"></v-text-field>
      <v-checkbox label="Active" v-model="active"></v-checkbox>
      <div class="d-flex justify-space-between mt-5">
        <v-btn @click="exit" :disabled="isProcessing">Cancel</v-btn>
        <v-btn @click="create" :disabled="isProcessing">Create</v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "CreateAssignment",
  props: {
    refresh: Function,
    exit: Function
  },
  data() {
    return {
      isProcessing: false,
      name: "",
      displayName: "",
      active: true,
      points: 0,
      challengePoints: 0,
      valid: false,
      notEmpty: v => (v || '').length > 0 ||
          'This field cannot be empty',
      noSpaces: v => (v || '').indexOf(' ') < 0 ||
          'No spaces are allowed',
      positive: v => (v || -1) > 0 ||
          'Number must not be negative'
    };
  },
  methods: {
    async create() {
      if(this.valid) {
        this.isProcessing = true;
        let response = await fetch("/services/uup_game.php?action=createAssignment", {
          method: "post",
          headers: {
            Accept: "application/json"
          },
          body: JSON.stringify({
            name: this.name,
            displayName: this.displayName,
            points: this.points,
            challengePoints: this.challengePoints,
            active: this.active
          })
        });
        let body = await response.json();
        this.isProcessing = false;
        if (!body.success) {
          this.$notify({
            type: "bad",
            group: "main",
            title: "Create assignment",
            text: `${body.message || 'An error has occurred.'}`
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

<style scoped>

</style>