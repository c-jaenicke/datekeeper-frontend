import { createRouter, createWebHashHistory } from "vue-router";
import AnstehendeEventsView from "@/views/AnstehendeEventsView.vue";
import AboutView from "@/views/AboutView.vue";
import KalenderView from "@/views/KalenderView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import PrivacyView from "@/views/PrivacyView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AnstehendeEventsView,
    },
    {
      path: "/calendar",
      name: "calendar",
      component: KalenderView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/privacy",
      name: "privacy",
      component: PrivacyView,
    },
    {
      path: "/404",
      component: NotFoundView,
    },
    {
      path: "/:catchAll(.*)",
      component: NotFoundView,
    },
  ],
});

export default router;
