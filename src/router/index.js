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
    path: '/demo',
    name: 'demo',
    component:Blank,
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
      {
        path: '3840_1080',
        name: '3840_1080',
        component: () => import('@/views/demo/3840_1080.vue')
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
