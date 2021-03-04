<template>
  <div calss="blogin">
    <el-container>
      <el-main>
        <img class="cover" src="../../assets/logincover.png" alt="cover" />
        <div class="loginbox">
         <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="user">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="axiosLogin">登录</el-button>
        </el-form-item>
      </el-form>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { setStore, getStore, removeStore } from "@/utils/storage";
import url from '@/serviceAPI.config.js'
import axios from 'axios'
import { Toast } from 'vant'
export default {
  data() {
    let validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        user: [{ validator: validateUser, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      },
    };
  },
  methods: {
    axiosLogin(){
        axios({
        url: url.login,
        method: 'post',
        data:{
            username:this.ruleForm.username,
            password:this.ruleForm.password 
        }
    })
    .then(response => {
        console.log(response)
        //如果返回code为200，代表注册成功，我们给用户作Toast提示
        if(response.data.code == 200){
          console.log(response)
            Toast.success('注册成功')
        }else{
            console.log(response.data.message)
            Toast.fail('注册失败')
        }
            console.log(response.data.code)
    })
    .catch((error) => {   
        Toast.fail('注册失败')  
    })
}
    // submitForm(formName) {
  //      this.$refs[formName].validate(async valid => {
  //       if (valid) {
  //         //   获取用户名和密码
  //         // let {user,pass} = this.ruleForm;
  //         let res = await this.$http.post("/api/login", this.ruleForm);
  //         if (res.data.code === 200) {
  //           let { username, token, id } = res.data;
  //           //  持久化 存储
  //           setStore("token", token);
  //           setStore("id", id);
  //       } else {
  //         console.log("error submit!!");
  //         return false;
  //       }
  //    }
  //   });
  // }
}
}
</script>

<style scoped>
.el-main {
  color: #333;
  text-align: center;
  height: 100vh;
  padding: 0px;
  background-color: rgb(45, 45, 63);
  position: relative;
}
.cover {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
}
.el-button {
  width:207px
}
.loginbox {
  position: absolute;
  color: #fff;
  font-weight: 700;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
