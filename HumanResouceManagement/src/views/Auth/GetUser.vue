<template>
  <h1>User details</h1>
  <p>User Name: {{ user.userName }}</p>
  <p>Email: {{ user.email }}</p>
  <p>Id: {{ user.id }}</p>
  <p>emailConfirmed: {{ user.emailConfirmed}}</p>
  </template>
  <script setup lang="ts">
  import type { AppResponse } from '@/Models/AppResponse';
  import { User } from '@/Models/Usermodel';
  import router from '@/router';
  import axios from 'axios';
  import { fa } from 'element-plus/lib/locale/index.js';
  import { ref, reactive } from 'vue';
  import { useRoute } from 'vue-router';
  import { axiosInstance } from '@/Services/axiosConfig';
  let user = ref<User>({
        id : "",
        userName: "",
        normalizedUserName: "",
        email: "",
        normalizedEmail: "",
        emailConfirmed: true,
        passwordHash: "",
        securityStamp: "",
        concurrencyStamp: "",
        phoneNumber: "",
        phoneNumberConfirmed: false,
        twoFactorEnabled: false,
        lockoutEnd: "",
        lockoutEnabled: false,
        accessFailedCount: ""
    });
  async function getUser(userId: any) {
        await axiosInstance.get(`UserManagement/${userId}`)
          .then((User) => {
            // Lưu dữ liệu của người dùng vào biến cục bộ
            user.value = User.data.data;
            console.log(user.value)
          });
  }
  getUser(useRoute().params.Id)
  </script>
