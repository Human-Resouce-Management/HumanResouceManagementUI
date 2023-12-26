<template>
  <div class="oke">
    <el-container>
      <el-header>
        <button @click="Loginmenu" class="btn1">Đăng Nhập</button>
        <button @click="logout" class="btn2"><el-icon></el-icon>Đăng Xuất</button>
      </el-header>
      <el-container >
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose" style="    background: var(--el-color-primary-light-8) ; font-family: 'Courier New', Courier, monospace;">
            <el-menu-item index="1" @click="toggleMenu">
              <el-icon><Menu /></el-icon>
              <template></template>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon @click="onMenuItemClick('User')"><UserFilled /></el-icon>
              <template #title>USER</template>
            </el-menu-item>
            <el-menu-item index="3" >
              <el-icon @click="onMenuItemClick('Nhanvienviews')"><Avatar /></el-icon>
              <template #title >Nhân Viên</template>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon @click="onMenuItemClick('ChucVu')"><Suitcase /></el-icon>
              <template #title> Chức Vụ</template>
            </el-menu-item>
            <el-menu-item index="5">
              <el-icon @click="onMenuItemClick('TinhLuong')">
                <Money />
              </el-icon>
              <template #title>Lương</template>
            </el-menu-item>
            <el-menu-item index="6">
              <el-icon @click="onMenuItemClick('TangLuong')"><Histogram /></el-icon>
              <template #title> Tăng Lương</template>
            </el-menu-item>
            <el-menu-item index="7">
              <el-icon @click="onMenuItemClick('TangCa')"><Watch/></el-icon>
              <template #title> Tăng Ca</template>
            </el-menu-item>

            <el-menu-item index="8">
              <el-icon @click="onMenuItemClick('BoPhan')"><Briefcase/></el-icon>
              <template #title> Bộ Phận</template>
            </el-menu-item>

            <el-menu-item index="9">
              <el-icon @click="onMenuItemClick('ThoiViec')"><WarnTriangleFilled/></el-icon>
              <template #title> Thoi Viec</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="mainel2">
          <router-view />
        </el-main>
      </el-container>
      <el-footer style="background-color: #324d69; color: white; text-align: center; height: 183px;">
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
  </div>
</template>

<style>
.el-header > button:hover{
background-color: aliceblue;

}
.mainel2{
  background-image: url(https://kynangquantri.com/wp-content/uploads/2020/11/quan-ly-nhan-luc.png);
background-repeat: no-repeat;
background-size:cover;
}
.oke{
  width: 200vh;
  height: 100vh;
}
.btn2{
  color: #000;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
}
.btn1 {
  color: #000;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  margin-left: 85%;
}
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.el-header, .el-main, .el-footer, .el-aside {
  height: 100%;
  width: 100%;
}
.el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
  display: flex;
}
.el-header > button {
  height: 100%;
  width: 150px;
  background-color: var(--el-color-primary-light-7);
  cursor: pointer;

  border: var(--el-color-primary-light-7);
}

.el-header>p {
  margin-left: 90%;
}

.el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.el-menu {
  border-right: none;
}

.el-main {
  padding: 10px;
}

.toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

</style>
<script lang="ts" setup>
import { ref } from 'vue'
import Vue from "vue";
import { useRouter } from 'vue-router';
import router from '@/router';
import {
  Menu as IconMenu,
  Setting,
  House,
  Avatar,
  Search,
  PieChart,
  UserFilled ,
  SwitchButton,
 WarnTriangleFilled ,
Briefcase ,
 Money ,
Watch ,
  User ,
  Histogram,
  Menu,
  Suitcase ,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const toggleMenu = () => {
  // Thay đổi giá trị của biến `isCollapse`
  isCollapse.value = !isCollapse.value;
};
const Loginmenu= () => {
  window.location.href = `/Login`;
}
function logout() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
  }
  window.location.href = "/Login";
}

const onMenuItemClick = (item: string) => {
    
    router.push(`${item}`);

}
</script>
