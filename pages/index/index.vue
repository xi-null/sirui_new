<template>
	<view class="content">
		
	<!-- 	<list :isEnd = "true" :list="orderList" v-if="orderList.length>0" @refresh="getData()"></list>
		<u-empty
		        mode="list"
		        icon="http://cdn.uviewui.com/uview/empty/car.png"
				v-else
		>
		</u-empty> -->
		<web-view :src="src"  @message="message" @onPostMessage='message' :fullscreen="false" style="width: 200px;height: 500px;"></web-view>
		
	</view>
</template>

<script>
	import('../../request/request.js')
	import list from '../../components/list/list.vue'
	import {collectList,getCollectListByUserId, getOrderListByUserId} from '../../request/api.js'
	export default {
		components:[list],
		data() {
			return {
				nav:true,
				src:`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/index_new1.html?userId=${uni.getStorageSync('user').id}`,
				// src:`http://127.0.0.1:5500/index2.html?userId=${uni.getStorageSync('user').id}`,
				url:''
				
			}
		},
		 onLoad() {
	 const obj = {
			 projectId:uni.getStorageSync('project').id,
			 userId:uni.getStorageSync('user').id
		 }
		 this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/index_new1.html?query=${encodeURIComponent(JSON.stringify(obj))}`
		 console.log(this.src,11)
		 wx.getSystemInfo({
		 	  success: (res) => {
		 	  	// windows | mac为pc端
		 	  	// android | ios为手机端
		 	    console.log('getSystemInfo,', res.platform);
		 		if(res.platform=='android'||res.platform=='ios'){
		 			uni.switchTab({
		 				url:'/pages/vedio/vedio'
		 			})
		 		
		 			
		 		}
		 	  }
		 	});
		
		 
		},
	
	onShareAppMessage(res){
			
		return {
			title: '思锐AI',
			path: `/pages/index/index`,
		}
	},
	
		methods: {
			message(item){
				console.log(item.target.data)
			},
				
			
			

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

</style>
