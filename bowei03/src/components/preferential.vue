<template>
  <div id="wrap">
    <div id="head">
      <img @click="shang()" id="_head" src="../../static/imgs/back.png" alt>
      <p id="_head_">我的优惠</p>
    </div>
    <div id="pel">
        <p class="pel1">尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化:购卡后31天内， 累积享有30单减免配送费服务(每日最多3单，每单最高减免4元)。  注:已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。</p>
        <p class="pel2">Q1:特权介绍</p>
        <p class="pel3">身份标识:饿了么会员服务有效期内，享有专属皇冠标识。减免配送费:饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。更多特权，敬请期待!</p>
        <p class="pel2">Q2:资费介绍</p>
        <p class="pel3">饿了么会员卡: 20元</p>
        <p class="pel2">Q3:使用说明</p>
        <p class="pel3">当用户满足以下任一条件，会员服务自动失效:自绑定之日起超过31天;在31天内累计使用减免配送费的蜂鸟订单数量达到30单;</p>
        <p class="pel2">Q4:购卡说明</p>
        <p class="pel3">在线购买:饿了么App>我的>饿了么会员卡</p>
        <p class="pel2">Q5:温馨提示</p>
        <p class="pel3">用户在当前会员服务失效前，无法购买新卡。请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "preferential",
  methods: {
    shang() {
      this.$router.back();
    }
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
#wrap{
    width: 100vw;
    height: 100vh;
    background-color: #fff;
}
.pel1{
    margin: 0.1rem 0.5rem 0 0.5rem;
    font-size: 0.15rem;
}
.pel2{
    margin-top: 0.1rem;
    margin-left: 0.15rem;
    font-size: 0.17rem;
    font-weight: bold;
}
.pel3{
    font-size: 0.15rem;
    margin: 0.15rem 0.1rem 0 0.15rem;
}
</style>
