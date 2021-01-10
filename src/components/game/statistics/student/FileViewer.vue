<template>
  <v-container>{{ content }} </v-container>
</template>

<script>
import { gameStatisticsService } from "@/services";

export default {
  name: "FileViewer",
  props: {
    student: typeof "string",
    path: typeof "string",
    isHistory: typeof false
  },
  data() {
    return {
      content: ""
    };
  },
  async mounted() {
    const body = await gameStatisticsService.getFileContent(
      this.student,
      this.path,
      this.isHistory
    );
    this.content = body.content;
  }
};
</script>

<style scoped></style>
