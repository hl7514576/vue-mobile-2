// axios进行二次封装
import axios from 'axios'
import router from '../router'

// 添加一个新的axios实例
const http = axios.create({
    baseURL:"/",     //统一设置请求地址前缀
    timeout: 6000       //设置请求超时
})

// 设置请求拦截，统一在请求时带上token,config保存了请求时所有相关的参数
http.interceptors.request.use(function (config){
    // 获取token 
    const token = sessionStorage.getItem('token')
    if(token){
        // 下面是固定写法，不能更改,Bearer后面必须是一个空格
        config.headers['Authorization'] = 'Bearer ' + token

    }
    return config;
}, function (error){   
    console.log("请求拦截错误", error);
    return Promise.reject(error);
});

// 设置响应拦截，比如token不合法
http.interceptors.response.use(function (response){
    if(response.data.token) {
        // 将服务器返回的最新token，更新到本地中
        sessionStorage.setItem('token', response.data.token)
    }
    return response;
}, function (error){ 
    token = sessionStorage.removeItem('token'),
    console.log('服务器响应错误');
    // 如果没有权限，则重定向到登录页让客户重新登录
    const _response = error.response
    console.log(error.response);
    switch(_response.status){
        case 500: 
        return router.replace({

            path:'/',
            query:{redirect: router.currentRoute.fullPath}
        })
    }
    return Promise.reject(error)
});

export default http