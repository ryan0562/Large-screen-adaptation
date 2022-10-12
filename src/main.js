import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from '@/utils/axios/request.js';

const compiler = require('vue-template-compiler')
import { parse } from "@vue/compiler-sfc";
import { genComponent } from "@/utils/sfc/parse.js";


// const compiler_sfc= require("vue/compiler-sfc");

/* echarts */
import * as echarts from "echarts";
import 'echarts-liquidfill';
require('echarts/theme/macarons');
Vue.prototype.$echarts = echarts;


/* element-ui */
// import 'element-ui/lib/theme-chalk/index.css';
// import ElementUI from 'element-ui'
// Vue.use(ElementUI, { size: 'small' })
Vue.prototype.$ELEMENT = { size: 'small' };

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
  url: ` http://10.168.4.28:17011/ng-onlineDesform/eng/formData/1579654289469607936?current=1&size=20&desFormCode=component_list`,
  method: 'GET',
});

list.data.records.forEach(async item => {
  const descriptorOB = parse(item.comCode);
  const cm = await genComponent(descriptorOB.descriptor, descriptorOB.errors, `wk-${item.code}`)
  Vue.component(item.code, { ...cm.component, _scopeId: `data-wk-${item.code}` })
})


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
