<template>
    <div class="demo-image">
      <div v-for="i of 8" :key="i" class="block">
        <el-image style="width: 100px; height: 100px" :src="url" />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  const url =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
  </script>
  
  <style scoped>
  .demo-image .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    vertical-align: top;
  }
  .demo-image .block:last-child {
    border-right: none;
  }
  .demo-image .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
  
.demo-image .block {
    margin: 10px;
}

.demo-image .block {
    border: none;
}
  </style>
  

