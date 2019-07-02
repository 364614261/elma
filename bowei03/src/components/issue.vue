<template>
  <div id="wrap">
    <div id="head">
      <div>
        <img @click="shang()" id="_head" src="../../static/imgs/back.png" alt>
        <p id="_head_">余额问题</p>
      </div>
      <div id="down">
          <p class="big">Q1:使用余额的条件</p>
          <p class="small">为了保护账户安全，使用余额前必须先绑定手机号。</p>
          <p class="big">Q2:余额可以怎么用?</p>
          <p class="small">余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
          <p class="big">Q3:我要如何提现?</p>
          <p class="small">为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行， 并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击[提现]时系统会提示您已超额，请您修改提现金额。</p>
          <p class="big">Q4:为什么会提现失败?</p>
          <p class="small">可能原因有:您的姓名、开户行、银行卡号等信息不匹配;您当日的提现次数和金额超过限制;您的账户存在异常，被风控拦截。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "issue",
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
