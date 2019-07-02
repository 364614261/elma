<template>
  <div class="hello">
    <div id="head_H">
      <a id="elm" href="javascript:location.reload()">elm.me</a>
      <router-link to="/login"><span id="login">登陆/注册</span></router-link>
      </div>
    <div id="hello_1">
      <div id="location">
         <span id="location_L">当前定位城市：</span>
         <span id="location_O">定位不准时，请在城市中选择</span>
         </div>
       <router-link :to="'/site?idName1='+login.name+'&Id='+login.id">
         <div  id="location_login">
         <span>{{login.name}}</span><img id="location_login_img" src="../../static/imgs/right.png" alt="">
         </div></router-link>
       <div id="hot">
         <span>热门城市</span>
         </div>
         <div id="hot_l"><ul><li :key="i" v-for="(v,i) in hots">
           <router-link id="hot_r" :to="'/site?idName1='+v.name+'&Id='+v.id">{{v.name}}</router-link>
           </li></ul></div>

         <div id="all_login">
           <ul id="allCities">
<li :key="key" v-for="(value,key) in groupCities">
<h3>{{key}}<span v-if="key=='A'">(按字母排序)</span></h3>
<ul id="all_ul">
  <li :key="i" v-for="(v,i) in value">
  <router-link id="all_li" :to="'/site?idName1='+v.name+'&Id='+v.id">{{v.name}}</router-link>
  </li></ul></li>
</ul>
         </div>
    </div>



  </div>
</template>

<script>
import { Loading } from 'element-ui';
let loadingInstance
export default {
  name: 'city',
  data () {
    return {
      login:{},
      hots:[],
      groupCities:{}
    }
  },
  created() {
    this.getLogin();
    this.getHot();
    this.getGroup();
    loadingInstance = Loading.service({
            fullscreen:true,
            background:"rgba(0, 0, 0, 0.8)",
            text:"玩命加载中...",
            spinner:"el-icon-loading",
        });
  },
  methods: {
    getLogin(){
      const api = "https://elm.cangdu.org/v1/cities?type=guess"
      this.$http({
            url:api, // 请求地址
            method:'get',
          }).then(res => {
            this.login = res.data;

          })
    },
    getHot(){
      const api = "https://elm.cangdu.org/v1/cities?type=hot"
      this.$http({
        url:api,
        method:'get'
      }).then(res =>{
        this.hots = res.data
      })
    },
    getGroup(){
      const api = "https://elm.cangdu.org/v1/cities?type=group"
      this.$http({
        url:api,
        method:'get',
      }).then(res => {
        var arr = [];
        for (const key in res.data) {
          arr.push(key);
        }
        arr.sort();
       for (var i = 0; i < arr.length; i++) {
        this.$set(this.groupCities,arr[i],res.data[arr[i]]);
          }
          // 关闭加载
                loadingInstance.close();
      })
    },
    getCzhi(){
       const api = "https://elm.cangdu.org/v1/cities?type=guess"
      this.$http({
            url:api, // 请求地址
            method:'get',
          }).then(res => {
            this.login = res.data.name
            this.$router.push({
                        name:"site",
                        query:res.data,
                        params:{pID:res.data.id}
                    })
          })
       
    }

  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hello{
  overflow: hidden;
}
#hello_1{
  overflow: hidden;
}
#head_H{
  background-color: #3190e8;
    position: fixed; 
    z-index: 100;
    left: 0;
    top: 0;
    width: 100vw;
    height: 0.4rem;
    overflow: hidden;
}
#elm{
  color: white;
  font-size: 0.15rem;
  position: absolute;
  left: 0.1rem;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
}
#login{
  color: white;
  position: absolute;
  right: 0.3rem;
  top: 50%;
  transform: translateY(-50%);

}
#location{
  border: 0.01rem solid #e4e4e4;
  width: 100%;
  height: 0.35rem;
justify-content: space-between;
display: flex;
line-height: 0.35rem;
margin-top:0.4rem; 
background-color: #fff;
}
#location_L{
  font-size: 0.14rem;
  color: #666;
  padding-left: 0.2rem;
}
#location_O{
  font-size: 0.12rem;
  color: #9f9f9f;
  padding-right: 0.2rem;
}
#location_login{
  width: 100%;
  height: 0.31rem;
  background-color: #fff;
  position: relative;
overflow: hidden;
border-bottom: 0.02rem solid #e4e4e4;
}
#location_login_img{
  height: 0.23rem;
  position: absolute;
  right: 0.15rem;
  top: 50%;
  transform: translateY(-50%);
}
#location_login span{
  color: #3190e8;
  position: absolute;
  left: 0.2rem;
  top: 50%;
  transform: translateY(-50%);
}
#hot{
   border-top: 0.02rem solid #e4e4e4;
   background-color: #fff;
   width: 100%;
   height: 0.3rem;
   margin-top: 0.1rem;
   font-size: 0.14rem;
   color: #666;
   line-height: 0.28rem;
   padding-left: 0.2rem;
}
#hot_r{
  color: #3190e8;
}
#hot_l{
 margin-bottom: 0.1rem;
}
#hot_l ul li{
  float: left;
  width: 0.9275rem;
  height: 0.3rem;
  border: 0.01rem solid #e4e4e4;
  background-color: #fff;
  text-align: center;
  line-height: 0.3rem;
  border-right: 0;
}
#hot_l ul li:nth-child(4n+1){
border-left: 0;
}
#all_login{
  width: 100%;
  overflow: hidden;
}
#allCities{
  overflow: hidden;
  background-color: #fff;
}
#all_li{
   float: left;
  width: 0.9275rem;
  height: 0.3rem;
  border: 0.01rem solid #e4e4e4;
  background-color: #fff;
  text-align: center;
  line-height: 0.3rem;
  border-left: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
}
#allCities h3{
  float: left;
  width: 3.75rem;
  height: 0.3rem;
  font-size: 0.14rem;
  background-color: #fff;
  line-height: 0.3rem;
  color: #9f9f9f;
  padding-left: 0.2rem;
  border-top: 0.06rem solid #e4e4e4;
}
#kongbai{
  padding: 0.1rem;
  width: 100vw;
  background-color: #999;
}

</style>
