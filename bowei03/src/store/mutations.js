export default{
    addJing(state,a){
        this.state.Jing = a;
    },
    addWei(state,a){
        this.state.Wei = a
    },
    addgeohash(state,a){
       this.state.Geohash = a
    },
    addID(state,a){
        state.shopID = a;
      },
      shopdetail(state,v){
       state.shopdetail = v;
      },
      getimg1(state,b){
        this.state.img=b;
      },
        addName1(state,a){
         this.state.name1 = a;
        },
        getjingweidu(state,a){
          this.state.jingweidu=a;
          console.log(a)
        },
        getsousuo(state,a){
          this.state.sousuo=a;
        },
        getlogin(state,a){
          this.state.login=a;
        }
}