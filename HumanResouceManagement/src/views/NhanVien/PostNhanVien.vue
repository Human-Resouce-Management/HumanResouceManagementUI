<template>
  <div class="trangchinh z1" >
    <el-form ref="form" :model="employeeData" label-width="120px">
      <el-form-item label="Tên" class="input-name">
        <el-input v-model="employeeData.ten" ></el-input>
      </el-form-item>
      <el-form-item label="Bộ phận" class="input-name">
        <el-select v-model="bophan" class="input-name">
          <!-- Hiển thị danh sách các bộ phận từ API -->
          <el-option
            v-for="department in departments"
  
            :key="department?.id"
            :value="department?.id"
            :label="department?.tenBoPhan"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Chức vụ" class="input-name">
        <el-select v-model="chucvu" class="input-name">
          <!-- Hiển thị danh sách các chức vụ từ API -->
          <el-option
            v-for="position in positions"
            :key="position?.id"
            :value="position?.id"
            :label="position?.tenChucVu"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Cấp bậc" >
        <el-input-number v-model="employeeData.capBat" class="bnt-number" :min="1" :max="100" :step="1" controls-position="right" style="width: 248px;"></el-input-number>
      </el-form-item>
      <el-form-item label="Mức lương">
        <el-input-number v-model="employeeData.mucLuong" :min="0" :max="1000000000" :controls="false" :step="1000000" :precision="0" controls-position="right" class="custom-input-number" style="width: 248px;"></el-input-number>
      </el-form-item>
      <el-form-item label="Hệ số">
        <el-input-number v-model="employeeData.heSo" :min="0" :max="10" :step="0.1" controls-position="right" class="custom-input-number" style="width: 248px;"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Thêm nhân viên</el-button>
      </el-form-item>
    </el-form>
  </div>
    <div class="khunghinh z1">
<img src="../HinhAnh/nhan-vien-van-phong-hoc-nganh-gi.jpg" alt="" style="height: 70%; width: 90%;">
    </div>
  </template>

  <style>

.el-input-number.is-controls-right .el-input-number__decrease {
  bottom: 15px;
}
  .z1{
   
    display: inline-block;
  }
  .el-form-item__label {
    color: rgb(4, 8, 7) !important;
    z-index: 10000;
    font-family: cursive;
    font-size: 14px !important;
    padding: 0 30px 0 0  !important;
  }
  .trangchinh{
    width: 40%;
  }
  .khunghinh{
    width: 60%;
    /* position: absolute; */
    
  }
.input-name{
  width: 248px;
}
.el-input__inner{
height: 20px;
}
.el-input-number__increase{

  left: 240px;
}
</style>
  <script setup lang="ts">
  import axios from 'axios';
  
  import { ref, type Ref ,reactive } from 'vue';
  import { axiosInstance } from '@/Services/axiosConfig';
  import { BoPhan } from '@/Models/Dtos/BoPhanDto';
  import { ChucVu } from '@/Models/Dtos/ChucVuDto';
  import { NhanVien } from '@/Models/Dtos/NhanVienDto';
  import {fetchData3 } from '@/Services/ChuVuService.ts/GetAllChucVuServices';
  import {handleNhanVien} from '../../Services/NhanVienService/CreateNhanVienservice'
  const form = ref();
  function generateGuid() {
  const guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  return guid;
}

// let data: any= ref([]);
// async function main() {
//   const data2 = await fetchData3();
//   data.value = data2;
//   console.log(data.value);
// }

// main();
// console.log(data.value);
// Sử dụng generateGuid() để tạo GUID ngẫu nhiên
const bophan = ref<string>("");
const chucvu = ref<string>("");
const guid = generateGuid();
  const employeeData = reactive<NhanVien>({
    id: guid,
    ten: "",
    boPhanId: bophan.value,
    chucVuId: chucvu.value,
    capBat:Number(0),
    mucLuong: Number(0),
    heSo: Number(0),
    tenBoPhan: "",
    tenChucVu: "",
  }  
  );



const mounted = () => {
  fetchDepartments();
  fetchPositions();
};
const departments = ref([]);
const positions = ref([]);
  const fetchDepartments = () => {
  axiosInstance.get('BoPhan')
    .then(response => {
      departments.value = response.data.data;
    })
    .catch(error => {
      console.error(error);
    });
};

const fetchPositions = () => {
  axiosInstance.get('ChucVu')
    .then(response => {
      positions.value = response.data.data;
    })
    .catch(error => {
      console.error(error);
  });
};
mounted();
const submitForm = async () => {
  const  employeeDataWithIds = reactive<NhanVien>( {
    id: guid, 
    ten: employeeData.ten ,
    boPhanId: bophan.value, 
    chucVuId: chucvu.value,
    capBat: Number(employeeData.capBat),
    mucLuong: Number(employeeData.mucLuong),
    heSo: Number(employeeData.heSo),
    tenBoPhan: "",
    tenChucVu: "",
  });
 
  const result = await handleNhanVien(employeeDataWithIds);
  if (result.isSuccess) {
    console.log(result.message);
    console.log(result.data);

  }
}



// const resetForm = () => {
//     employeeData.value = {
//     id: '',
//     tenBoPhan: '',
//     ten: '',
//     boPhanId: '',
//     chucVuId: '',
//     capBac: 0,
//     mucLuong: 0,
//     heSo: 0,
//     tenChucVu: '',
//   } as NhanVien; // Đặt kiểu dữ liệu cho employeeData
//   departments.value = []; // Đặt lại giá trị mặc định cho departments
//   positions.value = []; /// Đặt kiểu dữ liệu cho positions
// };

 
</script>