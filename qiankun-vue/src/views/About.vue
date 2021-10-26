<template>
  <div class="about">
    <h1>This is an about page</h1>  
    <el-select multiple v-model="value" @change="handleChange">
      <el-option v-for="(item, index) in options"
        :key="index+item.value"
        :value="item.value"
        :label="item.label">
        <el-checkbox v-model="item.checked" :label="item.label" @click.native.prevent></el-checkbox>
      </el-option>
    </el-select>
  </div>
</template>
<script>
import { getList } from '@/api/nodeapi';
export default {
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕',
          checked: false
        },
        {
          value: '选项2',
          label: '双皮奶',
          checked: false
        },
        {
          value: '选项3',
          label: '蚵仔煎',
          checked: false
        },
        {
          value: '选项4',
          label: '龙须面',
          checked: false
        },
        {
          value: '选项5',
          label: '北京烤鸭',
          checked: false
        }
      ],
      value: []
    };
  },
  methods: {
    handleChange(val) {
      if(val.length === 0) {
        this.options.forEach(item => {
          item.checked = false;
        })
      }
      val.forEach(element => {
        this.options.forEach(item => {
          if(element === item.value) {
            item.checked = true
          }
          if(item.checked && val.indexOf(item.value) === -1) {
            item.checked = false;
          }
        })
      });
    }
  },
  mounted() {
    // getList({
    //   url: '/api/getlist',
    //   method: 'get'
    // }).then(res => {
    //   console.log(res)
    // })
  }
};
</script>
