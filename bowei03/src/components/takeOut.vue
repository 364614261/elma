<template>
    <div id="head_1">
        <div id="head">
        <router-link to="/grabble"><img src="../../static/imgs/fangdajing.png" alt=""></router-link>
        <div id="login_t"><router-link to="/city"><span id="login">{{arrDi.name}}</span></router-link> 
        <router-link to="/mine"><img id="wd" src="../../static/imgs/wd1.png" alt=""></router-link></div></div>
      
       <div id="lunbo">
             <swiper  v-if="imgs1.length > 0"
               :options="swiperOption"  
               ref="mySwiper" >
            <swiper-slide>
            <div id="lunbo_one" :key="i" v-for="(v,i) in imgs1">
            <router-link :to="'/classify?title='+v.title">
            <img id="img1" :src="'https://fuss10.elemecdn.com'+v.image_url" alt="">
            <p>{{v.title}}</p></router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
            <div id="lunbo_two"  :key="i" v-for="(v,i) in imgs2">
              <router-link :to="'/classify?title='+v.title">
            <img id="img2" :src="'https://fuss10.elemecdn.com'+v.image_url" alt="">
            <p>{{v.title}}</p></router-link>
              </div>
            </swiper-slide >
    <div id="fenYe" class="swiper-pagination"  slot="pagination"></div>    
           </swiper>
        </div>

       <div>
         <p id="fujin">附近商家</p>

        <div id="neiR"> <ul id="ul1">
          
            <li id="lis" :key="i" v-for="(v,i) in arrSpu">
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
        </ul></div></div>

       <div id="base">
        <router-link to="/takeOut"><div><img src="../../static/imgs/homeT.png" alt=""><p>外卖</p></div></router-link>
        <router-link to="/grabble"><div><img src="../../static/imgs/zhinanzhen.png" alt=""><p>搜索</p></div></router-link>
        <router-link to="/order"><div><img src="../../static/imgs/orderF.png" alt=""><p>订单</p></div></router-link>
        <router-link to="/mine"><div><img src="../../static/imgs/meF.png" alt=""><p>我的</p></div></router-link>
    </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import { Loading } from 'element-ui';
let loadingInstance
export default {
    name:"takeOut",
    data() {
      return {
        arrDi:{},
        imgs1:[],
        imgs2:[],
        arrSpu:[],
         swiperOption: {
           initialSlide:0,
           pagination: {
           el: '.swiper-pagination'
        },   
    // 如果需要前进后退按钮
         navigation: {
        //    nextEl: '.swiper-button-next',
        //    prevEl: '.swiper-button-prev'
          },
          loop:true
        },
      }
    },
    created() {
      this.getDiz();
      this.getSpu();
      this.addImgs();
      this.getjwdu();
      loadingInstance = Loading.service({
            fullscreen:true,
            background:"rgba(0, 0, 0, 0.8)",
            text:"玩命加载中...",
            spinner:"el-icon-orange",

        });
    },
    computed: {
      ...mapState({
        Geohash:"Geohash"
      })
    },
    methods: {
      
      getjwdu(){
           this.$store.commit("addJing",this.$route.query.latitude)
          this.$store.commit("addWei",this.$route.query.longitude)
          this.$store.commit("addgeohash",this.$route.query.geohash2)
          console.log(this.$route.query.geohash2)
      },
      getDiz(){
      const api = "https://elm.cangdu.org/v2/pois/"+this.Geohash;
            this.$http({
                url:api,
                method:'get'
            }).then(res => {
                this.arrDi = res.data;
            })
    },
    addImgs(){
            const api = "https://elm.cangdu.org/v2/index_entry?image_url";
            this.$http({
                url:api,
                method:'get',               
            }).then(res =>{//请求返回的数据res
                  for (var i = 0;i < res.data.length;i++) {
                     if (i > 7) {
                           this.imgs2.push(res.data[i]);
                     }else{
                          this.imgs1.push(res.data[i]);
                     }                      
                 }
            })         
        },
    getSpu(){
      const api = "https://elm.cangdu.org/shopping/restaurants?latitude="+this.arrDi.latitude+"&longitude="+this.arrDi.longitude;
            this.$http({
                url:api,
                method:'get'
            }).then(res => {
                this.arrSpu = res.data;
                // 关闭加载
                loadingInstance.close();
            })
    },

    },

    
}
</script>
<style scoped>
#lunbo{
    background-color: white;
    height: 1.7rem;
    overflow: hidden;
    position: relative;   
    margin-top: 0.3rem;
}
#lunbo_one{   
    float: left;
    padding-left: 0.36rem;
    padding-top: 0.13rem;
    text-align: center
} 
#img1{
   width: 12vw;   
}
#lunbo_one p{
   font-size: 0.13rem;
   color: black;
} 
#lunbo_two{   
    float: left;   
    padding-top: 0.13rem;
}
#lunbo_two p{
  color: black
} 
#img2{
   width: 12vw;   
   padding-left: 0.36rem;
}
#lunbo_two p{
   font-size: 0.13rem;
   padding-left: 0.34rem;
} 
#fenYe{
    position: absolute;
    
}
#fujin{
   margin-top: 0.08rem;
   margin-bottom: 0.08rem;
    padding-left: 0.1rem;
    font-size: 0.13rem;
}
#head_1{
position: relative;
overflow: hidden;
}
#head{
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.45rem;
    
    line-height: 0.45rem;
    text-align: center;
}
#head img{
    height: 0.2rem;
    position: absolute;
    left: 0.2rem;
    top: 0.13rem;
}
#login_t{
width: 50vw;
overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
  margin-left: 25vw;
}
#login{
    font-weight:bold;
    color: white;
    font-size: 0.20rem;
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
 #wd{
   margin-left: 85vw;
 } 
#neiR{
    margin-bottom: 0.4rem;
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
    right: 26vw;
    color: #999;
    font-size: 0.12rem;
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
    left: 41.5vw;
    bottom: 0.2rem;
    font-size: 0.12rem;
    color: #666;
}
#nr_9{
    left: 24.9vw;
}
#nr_7,#nr_8{
    position: absolute;
    right: 11vw;
    bottom: 0.2rem;
    color: #666;
    font-size: 0.10rem;
}
#nr_8{
    right: 2vw;
    color: #3190e8;
}
</style>
