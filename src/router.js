// 导入vue模块
import Vue from 'vue'
// 导入vue-router模块
import VueRouter from 'vue-router'
import Foo from './views/weapon/Foo.vue'
import Bar from './views/equip/Bar.vue'
import AppList from './views/hero/AppList.vue'
// 注册VueRouter插件到vue，使用全局script标签会自动调用Vue.use
Vue.use(VueRouter)
// 创建路由对象
const router = new VueRouter({
    // 配置路有规则
    routes: [
        {
            name: 'home',
            path: '/',
            redirect: '/heroes'
        },
        {
            name: 'foo',
            path: '/foo',
            component: Foo

        },
        {
            name: 'bar',
            path: '/bar',
            component: Bar

        },
        {
            name: 'heroes',
            path: '/heroes',
            component: AppList
        }
    ]
})

// 导出模块
export default router;