const path = require('path')
module.exports = {
  configureWebpack: {
    
    output: {
      library: 'vueapp',
      libraryTarget: 'umd'
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 10000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack:(config)=>{
    config.resolve.alias
    .set('@', path.resolve('src'))
    //set第一个参数：设置的别名，第二个参数：设置的路径　　
  }
}