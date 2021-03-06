import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/posts",
      name: "posts",
      component: () => import("./views/Posts")
    },
    {
      path: '/posts/create',
      component: () => import('./views/Create')
    },
    {
      path: '/posts/edit/:id',
      component: () => import('./views/Edit')
    }
  ]
});
