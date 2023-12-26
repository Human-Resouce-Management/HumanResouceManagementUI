<template>
    <Suspense>
      <BasicAdminFormVue
        :tableColumns="tableColumns"
        :apiName="'ThoiViec'"
        :allowAdd="false"
        :allowEdit="false"
        :allowDelete="true"
        title="ThoiViec"
        :CustomActions="CustomActions"
        @onCustomAction="ChangePage"
      />
    </Suspense>
  </template>
  
<style>

</style>

  <script lang="ts" setup>
 import BasicAdminFormVue from "@/components/maynghien/adminTable/BasicAdminForm.vue";
  import { ApiActionType, CustomAction, CustomActionDataType, CustomActionResponse } from "@/components/maynghien/adminTable/Models/CustomAction";
  // @ts-ignore
  import { TableColumn } from "@/components/maynghien/adminTable/Models/TableColumn.ts";
  import router from "@/router";
//   import { axiosInstance } from "@/Services/axiosConfig";
  import Cookies from "js-cookie";
  import * as jwt from "jsonwebtoken";
import { ref, reactive } from "vue";
  
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
      key: "ngayNghi",
      label: "Ngay Nghi",
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
      key: "daThoiViec",
      label: "Da Thoi Viec",
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
    router.push('/ThoiViec/' + item.Data.customerId);
}
</script>