<template>
    <div class="focus">
        <img src="img/focus1.jpg" v-timer='index'>
    </div>
</template>
<style>
    .focus{
        width: 100%;
        height: 10rem;
        text-align: center;
        background-color: rgb(255, 235, 197);
    }
    .focus img{
        width: 95%;
        height: 95%;
        border-radius: 1rem;
    }
</style>
<script>

export default {
    
    data(){
        return {
            index:0
        }
    },
    directives: {
        timer: {
            // 指令的定义
            inserted: function (el,index) {
                var imgSrc = ['img/focus1.jpg','img/focus2.jpg','img/focus3.jpg','img/focus4.jpg']
                setInterval(function(){
                    index.value++
                    if(index.value > 3){
                        index.value = 0
                    }
                    el.src = imgSrc[index.value]
                },2000)
                
                
            }
        }
    }
}
</script>