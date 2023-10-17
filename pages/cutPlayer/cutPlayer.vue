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
			
			this.src=`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/cutPlayer_2.html?list=${option.list}`
			console.log(this.src)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
