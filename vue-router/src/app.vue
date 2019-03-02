<template>
  <div>
      <h1>这是app路由</h1>

      <router-link to='/comm'>comm</router-link>
      <router-link to='/coss'>coss</router-link>

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
