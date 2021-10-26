import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  route: '',
  cachedViews: []
}

export const ADD_CACHED_VIEWS = 'addCacheViews';

const mutations = {
  [ADD_CACHED_VIEWS]: (state, payload) => {
    if(state.cachedViews.length === 0) {
      state.cachedViews.push(payload);
    }else {
      for(let view of state.cachedViews) {
        if (view.name === payload.name) {
          return;
        } 
      }
      state.cachedViews.push(payload);
    }
    
  }
}

const store =  new Vuex.Store({
  state,
  mutations
})

export default store;