import Vue from 'vue'
import VueRouter from 'vue-router'
import Blank from '@/components/Blank.vue'

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
    children: [
      {
        path: '',
        name: 'demo',
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
