<template>
    <el-input v-model="input" placeholder="Please id" />
    <el-button type="primary">Reset</el-button>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  const input = ref('')
  </script>
  
  