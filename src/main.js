import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import ContactPage from "./components/ContactPage.vue";
import SettingPage from "./components/SettingPage.vue";

const route = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/contact", component: ContactPage },
    { path: "/setting", component: SettingPage },
  ],
});
createApp(App).use(route).mount("#app");
