<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div>
        <div>
            <p>{{routerData.detailedData.title}}</p>
            <img v-bind:src="routerData.detailedData.src"/>
            <br>
            <button v-on:click="back">返回</button>
            <button v-on:click="goDetail">详细信息</button>
        </div>
        <router-view v-bind:router-detail="routerData"></router-view>
    </div>
</template>
<script>
    import router from '.././router'
    export default{
        props:["routerData"],
        methods:{
            back(){
                router.push(this.$route.path.slice(0,9));
            },
            goDetail(){
                console.log('goto detail page',this.$route.path);
                router.push({path:this.$route.path+"/con",params:{userId:'detail'}});
                console.log('goto detail page2222',this.$route.path);
            }
        }
    }
    console.log('detailPage');
</script>
<style></style>