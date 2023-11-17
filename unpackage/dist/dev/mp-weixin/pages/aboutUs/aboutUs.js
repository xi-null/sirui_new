"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src: `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/aboutUs.html?userId=${common_vendor.index.getStorageSync("user").id}`
    };
  },
  onLoad(option) {
    console.log(this.src);
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.src
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/项目/西二外包/sirui_new/sirui_new/pages/aboutUs/aboutUs.vue"]]);
wx.createPage(MiniProgramPage);
