<template>
  <van-swipe vertical :loop="false" :height="50">
  <van-swipe-item v-for="(item,index) in playList" :key="item.id" @click="play(index)">
     <div class="item">
         <div class="name">
             <span>{{item.name}}</span>
         <span v-for="item in item.ar" :key="item.id" class="singer">
             {{item.name}}
         </span>
         </div>
         <svg class="icon" aria-hidden="true" @click="songList" v-if="index===playListIndex">
          <use xlink:href="#icon-zhengzaibofang"></use>
        </svg>
     </div>
  </van-swipe-item>

</van-swipe>  <div class="close" @click="close">
      关闭
  </div>
</template>

<script setup>
import {defineProps} from "vue"
import { storeToRefs } from "pinia";
import itemMusicStore from "../store/itemMusic";
const state = itemMusicStore();
const {playList,playListIndex} = storeToRefs(state)
const props = defineProps(['close'])

const close = () => {
    if(props.close === "lyric"){
        return state.songListPopups = false
    }else if(props.close === "flooter"){
       return state.floorSongList = false
    }
   
}

const play = (index) => {
    state.playListIndex = index
}

</script>

<style scoped lang='less'>
.van-popup{
    .van-swipe-item{
        .item{
            display: flex;
            justify-content: space-between;
            padding: 20rem;
            border-top:0.1rem solid #999 ;
            .name{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                .singer{
                    color: #999;
                    margin-left:20rem ;
                    font-size: 12rem;
                }
            }
        }
    }
    .close{
        width: 100%;
        border-top:1rem solid #cdcdcd ;
        height: 40rem;
        background-color: #fff;
        text-align: center;
        line-height: 40rem;
        position: sticky;
        bottom: 0;
        left: 0;
    }
}
</style>