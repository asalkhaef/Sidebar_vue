import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import AboutPage from "./views/AboutPage.vue";
import ContactPage from "./views/ContactPage.vue";
import SettingPage from "./views/SettingPage.vue";

const route = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/team", component: AboutPage },
    { path: "/company", component: AboutPage },
    { path: "/farazin", component: AboutPage },
    { path: "/novaday", component: AboutPage },
    { path: "/contact", component: ContactPage },
    { path: "/settings", component: SettingPage },
    { path: "/profile", component: SettingPage },
    { path: "/security", component: SettingPage },
    { path: "/changepassword", component: SettingPage },
    { path: "/:NotFound(.*)", redirect: "/home" },
  ],
});

export default route;
