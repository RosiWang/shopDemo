<template>
  <div style="padding-top: 16px">
    <!--导航菜单-->
    <nav class='navbar navbar-default'>
      <div class='container' style="padding: 0;">
        <div class='collapse navbar-collapse' style="padding: 0;">
          <ul class="nav navbar-nav userNav">
            <li><a v-bind:class="{activeBg:isActive==0}" v-on:click='link(0)'>首页</a></li>
            <li><a v-bind:class="{activeBg:isActive==1}" v-on:click='link(1)'>页面一</a></li>
            <li><a v-bind:class="{activeBg:isActive==1}" v-on:click='link(2)'>页面二</a></li>
            <li><a v-bind:class="{activeBg:isActive==1}" v-on:click='link(3)'>页面三</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view v-bind:router-nesting='routerData'></router-view>
  </div>

</template>
<script>
    import router from '.././router'
    export default{
        props:["routerData"],
        data(){
            return {
                isActive:this.$route.path.slice(6,7)
            }
        },
        methods:{
            go(obj,index){
                router.push({path:this.$route.path+"/con",query:{type:index}});
            },
            link(num){
                var listNum=this.$route.path.slice(6,7);
                if(listNum!=num){
                    router.push("/item/"+num+"/0");
                    this.isActive=this.$route.path.slice(6,7);
                }
            }
        },
        filters:{
            more(value){
                var newMessage=value.slice(0,40)+"........点击查看更多";
                return newMessage;
            }
        }
    }
    console.log('navigationBar');
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
