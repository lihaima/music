import {defineStore} from 'pinia'
import {reqSearch} from '../api/index'


export default defineStore("search",{
    state(){
        return {
            playList:[]
        }
    },
    actions:{
      async  getSearch(name){
          let search = await reqSearch(name)
          this.playList=search.result.songs
        }
    }
})