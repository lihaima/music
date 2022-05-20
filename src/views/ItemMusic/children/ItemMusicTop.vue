<template>
  <div class="itemMusicTop">
    <img :src="detailPlaylist.coverImgUrl" alt="" />
    <MusicTop name="歌单"/>
    <!-- 内容 -->
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
    <!-- 控件 -->
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
import MusicTop from '../../../components/MusicTop.vue'
import { storeToRefs } from "pinia";
import itemMusic from "../../../store/itemMusic";
import {changeCount } from "../../../hooks/itemMisic";

const state = itemMusic();
const { detailPlaylist } = storeToRefs(state);

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
  //   内容
  .centre {
    margin-top: 10rem;
    padding: 10rem;
    height: 160rem;
    display: flex;
    width: 100%;
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
        width: 140rem;
        height: 140rem;
        border-radius: 10rem;
      }
    }
    .centre-right {
      width: 200rem;
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