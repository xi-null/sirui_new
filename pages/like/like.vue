<template>
	<view class="content">
	
	<web-view :src="src"  @message="message" @onPostMessage='message'></web-view>
	</view>
</template>

<script>
	import('../../request/request.js')
	import {getCollectListByUserId,cancleCollectByUser} from '../../request/api.js'
	import player from '@/components/player/player.vue'
	export default {
		data() {
			return {
				orderList:[],
				show:false,
				src:`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/like_new1.html?userId=${uni.getStorageSync('user').id}`,
				list:[
					{
						name:'取消收藏',
						id:0
					}
				],
				show:false,
			}
		},
		onShareAppMessage(res){
				
			return {
				title: '思锐AI',
				path: `/pages/vedio/vedio`,
			}
		},
	onLoad() {
	const obj = {
				 projectId:uni.getStorageSync('project').id,
				 userId:uni.getStorageSync('user').id
			 }
			 this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/like_new1.html?query=${encodeURIComponent(JSON.stringify(obj))}`
			 console.log(this.src,11)
	
			 
			},
		onShareAppMessage(){
			 return new Promise(resolve=>{
				  let url 
				 uni.getClipboardData({
				 	success: function (res) {
				 		 url = res.data
			         console.log(url.split('=')[1])
				 		
				 	},
				 	fail: function (res) {
				 		// 内容获取失败
				 	},
				 });
				 setTimeout(()=>{
					 resolve({
					 					 title:`回放预览`,
					 					 path:`/pages/webView/webView?url=${url.split('=')[1]+'&userId='+uni.getStorageSync('user').id}`
					 })
				 },1000)
				
			 })
			
			
		},
		methods: {
			async getCollectListByUser(){
				const user_id =uni.getStorageSync('user').id
				const result = await getCollectListByUserId(user_id)
				console.log(result)
				this.orderList = result.item.order.map(item=>{
					  return {
						  url:item.replayUrl,
						  title:`${item.teamA}---VS----${item.teamB}`,
						  userId:item.openid,
						  oderId:item.id
					  }
				})
			},
			expend(item){
				Object.assign(this.list[0],item)
				this.show=true
			},
			async selectClick(index){
				const res = await cancleCollectByUser(index.userId,index.oderId)
				if(res.success){
					uni.showToast({
						title: "删除成功",
						icon: 'none'
					});
					await this.getCollectListByUser()
				}
				
			}
		},
		async onPullDownRefresh(){
			console.log("开始")
			this.getCollectListByUser()
			setTimeout(function () {
				console.log("停下来")
				uni.stopPullDownRefresh();
			}, 1000);
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.backgroung-color{
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #f4f4f4; // 这个就是你想设置的背景颜色
			z-index: -1;
		}
		.item{
			background-color: #fff;
			margin-top:20rpx;
			.main{
				margin:20rpx;
				position: relative;
				
				.title {
					font-size: 36rpx;
					// color: #8f8f94;
					margin-bottom:20rpx
				}
				.expend{
					border: 0 !important;
					// position: absolute;
					// right:-20rpx;
					// top:-15rpx;
					margin:0rpx;
					padding-right: 0rpx;
						image{
							width: 60rpx;
							height: 60rpx;
							float: right;
						}
				}
				.player{
					margin-top:20rpx;
					width: 90vw;
					padding-left: 5vw;
					
					
				}
			}
		}
	}
	
</style>
