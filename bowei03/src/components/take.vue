<template>
  <div>
    <header>
        <img @click="gos()" src="../../static/imgs/back.png" alt>
      <span>编辑地址</span>
      <span @click="shanchu()">{{msg}}</span>
    </header>
    <div class="xinx">
      <ul>
        <li :key="i" v-for="(v,i) in arrLC">
          <p>
            {{v.name}}
            <span @click="remove(i)" v-if="bol==false">x</span>
          </p>
          <p>{{v.phone}}</p>
        </li>
      </ul>
    </div>
    <router-link to="/newaddress">
      <div id="center">
        <span style="color:black">新增地址</span>
        <img id="center1" src="../../static/imgs/iconfontjiantou2.png" alt>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "take",
  data() {
    return {
      // shouji:[],
      // yonghu:[],
      arrLC: [],
      msg: "编辑",
      bol: true
    };
  },
  created() {
    // this.jiezhi();
    this.jie();
  },
  methods: {
    gos(){
      history.go(-1)
    },
    back() {
      this.$router.back();
    },
    jie() {
      this.$http({
        method: "get",
        url:
          "https://elm.cangdu.org/v1/users/" +
          this.$store.state.login.user_id +
          "/addresses"
      }).then(res => {
        console.log(res);
        this.arrLC = res.data.reverse();
      });
    },
    // jiezhi(){
    //     this.yonghu = localStorage.yonghu.split(",").reverse()
    //     this.shouji = localStorage.shouji.split(",").reverse()
    //     for(var i = 0;i<this.shouji.length;i++){
    //             var acc ={
    //                 yonghu:this.yonghu[i],
    //                 shouji:this.shouji[i]
    //             }
    //             this.arrLC.push(acc);
    //     }
    // },
    shanchu() {
      this.bol = !this.bol;
      if (this.bol == false) {
        this.msg = "完成";
      } else {
        this.msg = "编辑";
      }
    },
    remove(a) {
      console.log(a);
      this.$http({
        method: "DELETE",
        url:
          "https://elm.cangdu.org/v1/users/" +
          this.$store.state.login.user_id +
          "/addresses/" +
          this.arrLC[a].id,
      }).then(res => {
        console.log(res);
        this.arrLC.splice(a,1);
      });
    },
  },
};
</script>
<style scoped>
header {
  width: 100%;
  height: 0.55rem;
  background-color: rgb(48, 144, 232);
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
}
header img {
  height: 0.25rem;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%);
}
header > span:nth-child(2) {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
header > span:nth-child(3) {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#center {
  text-indent: 1em;
  background-color: white;

  height: 0.5rem;
  line-height: 0.5rem;
}
#center img {
    width: 0.2rem;
  float: right;
  margin: 0.15rem 0.15rem 0 0;
}
ul li:nth-child(1) {
  background-color: rgb(255, 245, 195);
}
li p {
  padding: 0.08rem 0 0.05rem 0.15rem;
}
li p:nth-child(2n) {
  border-bottom: 0.001rem solid gray;
}
.xinx {
  margin: 0.65rem 0 0.1rem 0;
}
li span {
  float: right;
  margin: 0.12rem 0.15rem 0 0;
  /* display: none; */
}
</style>
