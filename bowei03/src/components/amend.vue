<template>
    <div>
        <div id="head">
            <img @click="shang()" id="_head" src="../../static/imgs/back.png" alt="">
            <p id="_head_">修改用户名</p>
        </div>
        <input v-model="newuser" id="txt" type="text" placeholder="输入用户名">
        <p id="atn">用户名只能修改一次（5-24字符之间）</p>
        <button @click="keya(newuser)" id="btn">确认修改</button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:"amend",
    data() {
        return {
            newuser:""
        }
    },
    methods: {
         shang(){
            this.$router.back();
         },
        keya(a){
            if (/^\w{5,25}$/.test(this.newuser) == false) {
                return
            } else {
                this.$router.push({
            name: "account",
            query:{username2:this.newuser},
            
          });
      this.$store.commit("addName1",a)
            }
         }
    },
}
</script>
<style scoped>
#head{
    width: 100vw;
    height: 0.45rem;
    background-color: #3190e8;
}
#_head{
    margin-top: 0.1rem;
    width: 0.15rem;
    float: left;
    margin-left: 0.1rem;
}
#_head_{
    text-align: center;
    line-height: 0.45rem;
    font-size: 0.2rem;
    font-weight:bold;
    color: white;
}
#txt{
    width: 95vw;
    height: 0.4rem;
    margin-top: 0.1rem;
    font-size: 0.15rem;
    margin-left: 2.3vw;
    border: 0.01rem solid #ddd;
    background-color: #f2f2f2;
}
#atn{
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    color: #666;
    font-size: 0.1rem;
}
#btn{
    width: 95vw;
    height: 0.4rem;
    background-color: #3190e8;
    color: #fff;
    font-size: 0.15rem;
    margin-top: 0.2rem;
    margin-left: 2.5vw;
    outline: none;
}
</style>
