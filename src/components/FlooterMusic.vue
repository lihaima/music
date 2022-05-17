<template>
  <div class="flooterMusic">
    <div class="left" @click="popup">
      <img :src="playList[playListIndex]?.al.picUrl" alt="" />
      <div class="name">
        <span class="title">{{ playList[playListIndex]?.name }}</span>
        <span>横划切换歌曲</span>
      </div>
    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true" @touchstart="play" v-if="isBtnShow">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @touchstart="play" v-else>
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-unorderedlist"></use>
      </svg>
    </div>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
    ></audio>
    <van-popup
      v-model:show="playshow"
      position="right"
      :style="{ height: '100%', width: '100%' }"
    >
      <MusicLyric :play="play" />
    </van-popup>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import { storeToRefs } from "pinia";
import itemMusicStore from "../store/itemMusic";
import MusicLyric from "../components/MusicLyric.vue";
const state = itemMusicStore();
const { isBtnShow, playList, playListIndex, playshow,currentTime,duration } = storeToRefs(state);
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
// 暂停歌曲
const pause = () => {
state.isBtnShow = 0;
      audio?.value?.pause();
      clearInterval(currentTimes)
}
// 播放
const transmit = () => {
 state.isBtnShow = 1;
      audio?.value?.play();
      setCurrentTime()
      setDuration()
}
// 获取当前时间
let currentTimes = null
const setCurrentTime = ()=>{
  currentTimes = setInterval(()=>{
    state.currentTime=audio.value.currentTime
  },1000)
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
// 播放结束暂替歌曲
watch([currentTime],()=>{
  if(currentTime?.value===duration?.value){
    // pause()
    state.playListIndex++
  }
})
// 显示歌词
const popup = () => {
  state.playshow = true;
};
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