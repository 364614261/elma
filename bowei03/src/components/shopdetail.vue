<template>
    <div>
        <div id="top">
            <img @click="back1()" src="../../static/imgs/back.png" alt="">
            <h2>商家详情</h2>
        </div>
        <div id="content">
            <div id="huoDong">
                 <p>活动与属性</p>
            </div>
            <div id="text"> 
                <div id="first">               
                 <span id="jian">{{detail.activities[0].icon_name}}</span>
                 <span>{{detail.activities[0].description}}</span></div>
                 <div id="second">               
                 <span id="bao">{{detail.supports[0].icon_name}}</span>
                 <span>{{detail.supports[0].description}}</span></div>
                 <div id="third">               
                 <span id="zhun">{{detail.supports[1].icon_name}}</span>
                 <span>{{detail.supports[1].description}}</span></div>
                 <div id="four">               
                 <span id="piao">{{detail.supports[2].icon_name}}</span>
                 <span>{{detail.supports[2].description}}</span></div>
            </div>
            <div id="safe">
                  <div id="safe_top">
                      <span id="safe_info">食品监督安全公示</span>
                      <router-link to="/safeInfo">
                      <div id="renZheng">
                          <span >企业认证详情</span>
                          <img src="../../static/imgs/back2.png" alt="">
                      </div>
                      </router-link>
                  </div>
                <div id="safe_bottom">
                      <div id="xiaoLian">
                          <img src="../../static/imgs/SSS1.png" alt="">
                      </div>
                      <div id="xiaoLian_right">
                          <span>监督检查结果：差</span>
                          <p>检查日期：</p>
                      </div>
                </div>
            </div>
           <div id="shopBottom">
                <div id="shopMessage">
                    <p>商家信息</p>
                </div>
                <div id="shopName">
                     <p>{{detail.name}}</p>
                </div>
                 <div id="address">
                     <p>地址：{{detail.address}}</p>
                </div>
                <div id="opening_hours">
                     <p>营业时间：{{detail.opening_hours}}</p>
                </div>
                <div id="zhiZhao">
                     <p>营业执照</p>
                     <img src="../../static/imgs/back2.png" alt="">
                </div>
                <div id="xuKe">
                     <p>餐饮服务许可证</p>
                     <img src="../../static/imgs/back2.png" alt="">
                </div>
           </div>

        </div>

    </div>
</template>
<script>
import {mapState} from 'vuex'
import { Loading } from 'element-ui';
let loadingInstance
export default {
    name:"shopdetail",
    data(){
       return {
          detail:{},
          
       }
    },
    created() {
        this.addShopDetail();
        loadingInstance = Loading.service({
            fullscreen:true,
            background:"rgba(0, 0, 0, 0.8)",
            text:"玩命加载中...",
            spinner:"el-icon-orange",
        });
    },
    methods: {   
        back1(){
            history.go(-1)  
        },       
        addShopDetail(){
            const api = "https://elm.cangdu.org/shopping/restaurant/"+this.shopID;
            this.$http({
                url:api,
                method:'get',               
            }).then(res =>{//请求返回的数据res
               console.log("获取商家信息详情成功");
            //    console.log(res.data);
               //返回请求到的数据
               this.detail = res.data;    
               // 关闭加载
                loadingInstance.close();                         
            })        
        },
   
},
computed: {
        ...mapState(['shopID'])
    }
}
</script>
<style scoped>
#top{
    background-color: #3190e8;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    height: 0.5rem;
    width: 100vw;    
    overflow: hidden; 
    color: white; 
    text-align: center;
    line-height: 0.5rem;
}
#top img{
    width: 4vw;
    position: absolute;
    left: 3vw;
    top: 0.14rem;
}
h2{
    font-size: 600;
}
#content{
    padding-top: 0.07rem;
    height: 80vh;
    
}
#huoDong{
    border-bottom: 1px solid #f1f1f1;
    background-color: #fff;
    text-align: left;
    font-size: 0.17rem;
    padding: 0.1rem;
}
#text{
    background-color: #fff;
    padding: 0.2rem;
    overflow: hidden;
}
#first{
    float: left; 
    text-align: left;
    width: 50vw; 
}
#jian{
    margin-right: 0.1rem;
    background-color: red;
    color: #f1f1f1;
    width: 5vw;
    font-size: 0.16rem;
    text-align: left;
}
#second{
    float: left;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;  
}
#bao{
    margin-right: 0.1rem;
    background-color: #686060a1;
    color: #f1f1f1;
    width: 5vw;
    font-size: 0.16rem;
}
#third{
    float: left;
    padding-bottom: 0.2rem;  
}
#zhun{
    margin-right: 0.1rem;
    background-color: #320dd6a1;
    color: #f1f1f1;
    width: 5vw;
    font-size: 0.16rem;
}
#four{
    float: left;
}
#piao{
    margin-right: 0.1rem;
    background-color: #686060a1;
    color: #f1f1f1;
    width: 5vw;
    font-size: 0.16rem;
}
#safe{
    background-color: #fff;
    margin-top: 0.1rem;
    overflow: hidden;
}
#safe_top{
    border-bottom: 1px solid #e2d3d3ea;
    padding: 0.1rem;
}
#safe_info{
    font-size: 0.18rem;
    float: left;
    padding: 0.1rem;
}
#safe_top img{
    width: 7vw;
    padding-top: 0.05rem;
}
#renZheng span{
    float: left;
    margin-left: 0.5rem;
    padding-top: 0.11rem;
    color: #333;
    font-weight: 400;
    font-size: 0.17rem;
}
#safe_bottom{
    /* border: 1px solid red; */
    overflow: hidden;
}
#xiaoLian img{
    width: 15vw;
    float: left;
    padding: 0.1rem;
}
#xiaoLian_right{
     float: left;
     padding-top: 0.2rem;
     text-align: left;
}
#xiaoLian_right p{
     padding-top: 0.1rem;
}
#shopBottom{
    background-color: #fff;
    margin-top: 0.1rem;
    overflow: hidden;
}
#shopMessage{
    /* border: 1px solid blue; */
    width: 100%;
    font-size: 0.18rem;
    text-align: left;
    padding: 0.17rem;
    border-bottom: 1px solid #e2d3d3ea;
}
#shopName{
    font-size: 0.13rem;
    text-align: left;
    width: 100%;
    padding: 0.17rem;
    border-bottom: 1px solid #e2d3d3ea;
}
#address{
    font-size: 0.13rem;
    text-align: left;
    width: 100%;
    padding: 0.17rem;
    border-bottom: 1px solid #e2d3d3ea;
}
#opening_hours{
    font-size: 0.13rem;
    text-align: left;
    width: 100%;
    padding: 0.17rem;
    border-bottom: 1px solid #e2d3d3ea;
}
#zhiZhao{
    font-size: 0.13rem;
    text-align: left;
    width: 100%;
    padding: 0.17rem;
    border-bottom: 1px solid #e2d3d3ea;
    position: relative;
}
#zhiZhao img{
    position: absolute;
    right: 0.6rem;
    top: 0.1rem;
    width: 7vw;
    
}
#xuKe{
    font-size: 0.13rem;
    text-align: left;
    width: 100%;
    padding: 0.17rem;
    border-bottom: 1px solid #e2d3d3ea;
    position: relative;
}
#xuKe img{   
    position: absolute;
    right: 0.6rem;
    top: 0.1rem;
    width: 7vw;
    /* border: 1px solid red; */
}
</style>
