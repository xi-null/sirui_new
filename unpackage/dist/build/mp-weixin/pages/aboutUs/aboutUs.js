"use strict";const e=require("../../common/vendor.js"),o={data:()=>({src:`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/aboutUs.html?userId=${e.index.getStorageSync("user").id}`}),onLoad(e){console.log(this.src)},methods:{}};const s=e._export_sfc(o,[["render",function(e,o,s,t,r,c){return{a:r.src}}]]);wx.createPage(s);
