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
			this.src=`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/index_detail_1.html?list=${option.list}`
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
