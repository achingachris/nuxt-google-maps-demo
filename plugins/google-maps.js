import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.NUXT_ENV_GOOGLE_MAPS,
    libraries: "places",
  },
});
