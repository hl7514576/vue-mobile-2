<template>
<div>
    <div class="list">
        <ul>
            <li v-for="(item, index) in lists" :key="index" >
                <p class="title">
                    {{ item.title }}
                </p>
                <img :src="item.src">
                <div>
                    <!-- 点击链接后我们需要知道点击的是第几个链接，后面使用字符串加上item的id来辨识 -->
                    <!-- <router-link :to="'Detail?id=' + item.id"> -->
                    <router-link :to="'Detail/' + item.id">

                        {{ item.conetnt }}
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>

export default {
    data() {
        name:'list'
        return {
            lists:[],
            listSrc:''
        }
    },
    // 自动执行数据请求，把请求过来的数据赋值给lists
    created(){
        this.axios.get('http://127.0.0.1:3000/list').then(res=>{
            console.log('获取到用户信息,' , res.data.data[0].src);
            this.lists = res.data.data
        }).catch(err=>{
            console.log(err);
        })
    }
    
}
</script>
<style>
    .list{
        width: 100%;
        height: 100.5rem;
        margin-top: 15.5rem;
    }
    .list ul{
        width: 100%;
        height: 100%;
    }
    .list ul li{
        width: 94%;
        height: 7rem;
        background-color: rgba(255, 255, 255, 0.39);
        border: 1px solid #ccc;
        margin: 0.5rem auto;
    }
    .list ul li:hover{
        background-color: rgba(206, 206, 206, 0.404);
        border-left: 2px solid pink;
    }
    .list ul li p{
        margin-left: 0.3rem;
        padding-bottom: 0.3rem;
        border-bottom: 1px solid rgb(143, 142, 142);
        height: 20%;
        font-size: 1.2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .list ul li img{
        float: left;
        margin: 0.3rem;
        width: 25%;
        height: 65%;
    }
    .list ul li div{
        font-size: 0.9rem;
        width: 70%;
        height: 70%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
    }
</style>