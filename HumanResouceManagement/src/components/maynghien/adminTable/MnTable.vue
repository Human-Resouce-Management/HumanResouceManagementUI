<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in datas" :key="item.id">
                    <td v-for="column in columns" :key="column.key">{{ getValue(item, column.key) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script setup lang="ts">

interface TableColumn {
    key: string;
    label: string;
}

interface DTOItem {
    [key: string]: any;
}
const props = defineProps<{
  columns: TableColumn[];
  datas: DTOItem[];
}>();


const getValue = (item: DTOItem, key: string): string | number => {
    return item[key];
};
</script>
  
<style scoped>
/* Add your table styling here */
</style>
  