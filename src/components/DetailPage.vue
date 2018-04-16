<template >
    <div style="margin-top: 60px;">
        <h1 style="text-align: center;">详细信息在这里</h1>
        <div>
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
                router.push("/item/0/0");
            }
        }
    }
    console.log('detailPage');
</script>
<style></style>