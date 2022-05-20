<template>
  <div class='artistSongs'>
      <MusicTop :name="artists?.name" :isShow="true" />
      <div class="name">
          <img :src="artists?.picUrl" alt="">
      </div>
      <div class="MusicList">
      <div class="item" v-for="(item, index) in songs" :key="index">
        <div class="item-left" @click="switchover(songs, index)">
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
  </div>
</template>

<script setup>
import MusicTop from './MusicTop.vue'
import {defineProps,onMounted,computed} from 'vue'
import {storeToRefs} from "pinia"
import artistStore from '../store/artist'
import itemMusicStore from '../store/itemMusic'
const state = artistStore()

// 歌曲列表
const songs = computed(()=>{
    return state.songsList
})

// 歌手信息
const artists = computed(()=>{
    return state.artist
})

// 获取歌曲列表
onMounted(()=>{
state.getSongs(artists?.value?.id)
})

// 播放歌曲
const switchover = (songs, index) => {
  itemMusicStore().playListIndex = index
  itemMusicStore().playList = songs
};

</script>

<style scoped lang='less'>
.artistSongs{
    .name{
        img{
            width: 100%;
            height: 300rem;
        }
    }
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
}
</style>