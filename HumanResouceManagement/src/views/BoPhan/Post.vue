<template>
   <el-form ref="myForm" :model="state" label-position="top">
    <!-- <el-form-item label="ID">
      <el-input v-model="state.id"></el-input>
    </el-form-item> -->

    <el-form-item label="Tên Bộ Phận">
      <el-input v-model="state.tenBoPhan"></el-input>
    </el-form-item>

    <el-form-item label="Quản Lý">
      <el-input v-model="state.quanLy"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm">Gửi</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import {BoPhan} from '@/Models/Dtos/BoPhanDto';
import {handleBoPhan}from '@/Services/BoPhanSercice/CreateBoPhanService';
import { useRoute } from "vue-router";
import { reactive, ref } from 'vue';

function generateGuid() {
  const guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  return guid;
}

// Sử dụng generateGuid() để tạo GUID ngẫu nhiên
const guid = generateGuid();
const state = reactive<BoPhan>({
    id : guid,
    tenBoPhan: "",
    quanLy: "",
})
const submitForm = async () => {
    console.log(state);
    // state.Email = state.UserName
    const loginResult = await handleBoPhan(state);
    console.log("logresult:" + loginResult);
    if (loginResult.isSuccess)
      window.location.href = '/';
    // else
    //   _toast.success(loginResult.message);
  } 
</script>