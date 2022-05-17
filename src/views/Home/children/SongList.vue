<template>
  <!-- 发现好歌单 -->
  <div class="SongList">
    <div class="title">
      <h1>发现好歌单</h1>
      <div class="more">查看更多</div>
    </div>
    <div class="content">
      <van-swipe :loop="false" :width="120" :show-indicators="false">
        <van-swipe-item v-for="item in state.recommend" :key="item.id">
          <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
          <div class="Img">
            <img :src="item.picUrl" alt="" />
            <span class="quantity">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang2"></use>
              </svg>
              {{ changeCount(item.playCount) }}
            </span>
          </div>
          <div class="name">{{ item.name }}</div>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script setup>
import homeStore from "../../../store/home";
const state = homeStore();
import {retreat,changeCount} from '../../../hooks/itemMisic'
</script>

<style scoped lang='less'>
.SongList {
  margin-top: 15rem;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 20rem;
    }
    .more{
      border: 1rem solid #000;
      border-radius: 15rem;
      padding: 5rem 10rem;
      font-size: 12rem;
    }
  }
  .content {
    margin-top: 15rem;
    height: 170rem;
    width: 100%;
    .van-swipe {
      height: 100%;
      .van-swipe-item {
        padding-right:5rem;
        .Img {
          position: relative;
          .quantity {
            position: absolute;
            top: 5rem;
            right: 5rem;
            color: #fff;
            display: flex;
            align-items: center;
            .icon {
              width: 15rem;
              height: 15rem;
            }
          }
          img {
            width: 100%;
            height: 110rem;
            border-radius: 5rem;
          }
        }
        .name{
          display: -webkit-box;
          overflow: hidden;
          white-space:normal;
          text-overflow: ellipsis;
          word-wrap: break-word;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: 14rem;
          color: #000;
        }
      }
    }
  }
}
</style>