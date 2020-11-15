<template>
  <v-container>
    <v-data-table
        @mouseover.native="registerListener()"
        @mouseleave.native="removeListener()"
        id="groupsTable"
        :headers="headers"
        :items="groups"
        group-by="course"
        hide-default-footer
        :items-per-page="groups.length"
        @click:row="groupClicked"
    >
    </v-data-table>
  </v-container>
</template>

<script>
import {gameStatisticsService} from "@/services";

export default {
  name: "Groups",
  data() {
    return {
      headers: [],
      groups: [],
      registered: false
    }
  },
  async mounted() {
    const body = await gameStatisticsService.getGroups();
    this.headers = [{text: 'ID', value: 'id'}, {text: 'Name', value: 'name'}, {text: 'Course', value: 'course'}];
    if (body.success === true) {
      this.groups = body.data;
    }
  },
  methods: {
    groupClicked(group) {
      console.log(group);
      this.$router.push(`/game/group?groupId=${group.id}`);
    },
    keyListener(x) {
      console.log(x);
    },
    registerListener() {
      if (!this.registered) {
        console.log("REGISTERED");
        this.registered = true;
        window.addEventListener("keydown", this.keyListener);
      }
    },
    removeListener() {
      console.log("UNREGISTERED");
      this.registered = false;
      window.removeEventListener("keydown", this.keyListener);
    }
  }
}
</script>

<style scoped>

</style>