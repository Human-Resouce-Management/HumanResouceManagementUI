import { createRouter, createWebHistory } from 'vue-router'
import layout1 from '../components/layout/layout1.vue'
import login from '../components/LoginView/login.vue'

import Cookies from 'js-cookie';
import HomeView from '../views/AboutView.vue'
import LoginView from '../views/Auth/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: layout1,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: '',
          component: HomeView,
        },
        // Other routes using default layout...
      ],
    },
    {
      path: '/Auth',
      component: login,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: '',
          component: LoginView,
        },
        // Other routes using default layout...
      ],
    },
  ]
})

export default router