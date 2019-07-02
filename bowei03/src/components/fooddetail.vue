<template>
  <div>
    <div id="head">
      <a >
        <img class="btn" src="../../static/imgs/back.png" @click="back1()">
      </a>
      <p>确认订单</p>
      <router-link to="/login">
        <span class="btns">登录|注册</span>
      </router-link>
    </div>
    <div class="address">
      <router-link to = "/take">
        <p>
          <img src="../../static/imgs/back.png" alt>
          <span>请添加一个收货地址</span>
          <img src="../../static/imgs/juli.png" alt>
        </p>
      </router-link>
    </div>
    <div class="content">
      <ul class="time">
        <li>送达时间</li>
        <li>
          <span>尽快送达|</span>
          <span>预计23:09</span>
        </li>
        <li>蜂鸟专送</li>
      </ul>
      <ul class="type">
        <li>
          <span>支付方式</span>
          <el-popover
          placement="bottom"
          title="支付方式"
          width="370"
          height="2rem"
          trigger="click"
          content="货到付款(商家暂不支持货到付款)
          只支持在线支付哦亲">
          <el-button slot="reference">
          <div>
          <span>在线支付</span>
          <img src="../../static/imgs/back2.png" alt></div>
          </el-button>
          </el-popover>
        </li>
        <li>
          <span>红包</span>
          <span>暂时只在饿了么APP中支持</span>
        </li>
      </ul>
      <ul class="shopFood">
        <p>
          <span></span>
          <span>效果演示</span>
        </p>
        <li>
          <span>名字</span>
          <span>x1</span>
          <span>￥21</span>
        </li>
        <span class="all">
          <span>订单￥39868</span>
          <span>待支付</span>
          <span>￥39868</span>
        </span>
      </ul>
      <ul class="others">
        <router-link to="/orderAddMessage">
          <li>
            <span>订单备注</span>
            <span>口味丶偏好等</span>
            <img src="../../static/imgs/back2.png" alt>
          </li>
        </router-link>
        <router-link to="/tickets">
          <li>
            <span>发票抬头</span>
            <span>不需要发票</span>
            <img src="../../static/imgs/back2.png" alt>
          </li>
        </router-link>
      </ul>
    </div>
    <div class="footer">
      <p>待支付。。。。。</p>
      <router-link to>
        <p>确认下单</p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "fooddetail",
  methods: {
      back1(){
            history.go(-1)  
        },
  },
};
</script>
<style scoped>
#head {
  width: 100%;
  height: 0.5rem;
  background-color: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2000;
}
#head > p {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  color: white;
  font-size: 0.2rem;
  font-weight: bold;
}
#head img {
  width: 4vw;
  position: absolute;
  left: 0.1rem;
  top: 0.15rem;
}
.btns {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.15rem;
  color: white;
  position: absolute;
  right: 0.1rem;
  top: 0;
}
.address {
  width: 3.75rem;
  height: 1rem;
  margin-top: 0.5rem;
  border-bottom: 0.02rem dashed lightblue;
  position: relative;
}
.address  p {
  width: 3.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  position: absolute;
  left: 0.12rem;
  top: 0.25rem;
  color: black;
  font-size: 0.17rem;
}
.address span {
  margin-left: 0.3rem;
  font-weight: bold;
}
.address img {
  width: 6vw;
  position: absolute;
  top: 0.07rem;
}
.address img:last-child {
  right: 0;
}
.content > ul {
  width: 3.75rem;
  background-color: white;
  margin-top: 0.1rem;
}
.time {
  position: relative;
  height: 1.2rem;
}
.time > li:first-child {
  position: absolute;
  height: 1.2rem; 
  line-height: 1.2rem;
  font-size: 0.22rem;
  font-weight: bold;
  text-indent: 1em;
}
.time > li:nth-child(2) {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.18rem;
  color: #3190e8;
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
}
.time > li:nth-child(2) > span {
  font-weight: bold;
}
.time > li:last-child {
  height: 0.2rem;
  line-height: 0.2rem;
  font-size: 0.1rem;
  padding: 0.05rem;
  background-color: #3190e8;
  color: white;
  border-radius: 0.1rem;
  position: absolute;
  bottom: 0.1rem;
  right: 0.1rem;
}
.type > li {
  width: 3.75rem;
  height: 0.5rem;
  border-bottom: 0.01rem solid lightgray;
  position: relative;
  font-size: 0.15rem;
  color: gray;
  line-height: 0.5rem;
}
.type img {
  width: 0.2rem;
  position: absolute;
  right: 0.15rem;
  top: 0.18rem;
}
.type > li:first-child > span:first-child {
  font-size: 0.2rem;
  color: gray;
  margin-left: 0.15rem;
  position: absolute;
  left: 3vw;
  font-size: 0.17rem;
}
.type > li:first-child > span:nth-child(2) {
  position: absolute;
  right: 0.25rem;
  top: 0.02rem;   
}
.type > li:first-child > span:nth-child(2) img{
  position: absolute;
  right: -0.01rem;
  top: 0.13rem;   
}
.type > li:last-child > span:first-child {
  margin-left: 0.15rem;
  position: absolute;
  left: 3vw;
}
.type > li:last-child > span:nth-child(2) {
  position: absolute;
  right: 0.2rem;
  top: 0.02rem;

}
.shopFood {
  width: 3.75rem;
}
.shopFood > p {
  height: 0.6rem;
  border-bottom: 0.01rem solid lightgray;
  font-size: 0.23rem;
  position: relative;
}
.shopFood > p > span:nth-child(1) {
  position: absolute;
  left: 3vw;
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  background-color: yellow;
  margin: 0.1rem;
}
.shopFood > p > span:nth-child(2) {
  position: absolute;  
  top: 0.15rem;
  left: 20vw;
  font-weight: bold;
}
.shopFood > li {
  height: 0.4rem;
  font-size: 0.15rem;
  line-height: 0.4rem;
  color: gray;
  position: relative;
}
.shopFood > li > span:first-child {
  margin-left: 0.1rem;
  position: absolute;
  left: 3vw;
}
.shopFood > li > span:nth-child(2) {
  position: absolute;
  right: 0.85rem;
  top: 0.02rem;
  color: red;
}
.shopFood > li > span:last-child {
  position: absolute;
  right: 0.15rem;
  top: 0.02rem;
}
.all {
  display: inline-block;
  width: 3.75rem;
  height: 0.7rem;
  border-top: 0.01rem solid lightgray;
  font-size: 0.15rem;
  color: gray;
  position: relative;
}
.all > span:first-child {
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
}
.all > span:nth-child(2) {
  position: absolute;
  top: 0.1rem;
  right: 0.55rem;
  color: red;
}
.all > span:last-child {
  position: absolute;
  right: 0.45rem;
  bottom: 0.1rem;
  color: red;
}
.others li {
  width: 3.75rem;
  height: 0.5rem;
  position: relative;
  font-size: 0.15rem;
  line-height: 0.5rem;
}
.others img {
  width: 0.2rem;
  position: absolute;
  right: 0.15rem;
  top: 0.18rem;
}
.others li:first-child > span:first-child {
  font-size: 0.2rem;
  color: gray;
  margin-left: 0.15rem;
}
.others li:first-child > span:nth-child(2) {
  position: absolute;
  right: 0.45rem;
  top: 0.02rem;
  color: gray;
}
.others li:nth-child(2) > span:first-child {
  margin-left: 0.15rem;
  color: gray;
}
.others li:nth-child(2) > span:nth-child(2) {
  position: absolute;
  right: 0.45rem;
  top: 0.02rem;
  color: gray;
}
.footer {
  width: 3.75rem;
  height: 0.5rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: black;
}
.footer p {
  height: 0.5rem;
  line-height: 0.5rem;
  float: left;
  color: white;
  font-size: 0.18rem;
}
.footer p:first-child {
  width: 2.4rem;
  text-indent: 1em;
}
.footer p:last-child {
  width: 1.35rem;
  background-color: green;
  text-align: center;
}
</style>
