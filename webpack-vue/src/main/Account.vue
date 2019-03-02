<template>
  <div>
    <h1>这是 Account 组件</h1>
    
    <router-link to='/account/login'>登录</router-link>
    <router-link to='/account/register'>注册</router-link>
    
    <router-view></router-view>
  </div>
</template>


<script>
</script>

<style scoped lang="scss">
/*style 只是普通样式 要启用 less、 scss  需要 用lang属性*/
	body{
		div{
			font-style: italic;
		}
	}
</style>
