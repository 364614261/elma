<template>
    <div>
        <div id="head"><img @click="fango()" src="../../static/imgs/back.png" alt=""><span>订单列表</span></div>
         <div id="base">
        <router-link :to="'/takeOut?geohash2='+this.Geohash"><div><img src="../../static/imgs/SSS.png" alt=""><p>外卖</p></div></router-link>
        <router-link to="/grabble"><div><img src="../../static/imgs/zhinanzhen.png" alt=""><p>搜索</p></div></router-link>
        <router-link to="/order"><div><img src="../../static/imgs/orderT.png" alt=""><p>订单</p></div></router-link>
        <router-link to="/mine"><div><img src="../../static/imgs/meF.png" alt=""><p>我的</p></div></router-link>
    </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:"order",
    methods: {
        fango(){
            history.go(-1)  
        },
    },
    computed: {
      ...mapState(["Geohash"])  
    },
}
</script>
<style scoped>
#head{
    background-color: #3190e8;
    width: 100vw;
    height: 0.4rem;
    position: relative;
}
#head img{
   height: 0.2rem;
   margin-left: 0.2rem;
   margin-top: 0.1rem;
}
#head span{
    color: white;
    font-size: 0.18rem;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
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
