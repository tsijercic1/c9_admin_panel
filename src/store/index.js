import Vue from "vue";
import Vuex from "vuex";
import AuthStore from "./auth.store";
import CourseStore from "./course.store";
import AssignmentStore from "./assignment.store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    AuthStore,
    CourseStore,
    AssignmentStore
  }
});
