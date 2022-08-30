import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'home',
  },
  {
    path: '/largeScreen-grid',
    name: 'LargeScreen',
    component: ()=>import('@/views/demo/LargeScreen-grid.vue')
  },
  {
    path: '/largeScreen-flex',
    name: 'LargescreenFlex',
    component: ()=>import('@/views/demo/LargeScreen-flex.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
