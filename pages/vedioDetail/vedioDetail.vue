<template>
	<view class="wra" @click=toDetail>
	<view class="btn" >
		<view class="icon"><img src="../../static/share_new.svg" alt="" style="width: 24px;height: 24px;"></view>
		<view class="messgae">点击观看本场比赛视频</view>
	</view>
	<view class="item">
		<view class="new_left">
		                <view class="new_left_gameName">{{item.gameName}}</view>
		                <view class="new_left_date">
		                  <view class="new_left_date_img"><img src="../../static/time_competiton.svg" alt="" style="width:12px;height: 12px;"></view>
		                  <view class="new_left_date_span">{{`${item.date} ${item.startTime}-${item.endTime}`}}</view>
		                </view>
		                <view class="new_left_date">
		                  <view><img src="../../static/environment.svg" alt="" style="width:15px;height: 15px;"></view>
		                  <view class="new_location">{{item.place}}</view>
		                </view>
		            </view>
		            <view class="new_right">
		              <view class="right_new_top_right">
		                <view class="team">
		                  <view class="title">主队</view>
		                  <view class="teamName">
		                    <view class="teamName_inner">{{item.teamA}}</view>
		                  </view>
		              </view>
		              <view class="vs_box">
		                <view class="vs">vs</view>
		                <view class="score_new">{{`${item.scoreBoard.scoreA} - ${item.scoreBoard.scoreB}`}}</view>
		              </view>
		              <view class="team">
		                <view class="title">客队</view>
		                <view class="teamName">
		                  <view class="teamName_inner">{{item.teamB}}</view>
		                </view>
		            </view>
		              </view>
		            </view>
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
		background-color: #FFF;
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
				color: #FF7875;
				line-height: 44rpx;
				-webkit-background-clip: text;
			}
			
			

		}
	
		
		.item{
			width: 95vw;
			margin: auto;
			margin-top: 5rpx;
			background-color: #fff;
			display: flex;
			align-items: center;
			box-shadow:2px 2px 4px #F9F9F9;
			 min-height: 10vh;
			 .new_left{
				 width: 50%;
				 .new_left_gameName{
					   overflow: hidden;
					     white-space: nowrap;
					     overflow: hidden;
					     text-overflow: ellipsis;
				 }
			 }
		}
		.new_left_date{
		    display: flex;
		    margin-top: 5px;
			color: #989898;
			font-size: 10px;
			.new_left_date_span{
				margin-left: 2px;
			}
		  }
		  .new_location{
		      margin-left: 2px;
		    }
		.right_new_top_right{
		    display: flex;
		  }
		  .team{
		      position: relative;
		      top: -11px;
		      width: 65px;
		    }
		    .teamName{
		      width: 55px;
		      display: flex;
		      justify-content: center;
		    }
		    .title{
		      color: #989898!important;
		      font-size: 8px;
		      /* margin-left: 8px; */
		      display: flex;
		      justify-content: center;
		    }
		    .teamName_inner{
		      max-width: 50px;
		      overflow: hidden;
		      white-space: nowrap;
		      overflow: hidden;
		      text-overflow: ellipsis;
		    }
		    .score_new{
		      color: #FF7875;
		      position: relative;
		      left: -5px;
}

}
</style>
