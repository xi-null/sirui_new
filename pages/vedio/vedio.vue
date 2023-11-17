<template>
	<view class="vedio_wra">
		<!-- <list :isEnd="false" :list="nowList" @getMore="getMore" v-if="nowList.length>0"></list>
		<u-empty mode="list" icon="http://cdn.uviewui.com/uview/empty/car.png" v-else>
		</u-empty> -->
		
	<!-- 	<web-view :src="url" @message="message"></web-view> -->
		<web-view  :src="src"></web-view>

	<!-- <web-view src="http://127.0.0.1:5500/video.html"></web-view> -->

	</view>
</template>

<script>
	import list from '../../components/list/list.vue'
	import {
		getNowList
	} from '../../request/api.js'
	export default {
		components: [list],
		data() {
			return {
				// nowList: [],
				// page: {
				// 	pageNum: 1,
				// 	pageSize: 5
				// },
				src:`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/video_new1.html?userId=${uni.getStorageSync('user').id}`,
				// src:`http://42.192.151.166:8082/sirui/video_1.html?userId=${uni.getStorageSync('user').id}`
			}
		},
		onShareAppMessage(res){
				
			return {
				title: '思锐AI',
				path: `/pages/vedio/vedio`,
			}
		},
		onLoad(item) {
			console.log(item.scene)
			const orderId = item.scene
			const obj = {
						 projectId:uni.getStorageSync('project').id,
						 userId:uni.getStorageSync('user').id,
						 orderId
					 }
					 this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/video_new1.html?query=${encodeURIComponent(JSON.stringify(obj))}`
					 console.log(this.src,11)
			

			wx.getSystemInfo({
				  success: (res) => {
				  	// windows | mac为pc端
				  	// android | ios为手机端
				    console.log('getSystemInfo,', res.platform);
					if(res.platform=='android'||res.platform=='ios'){
						uni.switchTab({
							url:'/pages/now/now'
						})
					
						
					}
				  }
				});
			// this.src=`http://127.0.0.1:5500/video2.html?userId=${uni.getStorageSync('user').id}`
			// this.getData()
			// console.log(this.nowList,"Sdf")
		},

		methods: {
		// 	async getData() {
		// 		const result = await getNowList(this.page)

		// 		this.nowList = result.item.playList.map(item => {
		// 			return {
		// 				url: item.playUrl,
		// 				title: `${item.teamA}-----vs------${item.teamB}`,
		// 				time: `${this.getdate(item.startTime)}----${this.getdate(item.stopTime)}`,
		// 				userId: item.openid,
		// 				orderId: item.id,
		// 			}
		// 		})
		// 		console.log(this.nowList, "this.nowListthis.nowList")
		// 	},
		// 	getdate(date) {

		// 		var now = new Date(date * 1000),

		// 			y = now.getFullYear(),

		// 			m = now.getMonth() + 1,

		// 			d = now.getDate();

		// 		return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0,
		// 			8);

		// 	},

		// 	async getMore() {
		// 		this.page.pageNum++
		// 		const result = await getNowList(this.page)
		// 		const list = result.item.playList.map(item => {
		// 			return {
		// 				url: item.playUrl,
		// 				title: `${item.teamA}-----vs------${item.teamB}`,
		// 				time: `${this.getdate(item.startTime)}----${this.getdate(item.stopTime)}`
		// 			}
		// 		})
		// 		this.list = [...this.list, ...list]

		// 	}

		// },
		// async onPullDownRefresh(){
		// 	console.log("开始")
		// 	this.getData()
		// 	setTimeout(function () {
		// 		console.log("结束")
		// 		uni.stopPullDownRefresh();
		// 	}, 1000);
			// reflashWebView(){
			// 	let time = (new Date()).getTime();
			// 	console.log(time)
			// 	this.src=`https://service.ruisport.cn/h5/video.html?time=${time}`
			// }
		}
	}
</script>

<style lang="scss" scoped>
	.vedio_wra {
		height: 100vh;
		width: 100vw;

	}
</style>
