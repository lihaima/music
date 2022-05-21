<template>
  <div class="artist">
    <MusicTop name="歌手" />
    <div class="artistClassify">
      <div class="placeAll">
        <span @click="getPlace(index,item.id)" :class="{'highlight':index===place}" class="" v-for="(item, index) in placeAll" :key="index">{{ item.name }}</span>
      </div>
      <div class="sexAll">
        <span @click="getSex(index,item.id)" :class="{'highlight':index===sex}" v-for="(item, index) in sexAll" :key="index">{{ item.name }}</span>
      </div>
    </div>
    <div class="artistList">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="item" v-for="item in artistList" :key="item.id" @click="goartistSongs(item)">
          <div class="name">
            <img :src="item.picUrl+'?60y60'" alt="" />
            <span>{{ item.name }}</span>
          </div>
          <div class="attention">+ 关注</div>
        </div>
      </van-list>
    </div>
    <van-popup v-model:show="isSongsShow" position="right" :style="{ height: '100%', width: '100%' }" >
        <ArtistSongs />
    </van-popup>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import MusicTop from "../../components/MusicTop.vue";
import ArtistSongs from '../../components/ArtistSongs.vue'
import { reactive } from "vue";
import artistStroe from "../../store/artist";
const state = artistStroe();
const {artistList,more,isSongsShow } = storeToRefs(state);

// 请求数据
const query = {
    type:-1,
    area:-1,
    offset:-1,
    initial:-1
}

// 分类请求
let place = ref(0)
let sex = ref(0)
const getSex = (index,id) => {
  sex.value = index
  query.type=id
  state.getClassifySinger(query)
}
const getPlace = (index,id) => {
  place.value = index
  query.area=id
  state.getClassifySinger(query)
}

// 分类数据
const placeAll = reactive([
  { name: "全部",id:-1 },
  { name: "华语",id:7 },
  { name: "欧美",id:96 },
  { name: "日本",id:8 },
  { name: "韩国",id:16 },
  { name: "其他",id:0 },
]);
const sexAll = reactive([
  { name: "全部",id:-1 },
  { name: "男",id:1 },
  { name: "女",id:2 },
  { name: "乐队",id:3 },
]);

// 上拉触底
let loading = ref(false);
let finished = ref(false);
const onLoad = async () => {
  query.offset++
  await state.getArtist(query);
  loading.value=false
  if(!more){
       finished.value = true;
  }
};

// 获取并打开歌手歌曲列表
const goartistSongs = (item) => {
  state.getSongs(item.id)
    state.artist = item
    state.isSongsShow=true
}
</script>

<style scoped lang='less'>
.artist {
  .artistClassify {
    .highlight{
        background-color: aquamarine;
        color: #fff;
      }
    .placeAll {
      margin-top: 20rem;
      span {
        border: 1rem solid #000;
        padding: 5rem 10rem;
        border-radius: 20rem;
        margin-left: 5rem;
      }
    }
    .sexAll {
      margin-top: 20rem;
      span {
        border: 1rem solid #000;
        padding: 5rem 10rem;
        border-radius: 20rem;
        margin-left: 5rem;
      }
    }
  }
  .artistList {
    margin-top: 20rem;
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      //   border: 1rem solid #000;
      padding: 10rem;
      .name {
        display: flex;
        align-items: center;
        img {
          width: 60rem;
          height: 60rem;
          border-radius: 50%;
        }
        span {
          margin-left: 10rem;
        }
      }
      .attention {
        border: 1rem solid #000;
        border-radius: 20rem;
        padding: 1rem 8rem;
      }
    }
  }
}
</style>