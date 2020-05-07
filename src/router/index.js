import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "../views/Dashboard";
import About from "../views/About";
import Login from "../views/Login";
import Courses from "../views/Courses";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
