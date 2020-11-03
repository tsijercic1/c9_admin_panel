import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Notifications from "vue-notification";

Vue.use(Notifications);

Vue.config.productionTip = false;
let app = undefined;
(async function() {
  await store.dispatch("refresh");

  app = new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount("#app");

  store.app = app;
  store.$notify = app.$notify;
})();
