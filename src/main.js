// 程序的入口
// 导入vue模块
import Vue from 'vue'
// 导入app.vue
import App from './App.vue'
// 导入路由对象
import router from './router.js'
// 引入外部样式
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// 用自己的样式覆盖bootstrap样式
import './assets/css/index.css'
Vue.config.productionTip = false

// 让vue实例都具有axios属性
import axios from 'axios'
Vue.prototype.axios = axios

// 配置全局默认地址
axios.defaults.baseURL = 'http://localhost:3000/'
new Vue({
  el:'#app',
  render: h => h(App),
  // 配置路由对象
  router,
}).$mount('#app')
