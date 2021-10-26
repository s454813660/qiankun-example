import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
let prefix = '/';
if(window.__POWERED_BY_QIANKUN__) {
  prefix += 'vue/'
}
const routes = [
  {
    path: prefix === '/' ? prefix : prefix.substring(0, prefix.length-1),
    name: 'Home',
    component: Home
  },
  {
    path: prefix + 'about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: prefix + 'mindmap',
    name: 'MindMap',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MindMap.vue')
  },
  {
    path: prefix + 'jsx',
    name: 'Jsx',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/JSX.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: '/vue',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
// if (window.__POWERED_BY_QIANKUN__) {
//   router.beforeEach((to, from, next) => {
//     if(!to.path.includes('/vue')) {
//       next({
//         path: '/vue'
//       })
//     }else {
//       next()
//     }
//   })
// }
export default router
