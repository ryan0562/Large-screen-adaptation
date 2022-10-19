
import Blank from '@/components/layout/Blank.vue'

const routes = [

  {
    path: '/',
    name: 'home',
    redirect: '/demo'
  },
  {
    path: '/settings',
    name: 'settings',
    component: Blank,
    children: [
      {
        path: '/settings/viewList',
        name: 'settings_viewList',
        component: () => import('@/views/settings/viewList.vue'),
      }
    ]
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/theme/main.vue'),
  },
  {
    path: '/bigscreen/designer',
    name: 'bigscreenDesigner',
    component: () => import('@/views/bigscreenDesigner/designer/index.vue'),
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

export default routes

