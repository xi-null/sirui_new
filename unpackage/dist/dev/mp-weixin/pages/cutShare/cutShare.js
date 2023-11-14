"use strict";
const common_vendor = require("../../common/vendor.js");
const request_api = require("../../request/api.js");
const _sfc_main = {
  data() {
    return {
      item: {}
    };
  },
  async onLoad(option) {
    let item = JSON.parse(decodeURIComponent(option.list));
    const detail = await request_api.getDetail(item.orderId);
    const projectId = detail.item.order.projectId;
    const place = await request_api.getPlaceList();
    const placeList = place.item.project;
    const nowPlace = placeList.find((data) => data.projectId == projectId);
    console.log(nowPlace);
    const str = item.title.split(" ");
    console.log(str);
    item.team = str[0];
    item.title = str[1] + " " + str[2] + " " + str[3];
    if (item.title.includes("undefined")) {
      item.title = str[1] ? str[1] : item.team;
    }
    item.projectName = nowPlace.name;
    this.item = item;
    console.log(this.item);
    common_vendor.index.showToast({
      title: "请点击右上角分享"
    });
    console.log(this.item.title);
  },
  // 分享到朋友圈
  onShareTimeline() {
    return {
      title: this.item.title.replaceAll("-", " "),
      path: `/pages/cutShare/cutShare?list=${encodeURIComponent(JSON.stringify(this.item))}`
    };
  },
  onShareAppMessage(res) {
    return {
      title: this.item.title.replaceAll("-", " "),
      path: `/pages/cutShare/cutShare?list=${encodeURIComponent(JSON.stringify(this.item))}`
    };
  },
  methods: {
    toDetail() {
      common_vendor.index.navigateTo({
        url: `/pages/cutPlayer/cutPlayer?list=${encodeURIComponent(JSON.stringify({ ...this.item, userId: common_vendor.index.getStorageSync("user").id }))}`
        // url:`/pages/cutPlayer/cutDetail?orderId=${this.item.orderId}`
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.item.projectName),
    b: common_vendor.t($data.item.startTime),
    c: common_vendor.t($data.item.gameName),
    d: common_vendor.t($data.item.team),
    e: common_vendor.t($data.item.title),
    f: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9d59a19e"], ["__file", "E:/项目/西二外包/sirui_new/sirui_new/pages/cutShare/cutShare.vue"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
