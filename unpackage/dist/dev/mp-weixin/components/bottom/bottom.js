"use strict";
const common_vendor = require("../../common/vendor.js");
const request_api = require("../../request/api.js");
const _sfc_main = {
  name: "bottom",
  props: ["item"],
  data() {
    return {
      value: {
        userId: "",
        orderId: ""
      }
    };
  },
  watch: {},
  onShareAppMessage(res) {
    console.log("res");
    return {
      title: "思锐直播",
      path: `/pages/detail/detail?userId=${this.value.userId}&orderId=${this.value.orderId}`
    };
  },
  updated() {
    this.value = this.item;
    console.log(Boolean(this.value.isLike), this.value.isLike);
  },
  methods: {
    async collect() {
      const res = await request_api.like(this.item);
      common_vendor.index.showToast({
        title: res.errMsg
      });
      this.$emit("refresh");
    },
    async noCollect() {
      const res = await request_api.noLike(this.item);
      common_vendor.index.showToast({
        title: res.errMsg
      });
      this.$emit("refresh");
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      name: "share-square",
      size: "40rpx"
    }),
    b: this.value.isLike == "true" || this.value.isLike
  }, this.value.isLike == "true" || this.value.isLike ? {
    c: common_vendor.o($options.noCollect),
    d: common_vendor.p({
      name: "star-fill",
      size: "40rpx"
    })
  } : {
    e: common_vendor.o($options.collect),
    f: common_vendor.p({
      name: "star",
      size: "40rpx"
    })
  }, {
    g: common_vendor.p({
      name: "download",
      size: "40rpx"
    }),
    h: common_vendor.o((...args) => _ctx.stop && _ctx.stop(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7c601f0c"], ["__file", "E:/项目/西二外包/sirui_new/sirui_new/components/bottom/bottom.vue"]]);
wx.createComponent(Component);
