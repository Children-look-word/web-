
import Vue from '../node_modules/vue/dist/vue.js';

//导入路由模板
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import app from './app.vue';

import comm from './main/comm.vue';
import coss from './main/coss.vue';

import login from './view/login.vue';
import regiser from './view/regiser.vue';

//创建router 实例npm run dev
var router = new VueRouter({
    routes: [
        {
            path: '/comm',
            component: comm,
            children: [
                { path: 'login', component: login },
                { path: 'regiser', component: regiser }
            ]

        },
        { path: '/coss', component: coss }
    ]
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})