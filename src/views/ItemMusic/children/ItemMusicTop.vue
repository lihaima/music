<template>
  <div class="itemMusicTop">
    <img :src="detailPlaylist.coverImgUrl" alt="" />
    <div class="top">
      <div class="top-left">
        <svg class="icon" aria-hidden="true" @touchstart="retreats">
          <use xlink:href="#icon-zuo"></use>
        </svg>
        <span>歌单</span>
      </div>
      <div class="top-right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </div>
    </div>
    <div class="centre">
      <div class="centre-left">
        <img :src="detailPlaylist.coverImgUrl" alt="" />
        <span class="quantity">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang2"></use>
          </svg>
          {{ changeCount(detailPlaylist.playCount) }}
        </span>
      </div>
      <div class="centre-right">
        <div class="description">{{ detailPlaylist.name }}</div>
        <div class="center-user">
          <img :src="detailPlaylist.coverImgUrl" alt="" />
          <span>{{ detailPlaylist?.creator?.nickname }}&nbsp;></span>
        </div>
        <div class="introduce">{{ detailPlaylist.description }}&nbsp;></div>
      </div>
    </div>
    <div class="floor">
      <div class="floor-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xinxi"></use>
        </svg>
        <span>{{ detailPlaylist.commentCount }}</span>
      </div>
      <div class="floor-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{ detailPlaylist.shareCount }}</span>
      </div>
      <div class="floor-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="floor-item">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-show_duoxuan"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import itemMusic from "../../../store/itemMusic";
import { retreat, changeCount } from "../../../hooks/itemMisic";

const router = useRouter();
const state = itemMusic();

const { detailPlaylist } = storeToRefs(state);

// 后退
const retreats = () => {
  retreat(router);
};
</script>

<style scoped lang='less'>
.itemMusicTop {
  width: 100%;
  // 蒙版图
  & > img {
    width: 100%;
    filter: blur(30rem);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  // 头
  .top {
    display: flex;
    justify-content: space-between;
    height: 30rem;
    margin-top: 10rem;
    .top-left,
    .top-right {
      width: 100rem;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #fff;
    }
  }
  //   内容
  .centre {
    margin-top: 10rem;
    padding: 10rem;
    height: 160rem;
    display: flex;
    .centre-left {
      height: 100%;
      width: 140rem;
      position: relative;
      .quantity {
        position: absolute;
        top: 5rem;
        right: 5rem;
        color: #fff;
        display: flex;
        align-items: center;
        .icon {
          width: 16rem;
          height: 16rem;
        }
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 10rem;
      }
    }
    .centre-right {
      flex: 1;
      padding: 0 10rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .center-user {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .description {
        display: -webkit-box;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-indent: 2rem;
        font-size: 18rem;
        color: #fff;
      }
      .center-user {
        height: 30rem;
        display: flex;
        align-items: center;
        img {
          height: 100%;
          width: 30rem;
          border-radius: 50%;
        }
        span {
          font-size: 14rem;
          display: -webkit-box;
          overflow: hidden;
          white-space: normal;
          text-overflow: ellipsis;
          word-wrap: break-word;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          margin-left: 5rem;
        }
      }
      .introduce {
        display: -webkit-box;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
    }
  }
  .floor {
    display: flex;
    justify-content: space-around;
    color: #fff;
    margin-top: 10rem;
    .floor-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>