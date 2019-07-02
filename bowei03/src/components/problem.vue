<template>
  <div id="wrap">
    <div id="head">
      <div>
        <img @click="shang()" id="_head" src="../../static/imgs/back.png" alt>
        <p id="_head_">积分问题</p>
      </div>
      <div id="down">
          <p class="big">Q1:怎么获得积分?</p>
          <p class="small">在线支付的订单将获得订单积分奖励:积分将在用户完成评价后获得。
可获得积分=订单金额x10 (即1元=10点积分)。订单金额指实际付款金额，不包含活动优惠金额。
每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</p>
          <p class="big">Q2:积分用来做什么?</p>
          <p class="small">可以在积分商城兑换各种礼品。</p>
          <p class="big">Q3:礼品兑换很多天了还没有收到，该怎么办?</p>
          <p class="small">礼品从兑换日起，3个工作日(周末不算)内处理发货，发货后，通常会在3个工作日左右送达。</p>
          <p class="big">Q4:礼品兑换中的手机充值卡兑换，怎么样进行
充值，充值之前会和我电话确认嘛?</p>
          <p class="small">不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "problem",
  methods: {
    shang() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#wrap{
    width: 100vw;
    height: 100vh;
    background-color: #fff;
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
#down{
    width: 100vw;
}
.big{
    font-size: 0.16rem;
    color: #333;
    margin: 0.18rem 0 0 0.1rem;
}
.small{
    font-size: 0.14rem;
    color: #666;
    margin: 0.18rem 0 0 0.1rem;
}
</style>
