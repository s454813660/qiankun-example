const proxyConfig = {};
const proxyApi = process.env.VUE_APP_BASE_API.split(',');
const proxyPathRewrite = process.env.VUE_APP_BASE_REWRITE.split(',');
const proxyUrl = process.env.VUE_APP_BASE_URL.split(',');
proxyApi.forEach((api, index) => {
  proxyConfig[api] = {
    target: proxyUrl[index],
    changeOrigin: true
  };
  if(proxyPathRewrite[index] !== undefined){
    proxyConfig[api].pathRewrite = {
      ['^' + api]: proxyPathRewrite[index]
    }
  }
})
// const proxyConfig = {
//   '/api': {
//     target: 'http://localhost:3000/',
//     changeOrigin: true,
//     pathRewrite: (path, req) => {
//       console.log(path);
//       return path.replace(/^\/api/, '');
//     }
//   }
// }
console.log(proxyConfig);
module.exports = {
  devServer: {
    host: '0.0.0.0',
    proxy: proxyConfig
  }
}