import { defineStore } from 'pinia'
import { reqBanner,reqRecommend } from '../api/index'
export default defineStore("home", {
    state() {
        return {
            // 轮播图
            banner: [],
            // 发现歌单列表
            recommend: []
        }
    },
    actions: {
        async getHomeInitialize() {
          const homeList =await  Promise.allSettled([reqBanner(),reqRecommend()]) 
            this.banner=homeList[0]?.value?.banners || []
            this.recommend=homeList[1]?.value?.result || []
        }
    }
})