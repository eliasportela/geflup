import Vue from 'vue'
import App from './App'
import router from './router'

import VueChart from 'vuechart';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false;
Vue.component(VueChart.name, VueChart);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCE7OTfxHLa7DBym0SpI4QGDf5iWThH4OQ',
    libraries: 'places'
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
