<template>
<view class="wra" @click=toDetail>
<view class="btn" >
	<view class="icon"><img src="../../static/share_new.svg" alt="" style="width: 24px;height: 24px;"></view>
	<view class="messgae">点击观看本场比赛视频</view>
</view>
<view class="item">
	<view class="first">
		<view class="place">
			<view class="icon"><img src="../../static/index_place.png" alt="" style="width: 20px;height: 20px;"></view>
			<view class="projectName">{{item.projectName}}</view>
		</view>
		
		<view class="time">{{item.startTime}}</view>
	</view>
	<view class="center">
		{{item.gameName}}
	</view>
	<view class="bottom">
		<view class="team">{{item.team}}</view>
		<view class="title" >{{item.title}}</view>
		
	</view>
</view>
</view>
 
</template>

<script>
		import {getDetail,getPlaceList} from '../../request/api.js'
	export default {
		data() {
			return {
				item:{}
			}
		},
		async onLoad(option){
			
			let item = JSON.parse(decodeURIComponent(option.list))
			
		
			const detail = await getDetail(item.orderId)
			const projectId = detail.item.order.projectId
			const place = await getPlaceList()
			const placeList = place.item.project
			const nowPlace = placeList.find(data=>data.projectId==projectId)
			console.log(nowPlace)
			 const str = item.title.split(' ')
			 console.log(str)
			 item.team = str[0]
			 item.title = str[1]+' '+str[2]+' '+str[3]
			 if(item.title.includes('undefined')){
				 item.title=str[1]?str[1]:item.team
			 }
			 item.projectName = nowPlace.name
			 this.item = item
			 console.log(this.item)
			 	
			 
			 
			
			uni.showToast({
				title:'请点击右上角分享'
			})
			console.log(this.item.title)
		},
		// 分享到朋友圈
			onShareTimeline() {
				return {
					title: this.item.title.replaceAll('-',' '),
					path: `/pages/cutShare/cutShare?list=${encodeURIComponent(JSON.stringify(this.item))}`,
					
				};
			},
			onShareAppMessage(res){
					
				return {
					title: this.item.title.replaceAll('-',' '),
					path: `/pages/cutShare/cutShare?list=${encodeURIComponent(JSON.stringify(this.item))}`,
				}
			},
		methods: {
			toDetail(){
				uni.navigateTo({
					url:`/pages/cutPlayer/cutPlayer?list=${encodeURIComponent(JSON.stringify({...this.item,userId:uni.getStorageSync('user').id}))}`
					// url:`/pages/cutPlayer/cutDetail?orderId=${this.item.orderId}`
				})
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	.wra{
		width: 100vw;
		height: 100vh;
		background-color: #ffF;
		overflow: hidden;
		
		.btn{
			margin-top: 0vh;
			height: 44rpx;
			display: flex;
			margin-left: 30rpx;
			padding-top: 16rpx;
			margin-bottom: 28rpx;
			
			.icon{
				margin-right:16rpx;
			}
			.messgae{
				font-size: 32rpx;
				font-family: Inter-Regular, Inter;
				font-weight: 400;
				color: #FF7875;
				line-height: 44rpx;
				-webkit-background-clip: text;
			}
			
			

		}
		.item{
			margin-left: 24rpx;
			width: 702rpx;
			height: 345rpx;
			background: #fff;
		box-shadow:2px 2px 4px #F9F9F9;
			opacity: 1;
			overflow: hidden;
			.first{
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 32rpx;
				.place{
					display: flex;
					align-items: center;
					margin-left: 32rpx;
					.projectName{
						font-size: 28rpx;
						font-family: Source Han Sans CN-Regular, Source Han Sans CN;
						font-weight: 400;
						color: #000;
						height: 28rpx;
						line-height: 28rpx;
						-webkit-background-clip: text;
					}
				}
				.time{
					margin-right: 32rpx;
					height: 28rpx;
					font-size: 28rpx;
					font-family: Source Han Sans CN-Regular, Source Han Sans CN;
					font-weight: 400;
					color: #000;
					line-height: 28rpx;
					-webkit-background-clip: text;
				}
				
			}
			.center{
				display: flex;
				justify-content: center;
				margin-top: 46rpx;
				height: 36rpx;
				font-size: 36rpx;
				font-family: Source Han Sans CN-Bold, Source Han Sans CN;
				font-weight: bold;
				color: #000;
				line-height: 36rpx;
				-webkit-background-clip: text;
			}
			.bottom{
				margin-top: 40rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.team{
					font-size: 36rpx;
					font-family: Source Han Sans CN-Bold, Source Han Sans CN;
					font-weight: bold;
				color: #000;
					line-height: 36rpx;
					-webkit-background-clip: text;
				}
				.title{
					margin-top: 40rpx;
					font-size: 28rpx;
					font-family: Source Han Sans CN-Regular, Source Han Sans CN;
					font-weight: 400;
					color: #000;
					line-height: 28rpx;
					-webkit-background-clip: text;
					margin-bottom: 32rpx;
				}
			}
		}
}

</style>
