import { createRouter, createWebHistory } from 'vue-router'
import layout1 from '../components/layout/layout1.vue'
// import RegisterView from '../components/LoginView/RegisterView.vue'
import Cookies from 'js-cookie';
import LoginView from '../views/Auth/LoginView.vue'
import RegisterView from '../views/Auth/RegisterView.vue'
import GetAllView from '../views/Auth/GetAllView.vue'
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
          component: LoginView,
        },
        // Other routes using default layout...
      ],
    },
    {
      path: '/Auth',
      component: layout1,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: '',
          component:RegisterView,
        },
        // Other routes using default layout...
      ],
    },
    {
      path: '/GetAll',
      component: layout1,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: '',
          component: GetAllView,
        },
        // Other routes using default layout...
      ],
    },
    
  ]
})

export default router