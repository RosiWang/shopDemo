<template>
  <div id="app">
    <div>
      <div class="div-inline">
        <input id="topSearchInput"  style="height: 30px;width: 400px" type="text" source=""
               placeholder="在千万商品中搜索" urllink="" actualkey="">
      </div>
      <a   href="#">
       <div  style="background-color: black ;display: inline-block; width: 70px; height: 30px;">
              <img style="padding-top: 8px" src="./assets/search.png" />
       </div>
      </a>

    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return {
      message:"测试测试"
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
</style>
