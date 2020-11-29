<template>
<div id="app">
    <div class="fixed">
        <div class="search">
            <img class="search-icon" src="../assets/search-icon.png" v-show="searchIsShow" @click="searchIsShow=!searchIsShow">
            <img class="logo" src="../assets/logo.png" :class="{logoShow:!searchIsShow}" @click="Isrefresh">
            <img class="menu-icon" src="../assets/menu.png" v-show="menuIsShow" @click="menuIsShow=!menuIsShow">
            <input type="text" placeholder="搜点儿啥" :class="{inputDynamic:!searchIsShow}" @blur="searchIsShow=!searchIsShow">
        </div>
        <div>
            <Focus></Focus>
        </div>
        <div class="nav">
            <div><img src="../assets/html-icon.png"></div>
            <div><img src="../assets/css-icon.png"></div>
            <div><img src="../assets/js-icon.png"></div>
            <div><img src="../assets/vue-icon.png"></div>
        </div>
    </div>
    <div class="mask" :class="{maskDynamic:!menuIsShow}" @click="menuIsShow=!menuIsShow">

    </div>
    <List></List>
</div>
</template>

<script>
import List from './List.vue'
import Focus from './Focus.vue'

    export default{
        data(){
            return {
                searchIsShow:true,
                menuIsShow:true
            }
        },
        methods:{
            Isrefresh:function(){
                this.$router.go(0);
            }
        },
        components:{
            List,
            Focus
        }
    }
</script>