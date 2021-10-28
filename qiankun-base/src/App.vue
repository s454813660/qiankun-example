<template>
  <div id="mainapp">
    <el-menu router mode="horizontal" default-active="/" @select="handleSelect">
      <!-- 基座中可以放自己的路由 -->
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
      <el-menu-item index="/about/about1">About</el-menu-item>
      <!-- 引用其他子应用 -->
      <el-menu-item index="/vue">Vue应用</el-menu-item>
      <el-menu-item index="/react">React应用</el-menu-item>
      <el-menu-item index="/web">web应用</el-menu-item>
    </el-menu>
    <keep-alive :include="cachedViews" exclude="web">
      <router-view :key="keys"></router-view>
    </keep-alive>
    <div id="vue"></div>
    <div id="react"></div>
    <div id="web"></div>
    <span>{{initialState.route}}</span>
  </div>
</template>

<script>
import actions, { initialState } from '@/actions';
import { ADD_CACHED_VIEWS } from '@/store';
export default {
  data() {
    return {
      initialState
    }
  },
  methods: {
    handleSelect(index, indexPath) {
      actions.setGlobalState({
        route: index
      });
      this.$store.commit(ADD_CACHED_VIEWS, this.$route);
      console.log(this.$router)
    }
  },
  computed: {
    cachedViews() {
      const cvs = [];
      this.$store.state.cachedViews.forEach(element => {
        cvs.push(element.name);
      });
      // console.log(cvs);
      return cvs;
    },
    keys() {
      return this.$route.fullPath;
    }
  }
};
</script>

<style></style>
