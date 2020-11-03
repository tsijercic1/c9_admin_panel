<template>
  <v-container>
    <v-card>
      <v-card-title> </v-card-title>
      <v-row>
        <v-col cols="12">
          <v-card> </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "AutotestEditor",
  props: ["autotest"],
  computed: {
    tests() {
      return this.autotest.test_specifications;
    }
  }
};
</script>

<style scoped></style>
