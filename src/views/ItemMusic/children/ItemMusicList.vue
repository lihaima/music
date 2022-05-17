<template>
  <div class="ItemMusicList">
    <div class="top">
      <div class="top-left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <div class="counts">
          <h4>播放全部</h4>
          <span class="quantity">(共{{ detailSongs.length }}首)</span>
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
    <div class="MusicList">
      <div class="item" v-for="(item, index) in detailSongs" :key="index">
        <div class="item-left" @click="switchover(detailSongs, index)">
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
import itemMusicStore from "../../../store/itemMusic";
import { storeToRefs } from "pinia";

const state = itemMusicStore();
const { detailSongs ,detailPrivileges} = storeToRefs(state);

const switchover = (detailSongs, index) => {
  state.playListIndex = index
  state.playList = detailSongs
};
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