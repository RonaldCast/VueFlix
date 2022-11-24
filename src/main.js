import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createAuth0 } from "@auth0/auth0-vue";
import { store } from "./store/index";

//style configuration
import ElementPlus from "element-plus";
import "./assets/main.scss";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.use(
  createAuth0({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
    redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
  })
);
app.use(store)

app.mount("#app");
