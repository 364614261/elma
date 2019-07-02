<template>
  <div id="wrap">
    <div @click="back()" id="head">
      <img id="_head" src="../../static/imgs/back.png" alt>
      <p id="_head_">历史红包</p>
    </div>
    <div id="title2">
      <ul>
        <li :key="i" v-for="(v,i) in datas">
          <div id="center">
            <div id="centerleft">
              <p>￥{{v.amount}}.0</p>
              <p>{{v.description_map.sum_condition}}</p>
            </div>
            <div id="centercenter">
              <p>{{v.name}}</p>
              <p>{{v.description_map.validity_periods}}</p>
              <p>{{v.description_map.phone}}</p>
            </div>
            <div id="centerright">
              <img src="../../static/imgs/guoqi.png" alt>
            </div>
          </div>
          <div id="centerbottom">
            <!-- <p>{{v.limit_map}}</p> -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "history",
  data() {
    return {
      datas: "",
      user_id: "1"
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      const api =
        "https://elm.cangdu.org/promotion/v2/users/" +
        this.user_id +
        "/expired_hongbaos?limit=20&offset=0";
      this.$http({
        url: api,
        methods: "get",
        data: {}
      }).then(res => {
        this.datas = res.data;
        console.log(this.datas);
      });
    },
    back() {
      this.$router.back();
    }
  }
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
#title2 {
  margin-top: 0.55rem;
  width: 3.75rem;
  height: 0.35rem;
  /* border: 1px solid aqua; */
  line-height: 0.35rem;
  font-size: 0.15rem;
  position: relative;
}
#center {
  background-color: white;
  width: 3.75rem;
  height: 0.85rem;
  border-top: 1px solid gray;
  display: flex;
  margin-top: 0.1rem;
}
#centerleft {
  width: 1rem;
  height: 0.85rem;
  /* border: 1px solid blue; */
  position: relative;
}
#centerleft p:nth-child(1) {
  color: gray;
  font-size: 0.2rem;
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
}
#centerleft p:nth-child(2) {
  font-size: 0.05rem;
  position: absolute;
  left: 0.1rem;
  top: 0.5rem;
}
#centercenter {
  width: 2.2rem;
  /* border: 1px solid gold; */
  position: relative;
}
#centercenter p:nth-child(1) {
  font-size: 0.2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.15rem;
}
#centercenter p:nth-child(2) {
  font-size: 0.1rem;
  position: absolute;
  left: 0.1rem;
  top: 0.35rem;
}
#centercenter p:nth-child(3) {
  font-size: 0.01rem;
  position: absolute;
  left: 0.1rem;
  top: 0.55rem;
}
#centerright {
  width: 0.75rem;
  /* border: 1px solid gold; */
  position: relative;
}

#centerright img {
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;

  width: 0.65rem;
}
#centerbottom {
  width: 3.75rem;
}
#centerbottom p {
  font-size: 0.18rem;
}
</style>
