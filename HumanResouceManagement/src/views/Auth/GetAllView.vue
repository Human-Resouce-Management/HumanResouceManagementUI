<template>
  
    <el-card>
      <h1>Get All Users </h1>
      <p>This page gets all users from the API.</p>
      <el-table
     
        :data="data"
        :columns = "columns"
        style="width: 100%"
        
      >
      
        <el-table-column
          prop="userName"
          label="userName"
          width="180"
        />
        <!-- <el-table-column
          prop="id"
          label="Id"
        /> -->
        <el-table-column
          prop="email"
          label="Email"
        />
        <el-table-column
          prop="role"
          label="Role"
        /> 
      </el-table>
    </el-card>
  </template>
  
  
  <script setup lang="ts">
  import { GetAllModel} from "@/Models/GetAllModel.ts";
  import axios from "axios";
  import { onMounted } from 'vue';
  import { reactive, ref } from 'vue';
  // @ts-ignore

// @ts-ignore
 import { handleLogin } from '../../Services/AdminService'
// import { useToast } from "vue-toastification";


const columns = [
  {
    tiltle: "UserName",
    dataIndex: "userName",
    key:"username"
  },
//   {
//     tiltle: "Id",
//     dataIndex: "id",
//     key:"Id"
//   },
  {
    tiltle: "Email",
    dataIndex: "email",
    key:"email"
  },
  {
    tiltle: "Role",
    dataIndex: "role",
    key:"role"
  },
]
let data: any = ref([]);
const fetchData = async (): Promise<GetAllModel[]> => {
  let data2 = [] as GetAllModel[];
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

// const loading = ref(true);

// async function getUsers() {
//   const response = await axios.get("https://localhost:7141/api/UserManagement/GetAll");
//   users.value = response.data;
  
// }

// onMounted(() => {
//   getUsers();
//   users;
//   columns;
// });
// getUsers()
  
  </script>

