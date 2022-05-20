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
       async getArtist(query){
           const {type,area,offset,initial} = query
           let artist =await reqArtist(type,area,offset,initial)
           if(artist.more) return this.artistList = [...this.artistList,...artist.artists]
           this.more = artist.more
        },
       async getSongs(id){
            let songs = await reqArtistSongS(id)
            if(songs.code === 200) this.songsList = songs.songs
            
            console.log(songs);
        }
    }
})