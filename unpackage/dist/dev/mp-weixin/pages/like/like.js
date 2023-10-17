"use strict";
const common_vendor = require("../../common/vendor.js");
const request_api = require("../../request/api.js");
"../../request/request.js";
const _sfc_main = {
  data() {
    return {
      orderList: [],
      show: false,
      src: `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/like_2.html?userId=${common_vendor.index.getStorageSync("user").id}`,
      list: [
        {
          name: "取消收藏",
          id: 0
        }
      ],
      show: false
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
    this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/like_3.html?query=${encodeURIComponent(JSON.stringify(obj))}`;
    console.log(this.src, 11);
  },
  onShareAppMessage() {
    return new Promise((resolve) => {
      let url;
      common_vendor.index.getClipboardData({
        success: function(res) {
          url = res.data;
          console.log(url.split("=")[1]);
        },
        fail: function(res) {
        }
      });
      setTimeout(() => {
        resolve({
          title: `回放预览`,
          path: `/pages/webView/webView?url=${url.split("=")[1] + "&userId=" + common_vendor.index.getStorageSync("user").id}`
        });
      }, 1e3);
    });
  },
  methods: {
    async getCollectListByUser() {
      const user_id = common_vendor.index.getStorageSync("user").id;
      const result = await request_api.getCollectListByUserId(user_id);
      console.log(result);
      this.orderList = result.item.order.map((item) => {
        return {
          url: item.replayUrl,
          title: `${item.teamA}---VS----${item.teamB}`,
          userId: item.openid,
          oderId: item.id
        };
      });
    },
    expend(item) {
      Object.assign(this.list[0], item);
      this.show = true;
    },
    async selectClick(index) {
      const res = await request_api.cancleCollectByUser(index.userId, index.oderId);
      if (res.success) {
        common_vendor.index.showToast({
          title: "删除成功",
          icon: "none"
        });
        await this.getCollectListByUser();
      }
    }
  },
  async onPullDownRefresh() {
    console.log("开始");
    this.getCollectListByUser();
    setTimeout(function() {
      console.log("停下来");
      common_vendor.index.stopPullDownRefresh();
    }, 1e3);
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.src,
    b: common_vendor.o((...args) => _ctx.message && _ctx.message(...args)),
    c: common_vendor.o((...args) => _ctx.message && _ctx.message(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-03e14ebf"], ["__file", "D:/sirui - new/pages/like/like.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
