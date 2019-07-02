<template>
  <div id="wrap">
    <div v-show="bo" class="bounced animated heartBeat 0.4s">
          <div id="bounced1">
              <img id="bounced2" src="../../static/imgs/tishi2.jpg" alt="">
              <p id="bounced3">请输入正确的账号</p>
          </div>
            <button @click="hidden()" id="cfm">确认</button>
      </div>
    <div id="head">
      <div>
        <img @click="shang()" id="_head" src="../../static/imgs/back.png" alt>
        <p id="_head_">账户信息</p>
      </div>
    </div>
    <div id="wrap1">
      <input v-model="username" placeholder="账号" type="text">
      <br>
      <input v-model="oldpassWord" placeholder="旧密码" type="text">
      <br>
      <input v-model="newpassword" placeholder="请输入密码" type="text">
      <br>
      <input v-model="confirmpassword" placeholder="请确认密码" type="text">
      <br>
      <div id="captcha">
        <input v-model="captcha_code" placeholder="验证码" type="text">
        <img :src="code" alt>
        <div id="text">
          <p>看不清</p>
          <p @click="getCode()">换一张</p>
        </div>
      </div>
    </div>
    <button @click="reset()">确认修改</button>
  </div>
</template>
<script>
export default {
  name: "reset",
  data() {
    return {
      code: "", //存储验证码base64图片
      username: "",
      oldpassWord: "",
      newpassword: "",
      confirmpassword: "",
      bo:false,
      captcha_code: "" //存储验证码输入框的值
    };
  },
  created() {
    //首先，获取验证码
    this.getCode();
  },
  methods: {
    hidden(){
        this.bo=false
    },
    shang() {
      //   返回上一个历史记录
      //   this.$router.go(-1);
      // 或者
      this.$router.back();
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
    reset() {
      const api = "https://elm.cangdu.org/v2/changepassword";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          username: this.username,
          oldpassWord: this.oldpassWord,
          newpassword: this.newpassword,
          confirmpassword: this.confirmpassword,
          captcha_code: this.captcha_code
        }
      }).then(res => {
        console.log("login数据");
        console.log(res);
        if (res.data.message) {
          // alert(res.data.message); //登陆失败
          this.bo=true;
        } else {
          //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
          this.$router.push({
            name: "mine",
            query: {
              username: this.username,
              newpassword: this.newpassword
            }
          });
        }
      });
    }
  }
};
</script>
<style scoped>
#wrap {
  /* background-color: gainsboro; */
  overflow: hidden;
}
.bounced{
    background-color: #fff;
    width: 70vw;
    height: 30vh;
    position: absolute;
    left: 15vw;
    top: 30vh;
    border-radius: 0.1rem;
    /* display: none; */
    z-index: 3;
}
#bounced1{
    font-size: 0.15rem;
}
#bounced2{
    width: 1rem;
    position: absolute;
    top: 0.1rem;
    left: 0.85rem;
}
#bounced3{
    position: absolute;
    top: 1.1rem;
    left: 0.75rem;
}
#cfm{
    width: 70vw;
    height: 0.4rem;
    position: absolute;
    bottom: 0;
    background-color: #4cd964;
    color: #fff;
    font-size: 0.2rem;
    border-radius: 0 0 0.1rem 0.1rem;
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
#top p {
  font-size: 0.15rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#wrap1 {
  margin-top: 15px;
}
#wrap1 input {
  width: 3.75rem;
  height: 50px;
  font-size: 0.2rem;
  text-indent: 1em;
  border-bottom: 0.01rem solid grey;
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
  color: rgb(48, 144, 232);
}

#wrap > button {
  border-radius: 0.1rem;
  margin-left: 0.05rem;
  font-size: 0.15rem;
  margin-top: 20px;
  width: 3.6rem;
  height: 50px;
  color: white;
  background-color: rgb(76, 217, 100);
  outline: none;
}
</style>
