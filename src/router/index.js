import Vue from "vue";
import VueRouter from "vue-router";

import NotFound from "../views/NotFound";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
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
    component: () => import("@/views/About")
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/courses",
    name: "Courses",
    component: () => import("@/views/Courses")
  },
  {
    path: "/courses/:course_id",
    name: "Course",
    component: () => import("@/views/Course")
  },
  {
    path: "/courses/:course_id/groups/:group_id",
    name: "Group",
    component: () => import("@/views/Group")
  },
  {
    path: "/assignments/:course_id",
    name: "Assignments",
    component: () => import("@/views/Assignment")
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: () => import("@/views/Statistics")
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
  if (
    store.getters.roles.includes("sysadmin") ||
    store.getters.roles.includes("admin")
  ) {
    if (to.name !== "Login" && !store.getters.isAuthenticated) {
      next(Login);
    } else next();
  } else if (
    store.getters.roles.includes("game-spectators") &&
    (to.name === "Login" || to.name === "Dashboard")
  ) {
    if (to.name !== "Login" && !store.getters.isAuthenticated) {
      next(Login);
    } else next();
  } else {
    next(Login);
  }
});

document.addEventListener("logout", async () => {
  if (router.currentRoute.path !== "/login") {
    await router.push("/login");
  }
});

export default router;
