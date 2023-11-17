<template>
    <el-card class="box-card">
      <h2 slot="header">Chỉnh sửa người dùng</h2>
      <el-form :model="user" label-width="120px">
        <el-form-item label="Id">
          <el-input v-model="user.id" ></el-input>
        </el-form-item>
        <el-form-item label="Ten BoP han">
          <el-input v-model="user.tenBoPhan" ></el-input>
        </el-form-item>
        <el-form-item label="Quan Ly">
          <el-input v-model="user.quanLy" ></el-input>
        </el-form-item>
        <!-- <el-form-item label="Vai trò">
          <el-select v-model="user.role" placeholder="Chọn vai trò">
            <el-option label="Admin" value="admin"></el-option>
            <el-option label="Người dùng" value="user"></el-option>
          </el-select>
        </el-form-item> -->
        
        <el-form-item>
          <el-button type="primary" @click="onSave">Lưu</el-button>
          <el-button @click="onCancel">Hủy</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </template>
  
  <script setup lang="ts">
  import { ref , reactive } from 'vue';
  import { useRoute } from "vue-router";
  import { BoPhan } from '@/Models/Dtos/BoPhanDto';
  import{ EditBoPhan} from '@/Services/BoPhanSercice/EditBoPhanService'
//   import {User} from "@/Models/Usermodel"
import{Accout} from "@/Models/AccoutModel"
  let user = ref<BoPhan>({
        id :String(useRoute().params.Id),
        tenBoPhan:"",
        quanLy:"",      
    });
//     const state = reactive<BoPhan>({
//         id : user.value.id,
//         TenBoPhan: user.value.TenBoPhan,
//         QuanLy:user.value.QuanLy,  
// });
  const onSave = async () => {
    // Gọi API để chỉnh sửa người dùng
    var state = new BoPhan();
    state = {
      id : user.value.id,
        tenBoPhan: user.value.tenBoPhan,
                quanLy:user.value.quanLy,  
    }
    try{
      const EditResult = await EditBoPhan(state);
   
   if (EditResult.isSuccess) {
       window.location.href = '/';
   }
    }catch(error){
console.log(error);
    }
   

  };
  
  const onCancel = () => {
    // Quay lại trang trước
    window.location.href = '/';
  };
</script>