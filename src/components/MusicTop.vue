<template>
  <div class="top">
      <div class="top-left">
        <svg class="icon" aria-hidden="true" @touchstart="retreats">
          <use xlink:href="#icon-zuo"></use>
        </svg>
        <span>{{props.name}}</span>
      </div>
      <div class="top-right">
        <svg class="icon" aria-hidden="true" @click="goSearch">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'
import {retreat} from '../hooks/itemMisic'
import { useRouter } from "vue-router";
import artistState from '../store/artist'

const router = useRouter();
const props = defineProps(["name","isShow"])

const retreats = () => {
  if(!props?.isShow)return  retreat(router);
  artistState().isSongsShow=false
};

const goSearch = () =>{
  router.push({path:"/search"})
}
</script>

<style scoped lang='less'>
 .top {
   background: #000;
    display: flex;
    justify-content: space-between;
    height: 30rem;
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
</style>