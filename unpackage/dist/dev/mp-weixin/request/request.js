"use strict";
const common_vendor = require("../common/vendor.js");
common_vendor.index.$u.http.setConfig((config) => {
  config.baseURL = "https://service.ruisport.cn/ruis/";
  return config;
});
common_vendor.index.$u.http.interceptors.request.use((config) => {
  config.data = config.data || {};
  common_vendor.index.showLoading({
    title: "加载中"
  });
  return config;
}, (config) => {
  return Promise.reject(config);
});
common_vendor.index.$u.http.interceptors.response.use((response) => {
  const data = response.data;
  common_vendor.index.hideLoading();
  console.log(data);
  if (!data.success) {
    common_vendor.index.showToast({
      title: data.errMsg
    });
  }
  return data;
}, (response) => {
  common_vendor.index.showToast({
    title: "出了点错误"
  });
  return Promise.reject(response);
});
module.exports = {
  http: common_vendor.index.$u.http
};
