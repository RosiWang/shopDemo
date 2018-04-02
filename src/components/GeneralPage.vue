<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div>
        <p>{{routerData.detailedData.content}}</p>
        <router-view v-bind:router-detail="routerData"></router-view>
    </div>
</template>
<script>
    import router from '.././router'
    export default{
        props:["routerData"]
    }
    console.log('detailPage');
</script>
<style></style>