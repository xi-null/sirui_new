<template>
	<view>
		<web-view :src="src"></web-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/afterCut_1.html?userId=${uni.getStorageSync('user').id}#wechat_redirect`,
			}
		},
		onLoad() {
		const obj = {
					 projectId:uni.getStorageSync('project').id,
					 userId:uni.getStorageSync('user').id
				 }
				 //线上是afterCut2
				 this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/afterCut_2.html?query=${encodeURIComponent(JSON.stringify(obj))}`
				 console.log(this.src,11)
		
				 
				},
		methods: {
			
		}
	}
</script>

<style>

</style>
