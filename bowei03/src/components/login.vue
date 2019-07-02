<template>
    <div>
      <div id="head"><img @click="gos()" src="../../static/imgs/back.png" alt=""><span>密码登陆</span></div>
      <div id="lander">
        <input v-model="username" placeholder="账号" type="text">
        <input v-model="password" placeholder="密码" :type="a">
        <header @click="dianji()" id="a3">
        <el-switch v-model="kkk" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </header>

        <input id="yanz" v-model="codeNumber" placeholder="验证码" type="text">
        <img :src="code&&code" alt="">
        <span id="vague">看不清</span>
        <span id="trade" @click="getCode()">换一张</span>
      </div>
      <p>温馨提示：未注册过的账号，登陆时将自动注册</p>
      <p>注册过的用户可凭账号密码登陆</p>
      <input value="登陆" type="button" id="lan_log" @click="login()">
    </div>
</template>
<script>
export default {
    name:"login",
    data() {
        return {
            username:"",
            password:"",
            codeNumber:"", // 存储验证码输入框的值
            code:"", // 存储验证码base64图片
            kkk: false,
            a: "password"
        }
    },
    created () {
        // 首先，获取验证码
        this.getCode();
    },
    methods: {
        dianji() {
      if (this.kkk) {
        this.a = "text";
      } else {
        this.a = "password";
      }
        },
        gos(){
           history.go(-1) 
        },
        getCode(){
            const api = "https://elm.cangdu.org/v1/captchas";
            this.$http({
            url:api,
            method:"post",
            withCredentials:true
            }).then(res =>{
                // console.log("验证码");
                // console.log(res); 
                this.code = res.data.code;
                console.log(this.code)
            })
        },
        login(){
           const api = "https://elm.cangdu.org/v2/login";
      this.$http({
        url: api,
        method: "post",
        //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies---不使用缓存数据
        withCredentials: true,
        data: {
          username: this.username,
          password: this.password,
          captcha_code: this.codeNumber
        }
      }).then(res => {
        console.log("login数据");
        console.log(res);
        if (res.data.message) {
          alert(res.data.message); //登陆失败
        } else {
          this.$store.commit("getlogin", res.data);
          this.$store.commit("addName1", this.username);
          //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
          this.$router.push({
            name: "city1",
            query: res.data,
            params: { pID: res.data.id }
          });
        }
      });
        }
    }
}
</script>
<style scoped>
#a3 {
  position: absolute;
  right: 0.14rem;
  top: 0.6rem;
}
#head{
    width: 100vw;
    height: 0.4rem;
    background-color:#3190e8;
    position: relative;
    line-height: 0.4rem;
    text-align: center;
}
#head img{
    height: 0.21rem;
    position: absolute;
    left: 0.2rem;
    top: 0.1rem;
}
#head span{
  font-weight: bold;
  color: white;
  font-size: 0.18rem;
}
#lander{
    background-color: #fff;
    overflow: hidden;
    position: relative;
}
#lander input:nth-child(1),#lander input:nth-child(2){
    width: 100vw;
    height: 0.45rem;
    border-bottom: 0.01rem solid #e4e4e4;
    font-size: 0.16rem;
    padding-left: 0.2rem;
}
#yanz{
    border-bottom: 0 solid #e4e4e4;
    height: 0.45rem;
    font-size: 0.16rem;
    padding-left: 0.2rem;
    width: 50vw;
}
#trade{
    width: 15vw;
    color: #3190e8;
    font-size: 0.13rem;
    position: absolute;
     right: 0;
     bottom: 0.1rem;
}
#vague{
    width: 15vw;
    font-size: 0.13rem;
   position: absolute;
   right: 0;
   bottom: 0.3rem;
}
p{
    font-size: 0.12rem;
    color: red;
    margin-top: 0.1rem;
}
#lan_log{
    width: 90vw;
    height: 0.4rem;
    background-color: #4cd964;
    color: white;
    font-size: 0.16rem;
    margin-left: 5vw;
    margin-top: 0.2rem;
}
</style>
