<template>
  <div id="wrap">
    <div id="head">
      <img @click="back()" id="_head" src="../../static/imgs/back.png" alt>
      <p id="_head_">兑换红包</p>
    </div>
    <div id="wrap1">
      <input v-model="exchange_code" placeholder="请输入兑换码" type="text">
      <br>
      <div id="captcha">
        <input v-model="codeNumber" placeholder="验证码" type="text">
        <img :src="code" alt>
        <div id="text">
          <p>看不清</p>
          <p @click="getCode()">换一张</p>
        </div>
      </div>
    </div>
    <button @click="login()">兑换</button>
    <div class="frame animated heartBeat 0.4s" v-show="outshow1">
      <img src="../../static/imgs/tishi2.jpg" alt>
      <p>无效的兑换码</p>
      <p @click="falsetool1()">确认</p>
    </div>
    
  </div>
</template>
<script>
// import { mapState } from "vuex";
export default {
  name: "converthongbao",
  data() {
    return {
      user_id:"",
      code: "", //存储验证码base64图片
      exchange_code: "",
      codeNumber: "" ,//存储验证码输入框的值
      outshow1:false
    };
  },
  //创建完成之后未被挂载
  created() {
    //首先，获取验证码
    this.getCode();
    this.getname();
  },
//   computed: {
//       getname1() {
//       return this.$store.state.username;
//     } 
    //   ...mapState(["username"])
    // },
  methods: {
      getname() {
          this.user_id=this.$store.state.username;
      return ;
    },
    falsetool1() {
      this.outshow1 = false;
    },
    getCode() {
      const api = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        url: api,
        method: "post",
        //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        withCredentials: true
      }).then(res => {
        console.log("验证码数据");
        console.log(res);
        this.code = res.data.code;
      });
    },
    login() {
        this.outshow1 = true;
      this.$store.commit("getname", this.exchange_code);
      const api =
        "https://elm.cangdu.org/v1/users/" + this.user_id + "/hongbao/exchange";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          user_id: this.user_id,
          exchange_code: this.exchange_code,
          captcha_code: this.codeNumber
        }
      }).then(res => {

      });
    },
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#wrap {
  width: 3.75rem;
  position: relative;
}
#head {
  width: 100vw;
  height: 0.45rem;
  background-color: #3190e8;
}
#_head {
  margin-top: 0.1rem;
  width: 0.15rem;
  float: left;
  margin-left: 0.1rem;
}
#_head_ {
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.2rem;
  font-weight: bold;
  color: white;
}
#top {
  width: 100%;
  height: 0.55rem;
  background-color: blue;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
}
#top img {
  height: 0.25rem;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#top p {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#wrap1 {
  margin-top: 0.55rem;
}
#wrap1 input {
  width: 3.75rem;
  height: 50px;
  font-size: 0.2rem;
}
#captcha {
  width: 3.75rem;
  height: 50px;
  background-color: white;
  position: relative;
}
#captcha img {
  position: absolute;
  right: 15%;
  top: 20%;
}
#text {
  position: absolute;
  right: 2%;
  top: 5%;
  font-size: 0.15rem;
}
#text p:nth-child(2) {
  color: blue;
}
#text2 {
  font-size: 0.15rem;
  color: red;
}
#text2 p {
  margin-top: 10px;
  margin-bottom: 5px;
}
#wrap > button {
  font-size: 0.15rem;
  /* margin-top: 50px; */
  width: 95vw;
  margin-left: 2.5vw;
  height: 50px;
  background-color: #4cd964;
  outline: none;
  border-radius: 0.1rem;
}

.frame{
  width: 2.75rem;
  height: 2.25rem;
  background-color: white;
  border: 1px solid gray;
  position: absolute;
  left: 0.5rem;
  top: 1.25rem;
  border-radius: 0.1rem;
  /* animation: jello 100s; */
}
.frame img{
  width: 1.2rem;
  position: absolute;
  left: 0.75rem;
  top: 0.05rem;
}
.frame p:nth-child(2) {
  font-size: 0.25rem;
  position: absolute;
  left: 0.65rem;
  top: 1.2rem;
}
.frame p:nth-child(3) {
  width: 2.75rem;
  height: 0.45rem;
  background-color: #4cd964;
  border-radius:  0 0 0.1rem 0.1rem;
  color: white;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.25rem;
  position: absolute;
  left: 0;
  bottom: 0;

}
</style>
