<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div style='height:700px;padding-top:50px'>
        <div>
            <img v-bind:src='routerNesting.detailedData.src' style='display:block;margin:0 auto;width:500px'>
            <br>
            <h2 v-text='routerNesting.detailedData.title'></h2>
            <p>{{routerNesting.detailedData.content}}</p>
            <button v-on:click='back' class='btn btn-success'>返回</button>
        </div>
    </div>
</template>
<script>
    import router from '.././router'
    export default{
        props:["routerNesting"],
        methods:{
            back(){
                console.log(this.$route.path.slice(0,9));
                router.push(this.$route.path.slice(0,9));
            }
        }
    }
    console.log('detailPage');
</script>
<style></style>