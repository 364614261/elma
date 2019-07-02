<template>
  <div>
    <div id="head">
      <div>
        <img @click="shang()" id="_head" src="../../static/imgs/back.png" alt>
        <p id="_head_">我的积分</p>
      </div>
    </div>
    <div id="big">
        <div id="center">
            <p id="p1">当前积分</p>
            <p id="p2">0</p>
            <p id="p3">分</p>
            <div id="ask">
                <p id="ask1">?</p>
            </div>
            <router-link to="problem">
                <p id="p4">积分说明</p>
            </router-link>
            <button id="btn">积分兑换商品</button>
        </div>
    </div>
    <div id="detail">
        <p id="detail1">最近30天积分记录</p>
        <img id="detail2" src="../../static/imgs/zanwutixianjilu.png" alt="">
        <p id="detail3">最近30天无积分记录</p>
        <p id="detail4">快去下单赚取大量积分吧</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "integral",
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
#big{
    width: 100vw;
    height: 1.72rem;
    background-color: #3190e8;
    position: relative;
}
#center{
    width: 95vw;
    height: 1.52rem;
    background-color: #fff;
    border-radius: 0.05rem;
    position: absolute;
    top: 0.1rem;
    left: 2.5vw;
}
#p1{
    font-size: 0.13rem;
    color: #666;
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
}
#p2{
    font-size: 0.4rem;
    position: absolute;
    top: 0.3rem;
    left: 0.1rem;
}
#p3{
    font-size: 0.15rem;
    position: absolute;
    top: 0.5rem;
    left: 0.4rem;
}
#ask{
    width: 0.15rem;
    height: 0.15rem;
    background-color: #3190e8;
    border-radius: 50%;
    position: absolute;
    top: 0.1rem;
    right: 0.75rem;
}
#ask1{
    font-size: 0.12rem;
    color: #fff;
    line-height: 0.15rem;
    text-align: center;
}
#p4{
    font-size: 0.15rem;
    color: #3190e8;
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
}
#btn{
    width: 90vw;
    height: 0.5rem;
    color: #fff;
    font-size: 0.2rem;
    position: absolute;
    bottom: 0.1rem;
    left: 0.1rem;
    border-radius: 0.1rem;
    background-color: #fe6d47;
    outline: none;
}
#detail{
    position: relative;
}
#detail1{
    font-size: 0.13rem;
    color: #999;
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
}
#detail2{
    width: 0.8rem;
    position: absolute;
    top: 1rem;
    left: 1.475rem;
}
#detail3{
    font-size: 0.15rem;
    position: absolute;
    color: #666;
    top: 1.9rem;
    left: 1.15rem;
}
#detail4{
    font-size: 0.11rem;
    position: absolute;
    color: #999;
    top: 2.2rem;
    left: 1.2rem;
}
</style>
