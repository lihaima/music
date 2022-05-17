import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css"

const request = axios.create({
    baseURL:"/api",
    timeout:5000
})
request.interceptors.request.use((config)=>{
    nprogress.start()
    return config
},(err)=>{
    nprogress.done()
    return Promise.reject(err)
})

request.interceptors.response.use((res)=>{
    nprogress.done()
    return res.data
},(err)=>{
    nprogress.done()  
    return Promise.reject(err)
})

export default request