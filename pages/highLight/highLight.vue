<template>
	<view>
		<!-- 赛事集锦页面 -->
		 <web-view v-if="src" :src="src"></web-view>
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
			console.log('option',option)
			// this.src=`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/cutDetail_2.html?orderId=${option.orderId}&userId=${option.userId}`
			this.src=`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/new/highLight_new_1.html?orderId=${option.orderId}&userId=${option.userId}&tabIndex=${option.tabIndex}&vIndex=${option.vIndex}`
			console.log(this.src)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
