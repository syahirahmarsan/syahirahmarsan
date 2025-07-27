import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueScrollTo from 'vue-scrollto'
import VueObserveVisibility from 'vue-observe-visibility'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(BootstrapVue)
Vue.use(VueScrollTo)
Vue.use(VueObserveVisibility)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')