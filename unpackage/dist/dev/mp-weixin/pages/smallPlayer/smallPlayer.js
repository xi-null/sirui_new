"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../request/api.js");
const _sfc_main = {
  data() {
    return {
      item: {
        status: ""
      }
    };
  },
  onLoad(option) {
    this.item = JSON.parse(decodeURIComponent(option.list));
    console.log(this.item);
    if (Reflect.has(this.item, "endTime")) {
      const startTime = Date.parse(this.item.date + " " + this.item.startTime);
      const endTime = Date.parse(this.item.date + " " + this.item.endTime);
      const now = Date.now();
      if (now - startTime > 0 && now - endTime < 0) {
        this.item.status = "正在直播";
      }
      if (now - startTime < 0) {
        this.item.status = "即将直播";
      }
      if (endTime - now < 0) {
        this.item.status = "赛事回放";
      }
    } else {
      this.item.status = "赛事回放";
    }
    common_vendor.index.showToast({
      title: "请点击右上角分享"
    });
  },
  // 分享到朋友圈
  onShareTimeline() {
    return {
      title: this.item.title.replace("-", " "),
      path: `/pages/vedioDetail/vedioDetail?list=${encodeURIComponent(JSON.stringify(this.item))}`
    };
  },
  onShareAppMessage(res) {
    return {
      title: this.item.title.replace("-", " "),
      path: `/pages/vedioDetail/vedioDetail?list=${encodeURIComponent(JSON.stringify(this.item))}`
    };
  },
  methods: {
    toDetail() {
      common_vendor.index.navigateTo({
        url: `/pages/vedioPlayer/vedioPlayer?list=${encodeURIComponent(JSON.stringify(this.item))}`
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.item.title),
    b: common_vendor.t($data.item.date),
    c: common_vendor.t($data.item.gameName),
    d: common_vendor.t($data.item.teamA),
    e: common_vendor.t($data.item.teamB),
    f: common_vendor.t(`${$data.item.startTime}-${$data.item.endTime ? $data.item.endTime : ""}`),
    g: common_vendor.t($data.item.status),
    h: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a006e64a"], ["__file", "E:/项目/西二外包/sirui_new/sirui_new/pages/smallPlayer/smallPlayer.vue"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
