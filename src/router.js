// 导入vue模块
import Vue from 'vue'
// 导入vue-router模块
import VueRouter from 'vue-router'
import WeaponList from './views/weapon/WeaponList.vue'
import EquipList from './views/equip/EquipList.vue'
import AppList from './views/hero/AppList.vue'
import HeroAdd from './views/hero/HeroAdd.vue'
import HeroEdit from './views/hero/HeroEdit.vue'
// 注册VueRouter插件到vue，使用全局script标签会自动调用Vue.use
Vue.use(VueRouter)
// 创建路由对象
const router = new VueRouter({
    // 配置类名
    linkActiveClass:'active',
    // 配置路有规则
    routes: [
        {
            name: 'home',
            path: '/',
            redirect: '/heroes'
        },
        {
            name: 'weapon',
            path: '/weapon',
            component: WeaponList

        },
        {
            name: 'equip',
            path: '/equip',
            component: EquipList

        },
        {
            name: 'heroes',
            path: '/heroes',
            component: AppList
        },
        {
            name: 'heroesadd',
            path: '/heroes/add',
            component: HeroAdd
        },
        {
            name: 'heroedit',
            path: '/heroes/edit/:id',
            component: HeroEdit,
            props:true
        }
    ]
})

// 导出模块
export default router;