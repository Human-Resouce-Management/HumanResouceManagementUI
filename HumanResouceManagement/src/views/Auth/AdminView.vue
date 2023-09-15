<template>
    <!-- <div class="demo-image">
      <div v-for="i of 8" :key="i" class="block">
        <el-image style="width: 100px; height: 100px" :src="url" />
      </div>
    </div> -->
    <el-row>
  <el-col :span="2">
    <el-button icon="el-icon-home" @click="toHome()" style="background-image: url(https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg);">Trang chủ</el-button>
    <p>hihi</p>
  </el-col>
  <el-col :span="2">
    <el-button icon="el-icon-message" @click="toMessage()">Tin nhắn</el-button>
    <p>haha</p>
  </el-col>
  <el-col :span="2">
    <el-button icon="el-icon-setting" @click="toSetting()">Cài đặt</el-button>
  </el-col>
  <el-col :span="2">
    <el-button icon="el-icon-user" @click="toUser()">Tài khoản</el-button>
  </el-col>
  <el-col :span="2">
    <el-button icon="el-icon-search" @click="toSearch()">Tìm kiếm</el-button>
  </el-col>
  <el-col :span="2">
    <el-button icon="el-icon-shopping-cart" @click="toCart()">Giỏ hàng</el-button>
  </el-col>
  <el-col :span="2">
    <el-button icon="el-icon-plus" @click="toAdd()">Thêm</el-button>
  </el-col>
</el-row>
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
.el-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
 
}
.el-button {
  width: 100px;
  height: 100px;
  background-size: cover;
  margin-left: 20px;
}
p{
  width: 130px;
  text-align: center;
}
  </style>
  

