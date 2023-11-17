<template>
	<view>
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/refund_1.html?userId=${uni.getStorageSync('user').id}`
			}
		},
		onLoad() {
		const obj = {
					 projectId:uni.getStorageSync('project').id,
					 userId:uni.getStorageSync('user').id
				 }
				 // this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/refund_2.html?query=${encodeURIComponent(JSON.stringify(obj))}`
				 this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/new/refund_new_1.html?query=${encodeURIComponent(JSON.stringify(obj))}`
				 console.log(this.src,11)
		
				 
				},
		methods: {
			
		}
	}
</script>

<style>

</style>
