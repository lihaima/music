<template>
  <div class="ItemMusicList">
    <!-- 头 -->
    <div class="top">
      <div class="top-left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <div class="counts">
          <h4>播放全部</h4>
          <span class="quantity">(共{{ state.detailSongs.length }}首)</span>
        </div>
      </div>
      <div class="top-right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jia"></use>
        </svg>
        <span>收藏({{ state?.detailPlaylist?.subscribedCount }})</span>
      </div>
    </div>
    <!-- 歌单列表 -->
    <SongList :songs="songs"/>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import itemMusicStore from "../../../store/itemMusic";
import SongList from '../../../components/SongList.vue'
const state = itemMusicStore();

const songs = computed(()=>{
  return state.detailSongs
})


</script>

<style scoped lang='less'>
.ItemMusicList {
  margin-top: 30rem;
  background: #fff;
  border-radius: 10rem 10rem 0 0;
  .top {
    display: flex;
    justify-content: space-between;
    padding: 10rem;
    .top-left {
      display: flex;
      align-items: center;
      .icon {
        width: 24rem;
        height: 24rem;
      }
      .counts {
        margin-left: 16rem;
        display: flex;
        align-items: flex-end;

        .quantity {
          color: #c0c0c0;
          font-size: 12rem;
        }
      }
    }
    .top-right {
      background: red;
      border-radius: 20rem;
      color: #fff;
      padding: 10rem;
      display: flex;
      align-items: center;

      .icon {
        width: 12rem;
        height: 12rem;
      }
      span {
        font-size: 14rem;
        margin-left: 6rem;
      }
    }
  }
}
</style>