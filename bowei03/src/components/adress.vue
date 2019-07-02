<template>
  <div id="wrap">
    <div id="head">
      <img @click="goback()" id="_head" src="../../static/imgs/back.png" alt>
      <h2 id="_head_">{{name}}</h2>
    </div>
    <div id="wei">
      <input v-model="searchB" id="inp" placeholder="输入学校、商务楼、地址" type="text">
      <input @click="searchA()" id="inp1" type="button" value="提交">
      <div>
        <ul>
          <li id="lis" @click="goh(i)" :key="i" v-for="(v,i) in searchArr">
            <p>{{v.name}}</p>
            <p>{{v.address}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "adress",
  data() {
    return {
      name: "",
      id: "",
      searchArr: [],
      searchB: ""
    };
  },
  created() {
    this.add();
    this.addId();
  },
  methods: {
    add() {
      this.name = this.$route.query.cityName;
    },
    addId() {
      this.id = this.$route.query.cityId;
    },
    goback() {
      history.go(-1);
    },
    searchA() {
      const api =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.id +
        "&keyword=" +
        this.searchB +
        "&type=search";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res);
        this.searchArr = res.data;
      });
    },
    goh(i) {
      console.log(this.searchArr[i].geohash);
      this.$store.commit("getjingweidu", this.searchArr[i].geohash);
      this.$router.push({
        name: "takeOut"
      });
    }
  }
};
</script>
<style scoped>
#lis {
  width: 100vw;
  height: 0.6rem;
  border-top: 0.01rem solid #e4e4e4;
  border-bottom: 0.01rem solid #e4e4e4;
}
#lis p:nth-child(1) {
  color: black;
  font-size: 0.15rem;
  margin-left: 0.15rem;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}
#lis p:nth-child(2) {
  color: #999;
  font-size: 0.12rem;
  margin-left: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#wrap {
  width: 100vw;
  height: 100vw;
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
}
#_head_ {
  text-align: center;
  line-height: 0.45rem;
  color: white;
}
#wei {
  margin-top: 0.1rem;
  background-color: #fff;
  border: 0.01rem solid #333;
}
#inp {
  width: 100vw;
  font-size: 0.15rem;
  height: 0.4rem;
  border-bottom: 0.01rem solid #333;
}
#inp1 {
  width: 100vw;
  font-size: 0.2rem;
  height: 0.4rem;
  margin-top: 0.1rem;
  background-color: #3190e8;
  color: white;
}
</style>
