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
Vue.use(ElementUI, { size: 'small' })

/* animate.css */
import { animateCSS, switchDataArea, toggleFold, toggleClass } from '@/plugins/animate/animate.js'
Vue.prototype.$animateCSS = animateCSS;
Vue.prototype.$switchDataArea = switchDataArea;
Vue.prototype.$toggleFold = toggleFold;
Vue.prototype.$toggleClass = toggleClass;
/* 样式 */

import '@/styles/index.less'

/* filter */
import filters from './filters';
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

/* dayjs */
import "@/plugins/dayjs.js";
/* vue_ls */
import "@/plugins/vue_ls.js";

/* 配置文件 */
Vue.prototype.$config = window.$config
// Vue.prototype.$layout = window.$layout

/* 添加模块组件 */
import addModule from '@/components/addModule/addModule.vue'
Vue.component('addModule', addModule)

/* vue bus */
import Bus from '@/plugins/bus.js' //这是我的路径，正确引用你们的路径
Vue.prototype.$bus = Bus 

/* 组件库 */
import '@/components/modules/index.js'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
