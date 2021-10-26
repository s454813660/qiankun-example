<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="item in routes" :key="item.name" :to="item.path">{{item.name}}</router-link> 
    </div>
    <router-view/>
  </div>
</template>
<script>
import {testApi} from '@/api/test.js'
import qs from 'qs'
export default {
  data() {
    return {
      routes: []
    }
  },
  created() {
    this.routes = this.$router.options.routes;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 5px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
