<template>
	<view>
		
	</view>
</template>

<script>
	import {start,fail,extendSuccess} from '../../request/api.js'
	export default {
		data() {
			return {
				item:{}
			};
		}, 
		onShareAppMessage(res){
				
			return {
				title: '˼��AI',
				path: `/pages/vedio/vedio`,
			}
		},
		onLoad(option){
			console.log(option)
			this.item = option
			console.log(
			{
								    provider: 'wxpay',
									timeStamp: `${this.item.timeStap}`,
									nonceStr: `${this.item.nonceStr}`,
									package: `${decodeURIComponent(this.item.package)}`,
									signType: `${decodeURIComponent(this.item.signType)}`,
									paySign: `${decodeURIComponent(this.item.paySign)}`}
			)
			uni.showLoading({
					title:'加载中'	
			})
		
			uni.requestPayment({
								    provider: 'wxpay',
									timeStamp: `${this.item.timeStap}`,
									nonceStr: `${this.item.nonceStr}`,
									package: `${decodeURIComponent(this.item.package)}`,
									signType: `${decodeURIComponent(this.item.signType)}`,
									paySign: `${decodeURIComponent(this.item.paySign)}`,
									success:   (res)=> {
						                         uni.navigateBack()
									},
								
								})
		}
		
	}
</script>

<style lang="scss">

</style>
