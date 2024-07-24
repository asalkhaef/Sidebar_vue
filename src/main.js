import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/pages/HomePage.vue";
import AboutPage from "./components/pages/AboutPage.vue";
import ContactPage from "./components/pages/ContactPage.vue";
import SettingPage from "./components/pages/SettingPage.vue";

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
createApp(App).use(route).mount("#app");
