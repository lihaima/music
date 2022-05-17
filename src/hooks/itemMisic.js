
// 后退
export const retreat = (router) =>{router.back()}

// 重写点赞量
export const changeCount = (mun) => {
    if (mun >= 100000000) {
      return (mun / 100000000).toFixed(1) + "亿";
    } else if (mun >= 10000) {
      return (mun / 10000).toFixed(1) + "万";
    }
    return mun;
  };
