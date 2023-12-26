<template>

  <div class="common-layout"  >
    <el-container  >
      <el-aside width="50px">
        <el-row class="tac">
          
    <el-col :span="12">
      <h5 class="mb-2"></h5>
      
    </el-col>
  </el-row>
      </el-aside>
      <el-container >
        <el-header  ><div class="login-buttons" >
  <button class="login-button" @click="LoginForm()">Đăng nhập</button>
  <button class="register-button" @click="RegisterForm()">Đăng ký</button>
</div></el-header>
        <el-main class="okeemain"> 
          <router-view/>
        </el-main>
        <el-footer style="background-color: #35495e; color: white; text-align: center; height: 183px;">
      <div style="">
        <p style="font-size: 18px;">Thông tin liên hệ</p>
        <p>Địa chỉ: Số 123, Đường ABC, Thành phố XYZ</p>
        <p>Email: example@email.com</p>
        <p>Số điện thoại: 123-456-789</p>
        <!-- Các liên kết mạng xã hội -->
        <div style="margin-top: 20px;">
          <a href="#" style="color: white; margin-right: 10px;"><i class="fab fa-facebook-f"></i></a>
          <a href="#" style="color: white; margin-right: 10px;"><i class="fab fa-twitter"></i></a>
          <a href="#" style="color: white; margin-right: 10px;"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </el-footer>
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
/* div{
width: 100%;
height: 100%;
} */

  #app {
    width: 100%;
    height: 100%;
    
  }
.login-button:hover,
.register-button:hover {
  background-color: #f0f0f0;
}

.okeemain{
  background-image: url(https://azerp.vn/wp-content/uploads/2021/08/QUAN-ly-nhan-su.jpg);
background-repeat: no-repeat;
background-size:cover;
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
.common-layout, .el-container {
  height: 100% !important;
  width: 100% !important;
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