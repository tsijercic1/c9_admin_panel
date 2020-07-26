import Vue from "vue";
import VueRouter from "vue-router";

import NotFound from "../views/NotFound";
import Dashboard from "../views/Dashboard";
import About from "../views/About";
import Login from "../views/Login";
import Courses from "../views/Courses";
import Course from "../views/Course";
import Statistics from "../views/Statistics";
import Group from "../views/Group";
import store from "../store/index";

Vue.use(VueRouter);
const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
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
  },
  {
    path: "/courses/:course_id",
    name: "Course",
    component: Course
  },
  {
    path: "/courses/:course_id/groups/:group_id",
    name: "Group",
    component: Group
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: Statistics
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !store.getters.isAuthenticated) {
    next(Login);
  } else next();
});

export default router;
