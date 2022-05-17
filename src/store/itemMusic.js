import { defineStore } from "pinia"

import { reqDetail, reqMusicList } from '../api/index'

export default defineStore("itemMusic", {
    state() {
        return {
            // 歌手详情信息
            detailPlaylist: {},
            // 歌单
            detailSongs: [],
            // 歌曲列表
            playList: [
                {
                    name: "光辉岁月",
                    al: {
                        picUrl: "https://p2.music.126.net/BR_ETn4YsHtvDwIJbwK2KA==/109951165806258437.jpg"
                    },
                    ar: [
                        {
                            name: "我"
                        }
                    ],
                    id: "347639"
                }
            ],
            // 判断是否是播放
            isBtnShow: 0,
            // 判断播放哪一首
            playListIndex: 0,
            // 弹出层
            playshow: false,
            // 播放歌曲当前时间
            currentTime:0,
            // 播放歌曲总时长
            duration:0
        }
    },
    actions: {
        async detail(id) {
            const detail = await Promise.allSettled([reqDetail(id), reqMusicList(id)])
            this.detailPlaylist = detail[0]?.value?.playlist || []
            this.detailSongs = detail[1]?.value?.songs || []
        }
    }
})