import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/styles/index.less'


Vue.config.productionTip = false


const config = window.$config
Vue.prototype.$config = window.$config = config
Vue.prototype.$layout = window.$layout = config.layout[config.useLayout]


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
