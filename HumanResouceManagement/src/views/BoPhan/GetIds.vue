<template>
  <el-card>
    <h1>Bo Phan details</h1>
    <el-row>
      <el-col :span="6">ID:</el-col>
      <el-col :span="18">{{ user?.id}}</el-col>
    </el-row>
    <el-row>
      <el-col :span="6">Ten Bo Phan:</el-col>
      <el-col :span="18">{{ user?.tenBoPhan }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="6">Quan Ly:</el-col>
      <el-col :span="18">{{ user?.quanLy }}</el-col>
    </el-row>
   
  </el-card>
</template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import axios from "axios";
import type { BoPhan } from '@/Models/Dtos/BoPhanDto';
import { useRoute } from 'vue-router';
import { GetIDBoPhan } from '@/Services/BoPhanSercice/GeiIdBoPhanService'

let user = ref<BoPhan>({
    id : "",
    tenBoPhan: "",
    quanLy: "",
})

const id = useRoute().params.Id;
if (typeof id === "string") {
  GetIDBoPhan(id).then((result) => {
    user.value = result.data;
  });
}
  
</script>