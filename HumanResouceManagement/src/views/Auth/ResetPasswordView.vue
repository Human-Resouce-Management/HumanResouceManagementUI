<template>
  <form action="https://localhost:7141/api/UserManagement/${userId}" method="post">
    <el-input v-model="userId" placeholder="Please enter id" />
    <el-button type="primary" @click="resetPassword()">Reset password</el-button>
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
  let userId = ref<User>({
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
function resetPassword() {
  // Gửi yêu cầu đổi mật khẩu đến API
  axios.put(`https://localhost:7141/api/UserManagement/${userId}`, {
  })
    .then((response) => {
      // Xử lý phản hồi từ API
      if (response.status === 200) {
        // Mật khẩu đã được đổi thành công
        alert("Mật khẩu đã được đổi thành công")
      } else {
        // Xảy ra lỗi
        alert("Có lỗi xảy ra")
      }
    })
    .catch((error) => {
      // Xử lý lỗi
      alert(error)
    })
}

</script>