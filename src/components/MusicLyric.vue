<template>
  <div class="MusicLyric">
    <img :src="play?.al?.picUrl" alt="" class="bgimg" />
    <!-- 信息 -->
    <div class="top">
      <div class="left">
        <svg class="icon" aria-hidden="true" @click="popup">
          <use xlink:href="#icon-zuo"></use>
        </svg>
        <div class="name">
          <Vue3Marquee>
            {{ play.name }}
          </Vue3Marquee>
          <span class="singerName"
            >{{ play.ar[0].name }}
            <svg class="icon" aria-hidden="true" @click="popup">
              <use xlink:href="#icon-you"></use></svg
          ></span>
        </div>
      </div>
      <div class="right">
        <svg class="icon" aria-hidden="true" @click="popup">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <!-- 中间 -->
    <van-swipe :loop="false" :show-indicators="false">
      <van-swipe-item>
        <!-- 唱片 -->
        <div class="centre">
          <img
            src="../assets/magneticNeedle.png"
            alt=""
            class="imgNeedle"
            :class="{ Needle: isBtnShow }"
          />
          <img src="../assets/cd.png" alt="" class="imgCd" />
          <img
            :src="play?.al?.picUrl"
            alt=""
            class="imgban"
            :class="{ 'rotate-enter': isBtnShow, 'rotate-leave': !isBtnShow }"
          />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <!-- 歌词 -->
        <div class="musicLyric" ref="musicLyric">
          <p
            v-for="(item, index) in lyric"
            :key="index"
            :class="{
              active:
                currentTime * 1000 >= item.time &&
                currentTime * 1000 < item.pre,
            }"
          >
            {{ item.lrc }}
          </p>
        </div>
      </van-swipe-item>
    </van-swipe>

    <!-- 控件 -->
    <div class="flooter">
      <div class="moreOperation">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-aixin"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yinlechangpian"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xinxi"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao-"></use>
        </svg>
      </div>
      <!-- 进度条 -->
      <div class="progressBar">
        <span>{{ current(currentTime) }}</span>
        <van-slider
          class="range"
          v-model="currentTime"
          button-size="16rem"
          :min="0"
          :max="duration"
          :step="0.01"
          bar-height="2rem"
          active-color="#000"
          @change="changeSchedule"
        />
        <span>{{ current(duration) }}</span>
      </div>
      <!-- 控件 -->
      <div class="musicPlay">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-24gl-repeatOnce2"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="onA">
          <use xlink:href="#icon-shangyishou_huaban"></use>
        </svg>
        <svg
          class="icon icon1"
          aria-hidden="true"
          @click="porps.play"
          v-if="isBtnShow"
        >
          <use xlink:href="#icon-zanting"></use>
        </svg>
        <svg class="icon icon1" aria-hidden="true" @click="porps.play" v-else>
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="theFollowingPiece">
          <use xlink:href="#icon-xiayishou_huaban"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="songList">
          <use xlink:href="#icon-unorderedlist"></use>
        </svg>
      </div>
    </div>

    <!-- 播放歌曲列表 -->
    <van-popup
      v-model:show="songListPopups"
      round
      position="bottom"
      :style="{ height: '50%' }"
    >
      <Songs close="lyric" />
    </van-popup>
  </div>
</template>

<script setup>
import { computed, onMounted, watch, ref } from "vue";
import { storeToRefs } from "pinia";
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import { current } from "../hooks/itemMisic";
import itemMusicStore from "../store/itemMusic";
import Songs from "./Songs.vue";
const porps = defineProps(["play", "currentTime"]);
const state = itemMusicStore();
const {
  isBtnShow,
  playList,
  playListIndex,
  currentTime,
  duration,
  songListPopups,
  lyricList,
} = storeToRefs(state);
// 修改进度条
const changeSchedule = (value) => {
  porps.currentTime(value);
};

// 重写歌词
let lyric = computed(() => {
  let arr = [];
  if (lyricList) {
    arr = lyricList.value.split(/[(\r\n)\r\n]+/).map((item) => {
      let min = item.slice(1, 3);
      let sec = item.slice(4, 6);
      let mill = item.slice(7, 10);
      let lrc = item.slice(11);
      let time =
        parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
      if (isNaN(Number(mill))) {
        mill = item.slice(7, 9);
        lrc = item.slice(10);
        time =
          parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
      }
      return { min, sec, mill, lrc, time };
    });
    arr = arr.filter((item) => {
      return item.lrc != "";
    });
    arr.forEach((item, index) => {
      if (index === arr.length - 1) {
        item.pre = duration.value * 1000;
      } else {
        item.pre = arr[index + 1].time;
      }
    });
  }
  return arr;
});

// 播放歌曲信息
const play = computed(() => {
  return playList.value[playListIndex.value];
});

// 下一首歌
const theFollowingPiece = () => {
  if (playList.value.length > playListIndex.value + 1) {
    state.playListIndex++;
  } else {
    state.playListIndex = 0;
  }
};
// 上一首歌
const onA = () => {
  if (playListIndex.value === 0) {
    state.playListIndex = playList.value.length - 1;
  } else {
    state.playListIndex -= 1;
  }
};
// 关闭歌曲详情页
const popup = () => {
  state.playshow = false;
};

// 打开歌曲列表页
const songList = () => {
  state.songListPopups = true;
};

// 修改歌词位置
let musicLyric = ref(null);

watch([currentTime], () => {
  let p = document.querySelector("p.active");
  if (p?.offsetTop > 180) {
    musicLyric.value.scrollTop = p?.offsetTop - 180;
  }
});
watch([playListIndex], () => {
  musicLyric.value.scrollTop = 0;
});
</script>

<style scoped lang='less'>
.MusicLyric {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  // 背景
  .bgimg {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(80rem);
  }
  // 头部
  .top {
    display: flex;
    justify-content: space-between;
    padding: 10rem;
    color: #fff;
    .left {
      display: flex;
      .name {
        margin-left: 20rem;
        width: 150rem;

        .singerName {
          display: flex;
          align-items: center;
          color: #cdcdcd;
          .icon {
            width: 22rem;
            height: 22rem;
          }
        }
      }
    }
  }
  // 中间
  .van-swipe {
    width: 100%;
    height: 350rem;
    .van-swipe-item {
      height: 100%;
      .centre {
        width: 100%;
        height: 350rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .imgNeedle {
          width: 120rem;
          position: absolute;
          left: 50%;
          z-index: 1;
          transform-origin: top left;
          transition: all 1s;
        }
        .Needle {
          transform: rotate(12deg);
          translate: all 1s;
        }
        .imgCd {
          width: 240rem;
          position: absolute;
          bottom: 0;
        }
        .imgban {
          width: 150rem;
          height: 150rem;
          border-radius: 50%;
          position: absolute;
          bottom: 45rem;
          animation: rotate 10s linear infinite;
        }
        .rotate-enter {
          animation-play-state: running;
        }
        .rotate-leave {
          animation-play-state: paused;
        }
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
      .musicLyric {
        width: 100%;
        height: 100%;
        overflow: scroll;
        p {
          text-align: center;
          width: 100%;
          height: 40rem;
        }
        .active {
          transition: all 1s;
          color: #fff;
          font-size: 20rem;
        }
      }
    }
  }

  // 歌词

  //   底部
  .flooter {
    height: 200rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20rem 0;
    .moreOperation {
      display: flex;
      justify-content: space-around;
      .icon {
        width: 30rem;
        height: 30rem;
      }
    }
    // 进度条
    .progressBar {
      display: flex;
      align-items: center;
      span {
        padding: 0 10rem;
      }
    }
    .musicPlay {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .icon {
        width: 30rem;
        height: 30rem;
      }
      .icon1 {
        width: 50rem;
        height: 50rem;
      }
    }
  }
}
</style>