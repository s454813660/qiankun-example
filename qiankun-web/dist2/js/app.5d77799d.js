(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["vueapp"]=t():e["vueapp"]=t()})(window,(function(){return function(e){function t(t){for(var n,a,i=t[0],s=t[1],l=t[2],c=0,f=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},u=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"aabc54b5"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(e);var l=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(c);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+u+")",l.name="ChunkLoadError",l.type=n,l.request=u,r[1](l)}o[e]=void 0}};var c=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist2/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonpvueapp"]=window["webpackJsonpvueapp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=l;return u.push([0,"chunk-vendors"]),r()}({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t),r.d(t,"bootstrap",(function(){return B})),r.d(t,"mount",(function(){return L})),r.d(t,"unmount",(function(){return Y}));var n=r("1da1"),o=(r("28b2"),r("450d"),r("c7ad")),u=r.n(o),a=(r("560b"),r("dcdc")),i=r.n(a),s=(r("d4df"),r("7fc1")),l=r.n(s),c=(r("e623"),r("e379"),r("5dc8"),r("37e1"),r("96cf"),r("2b0e")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},e._l(e.routes,(function(t){return r("router-link",{key:t.name,attrs:{to:t.path}},[e._v(e._s(t.name))])})),1),r("router-view")],1)},f=[],v={data:function(){return{routes:[]}},created:function(){this.routes=this.$router.options.routes}},d=v,h=(r("034f"),r("2877")),_=Object(h["a"])(d,p,f,!1,null,null,null),m=_.exports,b=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},w=[],j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],k={name:"HelloWorld",props:{msg:String}},E=k,O=(r("8f11"),Object(h["a"])(E,j,y,!1,null,"ebbc34ee",null)),x=O.exports,P={name:"Home",components:{HelloWorld:x}},C=P,N=Object(h["a"])(C,g,w,!1,null,null,null),$=N.exports;c["default"].use(b["a"]);var R="/";window.__POWERED_BY_QIANKUN__&&(R+="vue/");var A=[{path:"/"===R?R:R.substring(0,R.length-1),name:"Home",component:$},{path:R+"about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:R+"mindmap",name:"MindMap",component:function(){return r.e("about").then(r.bind(null,"2f34"))}}],I=new b["a"]({mode:"hash",base:"/dist2/",routes:A}),T=I,W=(r("e792"),r("6d93"),r("5373"),r("ff32")),H=r.n(W);r("4d2c");c["default"].config.productionTip=!1,c["default"].use(H.a).use(u.a).use(i.a).use(l.a);var M=null;function S(e){M=new c["default"]({router:T,render:function(e){return e(m)}}).$mount("#app")}function B(e){return D.apply(this,arguments)}function D(){return D=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}function L(e){return U.apply(this,arguments)}function U(){return U=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t),S(t);case 2:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function Y(e){return K.apply(this,arguments)}function K(){return K=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:M.$destroy();case 1:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}window.__POWERED_BY_QIANKUN__&&(r.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__),window.__POWERED_BY_QIANKUN__||S()},"85ec":function(e,t,r){},"8f11":function(e,t,r){"use strict";r("df05")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},df05:function(e,t,r){}})}));
//# sourceMappingURL=app.5d77799d.js.map
console.log('common');