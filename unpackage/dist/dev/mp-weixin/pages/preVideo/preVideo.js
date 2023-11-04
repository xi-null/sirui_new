"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src: `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/now_2.html?userId=${common_vendor.index.getStorageSync("user").id}`
      // src:`http://127.0.0.1:5500/now.html?userId=${uni.getStorageSync('user').id}`
    };
  },
  onLoad(query) {
    console.log(query.scene);
    if (query.scene == void 0) {
      const obj = {
        projectId: common_vendor.index.getStorageSync("project").id,
        userId: common_vendor.index.getStorageSync("user").id,
        appId: "wx129a87c8f2c167ee"
      };
      this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/now_2.html?query=${encodeURIComponent(JSON.stringify(obj))}`;
      console.log(this.src, 11);
    } else {
      this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/now_2.html?userId=${common_vendor.index.getStorageSync("user").id}&projectId=${query.scene}`;
      console.log(this.src);
    }
    common_vendor.wx$1.getSystemInfo({
      success: (res) => {
        console.log("getSystemInfo,", res.platform);
        if (res.platform == "android" || res.platform == "ios") {
          common_vendor.index.switchTab({
            url: "/pages/index/index"
          });
        }
      }
    });
  },
  onShareAppMessage(res) {
    return {
      title: "思锐AI",
      path: `/pages/preVideo/preVideo`
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.src
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/sirui_new_plus/sirui_new/pages/preVideo/preVideo.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
