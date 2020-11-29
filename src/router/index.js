import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../components/Home.vue'
import Release from '../components/Release.vue'
import My from '../components/My.vue'


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    // 重定向
    redirect: '/Login'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta:{
      auth:true
    }
  },
  {
    path: '/Release',
    name: 'Release',
    component: Release,
    meta:{
      auth:true
    }
  },
  {
    path: '/My',
    name: 'My',
    component: My,
    meta:{
      auth:true
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    // path: '/Detail',
    path: '/Detail/:id',
    name: 'Detail',
    // 懒加载，即访问这个路径才会加载内容，不需要from命名，会直接返回，并且上面不需要再引入
    component: () => import('../views/Detail.vue'),
    meta:{
      auth:true
    }
  },
  // 404 即表示用户访问不存在的路径或者页面时显示内容，必须写在最后面，
  {
    path: '*',  //匹配所有的路由
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

// 路由实例化
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 在路由实例化下方注册全局守卫，作用是在访问路由之前进行拦截
router.beforeEach((to, from, next) => {
  // 获取是否有 token 登录的标识 
  var token = sessionStorage.getItem('token')

  if(to.meta.auth){   //实际上to 就是上面的路由，验证路由里面的meta里面的键值是否为true，如果是true则需要验证
    if(token) {   //上面只是判断是否需要权限，这里是判断是否登录
      next();   //如果有token 说明已经登录，想去哪就去哪
    } else{   //如果没有 token 则说明没有登录，重定向到登录页
      next({
        path:'/Login', 
        query:{redirect: to.fullPath}   //记录原本想要访问的路由
      })
    }
  } else{
    next(); //如果不需要权限，则想去哪就去哪
  }
})

export default router
