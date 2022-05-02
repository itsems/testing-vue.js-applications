import Vue from 'vue'
import { titleMixin } from './src/util/mixins'
import { timeAgo, host } from './src/util/filters'
import { uppercase } from './src/util/uppercase'

Vue.config.productionTip = false
Vue.mixin(titleMixin)

Vue.filter('timeAgo', timeAgo)
Vue.filter('host', host)
Vue.filter('uppercase', uppercase)