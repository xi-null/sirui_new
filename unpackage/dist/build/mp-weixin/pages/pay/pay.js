"use strict";const e=require("../../common/vendor.js"),t={data:()=>({item:{}}),onShareAppMessage:e=>({title:"˼��AI",path:"/pages/vedio/vedio"}),onLoad(t){console.log(t),this.item=t,console.log({provider:"wxpay",timeStamp:`${this.item.timeStap}`,nonceStr:`${this.item.nonceStr}`,package:`${decodeURIComponent(this.item.package)}`,signType:`${decodeURIComponent(this.item.signType)}`,paySign:`${decodeURIComponent(this.item.paySign)}`}),e.index.showLoading({title:"加载中"}),e.index.requestPayment({provider:"wxpay",timeStamp:`${this.item.timeStap}`,nonceStr:`${this.item.nonceStr}`,package:`${decodeURIComponent(this.item.package)}`,signType:`${decodeURIComponent(this.item.signType)}`,paySign:`${decodeURIComponent(this.item.paySign)}`,success:t=>{e.index.navigateBack()}})}};const i=e._export_sfc(t,[["render",function(e,t,i,n,o,a){return{}}]]);t.__runtimeHooks=2,wx.createPage(i);
