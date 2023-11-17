"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../request/api.js");
const list = () => "../../components/list/list.js";
const _sfc_main = {
  components: [list],
  data() {
    return {
      // nowList: [],
      // page: {
      // 	pageNum: 1,
      // 	pageSize: 5
      // },
      src: `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/video_new1.html?userId=${common_vendor.index.getStorageSync("user").id}`
      // src:`http://42.192.151.166:8082/sirui/video_1.html?userId=${uni.getStorageSync('user').id}`
    };
  },
  onShareAppMessage(res) {
    return {
      title: "思锐AI",
      path: `/pages/vedio/vedio`
    };
  },
  onLoad(item) {
    console.log(item.scene);
    const orderId = item.scene;
    const obj = {
      projectId: common_vendor.index.getStorageSync("project").id,
      userId: common_vendor.index.getStorageSync("user").id,
      orderId
    };
    this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/video_new1.html?query=${encodeURIComponent(JSON.stringify(obj))}`;
    console.log(this.src, 11);
    common_vendor.wx$1.getSystemInfo({
      success: (res) => {
        console.log("getSystemInfo,", res.platform);
        if (res.platform == "android" || res.platform == "ios") {
          common_vendor.index.switchTab({
            url: "/pages/now/now"
          });
        }
      }
    });
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
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.src
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-365b65b1"], ["__file", "E:/项目/西二外包/sirui_new/sirui_new/pages/vedio/vedio.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
