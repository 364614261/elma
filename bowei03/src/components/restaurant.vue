 <template>
    <div>        
        <div v-if="shows" id="others">
            <div id="top_name">
             <p>{{massage.name}}</p>
             </div>
             <div id="massage_dis">
                 <div id="onSale"><p>优惠信息</p></div>                 
             </div>
             <div id="massage_text">
                     <span id="zi">{{massage.activities[0].icon_name}}</span>
                <span>{{massage.activities[0].description}}</span>
                 </div>
             <div id="information">
                 <div id="infor"><p>商家公告</p></div>                 
             </div>
             <div id="massage_infor">
                 <p>{{massage.promotion_info}}</p>
             </div>
             <div id="img3" @click="ddd()">
                 <img src="../../static/imgs/icon-test.png" alt="">
             </div>
        </div>

        <div id="foodDetail" v-if="bools == false">
              <div id="other_top">
                  <div @click="www(true)" id="imgback">
                  <img src="../../static/imgs/back.png" alt="">
                  </div>
                  <span>{{foodmsg.name}}</span>
              </div>
              <div id="fangDa">
                  <img :src="'https://elm.cangdu.org/img/'+foodmsg.image_path" alt="">
              </div>
              <div id="style">
                  <p id="a">{{foodmsg.description}}</p>
                  <p id="b">{{foodmsg.name}}</p>
                  <p id="c">
                      <span>评分</span>
                      <span id="c1">
                      <el-rate
                       v-model="foodmsg.rating"
                       disabled
                       show-score
                       text-color="#ff9900"
                       score-template="">
                       </el-rate></span>
                       <span id="c2">{{foodmsg.rating}}</span>
                  </p>
                  <p id="d">
                      <span>{{foodmsg.tips}}</span>
                      <span id="d1">售价￥{{foodmsg.specfoods[0].price}}起</span>
                  </p>
                  <p id="e">评论数{{foodmsg.satisfy_count}}  好评率{{foodmsg.satisfy_rate}}%</p>
              </div>
        </div>
        

        <div id="one"  v-if="bools">
            <div id="goBack">
           <img @click="back1()" src="../../static/imgs/back.png" alt=""> 
        </div>
            <img id="img1" :src="'https://elm.cangdu.org/img/'+massage.image_path" alt="">           
            <div id="name"><span>{{massage.name}}</span></div>              
            <div id="head_center">
                <span>商家配送/</span>
                <span>分钟送达</span>
                <!-- <span>{{massage.piecewise_agent_fee}}</span> -->
              <router-link to="/shopdetail"><div id="img2" ><img  src="../../static/imgs/back2.png" alt=""> </div></router-link>
            </div>
            <div id="info">
                <p>公告:{{massage.promotion_info}}</p>
            </div>       
            <div id="jian" >
                <span id="zi">{{massage.activities[0].icon_name}}</span>
                <span >{{massage.activities[0].description}}</span>
                <div @click="ccc()" id="activities">
                <span>一个活动</span>
                <img src="../../static/imgs/back2.png" alt="">
                </div>
            </div>      
        </div>
        <div id="goods"  v-if="bools">
            <span @click="aaa()" id="shangPin">商品
                <div v-if="colors" id="green"></div>
            </span>
            <span @click="bbb()" id="pingJia">评价
                <div v-if="colorse" id="green2"></div>
            </span>
        </div>

        <div allShangPin v-if="show">
        <div id="allContent" v-if="bools">              
        <div id="all_left">
            <div id="page2">
			<ul :key="i"
              v-for="(v,i) in foodList"
              :class="{span_a:showP==true,span_a2:showP2==i}"
              @click="changeBC(i)">
                <a :href="'#page1'+v.id"><span>{{v.name}}</span>
                   <div id="xiaoQuan" v-if="v.type>1">
                     <p>{{v.type-1}}</p>
                   </div>
                </a>
                
            </ul>			
		</div>
        </div>	
               
         <div id="center_right">	
		 <ul id="allDetial">   
             <li :key="i" v-for="(v,i) in foodList" :id="'page1'+v.id">
                  <div id="reXiao">
                  <span id="mingZi">{{v.name}}</span>         
                  <span id="miaoShu">{{v.description}}</span></div>
                   <ul >
                       <li v-for="(a,b) in v.foods" :key="b" id="border_bottom">
                    <div id="right_c">                    
                    <div id="details" v-if="show" @click="qqq(a)">  
                    <div id="tuPian">
                    <img id="srcs" :src="'https://elm.cangdu.org/img/'+a.image_path" alt=""> </div>                  
                    <span id="name1">{{a.name}}</span>
                    <!-- <span>招新</span> -->
                    <p id="description">{{a.description}}</p>
                    <p id="tips">{{a.tips}}</p>                 
                    <!-- <span v-if="v.foods[0].activity!=null">{{v.foods[0].activity.image_text}}</span> -->
                    <span id="prices" v-if="a.specfoods.length">￥{{a.specfoods[0].price}}</span>
                     </div> 
                    <div id="orderFood">
                    <span @click="a.is_featured--;reduceprice(a.specfoods[0].price);shul--;v.type--" v-if="a.is_featured>0"><i class="el-icon-remove-outline"></i></span>
                    <span v-if="a.is_featured>0">{{a.is_featured}}</span>
                    <span><i  @click="a.is_featured++;addprice(a.specfoods[0].price);shul++;v.type++" class="el-icon-circle-plus-outline"></i></span>
                    </div>
                    </div> 
                       </li>
                   </ul>
                   
            </li>                        					
		</ul>    
        </div>              
        </div>
        <div id="bottom">
            
            <div id="gouWu">
            <div id="bc" v-if="shul>0">
                <div @click="gouwu">
            <img src="../../static/imgs/gouwuche.png" alt=""></div>
            </div>
            <div id="whit" v-if="shul==0">
                
            <img src="../../static/imgs/gouwuche.png" alt=""></div>
            
            <div id="allNum"  v-if="shul>0">
                <p>{{shul}}</p>
            </div>
            </div>
            <span id="allPrice">￥{{count}}</span>
            
            <div id="jieSuan">
                <p id="jieSuan1" v-if="count==0">还差￥20起送</p>
                <router-link to="/fooddetail">
                <p id="jieSuan2" v-if="count > 0">去结算</p></router-link>
            </div>
            <p id="priceFee">{{massage.piecewise_agent_fee.tips}}</p>
            <div id="gouWuChe" v-if="chuxian">
                <div id="zhedang"  @click="gouwu" v-if="chuxian"></div>
                <div id="gou_top">
                     <span class="che">购物车</span>
                     <div @click="qingKong()">
                     <span class="delite"><i class="el-icon-delete"></i></span>
                     <span class="qingkong">清空</span></div>
                </div>
                  <ul>
                      <li :key="i" v-for="(v,i) in foodList">
                        <ul>
                            <li id="gou_wu"  :key="index" v-for="(value,index) in v.foods"  v-if="value.is_featured>0">
                                   
                            <span id="gou_name">{{value.name}}</span>
                                   
                            <span id="gou_price" v-if="value.specfoods.length">￥{{value.specfoods[0].price}}</span>
                                   
                            <div id="gou_add">
                            <span @click="value.is_featured--;reduceprice(value.specfoods[0].price);shul--;v.type--" v-if="value.is_featured>0">
                            <i class="el-icon-remove-outline">
                            </i>
                            </span>
                            <span v-if="value.is_featured>0">{{value.is_featured}}</span>
                            <span><i  @click="value.is_featured++;addprice(value.specfoods[0].price);shul++;v.type++" class="el-icon-circle-plus-outline"></i></span>
                                </div>                              
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        </div>

        <div v-if="another">
            <div id="pingFen">
            <div id="pingFen_left">
            <h1>{{appraise[0].rating_star}}</h1>
            <p id="zongHe">综合评价</p>
            <p id="gaoYu">高于周边商家76.9%</p>
            </div>
            <div id="pingFen_right">

                <div id="service_score">
                    <span id="att">服务态度</span>
                    <span><el-rate
                       v-model="scores.service_score"
                       disabled
                       show-score
                       text-color="#ff9900"
                       score-template="">
                       </el-rate></span>               
                <span id="dengJi">{{scores.service_score.toFixed(1)}}</span>
                </div>
                <div id="food_score">
                    <span id="att">菜品评价</span>
                    <span><el-rate
                       v-model="scores.food_score"
                       disabled
                       show-score
                       text-color="#ff9900"
                       score-template="">
                       </el-rate></span>               
                <span id="dengJi2">{{scores.food_score.toFixed(1)}}</span>
                </div>
                <p id="songDa">送达时间 {{scores.deliver_time}}分钟</p>
            </div>
           </div>
           
           <div id="lists">
               <ul :key="i" v-for="(v,i) in tags">
                  <li>{{v.name}}({{v.count}})</li>                
               </ul>               
           </div>
           
           <div id="last">
           <div id="haoPing">
               <ul id="everyuser">
                   <li :key="i" v-for="(v,i) in appraise">
                    <div id="touXiang"></div>
                    <span id="riQi">{{v.rated_at}}</span>
                    <span id="usernames">{{v.username}}</span>
                    <div id="everyuser_c">                    
                    <span><el-rate
                       v-model="scores.food_score"
                       disabled
                       show-score
                       text-color="#ff9900"
                       score-template="">
                       </el-rate></span>  
                       <span id="songDa2">{{v.time_spent_desc}}</span>
                       </div>
                       <div id="imgs">                         
                              <span><img id="imgs1" src="" alt=""></span>                         
                              <span><img id="imgs2" src="" alt=""></span>                            
                       </div>
                       <div>
                           <span>{{v.item_ratings.food_name}}</span>
                           <span>{{v.item_ratings.food_name}}</span>
                       </div>
                   </li>                   
               </ul>
           </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import { Loading } from 'element-ui';
let loadingInstance
export default {
    name:"restaurant",
    data(){
       return {  
          chuxian:false,
          foodmsg:[],
          bools:true,
          count:0,      
          tags:[],
          scores:{},
          appraise:[],
          tabPosition: 'left',
          massage:{},
          foodList:[],
          show:true,
          another:false,
          shows:false,
          colors:true,
          colorse:false,
          shul:"0",
          showP:true,
          showP2:"",
       }
    },
    created() {       
        this.getId();
        this.addRestaurant();  
        this.addFoodList(); 
        this.addAppraise();
        this.addScore(); 
        this.addTags(); 
        loadingInstance = Loading.service({
            fullscreen:true,
            background:"rgba(0, 0, 0, 0.8)",
            text:"玩命加载中...",
            spinner:"el-icon-orange",
        });
    },
    methods: {
        changeBC(i){
       this.showP=false;
       this.showP2=i;
         },
        qingKong(){
          for(var i=0;i<this.foodList.length;i++){
              this.foodList[i].type = 0;
            for(var j=0;j<this.foodList[i].foods.length;j++){
                this.foodList[i].foods[j].is_featured=0;
            }
          }
          this.count = 0;
          this.shul = 0;
        },
        gouwu(){
            this.chuxian = !this.chuxian;
        },
        www(w){
           this.bools = w;
        },
        qqq(v){
            //发射事件
           this.$store.commit('shopdetail',v);
           this.foodmsg = this.$store.state.shopdetail;
           this.bools = false;
        //    console.log(this.foodmsg);
        },
        reduceprice(v){
           this.count -=v;
        },
        addprice(v){
           this.count +=v;
        },
        aaa(){
           this.show = true;
           this.another = false;
           this.colors = true;
           this.colorse = false; 
        },
        bbb(){
           this.show = false;
           this.another = true;
           this.colorse = true; 
           this.colors = false; 
        },
        ccc(){
           this.shows = true;
        },
        ddd(){
           this.shows = false;
        },
        back1(){
            history.go(-1);  
        },
        getId(){
        // this.shopId = this.$route.query.shopid;
        this.$store.commit("addID",this.$route.query.shopid);
        
      },
        addRestaurant(){
            const api = "https://elm.cangdu.org/shopping/restaurant/"+this.shopID;
            this.$http({
                url:api,
                method:'get',               
            }).then(res =>{//请求返回的数据res
               console.log("获取餐馆信息成功");
            //    console.log(res.data);
               //返回请求到的数据
               this.massage = res.data;                             
            })        
        },
        addFoodList(){
            const api = "https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+this.shopID;
            this.$http({
                url:api,
                method:'get',               
            }).then(res =>{//请求返回的数据res
               console.log("获取食品列表成功");
            //    console.log(res.data);
               //返回请求到的数据
               this.foodList = res.data;   
               // 关闭加载
                loadingInstance.close();
                                    
            })        
        },
        addAppraise(){
            const api = "https://elm.cangdu.org/ugc/v2/restaurants/"+this.shopID+"/ratings?offset=0&limit=20";
            this.$http({
                url:api,
                method:'get',               
            }).then(res =>{//请求返回的数据res
               console.log("获取用户评价成功");
            //    console.log(res.data);
               //返回请求到的数据
               this.appraise = res.data;                                        
            })        
        },
        addScore(){
            const api = "https://elm.cangdu.org/ugc/v2/restaurants/"+this.shopID+"/ratings/scores";
            this.$http({
                url:api,
                method:'get',               
            }).then(res =>{//请求返回的数据res
               console.log("获取评分信息成功");
            //    console.log(res.data);
               //返回请求到的数据
               this.scores = res.data;   
                                     
            })        
        },
        addTags(){
            const api = "https://elm.cangdu.org/ugc/v2/restaurants/"+this.shopID+"/ratings/tags";
            this.$http({
                url:api,
                method:'get',               
            }).then(res =>{//请求返回的数据res
               console.log("获取用户的评价分类成功");              
               //返回请求到的数据
               this.tags = res.data;                                        
            })        
        },
        
    },
    computed: {
        ...mapState(['shopID'])
    },
}
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
#others{
    position: fixed;
    top: 0;  
    z-index: 122;
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 1);
}
#top_name{
    padding: 0.3rem;
    font-size: 0.18rem;
    color: white;
    text-align: center;
}
#massage_dis{
    margin-top: 0.2rem;
}
#onSale{
    position: absolute;
    left: 40vw;
    top:1rem;
    color: white;
    border: 1px solid rgba(206, 208, 209, 0.618);
    border-radius: 40%;
    padding: 0.04rem;
}
#massage_text{
    padding: 0.4rem;
    text-align: left;
    /* border: 2px solid yellow; */
    color: #f1f1f1;
}
#infor{
    position: absolute;
    left: 40vw;
    top:2rem;
    color: white;
    border: 1px solid rgba(206, 208, 209, 0.618);
    border-radius: 40%;
    padding: 0.04rem;
}
#massage_infor{
    padding-top: 0.6rem;
    padding-left: 0.4rem;
    text-align: left;    
    color: #f1f1f1;
}
#img3 img{
    height: 0.4rem;
    position: absolute;
    left: 45vw;
    bottom: 1rem;
}
#one{
    background-color: rgba(122, 110, 110, 1.7);
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;    
    overflow: hidden; 
    color: white;
}
#goBack{
    z-index: 111;
    position: absolute;
    left: 0.09rem;
    top: 0.06rem;
}
#goBack img{
    width: 4vw;
}
#img1{
    width: 15vw;
    float: left;
    padding: 0.25rem 0.08rem 0 0.1rem;
}
#img2{
    float: right;
}
#img2 img{
    width:8vw;
}
#name{
    font-weight: 500;
    font-size: 0.2rem;
    margin-top: 0.1rem;
}
#name span{
   padding-left: 13vw;
}
#head_center {
    float: left;
    padding-top:0.13rem ;
    font-size: 0.11rem;
    width: 70vw;
}
#head_center span{
    float: left;
}
#info{
    width: 70vw;
    float: left;
    font-size: 0.11rem;
}
#info p{
    float: left;
}
#jian{
    float: left;
    padding-left: 0.1rem;
    text-align: left;
    width: 100%;
    position: relative;
}
#zi{
    background-color: red;
}
#activities{
   font-size: 0.11rem;
   position: absolute;
   right: 0.2rem;
   top: -0.08rem;
}
#activities img{
    width: 5vw;
}
#goods{
    padding-top: 0.1rem;
    position: fixed;
    left: 0;
    top: 1.1rem;
    width: 100vw;
    z-index: 1;
    height: 0.25rem;
    margin-bottom: 0.2rem;
    padding-bottom: 0.1rem;
    background-color: white;
    font-size: 0.15rem;
    display: flex;
    justify-content: space-around;
}
#shangPin{
    color: black;
}
#green{
    padding-bottom: 0.1rem;
    border-bottom: 3px solid blue;
    color: blue;
}
#pingJia{
    color: black;
}
#green2{
    padding-bottom: 0.1rem;
    border-bottom: 3px solid blue;
    color: blue;
}
#allContent{
    /* border: 2px solid blueviolet; */
    overflow: hidden;
    margin-top: 1.6rem;
    position: relative;
    width: 100vw;
    height: 80vh;

}
#all_left{
    width: 25vw;
    height: 75vh;
    overflow: hidden;
    /* border: 1px solid yellow; */
    overflow: scroll;
    float: left;
}
#page2{
    width: 25vw;
    font-size: 10px;	
	text-align: center;    
	background-color: #f1f1f1;
}
#page2 ul{
    border-bottom: 1px solid rgba(128, 123, 127, 0.2);
    padding: 0.3rem 0.1rem;
    font-size: 0.15rem;
    position: relative;
}
.span_a{
border-left: 4px solid rgb(238, 237, 237);
background-color: rgb(238, 237, 237);
}
.span_a2{
border-left: 4px solid blue;
background-color: white;
}
#page2 span{
    color: #3190e8;
}
#xiaoQuan{
    position: absolute; 
    left: 18vw; 
    top: 1vh; 
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background-color: red;
    color: #ebf5ff;
}
#xiaoQuan p{
    padding-top: 0.02rem;
}
#center_right{
    height: 80vh;
    float: left;
    width: 75vw;
    overflow: scroll;

    overflow-x:hidden;
}
#allDetial{    
    font-size: 0.15rem;	
	text-align: center;
    background-color: #fff;
}
#center_right a{
    height: 0.3rem;
}
#reXiao{
    width: 100%;
    background-color: #f1f1f1;
    padding-left: 0.1rem;
    overflow: hidden;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    /* border: 2px solid red; */
}
#mingZi{
    float: left;
    font-size: 0.17rem;
    /* border: 2px solid blue; */
}
#miaoShu{
    /* border: 2px solid pink; */
    margin-top: 0.04rem;
    padding-left: 0.1rem;
    float: left;
    font-size: 0.13rem;
}
#border_bottom{
    border-bottom: 1px solid rgba(198, 198, 209, 0.6);
}
#details{
    /* border: 2px solid pink; */
    overflow: hidden;
    /* width: 60vw; */
}
#tuPian{
    overflow: hidden;
    width: 12vw;
    float: left;
    padding-right: 0.1rem;
}
#srcs{
    width: 12vw;
    padding: 0.08rem;
}   
#right_c{
    padding-left: 0.1rem;        
    overflow: hidden;
}
#name1{
    float: left;
    width: 75%;
    padding-top: 0.1rem;
    text-align: left;
    font-weight: 600;
    padding-bottom: 0.1rem;
    font-size: 0.17rem;
}
#description{
    float: left;
    width: 75%;
    padding-bottom: 0.1rem;
    text-align: left;
}
#tips{
    float: left;
    width: 75%;
    font-weight: 500;
    text-align: left;
    padding-bottom: 0.1rem;
}
#prices{
    font-weight: 600;
    color: red;
    float: left;
    margin-left: 0.61rem;
}
#orderFood{
    /* border: 2px solid red; */
    float: right;
    padding-right: 0.05rem;
    padding-bottom: 0.1rem;
    font-size: 0.18rem;
    color: blue;
    z-index: 222;
}
#shopdetail{
    position: relative;
}
#other_top{
    position: fixed;
    z-index: 333;
    left: 0;
    top: 0;
    width: 100vw;  
    height: 0.6rem;  
    color: white;
    background-color: blue;   
    text-align: center;
    line-height: 0.6rem;
}
#other_top p{
    font-size: 0.22rem;
}
#imgback{
    position: absolute;
    left: 3vw;
    top: 1.3vh;
}
#imgback img{
    width: 4vw;
    color: #f1f1f1;
}
#fangDa{
    margin-top: 0.6rem;
    /* border: 2px solid red; */
    width: 100vw;    
}
#style{
    background-color: white;
    padding-left: 0.2rem;
    text-align: left;
    font-size: 0.16rem;  
    height: 40vh;  
}
#b{
    padding-bottom: 0.1rem;
    padding-top: 0.1rem;
}
#c{
    position: relative;
    padding-bottom: 0.1rem;
}
#c1{
    position: absolute;
    left: 10vw;
}
#c2{
    position: absolute;
    left: 40vw;
    color: red;
}
#d{
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
}
#d1{
    color: red;
}
#e{
    padding-top: 0.1rem;
}
#fangDa img{
    width: 100vw;
    height: 50vh;
}
#bottom{
    background-color:rgb(90, 78, 78);
    position: fixed;
    z-index: 1;
    left: 0;
    bottom: 0;
    width: 100vw;  
    /* height: 0.6rem;   */
    color: white;
    /* overflow: hidden; */
}
#gouWu{
    height: 0.6rem;
    width: 0.6rem;
    background-color: rgb(117, 97, 97);
    border-radius: 50%;
    position: absolute;
    left: 6vw;
    bottom: 1vh;   
    z-index: 4;
}
#bc{
    height: 0.5rem;
    width: 0.5rem;
    background-color: #3190e8;
    border-radius: 50%;
    position: absolute;
    left: 1vw;
    bottom: 0.5vh;
}
#bc img{
    position: absolute;
    left: 2vw;
    width: 0.4rem;
    padding-top: 0.1rem;    
}
#whit{
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    position: absolute;
    left: 1vw;
    bottom: 0.5vh;
}
#whit img{
    position: absolute;
    left: 2vw;
    width: 0.4rem;
    padding-top: 0.1rem;
    
}
#allNum{
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    left: 10vw;
    bottom: 10vw;
    text-align: center;
    line-height: 5vw
}

#allPrice{
    color: #f1f1f1;
    font-size: 0.2rem;
    float: left;
    width: 70vw;
    text-align: center;
    /* border: 2px solid pink; */
    margin-right: 0.51rem;
    padding-top: 0.1rem;
    font-weight: 600;
}
#priceFee{
    float: left;
    /* border: 2px solid yellow; */
    font-size: 0.12rem;
    padding-left: 1rem;
    padding-top: 0.1rem;
}
#jieSuan p{
    position: absolute;
    right: 0;
    height: 0.6rem;
    width: 30vw;
    padding-top: 0.2rem;
    font-size: 0.16rem;
    text-align: center;
}
#jieSuan1{
    background-color: grey;
}
#jieSuan2{
    background-color: green;
}
#gouWuChe{
    position: absolute;
    left: 0;
    bottom: 0.5rem;
    color: black;
    width: 100vw;
    /* overflow: hidden; */
}
#zhedang{
    background-color:rgba(0, 0, 0, 0.4);
    opacity: 0.4;
    width: 100vw;
    height: 100vh;
}
#gou_top{
    height: 0.5rem;
    background-color: #eceff1;
    position: relative;
}
.che{
    font-size: 0.16rem;
    position: absolute;
    left: 8vw;
    top: 0.15rem;
}
.delite{
    position: absolute;
    right: 15vw;
    top: 0.15rem;
}
.qingkong{
    position: absolute;
    right: 5vw;
    top: 0.15rem;
}
#gou_wu{    
    height: 0.4rem;
    background-color: #fff;
}
#gou_name{
    float: left;
    line-height: 0.4rem;
    width: 50vw;
    margin-left: 0.3rem;
    text-align: left;
    
}
#gou_price{
    text-align: center;
    line-height: 0.4rem;
    color: red;
}
#gou_add{
    line-height: 0.4rem;
    width: 20vw;
    float: right;
    text-align: center;
}
#pingFen{
    position: fixed;
    left: 0;
    top:1.6rem;
    z-index: 100;
    height: 1.1rem;
    width: 100vw;
    overflow: hidden;
    background-color: white;
}
#pingFen_left{
    float: left;
    width: 40vw;
    padding-top: 0.16rem;
    text-align: center;
}
h1{
    color: red;
}
#zongHe{
    padding-top: 0.08rem;
    padding-bottom: 0.08rem;
    font-size: 0.15rem;
    font-weight: 500;
}
#gaoYu{  
    font-size: 0.1rem;
}
#pingFen_right{
    padding-top: 0.2rem;
    float: right;
    width: 59vw;
    text-align: left;
    /* border: 1px solid blue; */
}
#service_score{
    width: 55vw;
    position: relative;
    /* border: 1px solid red; */
}
#att{
    float: left;
    font-size: 0.16rem;
    padding-bottom: 0.02rem;    
}
#dengJi{    
    padding-bottom: 1rem;
    position: absolute;
    right: 1vw;
    top: 0;
}
#food_score{
    width: 55vw;
    position: relative;
    padding-top: 0.08rem;
}
#dengJi2{        
    padding-top: 0.1rem;
    position: absolute;
    right: 0;
    top: 0;
}
#songDa{
    padding-top: 0.1rem;
    float: left;
}
#lists{
    position: fixed;
    left: 0;
    top:2.8rem;
    z-index: 100;
    width: 100vw;
    overflow: hidden;
    background-color: white;
    padding-bottom: 0.1rem;
}
#lists ul{
     float: left;     
}
#lists ul li{
   margin: 0.08rem 0.04rem 0;
   padding: 0.06rem;
   background-color: #ebf5ff;
   border-radius: 10%;   
}
#last{
    position: fixed;
    top: 4rem;
    left: 0;    
    width: 100vw;
    overflow: scroll;
    background-color: white;
    height: 100vh;
}
#haoPing{    
    width: 100vw;    
    background-color: white;
    overflow: hidden; 
    /* border: 2px solid red; */
    margin-bottom: 0.8rem;   
    margin-top: 0.3rem;
}
#everyuser li{
     border-bottom: 1px solid rgb(178, 178, 185);     
     padding: 0.1rem;
     position: relative;    
}
#touXiang{
    width: 0.25rem;
    height: 0.25rem;
    background-color: yellow;
    border-radius: 50%;
    padding-right: 0.3rem;
    padding-bottom: 0.3rem;
}
#everyuser_c{
    width:35vw ;
    position: absolute;
    right: 42vw;
    top: 0.4rem;
}
#songDa2{
    position: absolute;
    right: -0.6rem;
    top: 0.02rem;
}
#usernames{
    position: absolute;
    right: 60vw;
    top: 0.2rem;
}
#riQi{
    position: absolute;
    right: 5vw;
    top: 0.2rem;
}
#imgs1,#imgs2{
    width: 0.5rem;
    background-color: red;
    padding: 0.4rem;
    margin-left: 0.3rem;
    margin-top: 0.02rem;    
}
</style>
