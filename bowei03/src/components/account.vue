<template>
  <div id="wrap">
    <div v-show="bo" class="bounced animated heartBeat 0.4s">
      <div class="bounced1">
        <img class="bounced2" src="../../static/imgs/tishi2.jpg" alt>
        <p class="bounced3">请在手机APP中设置</p>
      </div>
      <button @click="hidden()" id="cfm">确认</button>
    </div>

    <div v-show="bi" class="bounced animated heartBeat 0.4s">
      <div class="bounced1">
        <img class="bounced2" src="../../static/imgs/tishi2.jpg" alt>
        <p class="bounced3">你确定退出登录吗？</p>
      </div>
      <button @click="hidden1()" id="cfm1">取消</button>
      <router-link to="mine">
        <button @click="zh()" id="cfm2">确认</button>
      </router-link>
    </div>

    <div id="head">
      <div>
        <img @click="akk()" id="_head" src="../../static/imgs/back.png" alt>
        <p id="_head_">账户信息</p>
      </div>
    </div>
    <div>
      <div id="top">
        <p class="ago">头像</p>

        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img id="img1" v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

        <img class="picture" src="../../static/imgs/iconfontjiantou2.png" alt>
      </div>
      <router-link style="color:black;" to="amend">
        <div id="center">
          <p class="ago1">用户名</p>
          <p class="ming">{{name1}}</p>
          <img class="picture1" src="../../static/imgs/iconfontjiantou2.png" alt>
        </div>
      </router-link>
      <router-link to="take">
        <div id="below">
          <p class="ago1">收货地址</p>
          <img class="picture1" src="../../static/imgs/iconfontjiantou2.png" alt>
        </div>
      </router-link>
      <div class="bound">
        <p class="bound1">账号绑定</p>
      </div>
      <div @click="Show()" id="phone">
        <img id="phone1" src="../../static/imgs/dianhua.png" alt>
        <p id="phone2">手机</p>
        <img class="picture1" src="../../static/imgs/iconfontjiantou2.png" alt>
      </div>
      <div class="bound">
        <p class="bound1">账号绑定</p>
      </div>
      <router-link style="color:black" to="reset">
        <div id="psd">
          <p id="psd1">登录密码</p>
          <p id="psd2">修改</p>
          <img class="picture1" src="../../static/imgs/iconfontjiantou2.png" alt>
        </div>
      </router-link>
    </div>
    <button @click="Show1()" id="btn">退出登录</button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "account",
  data() {
    return {
      username1: "",
      bo: false,
      bi: false,
      imageUrl: ""
    };
  },
  computed: {
    ...mapState(["name1"])
  },
  created() {
    this.add();
    this.imageUrl =this.$store.state.img;
  },
  methods: {
    zh(){
       this.$store.commit("addName1","")  
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.$store.commit("getimg1", this.imageUrl);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    Show() {
      this.bo = true;
    },
    Show1() {
      this.bi = true;
    },
    hidden1() {
      this.bi = false;
    },
    hidden() {
      this.bo = false;
    },
    add() {
      this.username1 = this.$route.query.username2;
    },
    akk() {
      this.$router.push({
        name: "mine",
        query: { username3: this.username1 }
      });
    }
  }
};
</script>
<style scoped>
.avatar-uploader {
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
}
#img1 {
  /* position: absolute;
top:0.65rem;
right: 0.2rem; */
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  float: right;
  margin: -0.2rem 0.08rem 0 0;
}
#wrap {
  width: 100vw;
  height: 100vh;
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
#top {
  width: 100vw;
  height: 0.75rem;
  margin-top: 0.1rem;
  background-color: #fff;
  position: relative;
}
.ago {
  font-size: 0.15rem;
  position: absolute;
  top: 0.3rem;
  left: 0.1rem;
}
#photo {
  height: 0.6rem;
  position: absolute;
  top: 0.075rem;
  right: 0.3rem;
}
.picture {
  height: 0.2rem;
  position: absolute;
  top: 0.275rem;
  right: 0.1rem;
}
#center {
  width: 100vw;
  height: 0.45rem;
  background-color: #fff;
  margin-top: 0.01rem;
  position: relative;
}
.ago1 {
  font-size: 0.15rem;
  position: absolute;
  top: 0.15rem;
  left: 0.1rem;
  color: #333;
}
.ming {
  font-size: 0.15rem;
  position: absolute;
  top: 0.15rem;
  right: 0.3rem;
}
.picture1 {
  height: 0.2rem;
  position: absolute;
  top: 0.125rem;
  right: 0.1rem;
}
#below {
  width: 100vw;
  height: 0.45rem;
  background-color: #fff;
  margin-top: 0.01rem;
  position: relative;
}
.bound {
  width: 100vw;
  height: 0.4rem;
  position: relative;
}
.bound1 {
  font-size: 0.13rem;
  color: #666;
  position: absolute;
  top: 0.13rem;
  left: 0.1rem;
}
#phone {
  width: 100vw;
  height: 0.45rem;
  background-color: #fff;
  position: relative;
}
#phone1 {
  height: 0.25rem;
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
}
#phone2 {
  font-size: 0.15rem;
  position: absolute;
  top: 0.15rem;
  left: 0.35rem;
}
#psd {
  width: 100vw;
  height: 0.45rem;
  background-color: #fff;
  position: relative;
}
#psd1 {
  font-size: 0.15rem;
  position: absolute;
  top: 0.15rem;
  left: 0.1rem;
}
#psd2 {
  font-size: 0.15rem;
  position: absolute;
  top: 0.15rem;
  right: 0.3rem;
  color: #999;
}
#btn {
  width: 95vw;
  margin-top: 0.3rem;
  margin-left: 2.5vw;
  height: 0.4rem;
  border-radius: 0.05rem;
  text-align: center;
  background-color: #d8584a;
  color: #fff;
  font-size: 0.15rem;
  outline: none;
}
.bounced {
  background-color: #fff;
  width: 70vw;
  height: 30vh;
  position: absolute;
  left: 15vw;
  top: 30vh;
  border-radius: 0.1rem;
  z-index: 3;
}
.bounced1 {
  font-size: 0.15rem;
  z-index: 3;
}
.bounced2 {
  width: 1rem;
  position: absolute;
  top: 0.1rem;
  left: 0.85rem;
  z-index: 3;
}
.bounced3 {
  position: absolute;
  top: 1.1rem;
  left: 0.65rem;
  z-index: 3;
}
#cfm {
  width: 70vw;
  height: 0.4rem;
  position: absolute;
  bottom: 0;
  background-color: #4cd964;
  color: #fff;
  font-size: 0.2rem;
  z-index: 3;
  border-radius: 0 0 0.1rem 0.1rem;
}
#cfm1 {
  width: 30vw;
  height: 0.4rem;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #c1c1c1;
  color: #fff;
  font-size: 0.2rem;
  z-index: 3;
  border-radius: 0 0 0.1rem 0.1rem;
}
#cfm2 {
  width: 30vw;
  height: 0.4rem;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #dd6b55;
  color: #fff;
  font-size: 0.2rem;
  z-index: 3;
  border-radius: 0 0 0.1rem 0.1rem;
}
</style>
