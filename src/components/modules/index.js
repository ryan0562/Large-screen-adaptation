/* 模拟组件库注册 */
import Vue from "vue";

Vue.component('aaa', () => import('@/components/modules/a.vue'))
Vue.component('bbb', () => import('@/components/modules/b.vue'))
Vue.component('ccc', () => import('@/components/modules/c.vue'))
Vue.component('realTimePolice', () => import('@/components/modules/realTimePolice/index.vue'))
Vue.component('myVideo', () => import('@/components/modules/video/video.vue'))
Vue.component('investment', () => import('@/components/modules/firstLevel/investment.vue'))
Vue.component('myImg', () => import('@/components/image/image.vue'))