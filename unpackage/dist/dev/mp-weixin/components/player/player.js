"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "player",
  props: ["src"],
  data() {
    return {
      player: {},
      isStart: false,
      //是否播放
      isShow: false,
      // 是否显示控制
      isMuted: false,
      //是否静音
      isFull: false
      //是否全屏
    };
  },
  mounted() {
    this.player = common_vendor.index.createLivePlayerContext("player", this);
  },
  methods: {
    statechange(e) {
      console.log("live-player code:", e.detail.code);
      if (e.detail.code == 2033) {
        this.player.pause();
      }
    },
    error(e) {
      console.error("live-player error:", e.detail.errMsg);
    },
    start() {
      this.isStart = !this.isStart;
      if (this.isStart) {
        this.player.resume();
        this.player.play({
          success: () => {
            console.log(this.src);
            this.player.mute();
            this.player.mute();
          }
        });
      } else {
        this.player.pause({
          success: () => {
            console.log("pause");
          }
        });
      }
    },
    show() {
      this.isShow = !this.isShow;
    },
    mute() {
      console.log("mute");
      this.isMuted = !this.isMuted;
      this.player.mute();
    },
    full() {
      this.isFull = !this.isFull;
      if (this.isFull) {
        console.log("full-begin");
        this.player.requestFullScreen({
          direction: 90,
          success: () => {
            console.log("full");
          },
          fail: () => {
            cosole.log("fail");
          },
          complete: () => {
            console.log("complete");
          }
        });
      } else {
        this.player.exitFullScreen(
          {
            direction: 90,
            success: () => {
              console.log("unfull");
            }
          }
        );
      }
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
    a: $props.src
  }, $props.src ? common_vendor.e({
    b: !$data.isStart
  }, !$data.isStart ? {
    c: common_vendor.o($options.start),
    d: common_vendor.p({
      name: "play-circle",
      size: "28"
    })
  } : {}, {
    e: $data.isShow
  }, $data.isShow ? common_vendor.e({
    f: $data.isStart
  }, $data.isStart ? {
    g: common_vendor.o($options.start),
    h: common_vendor.p({
      name: "pause-circle",
      size: "28"
    })
  } : {}, {
    i: !$data.isMuted
  }, !$data.isMuted ? {
    j: common_vendor.o($options.mute),
    k: common_vendor.p({
      name: "volume",
      size: "28"
    })
  } : {}, {
    l: $data.isMuted
  }, $data.isMuted ? {
    m: common_vendor.o($options.mute),
    n: common_vendor.p({
      name: "volume-off",
      size: "28"
    })
  } : {}, {
    o: common_vendor.o($options.full),
    p: common_vendor.p({
      name: "scan",
      size: "28"
    }),
    q: common_vendor.o((...args) => _ctx.stop && _ctx.stop(...args))
  }) : {}, {
    r: $props.src,
    s: common_vendor.o((...args) => $options.statechange && $options.statechange(...args)),
    t: common_vendor.o((...args) => $options.error && $options.error(...args)),
    v: common_vendor.o((...args) => $options.show && $options.show(...args))
  }) : {}, {
    w: common_vendor.o((...args) => _ctx.stop && _ctx.stop(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-25a3c683"], ["__file", "D:/sirui - new/components/player/player.vue"]]);
wx.createComponent(Component);
