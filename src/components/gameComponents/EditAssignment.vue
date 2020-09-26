<template>
  <v-card class="pa-5 px-8" dark>
    <h3 class="text-center mb-3">Edit assignment</h3>
    <form>
      <v-text-field label="Name" v-model="name" required></v-text-field>
      <v-text-field label="Points" v-model="points"></v-text-field>
      <v-text-field label="Challenge points" v-model="challengePoints"></v-text-field>
      <v-checkbox label="Active" v-model="active"></v-checkbox>
      <div class="d-flex justify-space-between mt-5">
        <v-btn @click="exit">Cancel</v-btn>
        <v-btn @click="submit">Update</v-btn>
      </div>
    </form>
  </v-card>
</template>

<script>
export default {
name: "EditAssignment",
  props: {
    assignment: Object,
    refresh: Function,
    exit: Function
  },
  data() {
    return {
      name: "",
      points: 0,
      challengePoints: 0,
      active: false,
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
    this.name = this.assignment.name;
    this.points = this.assignment.data.points;
    this.challengePoints = this.assignment.data.challengePoints;
    this.active = this.assignment.data.active;
  },
  methods: {
    async submit() {
      if(this.valid) {
        let response = await fetch(`/services/uup_game.php?action=editAssignment?assignmentId=${this.assignment.scrapedId}`, {
          method: "post",
          headers: {
            Accept: "application/json"
          },
          body: JSON.stringify({
            name: this.name,
            points: this.points,
            challengePoints: this.challengePoints,
            active: this.active
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

<style scoped>

</style>