import {defineStore} from 'pinia'
import {reqLogin} from '../api/index'

export default defineStore("login",{
    state(){
        return {
            isShowRegister:false
        }
    },
    actions:{
      async  getLogin(query){
          let {username,password} = query
          let login = await reqLogin(username,password)
          console.log(login);
        }
    }
})