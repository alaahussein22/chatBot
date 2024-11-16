import { createRouter, createWebHistory } from "vue-router";
import HomeComponents from "@/modules/home/pages/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeComponents,
    },
  ],
});

export default router;
