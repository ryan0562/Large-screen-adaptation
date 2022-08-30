import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from '/public/config.js'

import '@/styles/index.less'


Vue.config.productionTip = false

Vue.prototype.$config = window.$config = config

Vue.prototype.$layout = window.$config = config.layout[config.useLayout]


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
