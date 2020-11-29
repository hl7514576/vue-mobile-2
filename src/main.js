import Vue from 'vue'
import Index from './views/Index.vue'
import router from './router'

// 引入请求库
import htpp from './utils/http'
import vueAxios from 'vue-axios'
// 注册
Vue.use(vueAxios, htpp)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Index)
}).$mount('#app')
