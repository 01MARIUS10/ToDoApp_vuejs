import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { BootstrapVue3 } from "bootstrap-vue-3";
import router from "./router";

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@vuepic/vue-datepicker/dist/main.css";

const app = createApp(App);
app.use(BootstrapVue3);
app.use(router);
// app.use(IconsPlugin);
app.use(createPinia());
app.mount("#app");
