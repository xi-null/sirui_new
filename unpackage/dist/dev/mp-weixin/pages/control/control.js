"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src: ""
    };
  },
  onLoad(option2) {
    console.log(option2);
    if (option2.overlay == "2") {
      this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/bgBs_2.html?orderId=${option2.orderId}`;
      return;
    }
    this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/bg_1.html?orderId=${option2.orderId}`;
  },
  onShareAppMessage(res) {
    return {
      path: `/pages/control/control?orderId=${option.orderId}`
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.src
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/sirui_new_plus/sirui_new/pages/control/control.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
