<template>
  <Suspense>
    <BasicAdminFormVue
      :tableColumns="tableColumns"
      :apiName="'TinhLuong'"
      :allowAdd="false"
      :allowEdit="true"
      :allowDelete="true"
      title="TinhLuong"
      :CustomActions="CustomActions"
      @onCustomAction="ChangePage"
    />
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
const decodedToken = jwt.decode(token ?? "") as TokenPayload;
//   const userRoles = decodedToken.Roles || [];

//   const hasTeamleaderRole = hasPermission(userRoles, ["teamleader"]);
//   const hasSaleRole = hasPermission(userRoles, ["Sale"]);
//   const hasAdminRole = hasPermission(userRoles, ["Admin", "superadmin"]);

interface TokenPayload {
  Roles: string[];
}
const customerLinkId = ref("");
const deatailShow = ref(false);
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
      showSearch: true,
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
      key: "cacKhoangTru",
      label: "Các Khoảng trừ",
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
      key: "mucLuong",
      label: "Mức Lương",
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
      key: "cacKhoangThem",
      label: "Các khoảng Thêm",
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
      key: "heSoLuong",
      label: "Hệ Số Lương ",
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
      key: "tongLuong",
      label: "Tổng Lương",
      width: 1000,
      sortable: true,
      enableEdit:  false,
      enableCreate:  false,
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
      ActionLabel: "Link",
      ApiActiontype:ApiActionType.PUT,
      IsRowAction: true,
      DataType: CustomActionDataType.RowId,
  }
]);
function ChangePage(item: CustomActionResponse){
  if(item.Action.ActionName == "Deatail")
  router.push('/TinhLuong/' + item.Data.customerId);
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
    .post("TinhLuong/Download", searchRequest, {
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