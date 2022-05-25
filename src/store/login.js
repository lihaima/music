import {defineStore} from 'pinia'
import {reqLogin} from '../api/index'

export default defineStore("login",{
    state(){
        return {
            isShowRegister:false,
            userInfo:JSON.parse(localStorage.getItem("userInfo")) || {}
        }
    },
    actions:{
        // 登录
      async  getLogin(query){
          let {username,password} = query
          let login = await reqLogin(username,password)
          if(login.code === 200){
            let {token,profile} = login
            let userInfo = {
              backgroundUrl:profile?.backgroundUrl,
              nickname:profile?.nickname
            }
            this.userInfo=userInfo
            localStorage.setItem("token",token)
            localStorage.setItem("userInfo",JSON.stringify(userInfo))
            return 200
          }
        }
    }
})