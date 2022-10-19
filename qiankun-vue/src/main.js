import Vue from 'vue'
import App from './App.vue'
import router from './router'
import actions from './actions'
import '@babel/polyfill';
import 'whatwg-fetch';
import 'custom-event-polyfill'
// import VueMindmap from 'vue-mindmap'
// // You need a specific loader for CSS files like https://github.com/webpack/css-loader
// import 'vue-mindmap/dist/vue-mindmap.css'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

// import { Cascader, Checkbox, CheckboxGroup, Button, Dialog } from 'element-ui';
import ElementUI from 'element-ui'

Vue.use(ElementUI)
    // .use(Cascader)
    // .use(Checkbox)
    // .use(CheckboxGroup)
    // .use(Button)
    // .use(Dialog)
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
let instance = null;
function render(props) {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')  // 这里挂载到自己的html中，基座会拿到这个挂载后的html，将其插入进去
}
if(window.__POWERED_BY_QIANKUN__) {  // 动态添加publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}


if(!window.__POWERED_BY_QIANKUN__){ // 默认独立运行
  render();
}
// 子组件的协议就OK了
export async function bootstrap(props) {

};

export async function mount(props) {
  console.log(props);
  actions.setActions(props);
  props.onGlobalStateChange((state, prev) => {
    console.log(state, prev)
  })
  render(props)
};

export async function unmount(props) {
  instance.$destroy();
  instance = null;
};