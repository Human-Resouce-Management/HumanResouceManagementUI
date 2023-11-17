<template>
  <div class="common-layout"  >
    <el-container width="300px">
      <el-aside width="50px" height>
        <el-row class="tac">
          
    <el-col :span="12">
      <h5 class="mb-2"></h5>
      <!-- <el-menu
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
      </el-menu> -->
    </el-col>
  </el-row>
      </el-aside>
      <el-container>
        <el-header><div class="login-buttons" >
  <button class="login-button" @click="LoginForm()">Đăng nhập</button>
  <button class="register-button" @click="RegisterForm()">Đăng ký</button>
</div></el-header>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<style>
.login-buttons {
  width: 400px;
  height: 100%;
  position: absolute;
  top: 0;
  right: -8%;
}

.login-button,
.register-button {
  background-color: transparent;
  border: none;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 20px 20px;
  transition: background-color 0.3s ease;
}

.login-button:hover,
.register-button:hover {
  background-color: #f0f0f0;
}


html, body {
background-color: aliceblue;
background-image: url(https://freenice.net/wp-content/uploads/2021/06/hinh-nen-powerpoint-3d.jpg);
background-repeat: no-repeat;
background-size:cover;
height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
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
.el-aside{
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-3);
}
.el-menu{
  padding: 0;
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
div, .el-container {
  height: 100%;
  width: 100%;
}
.el-header, .el-main, .el-footer, .el-aside {
  height: 100%;
  width: 100%;
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
function LoginForm(){
  window.location.href = `/login`;
}
function RegisterForm(){
  window.location.href = `/Auth`;
}
</script>