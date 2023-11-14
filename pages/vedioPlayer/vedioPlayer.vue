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
			// this.src=`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/videoDetail_4.html?list=${option.list}`
			this.src=`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/new/liveDetail_new_1.html?list=${option.list}`
			// this.src=`http://127.0.0.1:5500/videoDetail.html?list=${option.list}`2
			console.log(this.src)
		},
		onShareAppMessage(res){
				
			return {
				title: '思锐AI',
				path: `/pages/vedio/vedio`,
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
