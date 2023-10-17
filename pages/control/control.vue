<template>
	<view class="control">
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
			if(option.overlay=='2'){
				this.src=`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/bgBs_2.html?orderId=${option.orderId}`
				return 
			}
			this.src=`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/bg_1.html?orderId=${option.orderId}`
			// this.src=`http://127.0.0.1:5500/bg.html?orderId=${option.orderId}`
		},
		onShareAppMessage(res){
				
			return {
				
				path: `/pages/control/control?orderId=${option.orderId}`,
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
