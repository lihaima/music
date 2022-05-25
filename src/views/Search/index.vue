<template>
  <div class="search">
    <div class="top">
      <svg class="icon" aria-hidden="true" @touchstart="retreats">
        <use xlink:href="#icon-zuo"></use>
      </svg>
      <input type="text" class="input" v-model="keywords" />
      <div class="searchMusic" @click="searchMusic">搜索</div>
    </div>
    <!-- 歌曲列表 -->
    <SongList :songs="songs"/>
  </div>
</template>

<script setup>
import {ref,computed} from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();
import searchStore from "../../store/search";
import SongList from '../../components/SongList.vue'
const state = searchStore();

// 搜索歌曲列表
const songs = computed(()=>{
  return state.playList
})

// 后退一步
const retreats = () => {
  router.back()
};

// 搜索歌曲名
const keywords = ref("");
const searchMusic = () => {
  if (keywords.value === "") return;
  state.getSearch(keywords.value);
};
</script>

<style scoped lang='less'>
.search {
  padding: 10rem;
  background: rgb(165,152,148);
  // 头
  .top {
    display: flex;
    align-items: center;
    .icon {
      width: 30rem;
      height: 30rem;
    }
    .input {
      flex: 1;
      border-radius: 20rem;
      border: none;
      margin-left: 10rem;
      height: 30rem;
      padding-left: 20rem;
      background-color: rgb(234, 234, 240);
      border: 2rem solid rgb(224, 224, 226);
    }
    .searchMusic {
      width: 60rem;
      height: 30rem;
      background: #b87333;
      color: #fff;
      text-align: center;
      line-height: 30rem;
      border-radius: 20rem;
      margin-left: 10rem;
    }
  }
}
</style>