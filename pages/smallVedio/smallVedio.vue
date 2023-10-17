<template>
	<view>
		<web-view :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:'',
			}
		},
		onLoad(){
			this.src=`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/smallVedio_1.html?userId=${uni.getStorageSync('user').id}#wechat_redirect`
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
