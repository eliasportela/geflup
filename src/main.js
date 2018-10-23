import Vue from 'vue'
import App from './App'
import router from './router'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCE7OTfxHLa7DBym0SpI4QGDf5iWThH4OQ',
    libraries: 'places'
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
