<template>
   <Suspense>
        <BasicAdminFormVue :tableColumns="tableColumns" :apiName="'TangCa'" :allowAdd="true" :allowDelete="true"
            title="TangCa" :CustomActions="CustomActions" :allowEdit="true" @onCustomAction="ChangePage"></BasicAdminFormVue>
    </Suspense>
    <el-button style="margin-left: 2%;" @click="DownloadExcel()">Xuất Excels</el-button>
  </template>
  
  <style>
  
  </style>
  
  <script lang="ts" setup>
  import BasicAdminFormVue from "@/components/maynghien/adminTable/BasicAdminForm.vue";
  import { ApiActionType, CustomAction, CustomActionDataType, CustomActionResponse } from "@/components/maynghien/adminTable/Models/CustomAction";
  // @ts-ignore
  import { TableColumn } from "@/components/maynghien/adminTable/Models/TableColumn.ts";
  import router from "@/router";
  import { axiosInstance } from "@/Services/axiosConfig";
  import Cookies from "js-cookie";
  import * as jwt from "jsonwebtoken";
  import { ref, reactive } from "vue";
  import {SearchRequest} from "@/components/maynghien/BaseModels/SearchRequest";
import Filter from "@/components/maynghien/BaseModels/Filter"
  const token = Cookies.get("accessToken")?.toString() ?? "";
  // const decodedToken = jwt.decode(token ?? "") as TokenPayload;
  //   const userRoles = decodedToken.Roles || [];
  
  //   const hasTeamleaderRole = hasPermission(userRoles, ["teamleader"]);
  //   const hasSaleRole = hasPermission(userRoles, ["Sale"]);
  //   const hasAdminRole = hasPermission(userRoles, ["Admin", "superadmin"]);
  
  
  const tableColumns: TableColumn[] = [
  {
        key: "id",
        label: "id",
        enableEdit: false,
        enableCreate: false,
        hidden: true,
        width: 500,
        required: false,
        sortable: true,
        showSearch: false,
        inputType: "text",
        dropdownData: null,

    },
  {
        key: "soGio",
        label: "Số Gio",
        enableEdit: true,
        enableCreate:true,
        hidden: false,
        width: 500,
        required: true,
        sortable: true,
        showSearch: false,
        inputType: "text",
        dropdownData: null,
  
    },
    {
        key: "ngay",
        label: "Ngày",
        enableEdit: true,
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
        key: "gioBatDau",
        label: "Gio Bắt Đầu",
        width: 1000,
        sortable: true,
        enableEdit:  true,
  
        enableCreate:  true,
        required:false,
        hidden: false,
        showSearch: true,
        inputType:  "text",
        dropdownData:null,
    },
  
    {
        key: "gioKetThuc",
        label: "Gio Kết Thúc",
        width: 1000,
        sortable: true,
        enableEdit:  true,
  
        enableCreate:  true,
        required:false,
        hidden: false,
        showSearch: false,
        inputType:  "text",
        dropdownData:null,
    },
  
    {
        key: "heSoCa",
        label: "Hệ Số Ca",
        width: 1000,
        sortable: true,
        enableEdit:  true,
        enableCreate:  true,
        required:false,
        hidden: false,
        showSearch: false,
        inputType:  "text",
        dropdownData:null,
    },
  
   
  ]
  function hasPermission(userRoles: string[], requiredRoles: string[]): boolean {
  for (const requiredRole of requiredRoles) {
    if (userRoles.includes(requiredRole)) {
      return true;
    }
  }
  return false;
  }
  
  const CustomActions: CustomAction[] = ([
    {
        ActionName: "Deatail",
        ActionLabel: "Deatail",
        ApiActiontype:ApiActionType.PUT,
        IsRowAction: true,
        DataType: CustomActionDataType.RowId,
    }
]);
  function ChangePage(item: CustomActionResponse){
    if(item.Action.ActionName == "Deatail")
    router.push('/TangCa/' + item.Data.id);
  }
  function DownloadExcel() {
  var data;
  let searchRequest = reactive<SearchRequest>({
  filters: [
    {
      FieldName: "IsDelete",
      Value: "",
      Operation: undefined,
    },
  ] as Filter[],
  SortBy: undefined,
  PageIndex: 1,
  PageSize: 10,
});
  axiosInstance
    .post("TangCa/Download", searchRequest, {
      responseType: "blob",
    })
    .then((response) => {
      data = response.data;
      // Chuyển dữ liệu thành một đối tượng Blob
      const blob = new Blob([data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

      // Tải file về máy
      const filename = "InboundReceipt"+new Date().toLocaleDateString("vi-GB")+".xlsx";
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    });
}
  </script>