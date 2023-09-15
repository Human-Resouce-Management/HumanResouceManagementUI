<template>
  <!-- <div class="demo-image">
      <div v-for="i of 8" :key="i" class="block">
        <el-image style="width: 100px; height: 100px" :src="url" />
      </div>
    </div> -->
  <el-row>
    <el-col :span="2">
      <el-button icon="el-icon-home" @click="toHome()"
        style="background-image: url(https://bantranh.com/wp-content/uploads/2019/02/support-icon-768x768.png);"></el-button>
      <!-- <a href="" @click="toHome()">Thông tin nhân viên</a> -->
      <p>Thông Tin Nhân Viên</p>
    </el-col>
    <el-col :span="2">
      <el-button icon="el-icon-message" @click="toMessage()"
        style="background-image: url(https://th.bing.com/th/id/R.83fb39c73528047a573723f3d3b7ea24?rik=g%2bc9xiwrVDCOJQ&riu=http%3a%2f%2fdryicons.com%2fuploads%2ficon%2fpreview%2f1491%2ficon_grid_1x_add_user.png&ehk=ajAGeLx5wZYddB2UVSwpE5IzSDDi%2bfmzCs8vPMTdTkY%3d&risl=&pid=ImgRaw&r=0);"></el-button>
      <p>Thêm Nhân Viên</p>
    </el-col>
    <el-col :span="2">
      <el-button icon="el-icon-message" @click="toMessage()"
        style="background-image: url(https://www.shutterstock.com/image-vector/scheduled-date-time-260nw-478940716.jpg);"></el-button>
      <p>Nghỉ Phép</p>
    </el-col>
    <el-col :span="2">
      <el-button icon="el-icon-message" @click="toMessage()"
      style="background-image: url(https://www.turnautomotive.com/wp-content/uploads/2021/11/Guarantedd-Cash_Icon.png);"></el-button>
      <p>Lương</p>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="2">
      <el-button icon="el-icon-home" @click="toHome()"
        style="background-image: url(https://bantranh.com/wp-content/uploads/2019/02/support-icon-768x768.png);"></el-button>
      <!-- <a href="" @click="toHome()">Thông tin nhân viên</a> -->
      <p>Thông Tin Nhân Viên</p>
    </el-col>
    <el-col :span="2">
      <el-button icon="el-icon-message" @click="toMessage()"
        style="background-image: url(https://th.bing.com/th/id/R.473417f238955c5102dfb4cb852dac15?rik=hJ4kykWmjFiYlg&riu=http%3a%2f%2fwww.synchronybank.com%2fsites%2fsyfbank%2fimages%2fico-moneymarket.png&ehk=VfBvdyeJVmkjuKws3CevPU8gT8Lq5Kj9GyGbX2767Zs%3d&risl=&pid=ImgRaw&r=0);"></el-button>
      <p>Tăng Lương</p>
    </el-col>
    <el-col :span="2">
      <el-button icon="el-icon-message" @click="toMessage()"
        style="background-image: url(https://www.myslingstudio.com/images/help/community-icon.png);"></el-button>
      <p>Bộ Phận</p>
    </el-col>
    <el-col :span="2">
      <el-button icon="el-icon-message" @click="toMessage()"
      style="background-image: url(https://th.bing.com/th/id/R.1c16c086d9ed05f0681db0cbe454536a?rik=hoRHCOMcbF3cow&riu=http%3a%2f%2fpods-toolkit.uhnopenlab.ca%2fwp-content%2fuploads%2f2018%2f09%2ftoolkitIcon.png&ehk=o4FpS9YmPUffUZNJwqN0jRhYXbO5lltKvVYd1GuPDIY%3d&risl=&pid=ImgRaw&r=0);"></el-button>
      <p>Cài Đặt</p>
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
  grid-template-rows: repeat(2, 0fr);

}

.el-button {
  width: 100px;
  height: 100px;
  background-size: cover;
  margin-left: 20px;
}

p {
  width: 130px;
  text-align: center;
}

a {
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  color: #007D3A;
  width: 100%;
}

a:hover {
  color: #000;
}</style>
  

