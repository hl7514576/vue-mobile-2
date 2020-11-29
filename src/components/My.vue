<template>
    <div>
        <div class="nameid">
            <img :src="info.imgsrc" @click="maskIsShow = !maskIsShow">
            <h1> {{ info.name }} </h1>
            <p>签名：{{ info.signature }}</p>
        </div>
        <div class="mask" v-if="maskIsShow" @click="maskIsShow = !maskIsShow">
            <img :src="info.imgsrc">
        </div>
        <div class="other">
            <ul>
                <li>权限: {{ info.role }} </li>
                <li>电话: {{ info.tel }} </li>
                <li>邮箱: {{ info.email }} </li>
                <li>年龄: {{ info.age }} </li>
                <li>地址: {{ info.addres }} </li>
            </ul>
        </div>
        <button @click='out' class="exit">退出登录</button>
    </div>
</template>
<style scoped>
    .mask{
        width: 100%;
        height: 100%;
        background-color: rgba(126, 126, 126, 0.9);
    }
    .mask img{
        width: 90%;
        height: 45%;
        position: absolute; left: 50%; top: 50%;
        transform: translate(-50%, -50%);    /* 50%为自身尺寸的一半 */
    }
    .nameid{
        position: relative;
        display: flex;
        align-items: center;
        margin: 1rem auto;
        width: 90%;
        height: 5rem;
        border: 1px solid #ccc;
    }
    .nameid img{
        margin-left: 0.625rem;
        margin-right: 2rem;
        border-radius: 50%;
        width: 20%;
        height: 75%;
        border: 1px solid red;
    }
    .nameid h1{
        margin-bottom: 2rem;
    }
    .nameid p{
        position: absolute;
        top: 44px;
        left: 110px;
    }
    .other{
        margin: 0px auto;
        width: 90%;
        height: 30rem;
        border: 1px solid #ccc;
    }
    .other ul li{
        box-sizing: border-box;
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        border-bottom: 1px solid #ccc;
        padding-left: 1rem;
    }
    .exit{
        position: absolute;
        top: 25px;
        right: 30px;
        border: 0;
        outline: 0;
        width: 2rem;
        height: 2rem;
        background-color: rgb(230, 162, 85);
    }
</style>
<script>
export default {
    name:'home',
    data(){
        return {
            info:{},
            maskIsShow:false
        }
    },
    methods:{
        out:function(){
            // 退出即清楚token 
            sessionStorage.removeItem('token')
            //并且重定向到登录页
            this.$router.replace('/Login')
        }
    },
    // 组件一旦挂载，则自动获取用户数据
    created(){
        this.axios.get('http://127.0.0.1:3000/my').then(res=>{
            console.log('获取到用户信息,' , res.data.data);
            this.info = res.data.data
        }).catch(err=>{
            console.log(err);
        })
    },
    destroyed(){
        console.log('组件被销毁');
    }
}
</script>