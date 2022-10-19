import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@babel/polyfill';
import 'whatwg-fetch';
import 'custom-event-polyfill'
import 'core-js/stable/promise';
import 'core-js/stable/symbol';
import 'core-js/stable/string/starts-with';
import 'core-js/web/url';
import actions from './actions';
Vue.config.productionTip = false

Vue.use(ElementUI);

import { registerMicroApps, start,  } from 'qiankun';
const getActiveRule = (hash) => (location) => location.hash.startsWith(hash);
const app = [
  {
    name: 'vueapp',  // 应用的名字
    entry: '//localhost:10000',  // 默认会加载这个html，解析里面的js，动态的执行（子应用必须支持跨域） fetch
    container: '#vue',  // 容器名
    activeRule: '/vue',  // 激活的路径
    props: {
      a: 1,
      getGlobalState: actions.getGlobalState
    }  // 传值
  },
  {
    name: 'reactapp',
    entry: '//localhost:20000',  // 默认会加载这个html，解析里面的js，动态的执行（子应用必须支持跨域） fetch
    container: '#react',
    activeRule: '/react'
  },
  {
    name: 'webapp',
    entry: '//127.0.0.1:5500/qiankun-web/index.html',  // 默认会加载这个html，解析里面的js，动态的执行（子应用必须支持跨域） fetch
    container: '#web',
    activeRule: '/web',
    props: {
      a: 1,
      getGlobalState: actions.getGlobalState
    }
  },
]

registerMicroApps(app, {
  beforeLoad: (app) => {
    console.log('beforeLoad', app)
  },
  beforeMount: (app) => {
    console.log('beforeMount', app)
  },
  afterMount: (app) => {
    console.log('afterMount', app)
  },
  beforeUnmount: (app) => {
    console.log('beforeUnmount', app)
  },
  afterUnmount: (app) => {
    console.log('afterUnmount', app)
  },
});  // 注册应用
start({
  prefetch: false,  //  取消预加载
  fetch(url, ...args) {
    url = url + '?v=' + new Date();
    return window.fetch(url, ...args)
  }
});  // 开启
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
