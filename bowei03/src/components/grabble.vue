<template>
    <div>
        
        <div id="head"><img @click="fango()" src="../../static/imgs/back.png" alt=""><span>搜索</span></div>
        <div id="sous">
            <input v-model="valu" id="shur" placeholder="请输入商家或者美食名称" type="text">
            <input @click="getVul()" id="tij" value="提交" type="button"></div>

        <div id="neiR"> <ul id="ul1">
            <li id="lis" :key="i" v-for="(v,i) in arrDi">
                <router-link :to="'/restaurant?shopid='+v.id">
              <img id="tp" :src="'https://elm.cangdu.org/img/'+v.image_path" alt="">
            <span id="n_1">{{v.name}}</span>
            <div id="xingXing">
                 <van-rate v-model="v.rating" 
                 allow-half
                 void-icon="star"
                 void-color="#eee"
                 size="12"
                 gutter=""/></div>
                 <span id="fenShu">{{v.rating}}</span>
            <span id="nr_2">{{v.supports[0].icon_name}}</span>
            <span id="nr_3">{{v.supports[1].icon_name}}</span>
            <span id="nr_4">{{v.supports[1].name}}</span><span id="nr_5">{{v.delivery_mode.text}}</span>
            <span id="nr_6">{{v.piecewise_agent_fee.tips}}</span>
            <span id="nr_7">{{v.distance}} /</span><span id="nr_8">{{v.order_lead_time}}</span>
            <span id="nr_9">￥{{v.float_minimum_order_amount}}起送 /</span>
            <span id="order">月{{v.recent_order_num}}单</span>
            </router-link>
            </li>
        </ul></div>
     
         <div id="base">
        <router-link :to="'/takeOut?geohash2='+this.Geohash"><div><img src="../../static/imgs/SSS.png" alt=""><p>外卖</p></div></router-link>
        <router-link to="/grabble"><div><img src="../../static/imgs/zhinanzhen1.png" alt=""><p>搜索</p></div></router-link>
        <router-link to="/order"><div><img src="../../static/imgs/orderF.png" alt=""><p>订单</p></div></router-link>
        <router-link to="/mine"><div><img src="../../static/imgs/meF.png" alt=""><p>我的</p></div></router-link>
    </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:"grabble",
    data() {
        return {
            valu:"",
            geohash4:"",
            arrDi:[],

        }
    },
    created() {
    },
    computed: {
      ...mapState(["Geohash"])  
    },
    methods: {
         fango(){
            history.go(-1)  
        },
        getVul(){
            const api = "https://elm.cangdu.org/v4/restaurants?geohash="+this.Geohash+"&keyword="+this.valu
             this.$http({
                url:api,
                method:'get'
            }).then(res => {
                this.arrDi = res.data;
            })
        }
    }

 

    

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
#sous{
    width: 100vw;
    height: 0.5rem;
    background-color: #fff;
}
#shur{
    width: 70vw;
    margin-top:0.1rem;
    margin-left: 0.1rem;
    height: 0.31rem;
    background-color: #f2f2f2;
    border: 0.01rem solid #e4e4e4;
    padding-left: 0.05rem;
    font-weight: bold;
    border-radius: 0.05rem;
}
#tij{
    width: 20vw;
    background-color: #3190e8;
    font-weight: 700;
    margin-left: 0.1rem;
    color: white;
    height: 0.31rem;
    border-radius: 0.05rem;
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
#ul1{
background-color: #fff;
 }
 #lis{
   position: relative;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  border-top: 0.01rem solid #e4e4e4;
 }
 #tp{
   width: 20vw;
  display: block;
   margin-left: 0.1rem;
 }
 #xingXing{
   position: absolute;
   left: 25vw;
   top: 0.5rem;
}
#fenShu{
      position: absolute;
      top: 0.535rem;
      left: 50vw;
      font-size: 0.12rem;
      color: #666;
}
#order{
    position: absolute;
    bottom: 0.2rem;
    right: 34vw;
    color: #999;
    font-size: 0.10rem;
}
 #n_1{
   position: absolute;
   left: 30vw;
   top: 0.2rem;
   font-weight: bold;
   color: black;
 }
 #nr_2,#nr_3{
     position: absolute;
     right:5vw;
     top: 0.2rem;
     font-size: 0.1rem;
     color: #999; 
 }
 #nr_3{
     right: 2vw;
 }
#nr_4,#nr_5{
    position: absolute;
    right: 2vw;
    top: 0.5rem;
    font-size: 0.1rem;
    color: #3190e8;
    border: 0.01rem solid #3190e8;
}
#nr_5{
    color: white;
    background-color: #3190e8;
    right: 11vw;
}
#nr_6,#nr_9{
    position: absolute;
    left: 39vw;
    bottom: 0.2rem;
    font-size: 0.10rem;
    color: #666;
}
#nr_9{
    left: 25vw;
}
#nr_7,#nr_8{
    position: absolute;
    right: 18vw;
    bottom: 0.2rem;
    color: #666;
    font-size: 0.1rem;
}
#nr_8{
    right: 2vw;
    color: #3190e8;
}

</style>
