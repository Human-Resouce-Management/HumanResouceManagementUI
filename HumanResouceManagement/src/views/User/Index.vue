<template>
    <Suspense>
      <BasicAdminFormVue
        :tableColumns="tableColumns"
        :apiName="'UserManagement'"
        :allowAdd="false"
        :allowEdit="true"
        :allowDelete="true"
        title="UserManagement"
        :CustomActions="CustomActions"
        @onCustomAction="ChangePage"
      />
    </Suspense>
  </template>
  
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
        key: "userName",
        label: "Tên Người dùng",
        width: 1000,
        sortable: true,
        enableEdit: false,

        enableCreate: true,
        required: false,
        hidden: false,
        showSearch: true,
        inputType: "text",
        dropdownData: null,
    },
    {
        key: "password",
        label: "Mật Khẩu",
        width: 1000,
        sortable: true,
        enableEdit: false,

        enableCreate: true,
        required: false,
        hidden: true,
        showSearch: false,
        inputType: "text",
        dropdownData: null,
    },
    {
        key: "email",
        label: "Email",
        width: 1000,
        sortable: true,
        enableEdit: false,

        enableCreate: true,
        required: false,
        hidden: false,
        showSearch: false,
        inputType: "text",
        dropdownData: null,
    },
    
    {
        key: "passwordHash",
        label: "passwordHash" ,
        width: 500,
        sortable: false,
        enableEdit:  false,

        enableCreate:  false,
        required:false,
        hidden: false,
        showSearch: false,
        inputType:  "text",
        dropdownData:null,
    },
    {
        key: "role",
        label: "Role",
        enableEdit: false,
        enableCreate: true,
        hidden: false,
        width: 300,
        required: true,
        sortable: true,
        showSearch: false,
        inputType: "dropdown",
        dropdownData: {
            displayMember: "roleName",
            keyMember: "role",
            data: [
                {
                    role: "Admin",
                    roleName: "Admin"
                },
                {

                    role: "Teamleader",
                    roleName: "Teamleader"
                },
                {

                    role: "Sale",
                    roleName: "Sale"
                }
            ]

        },

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
    router.push('/UserManagement/' + item.Data.customerId);
}
</script>