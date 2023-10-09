<template>
    <el-card>
      <el-table
        :data="data"
        style="width: 100%"
        border
        highlight-current-row
      >
        <el-table-column type="index" width="50" />
        <el-table-column prop="id" label="Mã bộ phận" />
        <el-table-column prop="tenBoPhan" label="Tên bộ phận" />
        <el-table-column prop="quanLy" label="Quản lý" />
        <el-table-column fixed="right" label="Operations" width="100px">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="DeleteRecord(scope.row.id)"
          >Delete</el-button
        >
        <!-- <el-button link type="primary" size="small">Edit</el-button> -->
      </template>
      
    </el-table-column>
    <el-table-column fixed="right" label="Operations" width="100px">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="showDetails(scope.row.id)"
          >Details</el-button
        >
        <!-- <el-button link type="primary" size="small">Edit</el-button> -->
      </template>
      
    </el-table-column>
        
      </el-table>
    </el-card>
  </template>
  
  <script setup lang="ts">
  import { defineComponent, reactive ,ref} from "vue";
  import axios from "axios";
  import { BoPhan } from "@/Models/Dtos/BoPhanDto";
  import { fetchDataBoPhan  } from "../../Services/BoPhanSercice/GetAllBophanService";
  import { DeleteBoPhan } from "@/Services/BoPhanSercice/DeleteBoPhan";
  import { GetIDBoPhan } from "@/Services/BoPhanSercice/GeiIdBoPhanService";
  import GetIds from "./GetIds.vue";
//   let data = reactive<BoPhan[]>([]);
  
  let data: any= ref([]);
async function main() {
  const data2 = await fetchDataBoPhan();
  data.value = data2;
}
main();
 async function DeleteRecord (userId: any){
    const success = await DeleteBoPhan(userId);
      if (success) {
        console.log('Xóa thành công');
      } else {
        console.log('Xóa thất bại');
      }
  }
 async function showDetails(userId:string) {
  // Gọi api tìm kiếm người dùng
 const success = await GetIDBoPhan(userId)
 if (success) {
        console.log('ok');
        window.location.href = `/GetAllBoPhan/${userId}`;
      } else {
        console.log('not oke');
      }
    }

  </script>