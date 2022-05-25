<template>
  <!-- 导航栏 -->
  <div class="navigation">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-gengduo"></use>
    </svg>
    <div class="nav-content">
      <span @click="goMy" :class="{'recommend':path==='/my'}">我的</span>
      <span @click="goRecommend" :class="{'recommend':path==='/home'}">推荐</span>
      <span>电台</span>
      <span>视频</span>
    </div>
    <svg class="icon" aria-hidden="true" @click="goSearch">
      <use xlink:href="#icon-sousuo"></use>
    </svg>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()

const path = router.currentRoute.value.path

// 跳转首页
const goRecommend = () => {
  router.push({path:"/"})
}
// 跳转我的页
const goMy = () => {
  router.push({path:"/my"})
}
console.log( );
// 跳转搜索页
const goSearch = () => {
  router.push({path:"/search"})
}
</script>

<style scoped lang="less">
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-content {
    display: flex;
    flex: 1;
    justify-content: space-around;
    font-size: 20rem;
    align-items: center;
  }
  .recommend {
    font-weight: 900;
  }
}
</style>