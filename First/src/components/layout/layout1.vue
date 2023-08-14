<script setup lang="ts">
import 'element-plus/theme-chalk/dark/css-vars.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
</script>
<router-view/>
<template>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content ep-bg-purple1" />Xin</el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />Chao</el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />Ca</el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />Nha</el-col>
    </el-row>
  </template>
  
  <style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .ep-bg-purple1{
background-color :red;
}
  </style>
  