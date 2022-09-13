import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* echarts */
import * as echarts from "echarts";
import 'echarts-liquidfill';
require('echarts/theme/macarons');
Vue.prototype.$echarts = echarts;


/* element-ui */
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui'
Vue.use(ElementUI)

/* animate.css */
import { animateCSS, switchDataArea } from '@/plugins/animate/animate.js'
Vue.prototype.$animateCSS = animateCSS;
Vue.prototype.$switchDataArea = switchDataArea;
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
