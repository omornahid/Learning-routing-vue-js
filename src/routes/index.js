import { createRouter, createWebHashHistory } from "vue-router";
import HomeS from "../views/Home.vue";
import AboutA from "../views/About.vue";
import NotFound from "../views/NotFound.vue"
import JobS from "../views/JobS.vue"

const routes = [
  { path: "/", name: "home", component: HomeS },

  { path: "/about", name: "about", component: AboutA },
  { path: "/jobs", name: "jobs", component: JobS },
  { path: "/:catchAll(.*)", name: "notFound", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
