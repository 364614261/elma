<template>
  <div id="wrap">
      <div v-show="bo" class="bounced animated heartBeat 0.4s">
          <div id="bounced1">
              <img id="bounced2" src="../../static/imgs/tishi2.jpg" alt="">
              <p id="bounced3">无效的卡号</p>
          </div>
            <button @click="hidden()" id="cfm">确认</button>
      </div>
    <div id="head">
      <img @click="back()" id="_head" src="../../static/imgs/back.png" alt>
      <p id="_head_">兑换会员</p>
    </div>
    <div id="center">
        <p id="center1">成功兑换后将关联到当前账号：</p>
        <p id="center2">{{name1}}</p>
    </div>
    <input id="inp" placeholder="请输入10位卡号" type="text">
    <input id="inp1" placeholder="请输入6位卡密" type="text">
    <button @click="Show()" id="btn">兑换</button>
    <div id="bottom">
        <p id="p">——温馨提示——</p>
        <p class="p1">新兑换的会员服务，权益以[会员说明]为准。</p>
        <p class="p1">月卡：30次减免配送费</p>
        <p class="p1">季卡：90次减免配送费</p>
        <p class="p1">年卡：360次减免配送费</p>
        <p class="p1">*仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元(一个月按31天计算)</p>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "exchange",
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
  },
  computed: {
      ...mapState(["name1"])
  },
};
</script>
<style scoped>
#wrap{
    overflow: hidden;
}
.bounced{
    background-color: #fff;
    width: 70vw;
    height: 30vh;
    position: absolute;
    left: 15vw;
    top: 30vh;
    border-radius: 0.1rem;
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
    left: 0.9rem;
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
#center{
    width: 100vw;
    height: 0.45rem;
    position: relative;
}
#center1{
    font-size: 0.13rem;
    color: #666;
    position: absolute;
    top: 0.15rem;
    left: 0.1rem;
}
#center2{
    font-size: 0.15rem;
    font-weight: bold;
    position: absolute;
    top: 0.12rem;
    left: 1.9rem;
}
#inp{
    width: 100vw;
    height: 0.45rem;
    font-size: 0.15rem;
}
#inp1{
    width: 100vw;
    height: 0.45rem;
    font-size: 0.15rem;
}
#btn{
    width: 95vw;
    height: 0.45rem;
    border-radius: 0.1rem;
    margin-top:  0.15rem;
    margin-left: 2.5vw;
    color: #fff;
    font-size: 0.2rem;
    background-color: #4cd964;
    outline: none;
}
#p{
    font-size: 0.15rem;
    color: #aaa;
    margin: 0.3rem 0 0.2rem 1.25rem;
}
.p1{
    font-size: 0.13rem;
    color: #aaa;
    margin: 0.1rem 0 0 0.4rem;
}
</style>
