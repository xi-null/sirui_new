<template>
	<view class="wra" @click=toDetail>
	<view class="btn" >
		<view class="icon"><img src="../../static/share.png" alt="" style="width: 24px;height: 24px;"></view>
		<view class="messgae">点击观看本场比赛视频</view>
	</view>
	<view class="item">
		<view class="first">
			<view class="place">
				<view class="icon"><img src="../../static/index_place.png" alt="" style="width: 20px;height: 20px;"></view>
				<view class="projectName">{{item.place}}</view>
			</view>
			
			<view class="time">{{item.date}}</view>
		</view>
		<view class="center">
			{{item.gameName}}
		</view>
		<view class="team">
			<div class="teamName">{{item.teamA}}</div>
			<div class="vs">&nbspVS&nbsp</div>
			<div class="teamName">{{item.teamB}}</div>
		</view>
		<view class="detailTime">
			{{`${item.startTime}-${item.endTime?item.endTime:''}`}}
		</view>
		<view class="status">{{item.status}}</view>
	</view>
	</view>
</template>

<script>
	import {getDetail} from '../../request/api.js'
	export default {
		data() {
			return {
				item:{
					status:''
				}
			}
		},
		onLoad(option){
			console.log(option.list)
			this.item = JSON.parse(decodeURIComponent(option.list))
			console.log(this.item)
			
			if(Reflect.has(this.item,'endTime')){
				const startTime = Date.parse(this.item.date+' '+this.item.startTime)
				const endTime = Date.parse(this.item.date+' '+this.item.endTime)
				const now = Date.now()
				if(now-startTime>0&&now-endTime<0){
					this.item.status='正在直播'
				}
				if(now-startTime<0){
					this.item.status = '即将直播'
				}
				if(endTime-now<0){
					this.item.status='赛事回放'
				}
			}
			else{
				this.item.status='赛事回放'
			}
			
		
			
		
			uni.showToast({
				title:'请点击右上角分享'
			})
		},
		// 分享到朋友圈
			onShareTimeline() {
				return {
					title: this.item.title.replaceAll('-',' '),
					path: `/pages/vedioDetail/vedioDetail?list=${encodeURIComponent(JSON.stringify(this.item))}`,
					
				};
			},
			onShareAppMessage(res){
					
				return {
					title: this.item.title.replaceAll('-',' '),
					path: `/pages/vedioDetail/vedioDetail?list=${encodeURIComponent(JSON.stringify(this.item))}`,
				}
			},
		methods: {
			toDetail(){
				uni.navigateTo({
					url:`/pages/vedioPlayer/vedioPlayer?list=${encodeURIComponent(JSON.stringify(this.item))}`
				})
			}
		},
		
	}
</script>

<style lang="scss" scoped>
.wra{
		width: 100vw;
		height: 100vh;
		background-color: #181829FF;
		.btn{
			
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
				color: #FFFFFF;
				line-height: 44rpx;
				-webkit-background-clip: text;
			}
			
			

		}
		.item{
			margin-left: 24rpx;
			width: 702rpx;
			height: 418rpx;
			background: #3B3B47;
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			opacity: 1;
			border-left: 8rpx solid #584EF8;
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
						color: #FFFFFF;
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
					color: #D7D7D7;
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
				color: #FFFFFF;
				line-height: 36rpx;
				-webkit-background-clip: text;
			}
	.team{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 40rpx;
		.teamName{
			height: 36rpx;
			font-size: 36rpx;
			font-family: Source Han Sans CN-Regular, Source Han Sans CN;
			font-weight: 400;
			color: #FFFFFF;
			line-height: 32rpx;
			-webkit-background-clip: text;
		}
		.vs{
			height: 36rpx;
			font-size: 36rpx;
			font-family: DingTalk JinBuTi-Regular, DingTalk JinBuTi;
			font-weight: 400;
			color: #FFFFFF;
			line-height: 32rpx;
			-webkit-background-clip: text;
		}
		
	}
	.detailTime{
		height: 28rpx;
		font-size: 28rpx;
		font-family: Source Han Sans CN-Regular, Source Han Sans CN;
		font-weight: 400;
		color: #D7D7D7;
		line-height: 28rpx;
		display: flex;
		justify-content: center;
		margin-top: 40rpx;
	}
	.status{
		display: flex;
		justify-content: center;
		margin: auto;
		margin-top: 36rpx;
		width: 170rpx;
		height: 40rpx;
		font-size: 38rpx;
		font-family: DingTalk JinBuTi-Regular, DingTalk JinBuTi;
		font-weight: 400;
		
		
		
		color: #FFFFFF;
		line-height: 32rpx;
		text-shadow: 0px 2px 2px rgba(205,205,205,0.25);
		-webkit-background-clip: text;

 background: linear-gradient(#3B3B47FF, #584EF8FF);

	}
		}
}


</style>
