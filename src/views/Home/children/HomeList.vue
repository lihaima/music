<template>
  <!-- 推荐 -->
  <div class="homeList">
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jinrituijian"></use>
        </svg>
        <span>今日推荐</span>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sirenFM"></use>
        </svg>
        <span>私人FM</span>
      </li>
      <li @click="goArtist">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-geshou"></use>
        </svg>
        <span>歌手</span>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paihangbang-"></use>
        </svg>
        <span>排行榜</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
const goArtist = () => {
  router.push({path:"/artist"})
}
</script>

<style scoped lang='less'>
.homeList {
  margin-top: 10rem;
  ul {
    display: flex;
    justify-content: space-between;
    height: 70rem;
    padding: 0 10rem;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      font-size: 15rem;
      font-weight: 500;
      .icon {
        width: 30rem;
        height: 30rem;
      }
    }
  }
}
</style>