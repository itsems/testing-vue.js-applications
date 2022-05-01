import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import ProgressBar from './components/ProgressBar.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import storeConfig from './store/store-config'
import Router from 'vue-router'
import routerConfig from './router/router-config'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.use(Vuex);
const store = new Vuex.Store(storeConfig)

Vue.use(Router)
const router = new Router(routerConfig)

const bar = new Vue(ProgressBar).$mount()
Vue.prototype.$bar = bar
document.body.appendChild(bar.$el)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

