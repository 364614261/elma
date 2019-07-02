<template>
  <div id="wrap">
      <div v-show="bo" class="bounced animated heartBeat 0.4s">
          <div id="bounced1">
              <img id="bounced2" src="../../static/imgs/tishi2.jpg" alt="">
              <p id="bounced3">请前往应用商城下载APP</p>
          </div>
            <button @click="hidden()" id="cfm">确认</button>
      </div>
    <div id="head">
      <img @click="back()" id="_head" src="../../static/imgs/back.png" alt>
      <p id="_head_">下载</p>
    </div>
    <div>
        <img id="dld1" src="../../static/imgs/eliaomo.png" alt="">
        <p id="dld2">下载饿了么APP</p>
        <button @click="Show()" id="dld3">下载</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "download",
  data() {
      return {
          bo:false
      }
  },
  methods: {
    back() {
      this.$router.back();
    },
    Show(){
       this.bo=true 
    },
    hidden(){
        this.bo=false
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
#dld1{
    width: 1.6rem;
    position: absolute;
    top: 1rem;
    left: 1.1rem;
}
#dld2{
    font-size: 0.2rem;
    position: absolute;
    top: 2.8rem;
    left: 1.2rem;
    color: #666;
}
#dld3{
    width: 95vw;
    height: 0.4rem;
    background-color: #4cd964;
    color: #fff;
    font-size: 0.15rem;
    border-radius: 0.1rem;
    position: absolute;
    top: 3.1rem;
    left: 2.5vw;
    outline: none;
}
.bounced{
    background-color: #fff;
    width: 70vw;
    height: 30vh;
    position: absolute;
    left: 15vw;
    top: 30vh;
    border-radius: 0.1rem;
    z-index: 3;
    /* display: none; */
}
#bounced1{
    font-size: 0.15rem;
}
#bounced2{
    width: 1rem;
    position: absolute;
    top: 0.1rem;
    left: 0.85rem;
}
#bounced3{
    position: absolute;
    top: 1.1rem;
    left: 0.5rem;
}
#cfm{
    width: 70vw;
    height: 0.4rem;
    position: absolute;
    bottom: 0;
    background-color: #4cd964;
    color: #fff;
    font-size: 0.2rem;
    border-radius: 0 0 0.1rem 0.1rem;
}
</style>
