import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* element-ui */
import 'element-ui/lib/theme-chalk/index.css';

/* animate.css */
import animateCSS from '@/plugins/animate/animate.js'
Vue.prototype.$animateCSS = animateCSS;
/* 样式 */

import '@/styles/index.less'

/* filter */
import filters from './filters';
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

/* dayjs */
import "@/plugins/dayjs.js";

/* 配置文件 */
Vue.prototype.$config = window.$config
Vue.prototype.$layout = window.$layout

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
