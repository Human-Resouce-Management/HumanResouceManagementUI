import { createRouter, createWebHistory } from 'vue-router'
import layout1 from '../components/layout/layout1.vue'
import LayoutBlankVue from '@/components/layout/LayoutBlank.vue';
import LayoutElementVue from '@/components/layout/LayoutElement.vue';
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
import PostBoPhan from '../views/BoPhan/Post.vue'
import LayoutMenu from '../components/layout/LayoutMenuDoc.vue'
import User from '../views/User/Index.vue'
import PostNhanVien from '../views/NhanVien/PostNhanVien.vue'
import TinhLuong from '../views/Luong/Tinhluong.vue'
import Homepage from "../views/Auth/HomepageView.vue";
import Nhanvien from "../views/NhanVien/NhanVien.vue";
import layout1Vue from '../components/layout/layout1.vue';
import ChucVu from '../views/ChucVu/ChucVu.vue'
// import NhanVienTangCa from '../views/NhanVienTangCa/NhanVienTangCa.Vue'
import TangLuong from '../views/TangLuong/TangLuong.vue'
import TangCa from '../views/TangCa/TangCa.vue'
import ThoiViec from '../views/ThoiViec/ThoiViec.vue'
import DeataiTangCa from '../views/TangCa/Detail.vue'
import Bohan2 from '../views/BoPhan2/BoPhan.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Dang Nhap Dki 
      path: '/',
      component: LayoutMenu,
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

    {
      path: '/User',
      component: LayoutMenu,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: '',
          component:User,
        },
        // Other routes using default layout...
      ],
    },
    // User
    {
      path: '/GetAll',
      component: LayoutMenu,
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
      component: LayoutMenu,
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
      component: LayoutMenu,
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
  path: '/postBoPhan',
  component: layout1,
  meta: { requiresAuth: true }, 
  children: [
    {
      path: '',
      component: PostBoPhan,
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
      component: LayoutMenu,
      meta: { requiresAuth: true }, 
      children: [
        {
          path: '',
          component:SearchBoPhan ,
        },
        // Other routes using default layout...
      ],
    },
//Nhan Vien
{
  path: "/PostNhanVien",
  component:LayoutMenu ,
  meta: { requiresAuth: true }, 
  children: [
    {
      path: '',
      component:PostNhanVien ,
    },
    // Other routes using default layout...
  ],
},

{
  path: "/Nhanvienviews",
  component:LayoutMenu ,
  meta: { requiresAuth: true }, 
  children: [
    {
      path: '',
      component:Nhanvien ,
    },
    // Other routes using default layout...
  ],
},

//Luong
{
  path: "/TinhLuong",
  component:LayoutMenu ,
  meta: { requiresAuth: true }, 
  children: [
    {
      path: '',
      component:TinhLuong ,
    },
    // Other routes using default layout...
  ],
},

{
  path: "/Home",
  component:LayoutMenu ,
  meta: { requiresAuth: true }, 
  children: [
    {
      path: '',
      component:Homepage,
    },
    // Other routes using default layout...
  ],
},


//Chuc Vu
{
  path: "/ChucVu",
  component:LayoutMenu ,
  meta: { requiresAuth: true }, 
  children: [
    {
      path: '',
      component:ChucVu,
    },
    // Other routes using default layout...
  ],
},

{
  path: "/TangCa",
  component:LayoutMenu ,
  meta: { requiresAuth: true }, 
  children: [
    {
      path: '',
      component:TangCa,
    },
    // Other routes using default layout...
  ],
},

{
  path: "/TangLuong",
  component:LayoutMenu ,
  meta: { requiresAuth: true }, 
  children: [
    {
      path: '',
      component:TangLuong,
    },
    // Other routes using default layout...
  ],
},

{
  path: '/TangCa/:Id',
  component:LayoutMenu ,
  meta: { requiresAuth: true }, 
  children: [
    {
      path: '',
      component:DeataiTangCa,
    },
    // Other routes using default layout...
  ],
},

{
  path: '/BoPhan',
  component:LayoutMenu ,
  meta: { requiresAuth: true }, 
  children: [
    {
      path: '',
      component:Bohan2,
    },
    // Other routes using default layout...
  ],
},

{
  path: "/ThoiViec",
  component:LayoutMenu ,
  meta: { requiresAuth: true }, 
  children: [
    {
      path: '',
      component:ThoiViec,
    },
    // Other routes using default layout...
  ],
},

  ]
})

export default router