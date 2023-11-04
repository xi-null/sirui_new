"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      user: {},
      tabBar: [
        {
          title: "我的订单",
          url: "/pages/history/history",
          icon: "../../static/person_order.png"
        },
        {
          title: "我的收藏",
          url: "/pages/like/like",
          icon: "../../static/person_like.png"
        },
        {
          title: "我的剪辑",
          url: "/pages/cutVideo/cutVideo",
          icon: "../../static/person_cut.png"
        },
        {
          title: "退款申请",
          url: "/pages/refund/refund",
          icon: "../../static/person_refund.png"
        },
        {
          title: "反馈问题",
          url: "/pages/feedBack/feedBack",
          icon: "../../static/person_feedBack.png"
        },
        {
          title: "联系我们",
          url: "/pages/aboutUs/aboutUs",
          icon: "../../static/person_aboutUs.png"
        }
      ]
    };
  },
  methods: {
    change(url) {
      common_vendor.index.navigateTo({
        url
      });
    }
  },
  onLoad() {
    console.log(common_vendor.index.getStorageSync("user"), common_vendor.index.getStorageSync("userInfo"));
    this.user = common_vendor.index.getStorageSync("user");
  },
  onShareAppMessage(res) {
    return {
      title: "思锐AI",
      path: `/pages/vedio/vedio`
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t(`微信用户${$data.user.id.substr(0, 4)}`),
    b: common_vendor.f($data.tabBar, (item, key, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.title),
        c: common_vendor.o(($event) => $options.change(item.url))
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-23e4402d"], ["__file", "D:/sirui_new_plus/sirui_new/pages/person/person.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
