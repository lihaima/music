const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://netease-cloud-music-n7qqkglv4-lihaima.vercel.app/',
        pathRewrite:{
          '^/api':'/'
        }
      }
    }
  }
})
