<template>
	<view>
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//src:`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/feedBack.html?userId=${uni.getStorageSync('user').id}`
				src:`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/new/feedBack_new_1.html?userId=${uni.getStorageSync('user').id}`
			}
		},
		onLoad(option){
			console.log(this.src)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
