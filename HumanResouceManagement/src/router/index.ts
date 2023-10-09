import { createRouter, createWebHistory } from 'vue-router'
import layout1 from '../components/layout/layout1.vue'
// import RegisterView from '../components/LoginView/RegisterView.vue'
import Cookies from 'js-cookie';
import LoginView from '../views/Auth/LoginView.vue'
import RegisterView from '../views/Auth/RegisterView.vue'
import GetAllView from '../views/Auth/GetAllView.vue'
import GetUser from '../views/Auth/GetUser.vue'
import ResetPasswordView from '../views/Auth/ResetPasswordView.vue'
import AdminView from '../views/Auth/AdminView.vue'
import SearchUserView from '../views/Auth/SearchUserView.vue'
import NhanVienView from '../views/Auth/NhanVienView.vue'
import EditUserVue from '@/views/Auth/EditUser.vue';
import GetAll from '@/views/BoPhan/GetAll.vue'
import Edit from '../views/BoPhan/Edit.vue'
import GetIds from '../views/BoPhan/GetIds.vue'
import SearchBoPhan from '../views/BoPhan/Search.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Dang Nhap Dki 
      path: '/',
      component: layout1,
      meta: { requiresAuth: true }, 
      beforeEnter: async (to, from, next) => {
        // Kiểm tra xem người dùng đã được đăng nhập hay chưa
        const token: string | null = localStorage.getItem("token");
  
        if (!token) {
          // Chuyển hướng người dùng đến trang đăng nhập
          next({
            path: "/Login",
          });
        }
      }
    },
    {
      path: '/Login',
      component: layout1,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: '',
          component:LoginView,
        },
        // Other routes using default layout...
      ],
    },
    {
      path: "/:reset",
      component: ResetPasswordView,
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


    // User
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
     

    {
      path: "/GetAll/:Id",
      component: GetUser,
    },
    {
      path: '/Admin',
      component: layout1,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: '',
          component: AdminView,
        },
        // Other routes using default layout...
      ],
    },
    {
      path: '/Search',
      component: layout1,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: '',
          component: SearchUserView,
        },
        // Other routes using default layout...
      ],
    },
    {
      path: '/NhanVien',
      component: layout1,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: '',
          component: NhanVienView,
        },
        // Other routes using default layout...
      ],
    },

    {
      path: '/Edit',
      component: layout1,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: '',
          component: EditUserVue,
        },
        // Other routes using default layout...
      ],
    },



    
//Bo Phan
{
  path: '/GetIDBoPhan',
  component: layout1,
  meta: { requiresAuth: true }, 
  children: [
    {
      path: '',
      component: GetIds,
    },
    // Other routes using default layout...
  ],
},
    {
      path: '/GetAllBoPhan',
      component: layout1,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: '',
          component:GetAll ,
        },
        // Other routes using default layout...
      ],
    },
    {
      path: "/GetAllBoPhan/:Id",
      component: GetIds,
    },
    {
      path: '/EditBoPhan',
      component: layout1,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: '',
          component:Edit ,
        },
        // Other routes using default layout...
      ],
    },

    {
      path: '/SearchBoPhan',
      component: layout1,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: '',
          component:SearchBoPhan ,
        },
        // Other routes using default layout...
      ],
    },

  ]
})

export default router