<template>
  <div>
      <h1>这是comm组件</h1>

      <router-link to='/comm/login'>登录</router-link>
      <router-link to='/comm/regiser'>注册</router-link>

      <router-view></router-view>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
</style>