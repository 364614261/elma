<template>
    <div>
        <header>
          <router-link to="/take">
            <img src="../../static/imgs/back.png" alt="">
          </router-link>
          
            <p>新增地址</p>
        </header>
        <div id="center">
            <input v-model="name" class="a" placeholder="请填写你的姓名" type="text">
            <router-link to="/Searchaddress">
            <input v-model="username2" class="a" placeholder="小区/写字楼/学校等" type="text">
            </router-link>
            
            <input v-model="address_detail" class="a" placeholder="请填写详细送餐地址" type="text">
            <input v-model="phone" class="a" placeholder="请填写能够联系到您的手机号" type="text">
            <input v-model="phone_bk" style="margin-bottom:0.1rem" class="a" placeholder="备用联系电话(选填)" type="text">
            
        </div>
       
            <button @click="addt()" id="dizhi">新增地址</button>
        
    </div>
</template>
<script>
export default {
    name:"newaddress",
    data() {
        return {
            username2:"",
            user_id:"",
            address:"",
            address_detail:"",
            geohash:"",
            name:"",
            phone:"",
            tag:"",
            sex:"",
            phone_bk:"",
            tag_type:""
        }
    },
   created() {
        // this.jiezhi();
        this.addt();
        this.username2=this.$store.state.sousuo;
    },
    methods: {
         back(){
            this.$router.back();
        },
        // jiezhi(){
        //     this.username2=this.$route.query.username
        // },
        // chuanzhi(v,i){
        //     if (localStorage.yonghu) {
        //         localStorage.yonghu += ","+v;
        //         localStorage.shouji += ","+i
        //     }else{
        //         localStorage.yonghu = ""+v;
        //         localStorage.shouji = ""+i
        //     }
        //     this.$router.push({
        //         name:"address"
        //     })
        // }
        addt() {
            // console.log(res.data.username);
            this.$http({
                method:'post',
                url:"https://elm.cangdu.org/v1/users/"+this.$store.state.login.user_id+"/addresses",
                data:{
                  //  user_id:res.data.username,
                   address:this.username2,
                   geohash:this.$store.state.jingweidu,
                   address_detail:this.address_detail,
                   phone:this.phone,
                   phone_bk:this.phone_bk,
                   name:this.name,
                   tag:"21515",
                   sex:1,
                   tag_type:2

                }
            }).then(res => {
              console.log(res);
              if (res.data.message) {
                // alert(res.data.message)
              }else {
          //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
          this.$router.push({
            name: "take",
            //  query:{
            //    username:this.name,
            //    newpassword:this.phone,
            //  }
          });
        }
            
        })
      
        //   user_id:this.user_id,
        //   address:this.address,
        //   address_detail:this.address_detail,
        //   geohash:this.geohash,
        //   name:this.name,
        //   phone:this.phone,
        //   tag:this.tag,
        //   sex:this.sex,
        //   phone_bk:this.phone_bk,
        //   tag_type:this.tag_type
        // }
      // }).then(res => {
        // console.log("login数据");
        // console.log(res);
        // console.log(res.name);
        // if (res.data.message) {
          // alert(res.data.message); //登陆失败
        } 
        
      // });
    }
    }

// }
</script>
<style scoped>
header{
  width: 100%;
  height: 0.55rem;
  background-color: rgb(48, 144, 232);
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
}
header img {
  height: 0.25rem;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%);
}
header p {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#center{
    text-align: center;
    background-color: white;
    margin-top: 0.7rem;
}
.a{
    font-size: 0.15rem;
    background-color:rgb(242,242,242);
    margin-top: 0.1rem;
    /* border:0.01rem solid darkgrey; */
    width: 3.5rem;
    height: 0.4rem;
}
#dizhi{
    /* margin: 0 auto; */
    width: 3.5rem;
    height: 0.4rem;
    color: white;
    background-color: rgb(76,218,100);
    margin: 0.15rem 0 0 0.1rem;
    border-radius: 0.08rem;
    outline: none;
}
</style>
