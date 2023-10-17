"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src: ""
    };
  },
  onLoad(option) {
    this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/cutPlayer_2.html?list=${option.list}`;
    console.log(this.src);
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.src
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/sirui - new/pages/cutPlayer/cutPlayer.vue"]]);
wx.createPage(MiniProgramPage);
