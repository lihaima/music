<template>
  <div class="flooterMusic" v-if="playList.length">
    <!-- 播放信息 -->
    <div class="left" @click="popup">
      <img :src="playList[playListIndex]?.al.picUrl" alt="" />
      <div class="name">
        <span class="title">{{ playList[playListIndex]?.name }}</span>
        <span>横划切换歌曲</span>
      </div>
    </div>
    <!-- 播放控件 -->
    <div class="right">
      <svg class="icon" aria-hidden="true" @touchstart="play" v-if="isBtnShow">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @touchstart="play" v-else>
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="showPopups">
        <use xlink:href="#icon-unorderedlist"></use>
      </svg>
    </div>
    <!-- 音乐播放 -->
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
      @timeupdate="timeUpadte"
      @ended="finish"
    ></audio>
    <!-- 弹出层 -->
    <van-popup
      v-model:show="playshow"
      position="right"
      :style="{ height: '100%', width: '100%' }"
    >
      <MusicLyric :play="play" :currentTime="time" />
    </van-popup>
     <van-popup


      v-model:show="floorSongList"
      round
      position="bottom"
      :style="{ height: '50%' }"
    >
    <SongList close="flooter" />
    </van-popup>
  </div>
</template>

<script setup>
import { ref, watch, nextTick,onUpdated } from "vue";
import { storeToRefs } from "pinia";
import itemMusicStore from "../store/itemMusic";
import MusicLyric from "../components/MusicLyric.vue";
import SongList from './SongList.vue'
const state = itemMusicStore();
const { isBtnShow, playList, playListIndex, playshow,currentTime,duration,floorSongList} = storeToRefs(state);
let audio = ref();
// 播放暂停音乐
const play = () => {
  setTimeout(() => {
    if (audio?.value?.paused) {
     transmit()
    } else {
      pause()
    }
  }, 10);
};

// 获取当前播放时间
const timeUpadte = (e) =>{
  state.currentTime=e.target.currentTime
}
onUpdated(()=>{
  state.lyric(playList?.value[playListIndex.value].id)
})

// 移动滑块调用
let time = (value) => {
  audio.value.currentTime=value
  transmit()
}

// 暂停歌曲
const pause = () => {
state.isBtnShow = 0;
      audio?.value?.pause();
}
// 播放
const transmit = () => {
 state.isBtnShow = 1;
      audio?.value?.play();
      setDuration()
}

// 获取总时长
const setDuration = () => {
  setTimeout(()=>{
    state.duration = audio?.value?.duration
  },1000)
}

// 切换歌曲播放
watch(()=>
  [playList, playListIndex],
  () => {
    nextTick(() => {
      transmit()
    });
  },
  { deep: true }
);
// 播放结束
const finish = () => {
  // pause()
  if(playList.value.length>=playListIndex.value+1){
    return pause()
  }
  return state.playListIndex++
}
// 显示播放页
const popup = () => {
  state.playshow = true;
};
// 歌单列表页
const showPopups = () => {
  state.floorSongList = true
}
</script>

<style scoped lang='less'>
.flooterMusic {
  width: 100%;
  height: 50rem;
  background: #fff;
  position: sticky;
  bottom: 0;
  left: 0;
  border-top: 1rem solid #cdcdcd;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  .left {
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .name {
      width: 170rem;
      display: flex;
      flex-direction: column;
      font-size: 14rem;
      .title {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    img {
      width: 40rem;
      height: 40rem;
      border-radius: 50%;
    }
  }
  .right {
    width: 80rem;
    display: flex;
    justify-content: space-around;
  }
}
</style>