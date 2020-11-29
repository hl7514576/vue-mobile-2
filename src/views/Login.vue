<template>
        <div class="lab">
            <input type="text" placeholder="请输入用户名" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password"  @keydown.enter="login">
            <input type="button" value="登录" @click="login">
        </div>
</template>

<style scoped>
    .lab{
        margin: 15rem auto;
        width: 80%;
        height: 15rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .lab input{
        box-sizing: border-box;
        margin-top: 1rem;
        padding-left: 0.625rem;
        font-size: 1.1rem;
        width: 90%;
        height: 20%;
        outline: 0;
        border: 1px solid green;
    }
    .lab input[type='button']{
        border: 0;
        background-color: rgb(8, 170, 8);
    }
    .lab input[type='button']:active{
        background-color: rgb(8, 134, 8);
    }
</style>

<script>
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        login:function(){
            // 请求

            // ajax 跨域
            // 协议，域名，端口号，有一个不同就会发生跨域
            // CORS 解决


            this.axios.post('http://127.0.0.1:3000/users', {
                username:this.username,
                userpass:this.password
            }).then((res)=>{
                console.log(res);
                // 判断服务器返回的state是否为true，是的话则登录成功
                if(res.data.state == 200){
                     // ，模拟token，其实就是后台返回的一个字符串
                    // var token = 'sadasdasdad'    ,所以这里的token就是后台返回的token
                    var token = res.data.token
                    sessionStorage.setItem('token',token)

                    // 获取参数，未登录时想要访问的路由，
                    var url = this.$route.query.redirect

                    url = url ? url : '/Home'

                    // 切换路由
                    this.$router.replace(url)

                    alert('登录成功！亲爱的：' + this.username + '，欢迎回来！！')

                } else{
                    alert('登录失败！请检查用户名和密码是否正确')
                }
            }).catch(err=>{
                console.log(err);
            })
           
        }
    }
}
</script>