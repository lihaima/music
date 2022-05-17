<template>
<!-- 轮播图 -->
  <van-swipe :autoplay="1500" lazy-render>
    <van-swipe-item v-for="(item, index) in state.banner" :key="index">
      <img :src="item.pic" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup>
import homeStore from "../../../store/home";
const state = homeStore();
</script>

<style scoped lang="less">
.van-swipe {
  width: 100%;
  margin-top: 10rem;
  border-radius: 10rem;
  .van-swipe-item {
    width: 100%;
    height: 150rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>