<template style="width: 80vw;height: 80vh">
  <v-card tile height="100%" width="100%">
    <iframe
      id="generator-frame"
      :src="autotestSrc"
      width="100%"
      height="100%"
    ></iframe>
  </v-card>
</template>

<script>
export default {
  name: "GeneratorFrame",
  props: {
    config: typeof "",
    save: Function
  },
  data() {
    return {
      autotestSrc:
        window.location.origin + "/static/js/autotest-genv2/html/index.html"
    };
  },
  created() {
    window.localStorage.setItem(".autotest-content", this.config);
  },
  mounted() {
    const frame = document.getElementById("generator-frame")?.contentWindow;
    if (frame) {
      frame.localStorage.setItem(".autotest-content", this.config);
    }
    this.registerListener();
  },
  methods: {
    registerListener() {
      const button = document
        .getElementById("generator-frame")
        ?.contentWindow.document.getElementById("export-button");
      if (button === null || button === undefined) {
        setTimeout(() => {
          this.registerListener();
        }, 1000);
      } else {
        button.addEventListener("click", () => {
          this.saveClicked();
        });
      }
    },
    saveClicked() {
      this.save(localStorage.getItem(".autotest-content"));
    }
  }
};
</script>

<style scoped></style>
