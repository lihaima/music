<template>
  <div class="register">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="registerMessage.username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="registerMessage.phone"
          name="phone"
          label="手机号码"
          placeholder="手机号码"
          :rules="[
            { required: true, message: '请输入手机号码' },
            { pattern, message: '请输入正确内容' },
            { validator: verifyPhone, message: '手机号码已经被注册' },
          ]"
        />
        <van-field
          v-model="registerMessage.password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-row>
          <van-col span="15">
            <van-field
              v-model="registerMessage.verify"
              name="verify"
              label="验证码"
              placeholder="验证码"
              :rules="[
                { required: true, message: '请填写验证码' },
                { validator: verifyCode, message: '验证码错误' },
              ]"
            />
          </van-col>
          <van-col span="5" offset="4">
              <van-button round size="mini" @click="getCaptcha" :disabled="isDisabled" type="primary">{{isCount}}</van-button>
          </van-col>
        </van-row>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <span @click="Q">aaaaa</span>
  </div>
</template>

<script setup>
import {
  reqDetectionPhone,
  reqCaptcha,
  reqVerifyCaptcha,
  reqRegister
} from "../../api/index";
import { reactive, ref } from "vue";
import loginStore from '../../store/login'
const state = loginStore()

// 注册用户信息
const registerMessage = reactive({
  username: "",
  phone: "",
  password: "",
  verify: "",
});

let isDisabled = ref(false)
let isCount = ref("获取验证码")

// 手机号码验证
const pattern = /^1(3[0-9]|5[0-3,5-9]|7[1-3,5-8]|8[0-9])\d{8}$/;
const verifyPhone = async (value) => {
  let detection = await reqDetectionPhone(value);
  if (detection.code === 200) {
    if (detection.exist !== -1) return false;
    return true;
  }
  return false;
};

// 获取验证码
const getCaptcha = async () => {
  if (!registerMessage.phone) return;
  isDisabled.value=true
   let s = 60
   isCount.value=s+"秒"
  let item = setInterval(()=>{
     
      isCount.value=s+"秒"
      s--
  },1000)
  setTimeout(()=>{
      clearInterval(item)
      isDisabled.value=false
      isCount.value="获取验证码"
  },61000)
  let captcha = await reqCaptcha(registerMessage.phone);
};

// 校验验证码
const verifyCode = async (value) => {
  try {
    let verify = await reqVerifyCaptcha(registerMessage.phone, value);
    if (verify.code === 200) {
      return true;
    }
  } catch (err) {
    return false;
  }
  return false;
};

// 注册
const onSubmit = async (value) => {
    const { username,phone,password,verify} = value
    let register = await reqRegister(username,phone,password,verify)
    if(register.code===200){
        console.log(注册成功);
        state.isShowRegister=false
    }else{
        console.log(register.message);
       
    }
    console.log(register);
};
</script>

<style scoped lang='less'>
</style>