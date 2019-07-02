<template>
  <div id="wrap">
    <div id="head">
      <img @click="back()" id="_head" src="../../static/imgs/back.png" alt>
      <p id="_head_">代金券说明</p>
    </div>
    <div id="tex">
        <p class="tex1">Q1:什么是商家代金券?</p>
        <div class="tex2">
            <p>商家代金券是指由商家自己发放代金券，,只限在指定的商家使用，可根据条件抵扣相应金额。</p>
        </div>

        <p class="tex1">Q2:怎么获得商家代金券?</p>
        <div class="tex2">
            <p>进入有「进店领券」或[下单返券」标示的商家即有机会获得代金券。</p>
            <p>「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。</p>
        </div>

        <p class="tex1">Q3:商家代金券使用条件</p>
        <div class="tex2">
            <p>商家代金券仅限在指定商家使用</p>
            <p>商家代金券仅限在线支付使用</p>
            <p>每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</p>
        </div>

    </div>
  </div>
</template>
<script>
export default {
    name:"shopcouponexplain",
    data() {
        return {
            
        }
    },
    methods: {
        back(){
            this.$router.back();
        }
    },
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
#tex{
  margin-top: 0.55rem;
  width: 3.35rem;
  /* border: 1px solid red; */
  margin-left: 0.2rem;
}
.tex1{
  font-size: 0.18rem;
  font-weight: bold;
  margin-top: 0.1rem;
}
.tex2{
  font-size: 0.15rem;
  margin-top: 0.1rem;
}
</style>
