import Vue from 'vue'
import VueRouter from 'vue-router'
import Blank from '@/components/layout/Blank.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    redirect: '/demo'
  },
  {
    path: '/mainBox',
    name: 'mainBox',
    component: () => import('@/views/theme/main.vue'),
    children: [
      {
        path: '/main',
        name: 'main',
        components: {
          huagong: () => import('@/views/theme/huagong/index.vue'),
          anbao: () => import('@/views/theme/anbao/index.vue'),
        }
      }
    ]
  },
  {
    path: '/demo',
    name: 'demo',
    component: Blank,
    redirect: '/demo/menu',
    children: [
      {
        path: 'menu',
        name: 'demoMenu',
        component: () => import('@/views/demo/index.vue'),
      },
      {
        path: 'largeScreen-grid',
        name: 'LargeScreen',
        component: () => import('@/views/demo/LargeScreen-grid.vue')
      },
      {
        path: 'largeScreen-flex',
        name: 'LargescreenFlex',
        component: () => import('@/views/demo/LargeScreen-flex.vue')
      },
    ]
  },


]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
