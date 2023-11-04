"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src: `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/afterCut_1.html?userId=${common_vendor.index.getStorageSync("user").id}#wechat_redirect`
    };
  },
  onLoad() {
    const obj = {
      projectId: common_vendor.index.getStorageSync("project").id,
      userId: common_vendor.index.getStorageSync("user").id
    };
    this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/afterCut_2.html?query=${encodeURIComponent(JSON.stringify(obj))}`;
    console.log(this.src, 11);
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.src
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/sirui_new_plus/sirui_new/pages/cutVideo/cutVideo.vue"]]);
wx.createPage(MiniProgramPage);
