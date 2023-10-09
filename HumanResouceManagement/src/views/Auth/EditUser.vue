<template>
    <el-card class="box-card">
      <h2 slot="header">Chỉnh sửa người dùng</h2>
      <el-form :model="user" label-width="120px">
        <el-form-item label="Tên đăng nhập">
          <el-input v-model="user.userName" required :rules="[{ required: true, message: 'Tên đăng nhập không được để trống', trigger: 'blur' }, { pattern: /^[a-zA-Z0-9]+$/, message: 'Tên đăng nhập chỉ chứa ký tự chữ và số', trigger: 'blur' }]"></el-input>
        </el-form-item>
        <el-form-item label="Mật khẩu">
          <el-input v-model="user.passWord" required :rules="[{ required: true, message: 'Mật khẩu không được để trống', trigger: 'blur' }, { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự', trigger: 'blur' }]"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input v-model="user.email" required :rules="[{ required: true, message: 'Email không được để trống', trigger: 'blur' }, { type: 'email', message: 'Email không đúng định dạng', trigger: 'blur' }]"></el-input>
        </el-form-item>
        <el-form-item label="Vai trò">
          <el-select v-model="user.role" placeholder="Chọn vai trò">
            <el-option label="Admin" value="admin"></el-option>
            <el-option label="Người dùng" value="user"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSave">Lưu</el-button>
          <el-button @click="onCancel">Hủy</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </template>
  
  <script setup lang="ts">
  import { ref , reactive } from 'vue';
//   import {User} from "@/Models/Usermodel"
import{Accout} from "@/Models/AccoutModel"
  let user = ref<Accout>({
        id : "",
        userName: "",  
        passWord: "",
        email: "",
        role: "",
    });
  
  const onSave = () => {
    // Gọi API để chỉnh sửa người dùng
  };
  
  const onCancel = () => {
    // Quay lại trang trước
  };
</script>