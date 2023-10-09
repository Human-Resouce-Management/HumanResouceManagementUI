<template>
    <Suspense>
        <BasicAdminFormVue :tableColumns="tableColumns" :apiName="'user'" :allowAdd="true" :allowDelete="true"
            :allowEdit="false"></BasicAdminFormVue>
    </Suspense>
</template>

<script setup lang="ts">
import BasicAdminFormVue from '@/components/maynghien/adminTable/BasicAdminForm.vue';
// @ts-ignore
import { TableColumn } from '@/components/maynghien/adminTable/Models/TableColumn.ts'
const tableColumns: TableColumn[] = [
    {
        key: "userName",
        label: "User Name",
        enableEdit: false,
        hidden: false,
        width: 500,
        required: true,
        sortable: true,
        showSearch:true,
    },
    {
        key: "role",
        label: "User Name",
        enableEdit: false,
        hidden: false,
        width: 300,
        required: true,
        sortable: true,
        showSearch:false,
    },

]


</script>