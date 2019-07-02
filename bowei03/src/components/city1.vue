<template>
  <div class="hello">
    <div id="head">
      <a class="_head" href="javascript:location.reload()">ele.me</a>
      <router-link to="/mine">
         <img id="img1" src="../../static/imgs/aaa.png" alt="">
      </router-link>
    </div>
    <div id="tail">
      <div id="middle">
        <span id="_middle">当前定位城市:</span>
        <span id="_middle_" style="color:#9f9f9f">定位不准时,请在城市列表中选择</span>
      </div>
      <router-link :to="'/site?idName1='+login.name+'&Id='+login.id">
        <div id="login">
          <span
            style="font-size:0.18rem;color:#3190e8;position:absolute;top:0.1rem;left:0.1rem;"
          >{{login.name}}</span>
          <img
            style="height:0.18rem;position:absolute;top:0.1rem;right:0.1rem;"
            src="../../static/imgs/right.png"
            alt
          >
        </div>
      </router-link>
      <div>
        <p style="margin-left:0.1rem;font-size:0.15rem;height:0.3rem;line-height: 0.3rem;">热门城市</p>
        <ul class="ul1">
          <li class="lis" :key="i" v-for="(v,i) in hot">
            <router-link id="hot_r" :to="'/site?idName1='+v.name+'&Id='+v.id">
              {{v.name}}
            </router-link>
            </li>
        </ul>
      </div>
      <div>
        <ul id="allCities">
          <li :key="key" v-for="(value,key) in groupCities">
            <h3 id="_h3">
              {{key}}
              <span style="color:#999;font-size:0.15rem;" v-if="key=='A'">(按字母排序)</span>
            </h3>
            <ul>
             
              <li @click="getGroupCities()" :key="i" v-for="(v,i) in value">
                <router-link  class="names" :to="'/site?idName1='+v.name+'&Id='+v.id">
                  {{v.name}}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "city1",
  data() {
    return {
      login:{},
      Id:"",
      hot: [],
      groupCities: {}
    };
  },
  created() {
    this.guess();
    this.hots();
    this.getGroupCities();
    loadingInstance = Loading.service({
            fullscreen:true,
            background:"rgba(0, 0, 0, 0.8)",
            text:"玩命加载中...",
            spinner:"el-icon-loading",
        });
  },
  methods: {
    guess() {
      const api = "https://elm.cangdu.org/v1/cities?type=guess";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log("name"+res.data.name);
        this.login = res.data;
        console.log("id"+res.data.id);
      });
    },
    hots() {
      const api = "https://elm.cangdu.org/v1/cities?type=hot";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res);
        this.hot = res.data;
      });
    },
    getGroupCities() {
      const api = "https://elm.cangdu.org/v1/cities?type=group";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res);
        var arr = [];
        //先排序,再给数据源赋值
        for (const key in res.data) {
          arr.push(key);
        }
        arr.sort();
        console.log(arr);
        for (var i = 0; i < arr.length; i++) {
          // this.groupCities[arr[i]] = res.data[arr[i]];
          this.$set(this.groupCities, arr[i], res.data[arr[i]]);
        }
        // this.groupCities = res.data;
        // var arr = [];
        // 关闭加载
                loadingInstance.close();
      });
    }
  }
};
</script>
<style scoped>
#hot_r{
  color: #3190e8;
}
.hello {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
#_h3{
  float: left;
  width: 100%;
  height: 0.3rem;
  line-height: 0.3rem;
  background-color: #fff;
  margin-top: 0.1rem;
  border: 0.01rem solid #e4e4e4;
}
#middle{
  margin-top: 0.45rem;
}
#middle,
#login {
  position: relative;
  height: 0.45rem;
}
#img1{
    width: 0.18rem;
    position: absolute;
    right: 0.14rem;
    top: 0.1rem;
}
#head {
  position: fixed;
  left: 0;
  top:0;
  width:100vw;
  height:0.45rem;
  z-index: 3;
  background-color: #3190e8;
}
#middle,
#login {
  border: 0.01rem solid #e4e4e4;
}
#_middle {
  font-size: 0.15rem;
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
}
#_middle_ {
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
  font-size: 0.15rem;
}
._head{
  color: white;
  font-size: 0.16rem;
}
._head {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
.ul1 {
  overflow: hidden;
}
.names{
  width: 0.9175rem;
  border: 0.01rem solid #e4e4e4;
  float: left;
  text-align: center;
  color: #666;
  font-size: 0.15rem;
  height: 0.4rem;
  line-height: 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: #fff;
}
.lis {
  width: 0.9175rem;
  border: 0.01rem solid #e4e4e4;
  float: left;
  text-align: center;
  color: #3190e8;
  font-size: 0.15rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
</style>
