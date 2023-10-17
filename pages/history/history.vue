<template>
	<view class="main">
		<web-view :src="src"  @message="message" @onPostMessage='message'></web-view>
		<!-- <view class="backgroung-color"></view>
		
		<view class="orderList" v-if="orderList.length>0" >
			<u-list @scrolltolower="scrolltolower" >
						<u-list-item
							v-for="(item, index) in orderList"
							:key="index"
							class="item">
								<view class="top">
									<image class="image" src="/static/playground.png" mode="scaleToFill" ></image>
									<view class="name">							
										{{item.place}}
									</view>
									<view :class="item.status?'doing':'done'">
										{{item.status?"进行中":"已完成"}}
									</view>
								</view>
								<view class="center" style="color:#131313">
									<view class="teamA">
										{{item.teamA}}
									</view>
									<view class="vs">
										vs
									</view>
									<view class="teamB">
										{{item.teamB}}
									</view>
								</view>
								<view class= "time">
									 {{item.startTime}}~{{item.stopTime}}
								</view>
								<view class="footer">
									<view class="total">
										价格：￥{{item.total}}
									</view>
									<view class="" v-if="item.status">
										<u-button  class="stop" type="primary" :plain="true" text="停止直播" size="small" color="#e88f16" @click="stopLiving(item.id)"></u-button>
									</view>
								</view>
							
						</u-list-item>
					</u-list>
		</view>
		
		<view class="empty" v-else>
			您暂时没有订单~
		</view>-->
		
	</view> 
	
</template>

<script>
	import {getOrderListByUserId,getPlaceList,stopLiving} from '../../request/api.js'
	export default {
		data() {
			return {
				// orderList:[],
				// pageNum:1,
				// placeMap: null,
				src:`https://service.ruisport.cn/h5/order_2.html?userId=${uni.getStorageSync('user').id}`,
				// src:`http://127.0.0.1:5500/order.html?userId=${uni.getStorageSync('user').id}`
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
			 this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/order_3.html?query=${encodeURIComponent(JSON.stringify(obj))}`
			 console.log(this.src,11)
	
			 
			},
		methods: {
		// 	 async getOrdersListByUser(){
		// 		const user_id =uni.getStorageSync('user').id
		// 		console.log("?")
		// 		getOrderListByUserId(user_id,this.pageNum,20).then(res=>{
		// 			res.item.order.map((item)=>{
		// 				return {
		// 					...item,
		// 					startTime: this.getTime(item.startTime),
		// 					stopTime:this.getTime(item.stopTime),
		// 					place: this.placeMap.get(item.projectId),
		// 					total:(item.total/100 ).toFixed(2),
		// 					status:this.judgeStatus(item.stopTime)
		// 				}
		// 			});
		// 		})
		// 		console.log("???")
				
		// 	},
		// 	// 时间戳转化时间格式
		// 	getTime(timestamp){			
		// 		var date = new Date(Number(timestamp)*1000); //直接用 new Date(时间戳) 格式转化获得当前时间			
		// 		// var times = time.toLocaleDateString().replace(/\//g,"-")+" "+time.toTimeString().substr(0,8); 
		// 		var Y = date.getFullYear() ;
		// 		var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) ;
		// 		var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
		// 		var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) ;
		// 		var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
		// 		return Y + '-'+ M + '-'+ D +" "+ h+ ':' + m ; //时分秒可以根据自己的需求加上
		// 		// return times
		// 	},
		// 	// 滚动到底部触发事件
		// 	 async scrolltolower(){
		// 		 const user_id =uni.getStorageSync('user').id
		// 		const result = await getOrderListByUserId(user_id,++this.pageNum,20)
		// 		if(result.item.order.length==0){
		// 			uni.showToast({
		// 				title: '已经到底了~',
		// 			});
		// 			return
		// 		}
		// 		const tempList = result.item.order.map((item)=>{
		// 			return {
		// 				...item,
		// 				startTime: this.getTime(item.startTime),
		// 				stopTime:this.getTime(item.stopTime),
		// 				place: this.placeMap.get(item.projectId),
		// 				total:(item.total/100 ).toFixed(2),
		// 				status:this.judgeStatus(item.stopTime)
		// 			}
		// 		});
		// 		this.orderList.push(...tempList)
		// 	},
		// 	// 获取场地信息
		// 	async getPlaceList() {
		// 		getPlaceList().then(res=>{
		// 			let map = new Map();
		// 			res.item.project.forEach(item => {
		// 				map.set(item.id, item.name)
		// 			})
		// 			this.placeMap = map;
		// 		});
		// 	},
		// 	// 停止直播
		// 	async stopLiving(id){
		// 		const res = await stopLiving(id)
		// 		if(res.success){
		// 			this.pageNum=1;
		// 			this.getOrdersListByUser()
		// 			uni.showToast({
		// 				title:"成功停止"
		// 			})
		// 		}
		// 	},
		// 	// 判断是否订单已经完成
		// 	judgeStatus(end){
		// 		let time = (new Date()).getTime()/1000;
		// 		if(time<end){
		// 			return true
		// 		}else{
		// 			return false
		// 		}
		// 	}
		// },
		// async onPullDownRefresh(){
		// 	this.getOrdersListByUser()
		// 	setTimeout(function () {
		// 		uni.stopPullDownRefresh();
		// 	}, 1000);
		}
	}
</script>
// <style lang="scss" scoped>
// 	$color:#e88f16;
// .main{
// 	box-sizing:border-box;
// 	padding:20rpx 20rpx 0 20rpx ;
// 	.backgroung-color{
// 			position: fixed;
// 			top: 0;
// 			left: 0;
// 			right: 0;
// 			bottom: 0;
// 			background-color: #f4f4f4; // 这个就是你想设置的背景颜色
// 			z-index: -1;
// 		}
// 	.orderList{
// 		height: calc(100vh - 40rpx) !important;
// 		.item{
// 			margin:20rpx;
// 			padding: 20rpx;
// 			box-sizing:border-box;
// 			border-radius: 10rpx;
// 			background-color: #fff;
// 			.top{
// 				width: 100%;
// 				display: flex;
// 				justify-content: space-between;
// 				align-items: center;
// 				.name{
// 					width: 75%;
// 					overflow: hidden; //超出的文本隐藏
// 					text-overflow: ellipsis; //溢出用省略号显示
// 					white-space: nowrap;  // 默认不换行；
					
// 				}
// 				.image{
// 					width:50rpx;
// 					height: 50rpx;
// 				}
// 				.doing{
// 					color:$color;
// 				}
// 				.done{
// 					color:#ccc;
// 				}
// 			}
// 			.center{
// 				font-size: 17px;
// 				margin:20rpx ;
// 				display: flex;
// 				justify-content: center;
// 				.teamA{
					
// 					overflow: hidden; //超出的文本隐藏
// 					display: -webkit-box;
// 					-webkit-line-clamp: 2; // 超出多少行
// 					-webkit-box-orient: vertical;
// 					max-width: 40%;
// 					height: 100%;
// 				}
// 				.vs{
// 					margin: 0 40rpx;
// 					vertical-align: middle;
// 				}
// 				.teamB{
// 					overflow: hidden; //超出的文本隐藏
// 					display: -webkit-box;
// 					-webkit-line-clamp: 2; // 超出多少行
// 					-webkit-box-orient: vertical;
// 					max-width: 40%;
// 					height: 100%;
// 				}
// 			}
// 			.time{
// 				text-align:center;
// 				font-size: 14px;
// 				color:#ccc;
// 			}
// 			.footer{
// 				margin-top: 15rpx;
// 				display: flex;
// 				justify-content: space-between;
// 				align-items: center;
// 				.total{
// 					color:$color;
// 				}
// 				.stop{
// 					border-radius: 10rpx;
// 					width:50rpx;
// 				}
// 			}
			
// 		}
// 	}
// 	.empty{
// 		text-align: center;
// 		color:#ccc;
// 	}
	
// }
// .u-page {
// 		padding: 0;
// 	}

// 	.u-cell-icon {
// 		width: 36rpx;
// 		height: 36rpx;
// 		margin-right: 8rpx;
// 	}

// 	.u-cell-group__title__text {
// 		font-weight: bold;
// 	}
// </style>
