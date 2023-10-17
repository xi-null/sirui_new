<template>
	<view>
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/aboutUs.html?userId=${uni.getStorageSync('user').id}`
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
