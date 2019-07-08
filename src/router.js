// 导入vue模块
import Vue from 'vue'
// 导入vue-router模块
import VueRouter from 'vue-router'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import AppList from './components/AppList.vue'
// 注册到vue
Vue.use(VueRouter)
// 配置路由
const router = new VueRouter({
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