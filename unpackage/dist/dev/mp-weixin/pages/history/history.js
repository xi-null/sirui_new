"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../request/api.js");
const _sfc_main = {
  data() {
    return {
      // orderList:[],
      // pageNum:1,
      // placeMap: null,
      src: `https://service.ruisport.cn/h5/order_2.html?userId=${common_vendor.index.getStorageSync("user").id}`
      // src:`http://127.0.0.1:5500/order.html?userId=${uni.getStorageSync('user').id}`
    };
  },
  onShareAppMessage(res) {
    return {
      title: "思锐AI",
      path: `/pages/vedio/vedio`
    };
  },
  onLoad() {
    const obj = {
      projectId: common_vendor.index.getStorageSync("project").id,
      userId: common_vendor.index.getStorageSync("user").id
    };
    this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/new/order_new_1.html?query=${encodeURIComponent(JSON.stringify(obj))}`;
    console.log(this.src, 11);
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
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.src,
    b: common_vendor.o((...args) => _ctx.message && _ctx.message(...args)),
    c: common_vendor.o((...args) => _ctx.message && _ctx.message(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b2d018fa"], ["__file", "D:/sirui_new_plus/sirui_new/pages/history/history.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
