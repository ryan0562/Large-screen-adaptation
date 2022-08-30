import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from '/public/config.js'

import '@/styles/index.less'


Vue.config.productionTip = false

Vue.prototype.$config = config
window.$config = config

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
