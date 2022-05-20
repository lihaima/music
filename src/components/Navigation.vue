<template>
  <!-- 导航栏 -->
  <div class="navigation">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-gengduo"></use>
    </svg>
    <div class="nav-content">
      <span>我的</span>
      <span class="recommend">推荐</span>
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