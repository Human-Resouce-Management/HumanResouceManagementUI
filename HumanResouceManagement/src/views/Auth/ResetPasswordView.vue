<template>
  <form action="https://localhost:7141/api/UserManagement/${userId}" method="post">
    <el-input v-model="forgotPasswordUser.id" placeholder="Please enter id" />
    <el-button type="primary" @click="resetPassword(forgotPasswordUser.id)">Reset password</el-button>
  </form>
</template>

<script setup lang="ts">
  import type { AppResponse } from '@/Models/AppResponse';
  import { User } from '@/Models/Usermodel';
  import router from '@/router';
  import axios from 'axios';
  import { fa } from 'element-plus/lib/locale/index.js';
  import { ref, reactive } from 'vue';
  import { useRoute } from 'vue-router';
  let forgotPasswordUser  = ref<User>({
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
    async function resetPassword(userId: any) {
    try {
        const response= await  axios.put(`https://localhost:7141/api/UserManagement/${userId}`);
    if (response.status === 200) {
      alert('Mật khẩu của bạn đã được đặt lại. Vui lòng kiểm tra email của bạn để nhận hướng dẫn đặt lại mật khẩu.');
    } else {
      alert('Đã xảy ra lỗi khi đặt lại mật khẩu. Vui lòng thử lại sau.');
    }
  } catch (error) {
    console.log(error);
    alert('Đã xảy ra lỗi khi đặt lại mật khẩu. Vui lòng thử lại sau.');
  }
}

</script>