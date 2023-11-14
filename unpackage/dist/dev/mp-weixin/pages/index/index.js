"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../request/api.js");
"../../request/request.js";
const list = () => "../../components/list/list.js";
const _sfc_main = {
  components: [list],
  data() {
    return {
      nav: true,
      src: `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/index_new1.html?userId=${common_vendor.index.getStorageSync("user").id}`,
      // src:`http://127.0.0.1:5500/index2.html?userId=${uni.getStorageSync('user').id}`,
      url: ""
    };
  },
  onLoad() {
    const obj = {
      projectId: common_vendor.index.getStorageSync("project").id,
      userId: common_vendor.index.getStorageSync("user").id
    };
    this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/index_new1.html?query=${encodeURIComponent(JSON.stringify(obj))}`;
    console.log(this.src, 11);
    common_vendor.wx$1.getSystemInfo({
      success: (res) => {
        console.log("getSystemInfo,", res.platform);
        if (res.platform == "android" || res.platform == "ios") {
          common_vendor.index.switchTab({
            url: "/pages/vedio/vedio"
          });
        }
      }
    });
  },
  onShareAppMessage(res) {
    return {
      title: "思锐AI",
      path: `/pages/index/index`
    };
  },
  methods: {
    message(item) {
      console.log(item.target.data);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.src,
    b: common_vendor.o((...args) => $options.message && $options.message(...args)),
    c: common_vendor.o((...args) => $options.message && $options.message(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/项目/西二外包/sirui_new/sirui_new/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
