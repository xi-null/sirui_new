"use strict";
const common_vendor = require("../../common/vendor.js");
const player = () => "../player/player.js";
const bottom = () => "../bottom/bottom.js";
const _sfc_main = {
  comments: [player, bottom],
  props: ["isEnd", "list"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.list[0].url, "this.listthis.list");
  },
  methods: {
    detail(item) {
      console.log(item);
      common_vendor.index.navigateTo({
        url: `/pages/detail/detail?userId=${item.userId}&orderId=${item.orderId}&isLike=${item.isLike}`
      });
    },
    statechange(e) {
      console.log("live-player code:", e.detail.code);
    },
    error(e) {
      console.error("live-player error:", e.detail.errMsg);
    },
    more() {
      this.$emit("getMore");
    }
  }
};
if (!Array) {
  const _easycom_player2 = common_vendor.resolveComponent("player");
  const _easycom_bottom2 = common_vendor.resolveComponent("bottom");
  const _easycom_u_list_item2 = common_vendor.resolveComponent("u-list-item");
  const _easycom_u_list2 = common_vendor.resolveComponent("u-list");
  (_easycom_player2 + _easycom_bottom2 + _easycom_u_list_item2 + _easycom_u_list2)();
}
const _easycom_player = () => "../player/player.js";
const _easycom_bottom = () => "../bottom/bottom.js";
const _easycom_u_list_item = () => "../../uni_modules/uview-plus/components/u-list-item/u-list-item.js";
const _easycom_u_list = () => "../../uni_modules/uview-plus/components/u-list/u-list.js";
if (!Math) {
  (_easycom_player + _easycom_bottom + _easycom_u_list_item + _easycom_u_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.list, (item, index, i0) => {
      return common_vendor.e({
        a: item.url
      }, item.url ? common_vendor.e({
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.time),
        d: !$props.isEnd
      }, !$props.isEnd ? {
        e: "18578b00-2-" + i0 + "," + ("18578b00-1-" + i0),
        f: common_vendor.p({
          src: item.url
        })
      } : {}, {
        g: $props.isEnd
      }, $props.isEnd ? {
        h: item.url
      } : {}, {
        i: common_vendor.o((...args) => _ctx.stop && _ctx.stop(...args), index),
        j: $props.isEnd
      }, $props.isEnd ? {
        k: common_vendor.o(($event) => _ctx.$emit("refresh"), index),
        l: "18578b00-3-" + i0 + "," + ("18578b00-1-" + i0),
        m: common_vendor.p({
          item
        })
      } : {}, {
        n: common_vendor.o(($event) => $options.detail(item), index)
      }) : {}, {
        o: index,
        p: "18578b00-1-" + i0 + ",18578b00-0"
      });
    }),
    b: common_vendor.o($options.more)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-18578b00"], ["__file", "E:/项目/西二外包/sirui_new/sirui_new/components/list/list.vue"]]);
wx.createComponent(Component);
