<template>
    <div id="head_a">
       <div id="head">
           <img @click="fango()" src="../../static/imgs/back.png" alt="">
           <span id="login">{{idName}}</span><span @click="fango()" id="cut">切换城市</span></div>
       <div id="seek"><input v-model="shuRu" id="input_sr" placeholder="请输入学校、商务楼、地址" type="text">
       <input id="input_tj" value="提交" type="button"  @click="getADD()">
       </div>
       <div id="di_nei"><ul>
           <li :key="i" v-for="(v,i) in arrSou">
           <router-link id="di_lie" :to="'/takeOut?geohash2='+v.geohash+'&latitude='+v.latitude+'&longitude='+v.longitude">
           <h3>{{v.name}}</h3>
           <p>{{v.address}}</p></router-link>
           </li></ul>
        </div>
       <div><span id="Ls" v-show="lS">搜索历史</span>
       <ul><li :key="i" v-for="(v,i) in arrLis"></li></ul>
       </div>
       


    </div>
</template>
<script>
import {mapState} from 'vuex'
import { Loading } from 'element-ui';
let loadingInstance
export default {  
    name:"site",
    data() {
        return {
            idName:"",
            arrSou:[],
            shuRu:"",
            id:"",
            arrLis:[],
            lS:true
        }
    },
    created() {
        this.getS();
        this.getsId();
        
    },
    methods: {
        addlis(){
            
        },
        fango(){
            history.go(-1)  
        },
        getS(){
           this.idName = this.$route.query.idName1
        },
        getsId(){
           this.id = this.$route.query.Id
        },
        getADD(){
                this.lS = false;
            loadingInstance = Loading.service({
            fullscreen:true,
            background:"rgba(0, 0, 0, 0.8)",
            text:"玩命加载中...",
            spinner:"el-icon-loading",
        });
            const api = "https://elm.cangdu.org/v1/pois?type=search&keyword="+this.shuRu+"&city_id="+this.id;
            this.$http({
                url:api,
                method:'get'
            }).then(res => {
                this.arrSou = res.data
                // 关闭加载
                loadingInstance.close();
            })
            
        },
    },

}
</script>
<style scoped>
#head_a{
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
    overflow: hidden;
    line-height: 0.45rem;
    text-align: center;
}
#head img{
    height: 0.2rem;
    position: absolute;
    left: 0.2rem;
    top: 0.13rem;
}
#cut{
    position: absolute;
    right: 0.2rem;
    top: 0;
    color: white;
    font-size: 0.14rem;
}
#login{
    font-weight:bold;
    color: white;
    font-size: 0.20rem;
}
#seek{
    overflow: hidden;
    height: 1rem;
    width: 100vw;
    background-color: #fff;
    margin-top: 0.52rem;
}
#input_sr{
    width: 90vw;
    height: 0.35rem;
    border: 0.01rem solid #e4e4e4;
    margin-left: 5vw;
    margin-top: 0.1rem;
    font-size: 0.16rem;
    padding-left: 0.06rem;
}
#input_tj{
   width: 90vw;
   height: 0.35rem;
   background-color: #3190e8;
   margin-top: 0.1rem;
   margin-left: 5vw;
   color: white;
   font-size: 0.16rem;
}
#di_nei li{
background-color: #fff;
border-top: 0.01rem solid #e4e4e4;
width: 100vw;
height: 0.63rem;

}
#di_nei h3{
    font-size: 0.15rem;
    margin-left: 0.2rem;
    margin-top: 0.15rem;
}
#di_nei p{
    font-size: 0.10rem;
    margin-top: 0.09rem;
    margin-left: 0.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
#di_lie{
    color: #666;
}
#Ls{
    color: #666;
    font-size: 0.13rem;
}

</style>
