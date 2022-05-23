import request from './request'
// 获取轮播图
export const reqBanner = () => request({url:"/banner?type=2&realIP=116.25.146.177"})

// 获取推荐歌单
export const reqRecommend = () => request({url:"/personalized?limit=10"})

// 获取歌单详情
export const reqDetail = id => request({url:`/playlist/detail?id=${id}`})

// 获取歌单所有歌曲
export const reqMusicList = id => request({url:`/playlist/track/all?id=${id}&limit=20&offset=0`})

// 获取音乐播放
export const reqMusic = id => request({url:`/song/url?id=${id}`})

// 获取歌词
export const reqLyric = id => request({url:`/lyric?id=${id}`})

// 搜索歌曲
export const reqSearch = name => request({url:`/cloudsearch?keywords=${name}`})

// 获取歌手
export const reqArtist = (type,area,offset,initial) => request({url:`/artist/list?type=${type}&area=${area}&offset=${offset}&initial=${initial}`})

// 获取歌手歌曲列表
export const reqArtistSongS = id => request({url:`artist/top/song?id=${id}`})

// 检测手机号码是否已被注册
export const reqDetectionPhone = phone => request({url:`/cellphone/existence/check?phone=${phone}`})

// 发送验证码
export const reqCaptcha = phone => request({url:`/captcha/sent?phone=${phone}`})

// 校验验证码
export const reqVerifyCaptcha = (phone,captcha) => request({url:`/captcha/verify?phone=${phone}&captcha=${captcha}`})
 
// 注册
export const reqRegister = (nickname,phone,password,captcha) => request({url:`/register/cellphone?phone=${phone}&password=${password}&captcha=${captcha}&nickname=${nickname}`})

// 登录
export const reqLogin = (username,password) => request({url:`/login/cellphone?phone=${username}&password=${password}`})

// 退出登录
export const reqLogout = () => request({url:"/logout"})