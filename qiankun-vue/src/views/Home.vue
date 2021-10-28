<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane name="first">
        <!-- <template v-slot:label>
          <el-badge value="new">
            <span>用户管理</span>
          </el-badge>
        </template> -->
        <div slot="label">
          <el-badge value="new" type="warning">
            <span>用户管理</span>
          </el-badge>
        </div>
        我的行程
        <el-button type="primary" @click="handleTest">测试</el-button>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import actions from '@/actions'
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleTest() {
      actions.setGlobalState({route: '/test'})
    }
  }
};
</script>

<style scoped>
::v-deep .el-badge__content.is-fixed{
  transform: translateX(-100%);
  left: 10px;
}
</style>