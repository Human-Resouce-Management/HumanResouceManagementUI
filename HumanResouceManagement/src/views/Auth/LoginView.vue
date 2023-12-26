

<template>

  <div>
    <el-row>
      <el-col :span="16">
        <el-row class="login-container" style="  background-color: rgb(237, 241, 240); position: absolute; left: 25%; top: 250px;">
    <el-col :span="24" class="login-col">
      <div class="grid-content ep-bg-purple">
        <el-form ref="ruleFormRef" :model="state" status-icon label-width="px" class="demo-ruleForm">
          <el-form-item label="" prop="username">
            <el-input v-model="state.UserName" placeholder="User name" :prefix-icon="User" class="test" />
          </el-form-item>
          <el-form-item label="" prop="pass">
            <el-input v-model="state.Password" type="password" width="300px" autocomplete="off" placeholder="password"
              :prefix-icon="Key" class="test" />
          </el-form-item>


          <el-form-item>
            <el-button type="primary" @click="submitForm()">Submit</el-button>
            <el-button type="primary" @click="ForgotPassword()">Forgot password</el-button>
          </el-form-item>

        </el-form>
      </div >
    </el-col>
  </el-row>
      </el-col>
      <el-col :span="8">
        <el-alert
          :title= "titles"
          :type= "types"
          show-icon
          center
          :closable="false"
          style="height: 550px; margin-left: -10%;"
        ></el-alert>
      </el-col>
    </el-row>
  </div>
</template>
  
<script setup lang="ts">
import { Calendar, Search, User, Key } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue';
// @ts-ignore
import { LoginViewModel } from '../../Models/LoginViewModel'
import { axiosInstance } from '@/Services/axiosConfig';
import {fetchData} from '@/Services/GetAllUserServices'
// @ts-ignore
 import { handleLogin } from '../../Services/LoginService.ts'
// import { useToast } from "vue-toastification";



// const _toast = useToast();
const state = reactive<LoginViewModel>({
    UserName: '',
    Password: '',
    Email: '',
    Role: '',
});
const userref = ref(state); 
const  types  = ref("");
const  titles  = ref("Thông Báo mới nhât");
let data: any= ref([]);
let datas = ref<LoginViewModel[]>([]);
async function main() {
  const data2 = await fetchData();
  datas.value = data2;
  
  datas.value.forEach((element:LoginViewModel) =>  {
  if(element.UserName == userref.value.UserName){
    userref.value.Role= element.Role;
  }
});
}
main();
 

const submitForm = async () => {
    console.log(state);
    // state.Email = state.UserName
    const loginResult = await handleLogin(state);
    console.log("logresult:" + loginResult);
   
    if(loginResult.isSuccess  ){
      if(userref.value.UserName == 'ble07983@gmail.com'){
        state.Role= 'superadmin';
      }

      console.log(userref.value);
      console.log(userref.value.Role);

      if(userref.value.Role == 'superadmin'){
        types.value = "success";
        titles.value = "Đăng Nhâp Thành Công" ;
        window.location.href = `/User`;
      }
      else  {
        types.value = "success";
        titles.value = "Đăng Nhâp Thành Công" ;
        // window.location.href = `/Admin`;
    }      
    }
  
    else{
         types.value = "error";
    titles.value = "Đã xảy ra lỗi khi đăng nhập" ;
    }
   
    // else
    //   _toast.success(loginResult.message);
  } 
  const ForgotPassword = () => {
    // Thay thế `/forgot-password` bằng URL của trang bạn muốn chuyển đến
    window.location.href = `/ResetPassword`;
  }
  
  
</script>
  
<style>
/* Your CSS styles here */
body,
html {
  height: 100%;
  width: 100%;
  margin: 0;
  
  justify-content: center;
  align-items: center;
  background-color: aquamarine;
}
.grid-content {
text-align: center;

}
.el-form-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
  
}
.el-input{
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
.demo-ruleForm {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 
}
.test{
  width: 30px;
  height: 30px;
}
.login-container {
  width: 600px;
  height: 600px;
  background-color: aquamarine;
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
}

.login-col {
  display: grid;
  place-items: center;
}

.grid-content {
  width: 400px;
  text-align: center;
}
.el-row .login-container{

}
</style>
  