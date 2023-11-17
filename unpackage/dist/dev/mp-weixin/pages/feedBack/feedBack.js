"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      //src:`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/feedBack.html?userId=${uni.getStorageSync('user').id}`
      src: `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/new/feedBack_new_1.html?userId=${common_vendor.index.getStorageSync("user").id}`
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/sirui_new_plus/sirui_new/pages/feedBack/feedBack.vue"]]);
wx.createPage(MiniProgramPage);
