<template>
	<view class="person_wra">
		<view class="top">
			<view class="bg">
				<img src="../static/person_bg.png"  alt="" class="img">
			</view>
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
					<view class="icon"><img :src="item.icon" alt="" style="width: 20px;height: 20px;"></view>
					<view class="tab">{{item.title}}</view>
				</view>
				<view class="right"><img src="../static/person_right.png" alt="" style="width: 36rpx;height: 36rpx;"></view>
				
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
		background-color: #181829FF;
		
		.top{
		
			
			.bg {
				.img{
					width: 750rpx;
					height:234.27rpx
				}
			}
			.user{
				width: 686rpx;
				height: 192rpx;
				background: #222232;
				border-radius: 24rpx 24rpx 24rpx 24rpx;
				opacity: 1;
				
				position: absolute;
				top: 146rpx;
				left: 50%;
				transform: translate(-50%);
				display: flex;
				align-items: center;
				
				
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
		background: #FFFFFF;
		border-radius: 24rpx 24rpx 24rpx 24rpx;
		opacity: 1;
		margin: auto;
			margin-top: 125rpx;
			
			.item{
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 0.2rpx solid #181829FF;
				width: 622rpx;
				height: 105rpx;
				margin: auto;
			
				
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
				.line{
					width: 614rpx;
					height: 20rpx;
					opacity: 1;
					background-color: #181829FF;
					
				}
			}
		}
	}

</style>
