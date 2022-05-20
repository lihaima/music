
// 重写点赞量
export const changeCount = (mun) => {
    if (mun >= 100000000) {
      return (mun / 100000000).toFixed(1) + "亿";
    } else if (mun >= 10000) {
      return (mun / 10000).toFixed(1) + "万";
    }
    return mun;
  };

  // 重写播放时间
 export const current = (Time) => {
    if (Time >= 60) {
      let m = Math.floor(Time / 60);
      let s = Math.floor(Time % 60);
      if (m < 10) m = "0" + m;
      if (s < 10) s = "0" + s;
      return m + ":" + s;
    }
    if (Time < 10) {
      return "00:0" + Math.floor(Time);
    }
    return "00:" + Math.floor(Time);
  };
