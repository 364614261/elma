<template>
<div><router-view></router-view>
    <div id="base">
        <router-link to="/takeOut"><div @click="takeadd()"><img src="../../static/imgs/SSS.png" alt=""><p>外卖</p></div></router-link>
        <router-link to="/grabble"><div><img src="../../static/imgs/zhinanzhen.png" alt=""><p>搜索</p></div></router-link>
        <router-link to="/order"><div><img src="../../static/imgs/orderF.png" alt=""><p>订单</p></div></router-link>
        <router-link to="/mine"><div><img src="../../static/imgs/meF.png" alt=""><p>我的</p></div></router-link>
    </div></div>
</template>
<script>
export default {
    name:"based",
    data() {
        return {
            
        }
    },
    created () {
        
    },
    methods: {
        takeadd(){
          
        },
    }
}
</script>
<style scoped>
 #base{
     background-color: #fff;
     position: fixed;
     bottom: 0;
     left: 0;
     width: 100vw;
     height: 0.4rem;
     display: flex;
     justify-content: space-around;
 }
 #base img{
     height: 0.2rem;
     margin-top: 0.05rem;
 }
 #base p{
     font-size: 0.10rem;
     color: black;
 }

</style>
