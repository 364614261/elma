<template>
    <div id="head_1c">
        <div id="headC">
        <img @click="getgo()" src="../../static/imgs/back.png" alt="">
        <div id="login_t"><span id="login">{{title1}}</span></div></div>
        <div id="head_s"><div>
        <el-cascader
         v-model="value"
         :options="options"
         :props="fen_op"
         @change="handleChange"
        @focus="ycsx()">
         <template class="list_temp" slot-scope="{ node, data }">
            <img class="shangjialogo" src="../../static/imgs/re.png" alt>
            <span>{{ data.name }}</span>
            <span>({{ data.count}})</span>
          </template>
         </el-cascader>
        </div> 
        <div>
           <el-cascader
         v-model="value1"
         :options="options1"
         @focus="ycsx()">
        <p @click="gets(data.value)" class="list_temp" slot-scope="{ node, data }">{{data.label}}</p>
         </el-cascader>    
        </div>
        
        <div id="saiX" @click="xs_yc()" ><div v-show="xy == false" id="saiX1">筛选</div><div v-show="xy" id="saiX2">筛选</div>
        </div></div>
        <!-- <router-view></router-view> --> 
        <div v-show="xy" id="sai_x"><ul>
            <li id="sai_1">配送方式</li>
            <li id="sai_2"  ><input :checked="qk" type="checkbox">{{peisong[0].text}}</li>
         <li id="sai_3">商家属性(可以多选)</li>
        </ul>
        <ul id="sai_ul">
            <li id="sai_4" :key="i" v-for="(v,i) in shux"><input :checked="qk" type="checkbox">{{v.name}}</li></ul></div>
        <div v-show="xy" id="wei_b">
            <span @click="qk_qk()" id="qing_k">清空</span><span @click="xs_yc()" id="que_d">确定</span>
            <div id="quanp"></div></div>

       <div id="neiR"> <ul id="ul1">
            <li id="lis" :key="i" v-for="(v,i) in arrSpu">
                 <router-link :to="'/restaurant?shopid='+v.id">
              <img id="tp" :src="'https://elm.cangdu.org/img/'+v.image_path" alt="">
            <span id="n_1">{{v.name}}</span>
            <div id="xingXing">
                 <el-rate                 
                 v-model="v.rating"
                 disabled                 
                 show-score
                 text-color="#ff9900"
                 score-template="">
                 </el-rate></div>
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
      



    </div>
</template>

<script>
import vueCityPicker from 'vue-city-bspicker'
import {mapState} from 'vuex'
import { Loading } from 'element-ui';
let loadingInstance
export default {
    name:"classify",
    data() {
        return {
            tabPosition: 'left',
            value:[],
            value1:[],
            options:[],
            options1:[
                {
                    value: '1',
                    label: '起送价最低',
                },
                {
                    value: '2',
                    label: '配送速度最快',
                },{
                    value: '3',
                    label: '评分最高',
                },{
                    value: '4',
                    label: '智能排序',
                },{
                    value: '5',
                    label: '距离最近',
                },{
                    value: '6',
                    label: '销量最高',
                }
            ],
            title1:"",
           fenlei:[],
           arrA:[],
           xy:false,
           qk:'',
           qk1:"true",
            fen_op:{
                children:'sub_categories',
                label:'name',
                value:'name',
            },
            peisong:[],
            shux:[], 
             arrSpu:[],
             paixID: "4"
        }
    },
    created () {
            this.getfen(); 
            this.getTou();
            this.getpeisong();
            this.getshuxing();
            this.getSpu();
            loadingInstance = Loading.service({
            fullscreen:true,
            background:"rgba(0, 0, 0, 0.8)",
            text:"玩命加载中...",
            spinner:"el-icon-orange",
        });
    },
    computed: {
      ...mapState(["Jing","Wei"])  
    },
    methods: {
        gets(a){
             this.paixID = a;
            this.getSpu(this.paixID)
        },
         getSpu(paixID){

      const api = "https://elm.cangdu.org/shopping/restaurants?latitude="+this.Jing+"&longitude="+this.Wei+"&order_by="+paixID;
            this.$http({
                url:api,
                method:'get'
            }).then(res => {
                this.arrSpu = res.data;
                // 关闭加载
                loadingInstance.close();
            })
    },
        xs_yc(){
            this.xy = !this.xy;  
        },
        ycsx(){
            this.xy = false;
        },
        qk_qk(){
            if(this.qk1 == "true"){
                this.qk = false;
                this.qk1 = false
            }else{
                this.qk = '';
                this.qk1 = "true";
            }
        },
         handleChange(value) {
              this.arrA = value
              console.log(value)
      },
       getfen(){
          const api = "https://elm.cangdu.org/shopping/v2/restaurant/category"
           this.$http({
                url:api,
                method:'get'
            }).then(res => {
                this.options = res.data;
                
            })
      },
        getgo(){
            history.go(-1)
        },
        getTou(){
        this.title1 = this.$route.query.title
      },
     getpeisong(){
         const api = "https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes"
           this.$http({
                url:api,
                method:'get'
            }).then(res => {
                this.peisong = res.data;
            })
     },
      getshuxing(){
         const api = "https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes"
           this.$http({
                url:api,
                method:'get'
            }).then(res => {
                this.shux = res.data;
            })
     },
    }
}
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
#head_1c{
position: relative;
overflow: hidden;
}
.shangjialogo{
    height: 0.1rem;
}
#headC{
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100vw;
    height: 0.45rem;
    line-height: 0.45rem;
    text-align: center;
}
#headC img{
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
#head_s{
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0.45rem;
    width: 100vw;
    height: 0.38rem;
    line-height: 0.38rem;
    display: flex;
    justify-content: space-around;
    text-align: center;
    
}
#head_s div{
    width: 1.24rem;
   
}
#saiX{
    color: #666;
    font-size: 0.16rem; 
}
#saiX1{
    border: #e4e4e4 solid 0.01rem;
    width: 1.23rem;
    height: 0.434rem;
    background-color: #fff;
    border-radius: 0.05rem;
    margin-top: 0.005rem;
}
#saiX2{
    border: #3190e8 solid 0.01rem;
    background-color: #fff;
    width: 1.23rem;
    height: 0.42rem;
    border-radius: 0.05rem;
    margin-top: 0.005rem;
}
#sai_x{
    background-color: #fff;
    border-top: #e4e4e4 0.01rem solid;
    position: fixed;
    left: 0;
    top: 0.89rem;
    z-index: 100;
}
#sai_1,#sai_3{
    color: #4e4e4e;
    font-size: 0.13rem;
    margin-top: 0.1rem;
    margin-left: 0.12rem;
}
#sai_2{
    color: #4e4e4e;
    font-size: 0.11rem;
    margin-top: 0.1rem;
    margin-left: 0.12rem;
    margin-bottom: 0.1rem;
    width: 30vw;
    height: 0.3rem;
   border: #e4e4e4 0.01rem solid;
   line-height: 0.3rem;
}
#sai_ul{
background-color: #fff;
overflow: hidden;
}
#sai_4{
     color: #4e4e4e;
    font-size: 0.11rem;
    margin-top: 0.1rem;
    margin-left: 0.12rem;
   border: #e4e4e4 0.01rem solid;
   line-height: 0.3rem;
   float: left;
   width: 28vw;
    height: 0.3rem;
}
#sai_4 input,#sai_2 input{
    margin-left: 0.06rem;
    margin-right: 0.1rem;
}
#wei_b{
    width: 100vw;
    height: 0.5rem;
    background-color: #e4e4e4;
    position: fixed;
    left: 0;
    top: 2.61rem;
    z-index: 100;
}
#quanp{
    background-color: rgba(0, 0, 0, 0.2);
    height: 100vh;
    margin-top: 0.5rem;
    width: 100vw;
    opacity: 0.4;
}
#qing_k{
    background-color: #fff;
    width: 46vw;
    height: 0.4rem;
    border-radius: 0.05rem;
    float: left;
    line-height: 0.4rem;
    text-align: center;
    margin-left: 2vw;
     margin-top: 0.06rem;
}
#que_d{
    background-color:#56d176;
    width: 46vw;
    height: 0.4rem;
    border-radius: 0.05rem;
    float: right;
    line-height: 0.4rem;
    text-align: center;
    margin-right: 2vw;
    margin-top: 0.06rem;
}
#neiR{
    margin-top: 0.9rem;
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
   /* border: 1px solid red; */
   margin-left: 0.1rem;
 }
 #xingXing{
   position: absolute;
   left: 25vw;
   top: 0.5rem;
}
#fenShu{
      position: absolute;
      top: 0.55rem;
      right: 34vw;
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

.el-input__inner{
    color: #3190e8
}


</style>
