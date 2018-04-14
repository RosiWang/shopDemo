<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div style='height:700px;padding-top:100px'>
        <div>
           <p>{{rousterInfo.allData.testS}}</p>
            <img v-bind:src="routerInfo.detailedData.src"/>
            <button v-on:click="goHome">返回首页</button>
        </div>
    </div>
</template>
<script>
    import router from '.././router'
    export default{
        props:["routerInfo"],
        methods:{
            goHome(){
                console.log("返回首页");
            }
        }
    }
    console.log('detailPage');
</script>
<style></style>