"use strict";const i=require("../../../../common/vendor.js"),r=require("./props.js"),s=require("../../libs/mixin/mpMixin.js"),e=require("../../libs/mixin/mixin.js");require("../../libs/config/props.js"),require("../../libs/config/props/actionSheet.js"),require("../../libs/config/props/album.js"),require("../../libs/config/props/alert.js"),require("../../libs/config/props/avatar.js"),require("../../libs/config/props/avatarGroup.js"),require("../../libs/config/props/backtop.js"),require("../../libs/config/props/badge.js"),require("../../libs/config/props/button.js"),require("../../libs/config/props/calendar.js"),require("../../libs/config/props/carKeyboard.js"),require("../../libs/config/props/cell.js"),require("../../libs/config/props/cellGroup.js"),require("../../libs/config/props/checkbox.js"),require("../../libs/config/props/checkboxGroup.js"),require("../../libs/config/props/circleProgress.js"),require("../../libs/config/props/code.js"),require("../../libs/config/props/codeInput.js"),require("../../libs/config/props/col.js"),require("../../libs/config/props/collapse.js"),require("../../libs/config/props/collapseItem.js"),require("../../libs/config/props/columnNotice.js"),require("../../libs/config/props/countDown.js"),require("../../libs/config/props/countTo.js"),require("../../libs/config/props/datetimePicker.js"),require("../../libs/config/props/divider.js"),require("../../libs/config/props/empty.js"),require("../../libs/config/props/form.js"),require("../../libs/config/props/formItem.js"),require("../../libs/config/props/gap.js"),require("../../libs/config/props/grid.js"),require("../../libs/config/props/gridItem.js"),require("../../libs/config/props/icon.js"),require("../../libs/config/config.js"),require("../../libs/config/props/image.js"),require("../../libs/config/props/indexAnchor.js"),require("../../libs/config/props/indexList.js"),require("../../libs/config/props/input.js"),require("../../libs/config/props/keyboard.js"),require("../../libs/config/props/line.js"),require("../../libs/config/props/lineProgress.js"),require("../../libs/config/props/link.js"),require("../../libs/config/props/list.js"),require("../../libs/config/props/listItem.js"),require("../../libs/config/props/loadingIcon.js"),require("../../libs/config/props/loadingPage.js"),require("../../libs/config/props/loadmore.js"),require("../../libs/config/props/modal.js"),require("../../libs/config/props/navbar.js"),require("../../libs/config/color.js"),require("../../libs/config/props/noNetwork.js"),require("../../libs/config/props/noticeBar.js"),require("../../libs/config/props/notify.js"),require("../../libs/config/props/numberBox.js"),require("../../libs/config/props/numberKeyboard.js"),require("../../libs/config/props/overlay.js"),require("../../libs/config/props/parse.js"),require("../../libs/config/props/picker.js"),require("../../libs/config/props/popup.js"),require("../../libs/config/props/radio.js"),require("../../libs/config/props/radioGroup.js"),require("../../libs/config/props/rate.js"),require("../../libs/config/props/readMore.js"),require("../../libs/config/props/row.js"),require("../../libs/config/props/rowNotice.js"),require("../../libs/config/props/scrollList.js"),require("../../libs/config/props/search.js"),require("../../libs/config/props/section.js"),require("../../libs/config/props/skeleton.js"),require("../../libs/config/props/slider.js"),require("../../libs/config/props/statusBar.js"),require("../../libs/config/props/steps.js"),require("../../libs/config/props/stepsItem.js"),require("../../libs/config/props/sticky.js"),require("../../libs/config/props/subsection.js"),require("../../libs/config/props/swipeAction.js"),require("../../libs/config/props/swipeActionItem.js"),require("../../libs/config/props/swiper.js"),require("../../libs/config/props/swipterIndicator.js"),require("../../libs/config/props/switch.js"),require("../../libs/config/props/tabbar.js"),require("../../libs/config/props/tabbarItem.js"),require("../../libs/config/props/tabs.js"),require("../../libs/config/props/tag.js"),require("../../libs/config/props/text.js"),require("../../libs/config/props/textarea.js"),require("../../libs/config/props/toast.js"),require("../../libs/config/props/toolbar.js"),require("../../libs/config/props/tooltip.js"),require("../../libs/config/props/transition.js"),require("../../libs/config/props/upload.js");const o={name:"u-list-item",mixins:[s.mpMixin,e.mixin,r.props],data:()=>({rect:{},index:0,show:!0,sys:i.index.$u.sys()}),computed:{},inject:["uList"],watch:{"uList.innerScrollTop"(i){const r=this.uList.preLoadScreen,s=this.sys.windowHeight;i<=s*r?this.parent.updateOffsetFromChild(0):this.rect.top<=i-s*r&&this.parent.updateOffsetFromChild(this.rect.top)}},created(){this.parent={}},mounted(){this.init()},methods:{init(){this.updateParentData(),this.index=this.parent.children.indexOf(this),this.resize()},updateParentData(){this.getParentData("u-list")},resize(){this.queryRect(`u-list-item-${this.anchor}`).then((i=>{const r=this.parent.children[this.index-1];this.rect=i;const s=this.uList.preLoadScreen,e=this.sys.windowHeight;r&&(this.rect.top=r.rect.top+r.rect.height),i.top>=this.uList.innerScrollTop+(1+s)*e&&(this.show=!1)}))},queryRect(i){return new Promise((r=>{this.$uGetRect(`.${i}`).then((i=>{r(i)}))}))}}};const p=i._export_sfc(o,[["render",function(r,s,e,o,p,n){return{a:`u-list-item-${r.anchor}`,b:`u-list-item-${r.anchor}`,c:i.n(`u-list-item-${r.anchor}`)}}],["__scopeId","data-v-18fa4ea3"]]);wx.createComponent(p);
