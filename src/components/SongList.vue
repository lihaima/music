<template>
<!-- 歌曲列表 -->
   <div class="MusicList">
      <div class="item" v-for="(item, index) in props.songs" :key="index">
        <div class="item-left" @click="switchover(props.songs, index)">
          <span>{{ index + 1 }}</span>
          <div class="name">
            <span>{{ item?.name }}</span
            ><br />
            <span style="color: #c0c0c0">{{ item?.ar[0]?.name }}</span>
          </div>
        </div>
        <div class="item-right">
          <svg class="icon icon1" aria-hidden="true" v-if="item.mv != 0">
            <use xlink:href="#icon-bofang"></use>
          </svg>
          <svg class="icon icon2" aria-hidden="true">
            <use xlink:href="#icon-gengduo"></use>
          </svg>
        </div>
      </div>
    </div>
</template>

<script setup>
import itemMusicStore from "../store/itemMusic";
import { storeToRefs } from "pinia";
const state = itemMusicStore();
const { detailSongs} = storeToRefs(state);
const props = defineProps(['songs'])

const switchover = (detailSongs, index) => {
  state.playListIndex = index
  state.playList = detailSongs
};
</script>

<style scoped lang='less'>
 .MusicList {
    .item {
      display: flex;
      justify-content: space-between;
      padding: 10rem;
      .item-left {
        width: 240rem;
        display: flex;
        font-size: 14rem;
        align-items: center;
        .name {
          width: 100%;
          margin-left: 20rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .item-right {
        width: 80rem;
        color: #c0c0c0;
        .icon1 {
          float: left;
        }
        .icon2 {
          float: right;
        }
      }
    }
  }
</style>