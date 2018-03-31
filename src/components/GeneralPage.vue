<template>
    
</template>

<script>
    export default{
        props:["routerData"],
        data(){
            return {
                isActive:this.$route.path.slice(6,7)
            }
        }
    }
    console.log('generalPage');
</script>

<style scoped>

</style>