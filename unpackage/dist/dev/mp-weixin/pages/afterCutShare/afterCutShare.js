"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../request/api.js");
const _sfc_main = {
  data() {
    return {
      item: {}
    };
  },
  async onLoad(option) {
    let item = JSON.parse(decodeURIComponent(option.list));
    this.item = item;
    console.log(this.item);
    common_vendor.index.showToast({
      title: "请点击右上角分享"
    });
  },
  // 分享到朋友圈
  onShareTimeline() {
    return {
      title: this.item.title.replace("-", " "),
      path: `/pages/afterCutShare/afterCutShare?list=${encodeURIComponent(JSON.stringify(this.item))}`
    };
  },
  onShareAppMessage(res) {
    return {
      title: this.item.title.replace("-", " "),
      path: `/pages/afterCutShare/afterCutShare?list=${encodeURIComponent(JSON.stringify(this.item))}`
    };
  },
  methods: {
    toDetail() {
      common_vendor.index.navigateTo({
        url: `/pages/cutPlayer/cutPlayer?list=${encodeURIComponent(encodeURIComponent(JSON.stringify({ ...this.item, userId: common_vendor.index.getStorageSync("user").id })))}`
        // url:`/pages/cutPlayer/cutDetail?orderId=${this.item.orderId}`
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.item.date),
    b: common_vendor.t($data.item.startTime),
    c: common_vendor.t($data.item.gameName),
    d: common_vendor.t($data.item.team),
    e: common_vendor.t($data.item.title),
    f: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a85c6812"], ["__file", "D:/sirui - new/pages/afterCutShare/afterCutShare.vue"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
