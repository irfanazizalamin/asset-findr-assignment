import { createApp } from "vue";
import "./style.css";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "vuetify/styles";

const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
  icons: {
    defaultSet: "mdi",
  },
});

createApp(App)
  .use(vuetify)
  .use(router)
  .use(createPinia().use(piniaPluginPersistedstate))
  .mount("#app");
