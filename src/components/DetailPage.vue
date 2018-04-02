<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div style='height:700px;padding-top:50px'>
        <div>
           <p>{{test}}</p>
        </div>
    </div>
</template>
<script>
    import router from '.././router'
    export default{
        props:["routerDetail"],
        data(){
            return {
                test:"556666666"
            }
        }

    }
    console.log('detailPage');
</script>
<style></style>