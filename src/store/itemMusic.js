import { defineStore } from "pinia"

import { reqDetail, reqMusicList,reqLyric } from '../api/index'

export default defineStore("itemMusic", {
    state() {
        return {
            // 歌手详情信息
            detailPlaylist: {},
            // 歌单
            detailSongs: [],
            // 歌曲列表
            playList: [
               
            ],
            // 判断是否是播放
            isBtnShow: 0,
            // 判断播放哪一首
            playListIndex: 0,
            // 歌曲详情弹出层
            playshow: false,
            // 播放歌曲当前时间
            currentTime:0,
            // 播放歌曲总时长
            duration:0,
            // 歌单列表弹出层
            songListPopups:false,
            // 底部导航歌曲列表弹出层
            floorSongList:false,
            // 歌词
            lyricList:""
        }
    },
    actions: {
        async detail(id) {
            const detail = await Promise.allSettled([reqDetail(id), reqMusicList(id)])
            this.detailPlaylist = detail[0]?.value?.playlist || []
            this.detailSongs = detail[1]?.value?.songs || []
        },
       async lyric(id){
           let lrc = await reqLyric(id)
           if(lrc.code === 200){
               this.lyricList=lrc?.lrc?.lyric
           }
        }
    }
})