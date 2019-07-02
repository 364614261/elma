<template>
  <div>
    <div id="head">
      <img @click="back()" id="_head" src="../../static/imgs/back.png" alt>
      <p id="_head_">积分商城</p>
    </div>
    <div id="ml">
        <p id="ml1">请重新进入</p>
    <p id="ml2">请返回后重新进入积分商城~</p>
    <img id="ml3" src="../../static/imgs/retrylogin[1].png" alt>
    </div>
  </div>
</template>
<script>
export default {
  name: "mall",
  methods: {
      back() {
      this.$router.back();
    }
  },
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
#ml1{
    position: absolute;
    top: 35vh;
    left: 1.4rem;
    color: #0d7fd5;
    font-size: 0.2rem;
    font-weight: bold;
}
#ml2{
    position: absolute;
    top: 40vh;
    left: 1rem;
    color: #666;
    font-size: 0.15rem;
}
#ml3{
    position: absolute;
    top: 45vh;
    left: 1.1rem;
    width: 1.6rem;
}
</style>
