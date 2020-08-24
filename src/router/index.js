import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Layout from '@/layout';

const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          title: 'Dashboard',
          icon: 'dashboard'
        }
      }
      // {
      //   path: 'home',
      //   name: 'Home',
      //   component: () => import('@/views/home/index'),
      //   meta: {
      //     title: 'Home',
      //     icon: 'user'
      //   }
      // }
    ]
  },
  {
    path: '/test',
    name: 'Test',
    component: Layout,
    redirect: '/test/home',
    meta: {
      title: 'test',
      icon: 'example'
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: {
          title: 'Home',
          icon: 'user'
        }
      },
      {
        path: 'example',
        name: 'Example',
        component: () => import('@/views/example/index'),
        meta: {
          title: 'Example',
          icon: 'example'
        }
      }
    ]
  }
];

const createRouter = () =>
  new VueRouter({
    routes: constantRoutes
  });

const router = createRouter();

export default router;
