<template>
  <div id="wrap">
    <div id="head">
      <img @click="back()" id="_head" src="../../static/imgs/back.png" alt>
      <p id="_head_">推荐有奖</p>
    </div>
    <div id="img1">
      <img src="../../static/imgs/hongbao.png" alt>
    </div>
    <div id="ring">
      <div class="imgs" @click="tool1()">
        <img src="../../static/imgs/weixint.png" alt>
        <p>邀请微信好友</p>
      </div>
      <div class="imgs" @click="tool1()">
        <img src="../../static/imgs/QQ.png" alt>
        <p>邀请QQ好友</p>
      </div>
      <div class="imgs" @click="tool1()">
        <img src="../../static/imgs/mian.png" alt>
        <p>面对面邀请</p>
      </div>
    </div>
    <div class="frame1 animated heartBeat 0.4s" v-if="outshow1">
      <img src="../../static/imgs/tishi2.jpg" alt>
      <p>请在饿了么APP上打开</p>
      <div id="sure" @click="falsetool1()">
        <p>确认</p>
      </div>
    </div>
    <div id="shouyi">
        <div class="shouyi1">
            <p>累计收益</p>
            <span>0</span>
            <span>元</span>
        </div>
        <p id="line"></p>
        <div class="shouyi1">
            <p>成功邀请</p>
            <span>0</span>
            <span>人</span>
        </div>
    </div>
    <p id="shouyi2">-收益明细-</p>
    <div id="invite">
        <img src="../../static/imgs/qian.png" alt="">
        <p>还不赶紧邀请好友</p>
    </div>


  </div>
</template>
<script>
export default {
  name: "recommended",
  data() {
    return {
        outshow1: false,
    };
  },
  methods: {
      tool1() {
      this.outshow1 = true;
    },
    falsetool1() {
      this.outshow1 = false;
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
  height: 100vh;
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
#img1{
    padding-top: 0.55rem;
}
#img1 img {
  width: 3.75rem;
}
#ring{
    width: 3.75rem;
    height: 1.25rem;
    background-color: white;
    display: flex;
    justify-content: space-around;
}

.imgs img{
    width: 0.8rem;
    margin-top: 0.1rem;
}
.imgs p{
    font-size: 0.14rem;
    margin-top: 0.05rem;
}
#shouyi{
    width: 3.75rem;
    height: 0.85rem;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
}
.shouyi1{
    width: 1.7rem;
    position: relative;
}
.shouyi1 p:nth-child(1){
    font-size: 0.15rem;
    position: absolute;
    left: 0.45rem;
    top: 0.15rem;
}
.shouyi1 span:nth-child(2){
    font-size: 0.18rem;
    color: red;
    position: absolute;
    left: 0.55rem;
    top: 0.35rem;
}
.shouyi1 span:nth-child(3){
    font-size: 0.14rem;
    position: absolute;
    left: 0.68rem;
    top: 0.39rem;
}
#line{
    /* width: 0.01rem; */
    height: 0.4rem;
    border: 0.005rem dashed gray;
    margin-top: 0.18rem;
}
#shouyi2{
    width: 3.75rem;
    text-align: center;
    font-size: 0.15rem;
}
#invite{
    width: 3.75rem;
    height: 1.25rem;
    background-color: gainsboro;
    position: absolute;
    bottom: 0;
}
#invite img{
    width: 0.45rem;
    margin-left: 1.65rem;
}
#invite p{
    font-size: 0.14rem;
    margin-left: 1.35rem;
    margin-top: 0.1rem;
}
.frame1 {
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
.frame1 img {
  width: 1.2rem;
  position: absolute;
  left: 0.75rem;
  top: 0.05rem;
}
.frame1 p:nth-child(2) {
  font-size: 0.2rem;
  position: absolute;
  left: 0.45rem;
  top: 1.3rem;
}
#sure {
  width: 2.75rem;
  height: 0.45rem;
  background-color: #4cd964;
  border-radius: 0 0 0.1rem 0.1rem;
  color: white;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.25rem;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
