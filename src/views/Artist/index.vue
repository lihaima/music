<template>
  <div class="artist">
    <MusicTop name="歌手" />
    <div class="artistClassify">
      <div class="place">
        <span v-for="(item, index) in place" :key="index">{{ item.name }}</span>
      </div>
      <div class="sex">
        <span v-for="(item, index) in sex" :key="index">{{ item.name }}</span>
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
            <img :src="item.picUrl" alt="" />
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
const { artistList,more,isSongsShow } = storeToRefs(state);

const query = {
    type:-1,
    area:-1,
    offset:-1,
    initial:-1
}

const place = reactive([
  { name: "全部" },
  { name: "华语" },
  { name: "欧美" },
  { name: "日本" },
  { name: "韩国" },
  { name: "其他" },
]);
const sex = reactive([
  { name: "全部" },
  { name: "男" },
  { name: "女" },
  { name: "乐队" },
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

// 打开歌手歌曲列表
const goartistSongs = (item) => {
    state.artist = item
    state.isSongsShow=true
}
</script>

<style scoped lang='less'>
.artist {
  .artistClassify {
    .place {
      margin-top: 20rem;
      span {
        border: 1rem solid #000;
        padding: 5rem 10rem;
        border-radius: 20rem;
        margin-left: 5rem;
      }
    }
    .sex {
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