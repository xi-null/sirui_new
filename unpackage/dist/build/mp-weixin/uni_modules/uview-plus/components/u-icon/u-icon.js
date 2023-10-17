"use strict";const i=require("../../../../common/vendor.js"),s=require("./icons.js"),r=require("./props.js"),e=require("../../libs/mixin/mpMixin.js"),o=require("../../libs/mixin/mixin.js");require("../../libs/config/props.js"),require("../../libs/config/props/actionSheet.js"),require("../../libs/config/props/album.js"),require("../../libs/config/props/alert.js"),require("../../libs/config/props/avatar.js"),require("../../libs/config/props/avatarGroup.js"),require("../../libs/config/props/backtop.js"),require("../../libs/config/props/badge.js"),require("../../libs/config/props/button.js"),require("../../libs/config/props/calendar.js"),require("../../libs/config/props/carKeyboard.js"),require("../../libs/config/props/cell.js"),require("../../libs/config/props/cellGroup.js"),require("../../libs/config/props/checkbox.js"),require("../../libs/config/props/checkboxGroup.js"),require("../../libs/config/props/circleProgress.js"),require("../../libs/config/props/code.js"),require("../../libs/config/props/codeInput.js"),require("../../libs/config/props/col.js"),require("../../libs/config/props/collapse.js"),require("../../libs/config/props/collapseItem.js"),require("../../libs/config/props/columnNotice.js"),require("../../libs/config/props/countDown.js"),require("../../libs/config/props/countTo.js"),require("../../libs/config/props/datetimePicker.js"),require("../../libs/config/props/divider.js"),require("../../libs/config/props/empty.js"),require("../../libs/config/props/form.js"),require("../../libs/config/props/formItem.js"),require("../../libs/config/props/gap.js"),require("../../libs/config/props/grid.js"),require("../../libs/config/props/gridItem.js"),require("../../libs/config/props/icon.js"),require("../../libs/config/config.js"),require("../../libs/config/props/image.js"),require("../../libs/config/props/indexAnchor.js"),require("../../libs/config/props/indexList.js"),require("../../libs/config/props/input.js"),require("../../libs/config/props/keyboard.js"),require("../../libs/config/props/line.js"),require("../../libs/config/props/lineProgress.js"),require("../../libs/config/props/link.js"),require("../../libs/config/props/list.js"),require("../../libs/config/props/listItem.js"),require("../../libs/config/props/loadingIcon.js"),require("../../libs/config/props/loadingPage.js"),require("../../libs/config/props/loadmore.js"),require("../../libs/config/props/modal.js"),require("../../libs/config/props/navbar.js"),require("../../libs/config/color.js"),require("../../libs/config/props/noNetwork.js"),require("../../libs/config/props/noticeBar.js"),require("../../libs/config/props/notify.js"),require("../../libs/config/props/numberBox.js"),require("../../libs/config/props/numberKeyboard.js"),require("../../libs/config/props/overlay.js"),require("../../libs/config/props/parse.js"),require("../../libs/config/props/picker.js"),require("../../libs/config/props/popup.js"),require("../../libs/config/props/radio.js"),require("../../libs/config/props/radioGroup.js"),require("../../libs/config/props/rate.js"),require("../../libs/config/props/readMore.js"),require("../../libs/config/props/row.js"),require("../../libs/config/props/rowNotice.js"),require("../../libs/config/props/scrollList.js"),require("../../libs/config/props/search.js"),require("../../libs/config/props/section.js"),require("../../libs/config/props/skeleton.js"),require("../../libs/config/props/slider.js"),require("../../libs/config/props/statusBar.js"),require("../../libs/config/props/steps.js"),require("../../libs/config/props/stepsItem.js"),require("../../libs/config/props/sticky.js"),require("../../libs/config/props/subsection.js"),require("../../libs/config/props/swipeAction.js"),require("../../libs/config/props/swipeActionItem.js"),require("../../libs/config/props/swiper.js"),require("../../libs/config/props/swipterIndicator.js"),require("../../libs/config/props/switch.js"),require("../../libs/config/props/tabbar.js"),require("../../libs/config/props/tabbarItem.js"),require("../../libs/config/props/tabs.js"),require("../../libs/config/props/tag.js"),require("../../libs/config/props/text.js"),require("../../libs/config/props/textarea.js"),require("../../libs/config/props/toast.js"),require("../../libs/config/props/toolbar.js"),require("../../libs/config/props/tooltip.js"),require("../../libs/config/props/transition.js"),require("../../libs/config/props/upload.js");const p={name:"u-icon",data:()=>({}),emits:["click"],mixins:[e.mpMixin,o.mixin,r.props],computed:{uClasses(){let s=[];return s.push(this.customPrefix+"-"+this.name),this.color&&i.index.$u.config.type.includes(this.color)&&s.push("u-icon__icon--"+this.color),s},iconStyle(){let s={};return s={fontSize:i.index.$u.addUnit(this.size),lineHeight:i.index.$u.addUnit(this.size),fontWeight:this.bold?"bold":"normal",top:i.index.$u.addUnit(this.top)},this.color&&!i.index.$u.config.type.includes(this.color)&&(s.color=this.color),s},isImg(){return-1!==this.name.indexOf("/")},imgStyle(){let s={};return s.width=this.width?i.index.$u.addUnit(this.width):i.index.$u.addUnit(this.size),s.height=this.height?i.index.$u.addUnit(this.height):i.index.$u.addUnit(this.size),s},icon(){return s.icons["uicon-"+this.name]||this.name}},methods:{clickHandler(i){this.$emit("click",this.index),this.stop&&this.preventEvent(i)}}};const n=i._export_sfc(p,[["render",function(s,r,e,o,p,n){return i.e({a:n.isImg},n.isImg?{b:s.name,c:s.imgMode,d:i.s(n.imgStyle),e:i.s(s.$u.addStyle(s.customStyle))}:{f:i.t(n.icon),g:i.n(n.uClasses),h:i.s(n.iconStyle),i:i.s(s.$u.addStyle(s.customStyle)),j:s.hoverClass},{k:""!==s.label},""!==s.label?{l:i.t(s.label),m:s.labelColor,n:s.$u.addUnit(s.labelSize),o:"right"==s.labelPos?s.$u.addUnit(s.space):0,p:"bottom"==s.labelPos?s.$u.addUnit(s.space):0,q:"left"==s.labelPos?s.$u.addUnit(s.space):0,r:"top"==s.labelPos?s.$u.addUnit(s.space):0}:{},{s:i.o(((...i)=>n.clickHandler&&n.clickHandler(...i))),t:i.n("u-icon--"+s.labelPos)})}],["__scopeId","data-v-61e5e35f"]]);wx.createComponent(n);
