<template>
  <div>
    <div id="head">
      <img @click="shang()" id="_head" src="../../static/imgs/back.png" alt>
      <p id="_head_">会员中心</p>
    </div>
    <div id="sp">
      <span id="span1">为账户</span>
      <span id="span2">{{name1}}</span>
      <span id="span3">购买会员</span>
    </div>
    <router-link style="color:black" to="preferential">
      <div id="privilege">
        <p class="p1">会员特权</p>
        <p class="p2">会员说明</p>
        <img class="p3" src="../../static/imgs/iconfontjiantou2.png" alt>
      </div>
    </router-link>
    <div class="province">
      <img class="pic1" src="../../static/imgs/yewutubiaosheng.png" alt>
      <p class="pic2">减免配送费</p>
      <p class="pic3">每月减免30单，每日可减免3单，每单最高减免4元蜂鸟专送专享</p>
    </div>
    <div class="province">
      <img class="pic1" src="../../static/imgs/zhun1.png" alt>
      <p class="pic2">减免配送费</p>
      <p class="pic3">每月减免30单，每日可减免3单，每单最高减免4元蜂鸟专送专享</p>
    </div>
    <div id="open">
      <p id="op">开通会员</p>
    </div>
    <div id="buy">
      <p id="buy1">1个月</p>
      <p id="buy2">￥20</p>
      <router-link to="pay">
        <button id="buy3">购买</button>
      </router-link>
    </div>
    <router-link to="exchange">
      <div class="privilege1">
      <p class="p1">兑换会员</p>
      <p class="p2">使用卡号卡密</p>
      <img class="p3" src="../../static/imgs/iconfontjiantou2.png" alt>
    </div>
    </router-link>
    <router-link to="record">
      <div class="privilege1">
      <p class="p1">购买记录</p>
      <p class="p2">开发票</p>
      <img class="p3" src="../../static/imgs/iconfontjiantou2.png" alt>
    </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "members",
  methods: {
    shang() {
      this.$router.back();
    }
  },
  computed: {
    ...mapState(["name1"])
  }
};
</script>
<style scoped>
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
#sp {
  width: 100vw;
  height: 0.45rem;
}
#span1 {
  color: #666;
  font-size: 0.15rem;
  line-height: 0.45rem;
  margin-left: 0.1rem;
}
#span2 {
  color: #333;
  font-size: 0.15rem;
  font-weight: bold;
  line-height: 0.45rem;
}
#span3 {
  color: #666;
  font-size: 0.15rem;
  line-height: 0.45rem;
}
#privilege {
  width: 100vw;
  height: 0.47rem;
  background-color: #fff;
  position: relative;
}
.p1 {
  font-size: 0.15rem;
  position: absolute;
  left: 0.1rem;
  top: 0.15rem;
  color: #333;
}
.p2 {
  font-size: 0.14rem;
  position: absolute;
  top: 0.15rem;
  right: 0.4rem;
  color: #999;
}
.p3 {
  height: 0.2rem;
  position: absolute;
  top: 0.135rem;
  right: 0.1rem;
}
.province {
  width: 100vw;
  height: 0.9rem;
  background-color: #fff;
  position: relative;
}
.pic1 {
  height: 0.5rem;
  position: absolute;
  left: 0.1rem;
  top: 0.2rem;
}
.pic2 {
  font-size: 0.16rem;
  position: absolute;
  top: 0.25rem;
  left: 0.7rem;
}
.pic3 {
  font-size: 0.13rem;
  position: absolute;
  top: 0.45rem;
  left: 0.7rem;
  color: #999;
}
#open {
  width: 100vw;
  height: 0.45rem;
  background-color: #fff;
  margin-top: 0.15rem;
}
#op {
  font-size: 0.17rem;
  margin-left: 0.1rem;
  line-height: 0.45rem;
}
#buy {
  width: 100vw;
  height: 0.65rem;
  background-color: #fff;
  position: relative;
}
#buy1 {
  font-size: 0.16rem;
  position: absolute;
  top: 0.25rem;
  left: 0.1rem;
}
#buy2 {
  font-size: 0.16rem;
  font-weight: bold;
  position: absolute;
  color: #f60;
  top: 0.25rem;
  left: 0.6rem;
}
#buy3 {
  font-size: 0.15rem;
  font-weight: bold;
  position: absolute;
  border: 0.01rem solid #f60;
  background-color: #fff;
  border-radius: 0.05rem;
  color: #f60;
  top: 0.2rem;
  right: 0.1rem;
}
.privilege1 {
  margin-top: 0.1rem;
  width: 100vw;
  height: 0.47rem;
  background-color: #fff;
  position: relative;
}
</style>
