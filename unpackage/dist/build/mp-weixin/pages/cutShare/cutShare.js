"use strict";const e=require("../../common/vendor.js"),t=require("../../request/api.js"),i={data:()=>({item:{}}),async onLoad(i){let o=JSON.parse(decodeURIComponent(i.list));const a=(await t.getDetail(o.orderId)).item.order.projectId,s=(await t.getPlaceList()).item.project.find((e=>e.projectId==a));console.log(s);const n=o.title.split(" ");console.log(n),o.team=n[0],o.title=n[1]+" "+n[2]+" "+n[3],o.title.includes("undefined")&&(o.title=n[1]?n[1]:o.team),o.projectName=s.name,this.item=o,console.log(this.item),e.index.showToast({title:"请点击右上角分享"}),console.log(this.item.title)},onShareTimeline(){return{title:this.item.title.replaceAll("-"," "),path:`/pages/cutShare/cutShare?list=${encodeURIComponent(JSON.stringify(this.item))}`}},onShareAppMessage(e){return{title:this.item.title.replaceAll("-"," "),path:`/pages/cutShare/cutShare?list=${encodeURIComponent(JSON.stringify(this.item))}`}},methods:{toDetail(){e.index.navigateTo({url:`/pages/cutPlayer/cutPlayer?list=${encodeURIComponent(JSON.stringify({...this.item,userId:e.index.getStorageSync("user").id}))}`})}}};const o=e._export_sfc(i,[["render",function(t,i,o,a,s,n){return{a:e.t(s.item.projectName),b:e.t(s.item.startTime),c:e.t(s.item.gameName),d:e.t(s.item.team),e:e.t(s.item.title),f:e.o(((...e)=>n.toDetail&&n.toDetail(...e)))}}],["__scopeId","data-v-926def6a"]]);i.__runtimeHooks=6,wx.createPage(o);
