import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from '@/utils/axios/request.js';


/* echarts */
import * as echarts from "echarts";
import 'echarts-liquidfill';
require('echarts/theme/macarons');
Vue.prototype.$echarts = echarts;


/* element-ui */
// import 'element-ui/lib/theme-chalk/index.css';
// import ElementUI from 'element-ui'
// Vue.use(ElementUI, { size: 'small' })
Vue.prototype.$ELEMENT = { size: 'small'};

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
import ls from "@/plugins/vue_ls.js";
Vue.prototype.$ls = ls

/* 配置文件 */
Vue.prototype.$config = window.$config


/* 添加模块组件 */
import addModule from '@/components/addModule/addModule.vue'
Vue.component('addModule', addModule)

const list = await request({
  baseURL: '',
  url: `/components/api.json`,
  method: 'GET',
});

list.data.records.forEach(item => {
  // const blob = new Blob([item.comCode], {
  //   type: "text/plain;charset=utf-8"
  // })
  // const objectURL = URL.createObjectURL(blob)
  // const cm = import(objectURL)

  Vue.component(item.code, item.comCode)
})

var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
console.log(new Profile());

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
