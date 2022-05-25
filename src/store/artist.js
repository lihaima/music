import {defineStore} from "pinia"
import {reqArtist,reqArtistSongS} from '../api/index'


export default defineStore("artist",{
    state(){
        return {
            artistList:[],
            more: true,
            isSongsShow:false,
            artist:{},
            songsList:[]
        }
    },
    actions:{
        // 获取歌手列表
       async getArtist(query){
           const {type,area,offset,initial} = query
           let artist =await reqArtist(type,area,offset,initial)
           if(artist.more) return this.artistList = [...this.artistList,...artist.artists]
           this.more = artist.more
        },
        // 获取歌手歌曲列表
       async getSongs(id){
        this.songsList = []
            let songs = await reqArtistSongS(id)
            if(songs.code === 200) this.songsList = songs.songs
        },
        // 歌手分类列表
        async getClassifySinger(query){
            const {type,area,offset,initial} = query
           let artist =await reqArtist(type,area,offset,initial)
           this.artistList = artist.artists
        }
    }
})