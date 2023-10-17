"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../request/api.js");
const _sfc_main = {
  data() {
    return {
      item: {}
    };
  },
  onShareAppMessage(res) {
    return {
      title: "˼��AI",
      path: `/pages/vedio/vedio`
    };
  },
  onLoad(option) {
    console.log(option);
    this.item = option;
    console.log(
      {
        provider: "wxpay",
        timeStamp: `${this.item.timeStap}`,
        nonceStr: `${this.item.nonceStr}`,
        package: `${decodeURIComponent(this.item.package)}`,
        signType: `${decodeURIComponent(this.item.signType)}`,
        paySign: `${decodeURIComponent(this.item.paySign)}`
      }
    );
    common_vendor.index.showLoading({
      title: "加载中"
    });
    common_vendor.index.requestPayment({
      provider: "wxpay",
      timeStamp: `${this.item.timeStap}`,
      nonceStr: `${this.item.nonceStr}`,
      package: `${decodeURIComponent(this.item.package)}`,
      signType: `${decodeURIComponent(this.item.signType)}`,
      paySign: `${decodeURIComponent(this.item.paySign)}`,
      success: (res) => {
        common_vendor.index.navigateBack();
      }
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/sirui - new/pages/payForExtend/payForExtend.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
