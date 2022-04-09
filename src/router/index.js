import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import BusinessNews from "@/views/BusinessNews.vue";
import DetailsNews from "@/views/DetailsNews.vue";
import EntertainmentNews from "@/views/EntertainmentNews.vue";
import HealthNews from "@/views/HealthNews.vue";
import SportsNews from "@/views/SportsNews.vue";
import TechnologyNews from "@/views/TechnologyNews.vue";
import ScienceNews from "@/views/ScienceNews.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "BusinessNews",
        component: BusinessNews,
      },
      {
        path: "/detail/:id",
        name: "DetailsNews",
        component: DetailsNews,
      },
      {
        path: "/entertainment",
        name: "EntertainmentNews",
        component: EntertainmentNews,
      },
      {
        path: "/health",
        name: "HealthNews",
        component: HealthNews,
      },
      {
        path: "/sports",
        name: "SportsNews",
        component: SportsNews,
      },
      {
        path: "/technology",
        name: "TechnologyNews",
        component: TechnologyNews,
      },
      {
        path: "/science",
        name: "ScienceNews",
        component: ScienceNews,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
