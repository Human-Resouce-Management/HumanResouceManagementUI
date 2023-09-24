<template>

  <div class="demo-input-size User-searchFrom" >
    <el-input
      v-model="Sname"
      class="w-50 m-2"
      size="large"
      placeholder="Email"
      :prefix-icon="Search"
    />
    <el-button type="primary" @click="search" class="User-searchButton">Search</el-button>
  </div>


  <el-table :data="data" style="width: 100%">
    <el-table-column prop="id" label="Id" width="280px" />
    <el-table-column prop="userName" label="Name" width="280px" />
    <el-table-column prop="email" label="Email" width="280px" />
    <el-table-column fixed="right" label="Operations" width="100px">
      <template #default="scope">
        <router-link :to="`/User/${scope.row.id}`">
          <el-button link type="primary" size="small">Detail</el-button>
        </router-link>
        <!-- <el-button link type="primary" size="small">Edit</el-button> -->
      </template>
    </el-table-column>
  </el-table>
  <div style="display: flex;">
    <el-button v-if="Number(Search.PageIndex) > 1" @click="previousPage">{{Number(Search.PageIndex) - 1}}</el-button>
    <el-button type="primary">{{Search.PageIndex}}</el-button>
    <el-button v-if="data.length% Search.PageSize! == 0 " @click="nextPage">{{Number(Search.PageIndex) + 1}}</el-button>
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


let data = ref([] as User[]);
let Sname = ref("");

let Search: SearchRequest = reactive({
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
  Search.Filters = [];

  const filter: Filter = {
    FieldName: "",
    Value: name,
    Operation: "search",
  };
  if(filter.Value){
    filter.FieldName = "Email"
  }
  
  Search.Filters?.push(filter);
   await axiosInstance.post('UserManagement/search', Search)
  .then(data2 =>{
    console.log(data2)
    console.log(data2.data)
    data.value = data2.data.data.data;
    console.log(data.value)
  })
};

const nextPage = () =>{
    Search.PageIndex!++;
    search();
}
const previousPage = () =>{
    Search.PageIndex!--;
    search();
}
// fetchData2(Search).then((result) => {
//   data.value = result;
//   console.log(data);
// });
async function fetchData2Async() {
  const result = await fetchData2(Search);
  data.value = result;
  console.log(data);
}
fetchData2Async();
</script>
<style>
.User-searchFrom{
  width: 370px;
  display: flex;
}
.User-searchButton{
  height: 40px !important;
}
</style>
