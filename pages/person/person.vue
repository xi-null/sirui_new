<template>
	<view class="person_wra">
		<view class="top">
			<view class="user">
				<view class="avatar">
					<img src="../static/person_user.png" alt="" style="width: 24px;height: 24px;">
				</view>
				<view class="name">{{`微信用户${user.id.substr(0,4)}`}}</view>
			</view>
		</view>
		<view class="main">
			<view class="item" v-for="(item,key) in tabBar" @click="change(item.url)">
				<view class="left">
					<view class="icon"><img :src="item.icon" alt="" style="width: 40rpx;height: 40rpx;"></view>
					<view class="tab">{{item.title}}</view>
				</view>
				<view class="right"><img src="../static/person_right.png" alt="" style="width: 24rpx;height: 24rpx;"></view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:{},
				tabBar:[{
					title:'我的订单',
					url:'/pages/history/history',
					icon:'../../static/person_order.png'
				},
				{
					title:'我的收藏',
					url:'/pages/like/like',
					icon:'../../static/person_like.png'
				},
				{
					title:'我的剪辑',
					url:'/pages/cutVideo/cutVideo',
					icon:'../../static/person_cut.png'
				},
				{
					title:'退款申请',
					url:'/pages/refund/refund',
					icon:'../../static/person_refund.png'
				},
				{
					title:'反馈问题',
					url:'/pages/feedBack/feedBack',
					icon:'../../static/person_feedBack.png'
				},
				{
					title:'联系我们',
					url:'/pages/aboutUs/aboutUs',
					icon:'../../static/person_aboutUs.png'
				},
				
				
				]
				
			}
		},
		methods:{
			change(url){
				 uni.navigateTo({
				 	url
				 })
			}
		},
		onLoad(){
		
			console.log(uni.getStorageSync('user'),uni.getStorageSync('userInfo'))
			this.user = uni.getStorageSync('user')
		
		},
		onShareAppMessage(res){
				
			return {
				title: '思锐AI',
				path: `/pages/vedio/vedio`,
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	.person_wra{
		width: 100vw;
		height: 100vh;
		background-color: #FFF;
		
		.top{
			.user{
				width: 686rpx;
				height: 144rpx;
				background: #FFCCC7;
				border-radius: 20rpx 20rpx 20rpx 20rpx;
				opacity: 1;
				
				display: flex;
				align-items: center;
				margin: auto;
				position: relative;
				top: 100rpx;
				.name{
					
					font-size: 28rpx;
					font-family: Source Han Sans CN-Regular, Source Han Sans CN;
					font-weight: 400;
					color: #FFFFFF;
					line-height: 28rpx;
					-webkit-background-clip: text;
					margin-left: 48rpx;
				}
				.avatar{
					width: 96rpx;
					height: 96rpx;
					background-color: #D4E3FCFF;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-left: 48rpx;
				}
			}
			
		
		}
		.main{
		width: 689rpx;
		height: 650rpx;
		opacity: 1;
		margin: auto;
			margin-top: 125rpx;
			
			.item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 686rpx;
				height: 92rpx;
				margin: auto;
				box-shadow: 8rpx 8rpx 8rpx 0rpx rgba(0,0,0,0.04);
				margin-top: 30rpx;
				.left{
					display: flex;
					align-items: center;
					.tab{
						font-size: 28rpx;
						font-family: Source Han Sans CN-Regular, Source Han Sans CN;
						font-weight: 400;
						color: #000000;
						line-height: 28rpx;
						-webkit-background-clip: text;
						margin-left: 12rpx;
					}
					.icon{
						margin-left: 32rpx;
					}
				}
			}
		}
	}

</style>
