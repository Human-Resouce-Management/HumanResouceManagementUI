<template>
  <el-table :data="data"  style="width: 100%">
      <el-table-column prop="userName" label="UserName" width="180" />
      <el-table-column prop="email" label="Email" width="180" />
      <el-table-column fixed="right" label="Operations" width="100px">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="showDetails(scope.row.id)"
          >Detail</el-button
        >
        <!-- <el-button link type="primary" size="small">Edit</el-button> -->
      </template>
    </el-table-column>
    <el-table-column  label="Deleteuser" width="100" >
      <template #default="scopes">
        <el-button link type="primary" size="small" @click="Deleteuser(scopes.row.id)"
          >Delete</el-button
        >
        <!-- <el-button link type="primary" size="small">Edit</el-button> -->
      </template>
  </el-table-column>

  </el-table>
</template>

<style>
</style>
<script setup lang="ts">

import axios from "axios";
import { reactive, ref } from 'vue';
import {fetchData} from '../../Services/GetAllUserServices'
// const columns = [
// {
// //   tiltle: "UserName",
// dataIndex: "userName",
// key:"username"
// },
// {
// //   tiltle: "Email",
// dataIndex: "email",
// key:"email"
// },

// ]
// let data: any = ref([]);
// const fetchData = async (): Promise<any[]> => {
//   let data2 = [] as any[];
//   try {
//     await axios
//       .get("https://localhost:7141/api/UserManagement/GetAll")
//       .then((respons) => (data2 = respons.data.data));
//     console.log(data2);
//   } catch (error) {
//     // Handle any errors here
//     console.error("Error:", error);
//   }
//   return data2;
// };
// fetchData().then((result) => {
//   data.value = result;
//   console.log(data);
// });


let data: any= ref([]);
async function main() {
  const data2 = await fetchData();
  data.value = data2;
}
main();

function showDetails(userId:string) {
  // Gọi api tìm kiếm người dùng
  axios.get(`https:localhost:7141/api/UserManagement/${userId}`)
    .then((user) => {
      // Chuyển hướng người dùng đến trang thông tin chi tiết
      window.location.href = `/GetAll/${userId}`;
    });
    }
    async function Deleteuser(userId: any) {
    try {
        const response= await  axios.delete(`https://localhost:7141/api/UserManagement/${userId}`);
    if (response.status === 200) {
      alert('Da Xoa.');
    } else {
      alert('Đã xảy ra lỗi khi đặt lại mật khẩu. Vui lòng thử lại sau.');
    }
  } catch (error) {
    console.log(error);
    alert('Đã xảy ra lỗi khi đặt lại mật khẩu. Vui lòng thử lại sau.');
  }}
</script>

