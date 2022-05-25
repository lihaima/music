import axios from "axios";
import {Toast} from 'vant'
const request = axios.create({
    baseURL:"https://netease-cloud-music-n7qqkglv4-lihaima.vercel.app",
    timeout:5000,
})
request.interceptors.request.use((config)=>{
    Toast.loading({
        type:"loading",
        message: '加载中...',
        forbidClick: true,
      });
    return config
},(err)=>{
    Toast.clear();
    return Promise.reject(err)
})

request.interceptors.response.use((res)=>{
    Toast.clear();
    return res.data
},(err)=>{
    Toast.clear();
    return Promise.reject(err)
})

export default request