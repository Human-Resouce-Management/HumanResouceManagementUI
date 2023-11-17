<template>
<div class="toimetmoiqua">
  <div class="demo-input-size User-searchFrom" >
    <el-input
      v-model="Sname"
      class="w-50 m-2"
      size="large"
      placeholder="Email"
      :prefix-icon="Searchs"
      style=" width: 200px; margin-top: 10%;
  height: 30px;"
    />
    <el-button type="primary" @click="search" class="User-searchButton" >Search</el-button>
    <el-button type="primary" round style="position: absolute; right: 10%; top: 18%; height: 50px; width: 80px;"> Create </el-button>
  </div>


  <el-table :data="data" style="width: 100% ; height: 400px">
    <el-table-column prop="id" label="Id" width="280px" />
    <el-table-column prop="userName" label="Name" width="280px" />
    <el-table-column prop="email" label="Email" width="280px" />
    <el-table-column prop="role" fixed="right" label="passwordHash" width="100px">
      <template #default="scope">
        <router-link :to="`/User/${scope.row.id}`">
          <el-button link type="primary" size="small">Detail</el-button>
        </router-link>
        <!-- <el-button link type="primary" size="small">Edit</el-button> -->
      </template>
    </el-table-column>
  </el-table>
  <div style="display: flex;">
    <el-button v-if="Number(Searchs.PageIndex) > 1" @click="previousPage">{{Number(Searchs.PageIndex) - 1}}</el-button>
    <el-button type="primary">{{Searchs.PageIndex}}</el-button>
    <el-button v-if="data.length% Searchs.PageSize! == 0 " @click="nextPage">{{Number(Searchs.PageIndex) + 1}}</el-button>
  </div>
</div>
</template>
<script setup lang="ts">
import { User } from "@/Models/Usermodel";
import { ref, reactive} from "vue";
import { axiosInstance } from "@/Services/axiosConfig";
import { fetchData2 } from "../../Services/SearchService";
import { SearchRequest } from "../../Models/Request/SearchModels/SearchRequest";
import { Filter } from "../../Models/Request/SearchModels/Filter";
import {SortByInfo} from '../../Models/Request/SearchModels/SortByInfo'
import axios from "axios";
import {
  Check,
  Delete,
  Edit,
  Message,
  Star,
} from '@element-plus/icons-vue'
import {Accout} from "@/Models/AccoutModel";

let data = ref([] as Accout[]);
let Sname = ref("");

let Searchs: SearchRequest = reactive({
  Filters: [] as Filter[],
  SortByInfo: undefined,
  PageIndex: 1,
  PageSize: 2 ,
});
// const Sort : SortByInfo = ({
//   FieldName: "Email",
//    Ascending: true,
// })
const search = async () => {
  let name: string = Sname.value;
  Searchs.Filters = [];

  const filter: Filter = {
    FieldName: "",
    Value: name,
    Operation: "search",
  };
  if(filter.Value){
    filter.FieldName = "Email"
  }
  
  Searchs.Filters?.push(filter);
   await axiosInstance.post('UserManagement/search', Searchs)
  .then(data2 =>{
    console.log(data2)
    console.log(data2.data)
     console.log(data2.data.data)
    data.value = data2.data.data.data;
    console.log(data.value)
  })
};

const nextPage = () =>{
    Searchs.PageIndex!++;
    search();
}
const previousPage = () =>{
    Searchs.PageIndex!--;
    search();
}
// fetchData2(Search).then((result) => {
//   data.value = result;
//   console.log(data);
// });
fetchData2(Searchs).then((result) => {
    data.value = result;
    console.log(data);
  });
</script>
<style>
.toimetmoiqua {
  width: 100%;
    height: 30%;
}
.test{
  width: 30px;
  height: 30px;
}
.User-searchFrom{
  width: 370px;
  display: flex;
}
.User-searchButton{
  height: 40px !important;
  width: 80px;
  margin-left: 15%;
  margin-top: 9%;
}
</style>
