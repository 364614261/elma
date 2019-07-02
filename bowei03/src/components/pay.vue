<template>
  <div id="wrap">
      <div v-show="bo" class="bounced animated heartBeat 0.4s">
          <div id="bounced1">
              <img id="bounced2" src="../../static/imgs/tishi2.jpg" alt="">
              <p id="bounced3">暂不开放支付功能</p>
          </div>
            <button @click="hidden()" id="cfm">确认</button>
      </div>
    <div id="head">
      <img @click="back()" id="_head" src="../../static/imgs/back.png" alt>
      <p id="_head_">在线支付</p>
    </div>
    <!-- 支付倒计时 -->
    <div id="pay">
        <p>支付剩余时间</p>
        <!-- 倒计时 -->
    <p>00:{{minute}}:{{second}}</p>
    </div>
    <div id="tex1">选择支付方式</div>
    <div class="icon">
        <img src="../../static/imgs/zhifubao.png" alt="">
        <span>支付宝</span>
        <img @click="zhi()" :src="srcA" alt="">
    </div>
    <div class="icon">
        <img src="../../static/imgs/weixin.png" alt="">
        <span>微信</span>
        <img @click="wei()" :src="srcB" alt="">
    </div>
    <div @click="Show()" id="confirm">确认支付</div>

    
  </div>
</template>
<script>
export default {
  name: "pay",
  data() {
    return {
      minutes: 15,
      seconds: 0,
      srcA:"../../static/imgs/icon-test.png",
      srcB:"../../static/imgs/icon-test2.png",
      AB:true,
      bo:false,
    };
  },
  mounted() {
    this.add();
  },
  methods: {
      Show(){
       this.bo=true 
    },
    hidden(){
        this.bo=false
    },
    zhi(){
        if (this.srcB="../../static/imgs/icon-test.png") {
            this.srcA="../../static/imgs/icon-test.png"
            this.srcB="../../static/imgs/icon-test2.png"
        }
    },
    wei(){
        if (this.srcA="../../static/imgs/icon-test.png") {
            this.srcB="../../static/imgs/icon-test.png"
            this.srcA="../../static/imgs/icon-test2.png"
        }
    },
    // 倒计时
    num: function(n) {
      return n < 10 ? "0" + n : "" + n;
    },
    add: function() {
      var _this = this;
      var time = window.setInterval(function() {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    },
    back() {
      this.$router.back();
    }
  },
  watch: {
    second: {
      handler(newVal) {
        this.num(newVal);
      }
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      }
    }
  },
  computed: {
    second: function() {
      return this.num(this.seconds);
    },
    minute: function() {
      return this.num(this.minutes);
    }
  }
};
</script>
<style scoped>
#wrap {
  width: 3.75rem;
  position: relative;
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
#pay{
    height: 1.35rem;
    background-color: white;
    margin-top: 0.58rem;
    font-size: 0.25rem;
    position: relative;
}
#pay p:nth-child(1){
    font-size: 0.18rem;
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-50%,-50%);
}
#pay p:nth-child(2){
    font-size: 0.38rem;
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%,-50%);
}
#tex1{
    height: 0.45rem;
    font-size: 0.18rem;
    padding-left: 0.2rem;
    padding-top: 0.18rem;
}
.icon{
    height: 0.85rem;
    background-color: white;
    position: relative;
    border: 0.5px solid gainsboro;
}
.icon img:nth-child(1){
    width: 0.5rem;
    position: absolute;
    left: 0.15rem;
    top:0.2rem;
}
.icon span:nth-child(2){
    font-size: 0.2rem;
    position: absolute;
    left: 0.7rem;
    top:0.28rem;
}
.icon img:nth-child(3){
    width: 0.35rem;
    position: absolute;
    right: 0.2rem;
    top:0.28rem;
}
#confirm{
    margin-top: 0.15rem;
    width: 3.75rem;
    line-height: 0.6rem;
    height: 0.6rem;
    background-color: #4cd964;
    color: white;
    font-size: 0.2rem;
    text-align: center;
    border-radius: 0.1rem;
}
</style>