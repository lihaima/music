<template>
  <div class='my'>
    <Navigation />
     <div class="top" v-if="!userInfo.backgroundUrl">
      <div class="name">
        <img src="../../assets/userLogin.jpg" alt="">
      <span @click="goLogin">登录</span>
      </div>
     </div>
     <div class="top" v-else>
       <div class="name">
         <img :src="userInfo?.backgroundUrl" alt="">
      <span>{{userInfo?.nickname}}</span>
       </div>
       <span @click="logout">退出登录</span>
     </div>
     <div class="content">
       <div class="collect">
         收藏歌曲
       </div>
       <div class="recently">
         最近播放
       </div>
     </div>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import {reqLogout} from '../../api/index'
import { Toast} from "vant"
import Navigation from '../../components/Navigation.vue'
import {useRouter} from "vue-router"
const router = useRouter()
import loginStore from '../../store/login'
import login from '../../store/login'
const state = loginStore()

const userInfo = computed(()=>{
  return state.userInfo
})
// 跳转登录
const goLogin = () => {
  router.push({path:"/login"})
}

// 退出登录
const logout = async () => {
  let logut = await reqLogout()
  if(logut.code ===200){
    state.userInfo = {}
  localStorage.removeItem("token")
  localStorage.removeItem("userInfo")
  Toast.success('退出成功');
  }

}
</script>

<style scoped lang='less'>
.my{
  padding: 20rem;
  .top{
    padding: 10rem;
    box-shadow: 1rem 1rem 10rem rgba(0, 0, 0, 0.3);
    margin-top: 20rem;
    align-items: center;
    justify-content: space-between;
    display: flex;
    .name{
    display: flex;
    align-items: center;  
    img{
      width: 70rem;
      height: 70rem;
      border-radius: 50%;
    }
    span{
      font-size: 20rem;
      margin-left:20rem ;

    }
    }
  }
  .content{
    width: 100%;
    height: 60rem;
    margin-top: 20rem;
    display: flex;
    line-height: 60rem;
    .collect,.recently{
      text-align: center;
      width: 120rem;
      height: 100%;
      background: rgba(0, 0, 0, 0.3); 
      border-radius: 20rem;
    }
    .recently{
       margin-left: 10rem;
    }
  }
}
</style>