const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:"./",
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        pathRewrite:{
          '^/api':'/'
        }
      }
    }
  }
})
