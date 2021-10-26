<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-input v-model="value"></el-input>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      value: ''
    }
  }
}
</script>
