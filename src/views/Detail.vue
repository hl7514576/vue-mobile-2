<template>
    <div>
        <div>
            这是第{{ msg }}篇文章
        </div>
    </div>
</template>
<script>
export default {
    name:'Detail',
    data(){
        return {
            msg:''
        }
    },
    created(){
        // 获取url中的查询参数，采用?id=
        console.log(this.$route.query.id);

        // 获取动态路由，采用:id
        console.log(this.$route.params.id);

        this.msg = this.$route.params.id
    }
}
</script>
<style scoped>

</style>