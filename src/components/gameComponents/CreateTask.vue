<template>
  <v-card class="pa-5 px-8" dark>
    <h3 class="text-center mb-3">Create task</h3>
    <v-form v-model="valid">
      <v-text-field label="Name" v-model="displayName" required :rules="[notEmpty]"></v-text-field>
      <v-text-field
          label="Filesystem name"
          v-model="name"
          :rules="[notEmpty,noSpaces]"
          required
      ></v-text-field>
      <v-select label="Category" v-model="selected" :items="categories" :rules="[isSelected]" item-text="name"
                return-object></v-select>
      <v-textarea label="Hint" v-model="hint"></v-textarea>
      <div class="d-flex justify-space-between mt-5">
        <v-btn @click="exit">Cancel</v-btn>
        <v-btn @click="create">Create</v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "CreateTask",
  props: {
    assignment: Object,
    categories: Array,
    refresh: Function,
    exit: Function
  },
  data() {
    return {
      valid: false,
      name: "",
      displayName: "",
      hint: "",
      selected: undefined,
      notEmpty: v => (v || '').length > 0 ||
          'This field cannot be empty',
      noSpaces: v => (v || '').indexOf(' ') < 0 ||
          'No spaces are allowed',
      isSelected: v => (v !== undefined) ||
          'Number must not be negative'
    };
  },
  methods: {
    async create() {
      if (this.valid) {
        console.log(this.selected);
        let response = await fetch(`/services/uup_game.php?action=createTask&assignmentId=${this.assignment.scrapedId}`, {
          method: "post",
          headers: {
            Accept: "application/json"
          },
          body: JSON.stringify({
            name: this.name,
            displayName: this.displayName,
            category: this.selected.id,
            hint: this.hint
          })
        });
        let body = await response.json();
        console.log(body);
        if (!body.success) {
          return false;
        }
        this.refresh();
        this.exit();
      }
    }
  }
};
</script>

<style scoped></style>
