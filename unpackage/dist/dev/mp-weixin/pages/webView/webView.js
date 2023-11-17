"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src: ""
    };
  },
  methods: {},
  onLoad(options) {
    console.log(options);
    this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/index_detail_1.html?url=${options.url}&userId=${options.userId}#wechat_redirect`;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.src,
    b: common_vendor.o((...args) => _ctx.message && _ctx.message(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/项目/西二外包/sirui_new/sirui_new/pages/webView/webView.vue"]]);
wx.createPage(MiniProgramPage);
