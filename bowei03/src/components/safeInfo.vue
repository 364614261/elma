<template>
  <div id="wrap">
      <div id="top">
            <img @click="back1()" src="../../static/imgs/back.png" alt="">
            <h2>食品监督安全公示</h2>
       </div>
           <div id="allContent">
            <div id="gongShi">
                 <p>食品监督安全公示</p>
            </div>  
            <div id="text">
                 <div id="text_top">
                      <div id="xiaoLian">
                          <img src="../../static/imgs/SSS1.png" alt="">
                      </div>
                      <div id="xiaoLian_right">
                          <span>监督检查结果：差</span>
                          <p>检查日期：</p>
                      </div>
            </div>
       </div> 
           <div id="text_c">
           <div id="gongShang">
                 <p>工商登记信息</p>
            </div>
            <div id="one">
                <p>企业名称</p>
            </div>
            <div id="two">
                <p>工商执照注册号</p>
            </div>
            <div id="three">
                <p>注册资本</p>
            </div>
            <div id="four">
                <p>注册地址</p>
            </div>
            <div id="five">
                <p>属地监管所</p>
            </div>
           </div>
           <div id="text_bu">
              <div id="canYin">
                 <p>餐饮许可证</p>
              </div>
              <div id="first">
                 <p>营业范围</p>
              </div>
              <div id="second">
                 <p>许可证有效期</p>
              </div>
              <div id="third">
                 <p>许可证号</p>
              </div>
              <div id="fours">
                 <p>发证时间</p>
              </div>
            </div>
          </div>
  </div>
</template>

<script>
export default {
  name: 'safeInfo',
  data(){
       return {          
          
       }
    },
    created() {
        
    },
    methods: {   
        back1(){
            history.go(-1)  
        },   
    }
}
</script>


<style scoped>
#wrap{
  overflow: hidden;
}
#top{
    background-color: #3190e8;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    height: 0.5rem;
    width: 100vw;    
    overflow: hidden; 
    color: white; 
    text-align: center;
    line-height: 0.5rem;
}
#top img{
    width: 4vw;
    position: absolute;
    left: 3vw;
    top: 0.14rem;
}
h2{
    font-size: 700;
}
#allContent{
    padding-top: 0.07rem;
    height: 95vh;
    position: fixed;
    top:0.5rem;
    
}
#gongShi{
    border-bottom: 1px solid #e0d2d2d3;
    background-color: #fff;
    text-align: left;
    font-size: 0.17rem;
    padding: 0.1rem;
}
#text{
    background-color: #fff;
    padding: 0.1rem;
    overflow: hidden;
}
#text_top{
    overflow: hidden;
}
#xiaoLian img{
    width: 15vw;
    float: left;
    padding: 0.1rem;
}
#xiaoLian_right{
     float: left;
     padding-top: 0.2rem;
     text-align: left;
}
#xiaoLian_right p{
     padding-top: 0.1rem;
}
#text_c{
    background-color: #fff;
    text-align: left;
    font-size: 0.17rem;
    margin-top: 0.1rem;        
    padding: 0.13rem;
    width: 100vw;
}
#gongShang{
    border-bottom: 1px solid #f1f1f1;    
    color: #333;
    padding: 0.07rem;
    font-weight: 400;    
    width: 100vw;    
}
#one,#two,#three,#four,#five{
    width: 100%;
    font-size: 0.13rem;
    text-align: left;
    padding: 0.1rem;    
}
#text_bu{ 
    background-color: #fff;
    text-align: left;
    font-size: 0.17rem;
    margin-top: 0.1rem;        
    padding: 0.13rem;
    width: 100vw;
}
#canYin{
    border-bottom: 1px solid #f1f1f1;    
    color: #333;
    padding: 0.07rem;
    font-weight: 400;    
    width: 100vw;
}
#first,#second,#third,#fours{
    width: 100%;
    font-size: 0.13rem;
    text-align: left;
    padding: 0.1rem;
}
</style>
