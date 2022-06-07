import { createApp } from "vue";
import App from "./App.vue";

import axios from "axios";

axios.defaults.baseURL = "https://localhost:3000";

createApp(App).mount("#app");
