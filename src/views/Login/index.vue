<template>
  <div class="login">
    <MusicTop />
     <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="userMessage.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="userMessage.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <span @click="goRegister">立即注册</span>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
     
    </van-form>
     <button @click="logout">退出登录</button>
    <van-popup v-model:show="state.isShowRegister" position="right" :style="{ height: '100%',width:'100%' }" >
      <Register />
    </van-popup>
    
  </div>
</template>

<script setup>
import { Toast} from "vant"
import {reqLogout} from '../../api/index'
import { reactive, ref } from "vue";
import MusicTop from "../../components/MusicTop.vue";
import Register from './Register.vue'
import loginStore from '../../store/login'
const state = loginStore()

// 用户登录信息
let userMessage = reactive({
  username:"",
  password:""
})

// 登录
const onSubmit = () => {
    state.getLogin(userMessage)
    Toast.success('登录成功');
}

// 去注册页
const goRegister = () => {
  state.isShowRegister = true
}

// 退出登录
const logout = async () => {
  console.log(await reqLogout());
  Toast.success('退出成功');
}
</script>

<style scoped lang='less'>
.login{
  height: 100vh;
  .van-form{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    // align-items: flex-end;
    text-align: right;
    .span{
      float: right;
    }
  }
}
</style>