import Vue from 'vue'
import App from './App'
import ProgressBar from './components/ProgressBar.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

const bar = new Vue(ProgressBar).$mount()
Vue.prototype.$bar = bar;
document.body.appendChild(bar.$el)

new Vue({
  el: '#app',
  render: h => h(App)
})

