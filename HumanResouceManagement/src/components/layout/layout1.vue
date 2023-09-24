<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="300px">
        <el-row class="tac">
    <el-col :span="12">
      <h5 class="mb-2"></h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        style="background-color: var(--el-color-primary-light-3);"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template class="oke" #title>item four </template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" >
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
      </el-aside>
      <el-container>
        <el-header></el-header>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<style>
.common-layout {
  padding: 5px;
}
html, body {
background-color: aliceblue;
margin: 0;
padding: 0;
background-image: url(https://freenice.net/wp-content/uploads/2021/06/hinh-nen-powerpoint-3d.jpg);
background-repeat: no-repeat;
background-size:cover;
}
.el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-3);
}
.el-header{
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-3);
}
.el-footer{
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-3);
}
/* Màu sắc và phông chữ */
.menu-item {
  color: #fff;
  font-family: sans-serif;
  font-size: 16px;
}

.el-menu{
  
}
span{
text-align: center;
}
/* Hiệu ứng CSS */
.menu-item:hover {
  background-color: #000;
}

/* Hình ảnh hoặc biểu tượng */
.menu-item > a {
  background-image: url("./image.png");
  background-repeat: no-repeat;
  background-position: center left;
  padding-left: 20px;
}

</style>  
<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>