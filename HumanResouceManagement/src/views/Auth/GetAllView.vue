<template>
  <el-table :data="data" :columns = "columns" style="width: 100%">
      <el-table-column prop="userName" label="UserName" width="180" />
      <el-table-column prop="email" label="Email" width="180" />
  </el-table>
</template>
<style>
</style>
<script setup lang="ts">

import axios from "axios";
import { onMounted } from 'vue';
import { reactive, ref } from 'vue';
// @ts-ignore

// @ts-ignore
import { handleLogin } from '../../Services/AdminService'
// import { useToast } from "vue-toastification";


const columns = [
{
//   tiltle: "UserName",
dataIndex: "userName",
key:"username"
},
{
//   tiltle: "Email",
dataIndex: "email",
key:"email"
},
]
let data: any = ref([]);
const fetchData = async (): Promise<any[]> => {
  let data2 = [] as any[];
  try {
    await axios
      .get("https://localhost:7141/api/UserManagement/GetAll")
      .then((respons) => (data2 = respons.data.data));
    console.log(data2);
  } catch (error) {
    // Handle any errors here
    console.error("Error:", error);
  }
  return data2;
};
fetchData().then((result) => {
  data.value = result;
  console.log(data);
});

</script>

