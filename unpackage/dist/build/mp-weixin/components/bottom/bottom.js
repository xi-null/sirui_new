"use strict";const e=require("../../common/vendor.js"),t=require("../../request/api.js"),s={name:"bottom",props:["item"],data:()=>({value:{userId:"",orderId:""}}),watch:{},onShareAppMessage(e){return console.log("res"),{title:"思锐直播",path:`/pages/detail/detail?userId=${this.value.userId}&orderId=${this.value.orderId}`}},updated(){this.value=this.item,console.log(Boolean(this.value.isLike),this.value.isLike)},methods:{async collect(){const s=await t.like(this.item);e.index.showToast({title:s.errMsg}),this.$emit("refresh")},async noCollect(){const s=await t.noLike(this.item);e.index.showToast({title:s.errMsg}),this.$emit("refresh")}}};if(!Array){e.resolveComponent("u-icon")()}Math;const i=e._export_sfc(s,[["render",function(t,s,i,o,r,a){return e.e({a:e.p({name:"share-square",size:"40rpx"}),b:"true"==this.value.isLike||this.value.isLike},"true"==this.value.isLike||this.value.isLike?{c:e.o(a.noCollect),d:e.p({name:"star-fill",size:"40rpx"})}:{e:e.o(a.collect),f:e.p({name:"star",size:"40rpx"})},{g:e.p({name:"download",size:"40rpx"}),h:e.o(((...e)=>t.stop&&t.stop(...e)))})}],["__scopeId","data-v-f267e95f"]]);wx.createComponent(i);
