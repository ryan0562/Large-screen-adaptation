// import store from '@/store/index.js'

import Vue from 'vue'
import VueRouter from 'vue-router'
import list from './list.js'


Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: list
})

import {getTemplateList} from '@/api/template.js'





let firstTime = true;
router.beforeEach(async (to, from, next) => {

  // 页面标题
  // document.title = to.meta.title




  // 不需要加载前置接口与权限的
  // if (['/cropper'].includes(to.path)) {
  //   next()
  //   return
  // }

  // 初次打开
  if (firstTime) {
    firstTime = false
    await Promise.all([
      // 页面打开前置数据请求放在这里
      getTemplateList(),
    ])
    debugger
    // 菜单跟权限 
    next({ ...to, replace: true }) // hack方法 确保addRoutes已完成


    return
  }

  next()
})

router.afterEach((to, from) => {
  // 
})


export default router