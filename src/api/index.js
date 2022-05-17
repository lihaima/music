import request from './request'
// 获取轮播图
export const reqBanner = () => request({url:"/banner?type=2"})

// 获取推荐歌单
export const reqRecommend = () => request({url:"/personalized?limit=10"})

// 获取歌单详情
export const reqDetail = (id) => request({url:`/playlist/detail?id=${id}`})

// 获取歌单所有歌曲
export const reqMusicList = (id) => request({url:`/playlist/track/all?id=${id}&limit=20&offset=0`})

// 获取音乐播放
export const reqMusic = (id) => request({url:`/song/url?id=${id}`})