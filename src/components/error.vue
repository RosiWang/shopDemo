<template>
	<div style="margin-top: 150px;">
		<h1 style="text-align: center;">未知的404T_T</h1>
		<div style="width: 150px;margin: 50px auto;">
			<button v-on:click="go(0)" class="btn btn-primary">首页</button>
			<button v-on:click="go(1)" class="btn btn-primary">第一页</button>
		</div>
	</div>
</template>
<script>
	import router from '.././router'
	export default{
		methods:{
			go(num){
				num==0?router.push("/item/0/0"):router.push("/item/1/0");
				console.log("error back go path:",this.$route.path)
			}
		}
	}
</script>
<style></style>