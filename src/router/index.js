import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'home',
    redirect:'/largeScreen-grid'
  },
  {
    path: '/largeScreen-grid',
    name: 'LargeScreen',
    component: ()=>import('@/views/LargeScreen.vue')
  },
  {
    path: '/largeScreen-flex',
    name: 'LargescreenFlex',
    component: ()=>import('@/views/LargeScreen-flex.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
