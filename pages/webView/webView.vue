<template>
	<view>
		<web-view :src="src" @message="message"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					src:'',
					
			}
		},
		methods: {
		
					


		},
		onLoad(options) {
			console.log(options)
				this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/index_detail_1.html?url=${options.url}&userId=${options.userId}#wechat_redirect`
			
				
					
					
	}
	}
</script>

<style>

</style>
