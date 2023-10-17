<template>
	<view>
		 <web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:''
			}
		},
		onLoad(option){
			console.log(option)
			this.src=`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/cutDetail_2.html?orderId=${option.orderId}&userId=${option.userId}`
			console.log(this.src)
		},
	
		methods: {
			
		}
	}
</script>

<style>

</style>
