<template>
  <div class="search">
    <div class="top">
      <svg class="icon" aria-hidden="true" @touchstart="retreats">
        <use xlink:href="#icon-zuo"></use>
      </svg>
      <input type="text" class="input" v-model="keywords" />
      <div class="searchMusic" @click="searchMusic">搜索</div>
    </div>
    <div class="musicList">
      <div class="item" v-for="(item, index) in playList" :key="item.id" @click="play(index)">
        <div class="left">
          <span>{{ index + 1 }}</span>
          <div class="name">
            <span>{{ item.name }}</span>
            <p class="p">
              <span v-for="list in item?.ar" :key="list.id">{{
                list.name
              }}</span>
            </p>
          </div>
        </div>
        <div class="right">
          <svg
            class="icon icon1"
            aria-hidden="true"
            @touchstart="retreats"
            v-if="item.mv != 0"
          >
            <use xlink:href="#icon-bofang"></use>
          </svg>
          <svg class="icon icon2" aria-hidden="true" @touchstart="retreats">
            <use xlink:href="#icon-gengduo"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { retreat } from "../../hooks/itemMisic";
const router = useRouter();
import { storeToRefs } from "pinia";
import searchStore from "../../store/search";
import itemMusicStore from '../../store/itemMusic'
const state = searchStore();
const { playList } = storeToRefs(state);
// 后退一步
const retreats = () => {
  retreat(router);
};

// 搜索歌曲名
const keywords = ref("");
const searchMusic = () => {
  if (keywords.value === "") return;
  state.getSearch(keywords.value);
};

const play = (index) => {
    itemMusicStore().playList = playList.value
    itemMusicStore().playListIndex = index
}

</script>

<style scoped lang='less'>
.search {
  padding: 10rem;
  .top {
    display: flex;
    align-items: center;
    .icon {
      width: 30rem;
      height: 30rem;
    }
    .input {
      flex: 1;
      border-radius: 20rem;
      border: none;
      margin-left: 10rem;
      height: 30rem;
      padding-left: 20rem;
      background-color: ghostwhite;
    }
    .searchMusic {
      width: 60rem;
      height: 30rem;
      background: #b87333;
      text-align: center;
      line-height: 30rem;
      border-radius: 20rem;
      margin-left: 10rem;
    }
  }
  .musicList {
    margin-top: 20rem;
    .item {
      display: flex;
      justify-content: space-between;
      height: 60rem;
      align-items: center;
      background: #fff;
      .left {
        flex: 1;
        display: flex;
        align-items: center;
        .name {
          margin-left: 20rem;
          display: flex;
          flex-direction: column;
          span{
               width: 200rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .p {
            width: 200rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            span {
                color: #999;
                font-size: 12rem;
              margin-right: 10rem;
            }
          }
        }
      }
      .right {
        width: 100rem;
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