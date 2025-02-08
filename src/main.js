import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Certifique-se de que o arquivo router.js existe na pasta src

const app = createApp(App);
app.use(router);
app.mount("#app");
