<template>
  <div id="v-sticky-sidebar">
    <slot></slot>
  </div>
</template>

<script>
import StickySidebar from "sticky-sidebar-v2";

export default {
  name: "v-sticky-sidebar",
  data: () => ({
    sidebar: undefined
  }),
  props: ["config"],
  mounted() {
    console.log(this.config);
    this.sidebar = new StickySidebar("#v-sticky-sidebar", {
      ...this.config
    });
  }
}
</script>

<style scoped>

</style>