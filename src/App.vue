<template>
  <div id="app">
      <div class="div-inline">
          <input id="topSearchInput"  style="height: 30px;width: 400px" type="text" source=""
                  v-model="searchText"  urllink="" actualkey="">
      </div>
      <a   href="#" v-on:click="search()">
          <div  style="background-color: black ;display: inline-block; width: 70px; height: 30px;">
              <img style="padding-top: 8px" src="./assets/search.png" />
          </div>
      </a>
    <div style="padding-top: 16px">
        <transition name='animate' appear mode='out-in'>
            <router-view v-bind:router-data="allData" v-bind:key="change"></router-view>
        </transition>
    </div>
      <transition name='btn' appear mode='out-in'>
          <div class="app-btn" v-show="allData.mainShow">
              <button class="btn btn-success app-btn-back"
                      v-show="back==0?false:true"  v-on:click="dosom('back')">上一页</button>
              <button class="btn btn-success app-btn-next"
                      v-show="next==0?false:true" v-on:click="dosom('next')">下一页</button>
          </div>
      </transition>
      <div class="app-loading" v-show="loading">
          <img src="../static/loading/loading.gif" style="margin:0 auto;display: block;" alt="" />
      </div>
  </div>
</template>

<script>
    import router from './router'
    export default{
        data(){
            return{
                allData:{
                    showData:null,
                    detailedData:{},
                    num:0,
                    mainShow:true,
                    testS:"test 6666"
                },
                loading:true,
                change:true,
                back:0,
                next:1,
                searchText:"在千万商品中搜索",
            }
        },
        created(){
            this.routePath();
        },
        watch:{
            "$route"(to){
                this.routePath();
            }
        },
        methods:{
            buttonToggle(){
                var nowNum=this.allData.num;
                this.back=nowNum;
                this.next=2-nowNum;
            },
            search(){
                console.log("topSearchInput::"+topSearchInput.value);
                console.log("searchText::" + this.searchText);
            },
            dosom(str){
                str=="next"?this.allData.num++:this.allData.num--;
                this.buttonToggle();
                //当前user/当前页面/当前页面路由
                router.push(this.$route.path.slice(0,8)+this.allData.num);
            },
            routePath(){
                console.log("fullpath length:",this.$route.fullPath.length,this.$route.fullPath);
                if(this.$route.fullPath=="/"){
                    router.push("/item/0/0");
                    this.load();
                }
                else if(this.$route.fullPath.length==9 || this.$route.fullPath.length==20){
                    this.load();
                    console.log("path000:"+this.$route.path)
                }else if(this.$route.fullPath.length == 12){
                    console.log("route path::",this.$route.path);
                    this.loading = false;
                    this.allData.mainShow=false;
                    router.push("/item/detail");
                }
                else{
                    router.push("/item/error");
                    this.back=0;
                    this.next=0;
                }
            },load()
            {
                var numData=null,
                    listData=null;

                // /user/lisData/numData
                numData=this.$route.path.slice(8,9);
                listData=this.$route.path.slice(6,7);

                // 初始化
                this.allData.num=numData;
                //this.buttonToggle();
                this.change=!this.change;

                if(this.$route.path.indexOf("con")>0){
                    if(this.$route.path.indexOf("detail")>0){
                        console.log("路由detail");
                        this.loading=true;
                        this.allData.mainShow=false;
                        setTimeout(e=>{
                            this.loading = false;
                           console.log("allData:",this.allData);
                        },700);
                        return;
                    }
                    //获取list中第几个
                    var typeData=this.$route.query.type;
                    this.$nextTick(e=>{
                        this.$http.get("static/data/group-"+listData+".json").then(rea=>{
                            this.loading=true;
                            this.allData.mainShow=false;
                            console.log("mainshow000:"+this.allData.mainShow);
                            setTimeout(e=>{
                                //vue-resource加载数据存在于data.body中
                               var listNum=rea.body.allData.slice(numData*6,numData*6+6);
                                //详细显示页面数据来源
                               this.allData.detailedData=listNum.slice(typeData,typeData+1)[0];
                                console.log('detailed:'+this.allData);
                                this.loading=false;
                                console.log("mainshow111:"+this.allData.mainShow)
                                //this.allData.mainShow=true;
                            },700);
                        });
                    });
                }else{
                    this.$nextTick(e=>{
                        this.loading=true;
                        console.log('nextick start');
                        this.allData.mainShow=false;
                        setTimeout(e=>{
                            this.$http.get("static/data/group-"+listData+".json").then(rea=>{
                                var length = rea.body.allData.length;
                                this.allData.showData=rea.body.allData.slice(0,length);
                                console.log("get reource:"+numData,"length:"+length);
                                this.loading=false;
                                this.allData.mainShow=true;
                            });
                        },700);
                    });
                }
            }
        }

    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.div-inline{
  display:inline-block;
}
.app-loading{
    padding-top: 300px;
    position: fixed;
    height: 500px;
    width: 100%;
    left: 0;
    top:0;
}
</style>
