<template>
    <el-row :gutter="20">
        <el-col :span="5">
            Gio Bat Dau: {{ Loan?.gioBatDau }}
        </el-col>
        <el-col :span="5">
            Gio Ket Thuc: {{ Loan?.gioKetThuc }}
        </el-col>
        <el-col :span="5">
            So Gio: {{ Loan?.soGio }}
        </el-col>
        <el-col :span="5">
            He So Ca : {{ Loan?.heSoCa }}
            
        </el-col>
    </el-row>
    <Suspense>
        <BasicAdminFormVue :tableColumns="tableColumns" :apiName="'NhanVienTangCa'" :allowAdd="true" :allowDelete="true"
        :createUrl="useRoute().params.Id.toString()"
            title="NhanVienTangCa" :CustomActions="CustomActions" :allowEdit="true" :CustomFilters="CustomFilters"></BasicAdminFormVue>
    </Suspense>
</template>

<script setup lang="ts">

import  Filter  from '@/components/maynghien/BaseModels/Filter';
import BasicAdminFormVue from '@/components/maynghien/adminTable/BasicAdminForm.vue';
import { ApiActionType, CustomAction, CustomActionDataType, CustomActionResponse } from '@/components/maynghien/adminTable/Models/CustomAction';
// @ts-ignore
import { TableColumn } from '@/components/maynghien/adminTable/Models/TableColumn.ts';
import { useRoute } from 'vue-router';
import { handleGetLoan } from '../../Services/NhanVienTangCaService/GetById'
import type { TangCaDto } from '@/Models/Dtos/TangCaDto';
import { ref } from 'vue';
import type { AppResponse } from '@/Models/AppResponse';

const Loan = ref<TangCaDto|undefined>();
const tableColumns: TableColumn[] = [
    
{
      key: "ten",
      label: "Tên Nhân Viên ",
      enableEdit: false,
      enableCreate:false,
      hidden: false,
      width: 500,
      required: true,
      sortable: true,
      showSearch: false,
      inputType: "text",
      dropdownData: null,

  },
    
    {
      key: "nhanVienId",
      label: "Mã Nhân Viên",
      enableEdit: true,
      enableCreate:true,
      hidden: false,
      width: 500,
      required: true,
      sortable: true,
      showSearch: false,
      inputType: "dropdown",
      dropdownData: {
          apiUrl: "NhanVien",
          displayMember: "ten",
          keyMember: "id",        
      },

  },

  {
        key: "heSoCa",
        label: "Hệ Số Ca",
        width: 1000,
        sortable: true,
        enableEdit:  true,
        enableCreate:  false,
        required:false,
        hidden: false,
        showSearch: false,
        inputType:  "text",
        dropdownData:null,
    },
  {
      key: "tangCaId",
      label: "Mã Tăng Ca",
      enableEdit: true,
      enableCreate:true,
      hidden: false,
      width: 500,
      required: true,
      sortable: true,
      showSearch: false,
      inputType: "dropdown",
      dropdownData: {
          apiUrl: "TangCa",
          displayMember: "id",
          keyMember: "id",        
      },

  },
   
    
]
const CustomActions: CustomAction[] = ([

]);
console.log(useRoute().params.Id.toString())
const CustomFilters: Filter[] = ([
    {
        FieldName:"TangCaId",
        Value: useRoute().params.Id.toString(),
        DisplayName: undefined,
        Operation:undefined,
        Type:undefined,
        dropdownData:undefined
    }
])

const RatePeriod =ref("");
handleGetLoan(useRoute().params.Id.toString()).then(
    (response) => {
        if(response.isSuccess){
            Loan.value = response.data;
            
        }
        
    }
)
console.log(useRoute().params.Id.toString())
</script>