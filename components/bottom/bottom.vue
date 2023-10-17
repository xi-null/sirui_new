<template>
	<view class="bottom" @tap.stop="stop">
		<button open-type="share" >
			<u-icon name="share-square" size="40rpx"></u-icon>
		</button>
		<u-icon name="star-fill" size="40rpx" @click="noCollect" v-if="this.value.isLike=='true'||this.value.isLike"></u-icon>
		<u-icon name="star" size="40rpx" @click="collect" v-else></u-icon>	         		
		<button>
			<u-icon name="download" size="40rpx"></u-icon>
		</button>
		
	</view>
</template>

<script>
	import {like,noLike} from '/request/api.js'
	export default {
		name:"bottom",
		props:['item'],
		data() {
			return {
				value:{
				
					userId:'',
					orderId:''
				}
			};
		},   
		watch:{
			
		},
		onShareAppMessage(res){
			console.log("res")
			return {  
				title:'思锐直播',
				path:`/pages/detail/detail?userId=${this.value.userId}&orderId=${this.value.orderId}`,
			}
		},
		updated(){
			this.value = this.item
			console.log(Boolean(this.value.isLike),this.value.isLike)
		},
		methods:{
		  async collect(){
			
			  const res = await like(this.item)
			  uni.showToast({
				  title:res.errMsg  
			  })
			  this.$emit('refresh')
		  },
		  async noCollect(){
			  const res = await noLike(this.item)
			  uni.showToast({
			  	title:res.errMsg
			  })
			  this.$emit('refresh')
		  }
		},
	}
</script>

<style lang="scss" scoped> 
.bottom{
	width: 90vw;
	display: flex;
	justify-content: space-between;
	font-size: 30rpx;
	margin: auto;
	
	padding-top: 20rpx;
	padding-bottom: 20rpx;
	
	button{
		padding: 0;
		margin: 0;
	}
}

</style>