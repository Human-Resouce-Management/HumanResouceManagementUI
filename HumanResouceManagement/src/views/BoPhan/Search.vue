<template>
    <el-card>
      <el-form :model="Sname"  label-width="100px">
        <el-form-item label="Tên bộ phận">
          <el-input v-model="Sname" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">Tìm kiếm</el-button>
        </el-form-item>
      </el-form>
      <el-table
        :data="data"
        style="width: 100%"
       
      >
        <el-table-column type="index" width="50" />
        <el-table-column prop="id" label="Mã bộ phận" />
        <el-table-column prop="tenBoPhan" label="Tên bộ phận" />
        <el-table-column prop="quanLy" label="Quản lý" />
      </el-table>
    </el-card>
    <div style="display: flex; height: 200px;">
    <el-button v-if="Number(Search.PageIndex) > 1" @click="previousPage">{{Number(Search.PageIndex) - 1}}</el-button>
    <el-button type="primary">{{Search.PageIndex}}</el-button>
    <el-button v-if="data.length% Search.PageSize! == 0 " @click="nextPage">{{Number(Search.PageIndex) + 1}}</el-button>
    <div class="btnExcel">
    <button  @click="exportToExcel">Xuất file Excel</button>
  </div>
  </div>
  
  </template>

  <style>
  .btnExcel>button{
    width: 100%;
    height: 100%;
 
  }
  .btnExcel {
    width: 100px;
    height: 50px;
    margin-left: 85%;
    margin-top: 3%;
  }
</style>
  <script setup lang="ts">
  import { BoPhan } from "@/Models/Dtos/BoPhanDto";
  import { ref, reactive} from "vue";
  import { axiosInstance } from "@/Services/axiosConfig";
  import { fetchData2 } from "../../Services/BoPhanSercice/SearchBoPhan";
  import { SearchRequest } from "../../Models/Request/SearchModels/SearchRequest";
  import { Filter } from "../../Models/Request/SearchModels/Filter";
  import {SortByInfo} from '../../Models/Request/SearchModels/SortByInfo'
  import axios from "axios";

  
  let data = ref([] as BoPhan[]);
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
      filter.FieldName = "TenBoPhan"
    }
    
    Search.Filters?.push(filter);
     await axiosInstance.post('BoPhan/search', Search)
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
  fetchData2(Search).then((result) => {
    data.value = result;
    console.log(data);
  });


  const exportToExcel = async () => {
  // Gọi API để tạo file Excel
  try {
    const response = await axiosInstance.post('BoPhan/Download', Search,{responseType: 'blob'});
    const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SelectedRows.xlsx';
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error:", error);
  }
}
  // async function fetchData2Async() {
  //   const result = await fetchData2(Search);
  //   data.value = result;
  //   console.log(data);
  // }
  // fetchData2Async();
  </script>