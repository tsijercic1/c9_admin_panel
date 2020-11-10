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
    path: "/game",
    name: "Game",
    component: () => import("@/views/Game")
  },
  {
    path: "/game/builder",
    name: "GameBuilder",
    component: () => import("@/components/GameBuilder")
  },
  {
    path: "/game/statistics",
    name: "GameStatistics",
    component: () => import("@/components/GameStatistics")
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

router.beforeEach(async (to, from, next) => {
  if (to.name === "Login") {
    next();
  }
  console.log("TO");
  console.log(to);
  console.log("FROM");
  console.log(from);
  console.log("NEXT");
  console.log(next);
  const isAuthenticated = store.getters.isAuthenticated;
  if (isAuthenticated === undefined) {
    console.log("UNDEFINED")
  }
  console.log(isAuthenticated);
  if (store.getters.isAuthenticated) {
    console.log("IS AUTHENTICATED");
    if (
      store.getters.roles.includes("game-spectators") &&
      (["Login", "Dashboard", "Game", "GameStatistics"].includes(to.name))
    ) {
      console.log("SPECTaTOR");
      next();
    } else if(store.getters.roles.includes("admin")||store.getters.roles.includes("sysadmin")) {
      console.log("ADMIN");
      next();
    } else {
      console.log("RESET STATE");
      store.actions.dispatch("resetState");
      await fetch("/services/logout.php");
      next(Login);
    }
  } else {
    console.log("ELSE --- LOGIN");
    next(Login);
  }
});

document.addEventListener("logout", async () => {
  if (router.currentRoute.path !== "/login") {
    store.actions.dispatch("resetState");
    await fetch("/services/logout.php");
    await router.push("/login");
  }
});

export default router;
