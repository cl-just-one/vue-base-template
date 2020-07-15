import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'

const constantRoutes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/404')
  },
  {
    path: '/',
    component: Layout
  }
]

const createRouter = () => new VueRouter({
  routes: constantRoutes
})

const router = createRouter()

export default router