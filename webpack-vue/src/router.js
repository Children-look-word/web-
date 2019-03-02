
// 1. 导入 vue-router 包
import VueRouter from 'vue-router'

// 导入 Account 组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

//导入孩子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    // account  goodslist
    {
    	path: '/account',
    	component: account ,
    	children:[
    	//孩子组件 path 路径不能带  /
    		{path:'login',component:login},
    		{path:'register',component:register}
    	]
    },
    { path: '/goodslist', component: goodslist }
  ]
});

//把路由暴露出去
export default router;