import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


function render(props) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

if(window.__POWERED_BY_QIANKUN__) {  // 动态添加publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;// eslint-disable-line
}


if(!window.__POWERED_BY_QIANKUN__){ // 默认独立运行
  render();
}

// 子组件的协议就OK了
export async function bootstrap(props) {

};

export async function mount(props) {
  console.log(props)
  render(props)
};

export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));
};
