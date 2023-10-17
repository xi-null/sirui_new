"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    // 控制是否出现滚动条，仅nvue有效
    showScrollbar: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.showScrollbar
    },
    // 距底部多少时触发scrolltolower事件
    lowerThreshold: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.lowerThreshold
    },
    // 距顶部多少时触发scrolltoupper事件，非nvue有效
    upperThreshold: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.upperThreshold
    },
    // 设置竖向滚动条位置
    scrollTop: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.scrollTop
    },
    // 控制 onscroll 事件触发的频率，仅nvue有效
    offsetAccuracy: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.offsetAccuracy
    },
    // 启用 flexbox 布局。开启后，当前节点声明了display: flex就会成为flex container，并作用于其孩子节点，仅微信小程序有效
    enableFlex: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.enableFlex
    },
    // 是否按分页模式显示List，默认值false
    pagingEnabled: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.pagingEnabled
    },
    // 是否允许List滚动
    scrollable: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.scrollable
    },
    // 值应为某子元素id（id不能以数字开头）
    scrollIntoView: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.scrollIntoView
    },
    // 在设置滚动条位置时使用动画过渡
    scrollWithAnimation: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.scrollWithAnimation
    },
    // iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只对微信小程序有效
    enableBackToTop: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.enableBackToTop
    },
    // 列表的高度
    height: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.height
    },
    // 列表宽度
    width: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.width
    },
    // 列表前后预渲染的屏数，1代表一个屏幕的高度，1.5代表1个半屏幕高度
    preLoadScreen: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.list.preLoadScreen
    }
    // vue下，是否开启虚拟列表
  }
};
exports.props = props;
