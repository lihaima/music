<template>
  <div class='artistSongs'>
      <MusicTop :name="artists?.name" :isShow="true" />
      <div class="name">
          <img :src="artists?.picUrl" alt="">
      </div>
      <!-- 歌曲列表 -->
     <SongsList :songs="songs" />
  </div>
</template>

<script setup>
import {onMounted,computed} from 'vue'
import artistStore from '../store/artist'
import MusicTop from './MusicTop.vue'
import SongsList from './SongList.vue'
const state = artistStore()

// 歌曲列表
const songs = computed(()=>{
    return state.songsList
})

// 歌手信息
const artists = computed(()=>{
    return state.artist
})

</script>

<style scoped lang='less'>
.artistSongs{
    .name{
        img{
            width: 100%;
            height: 300rem;
        }
    }
}
</style>