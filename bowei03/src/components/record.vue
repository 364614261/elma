<template>
  <div id="wrap">
    <div id="head">
      <img @click="back()" id="_head" src="../../static/imgs/back.png" alt>
      <p id="_head_">购买记录</p>
    </div>
    <div>
        <img id="gou1" src="../../static/imgs/zanwutixianjilu.png" alt="">
        <p id="gou2">没有购买记录</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "record",
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#wrap {
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
#gou1{
    width: 1rem;
    position: absolute;
    top: 2rem;
    left: 1.45rem;
}
#gou2{
    color: #999;
    font-size: 0.13rem;
    position: absolute;
    top: 3.2rem;
    left: 1.43rem;
}
</style>
