"use strict";const e=require("../../common/vendor.js"),s={data:()=>({src:`https://service.ruisport.cn/h5/order_2.html?userId=${e.index.getStorageSync("user").id}`}),onShareAppMessage:e=>({title:"思锐AI",path:"/pages/vedio/vedio"}),onLoad(){const s={projectId:e.index.getStorageSync("project").id,userId:e.index.getStorageSync("user").id};this.src=`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/order_3.html?query=${encodeURIComponent(JSON.stringify(s))}`,console.log(this.src,11)},methods:{}};const o=e._export_sfc(s,[["render",function(s,o,t,r,c,n){return{a:c.src,b:e.o(((...e)=>s.message&&s.message(...e))),c:e.o(((...e)=>s.message&&s.message(...e)))}}],["__scopeId","data-v-ca85974c"]]);s.__runtimeHooks=2,wx.createPage(o);
