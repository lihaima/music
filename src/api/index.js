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

// 获取歌词
export const reqLyric = (id) => request({url:`/lyric?id=${id}`})

// 搜索歌曲
export const reqSearch = (name) => request({url:`/cloudsearch?keywords=${name}`})

// 获取歌手
export const reqArtist = (type,area,offset,initial) => request({url:`/artist/list?type=${type}&area=${area}&offset=${offset}&initial=${initial}`})

// 获取歌手歌曲列表
export const reqArtistSongS = (id) => request({url:`artist/top/song?id=${id}`})