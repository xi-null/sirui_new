"use strict";
const common_vendor = require("../common/vendor.js");
new Proxy({}, {
  get(_, key) {
    throw new Error(`Module "constants" has been externalized for browser compatibility. Cannot access "constants.${key}" in client code.  See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
  }
});
const login = () => {
  common_vendor.index.login({
    provider: "weixin",
    //使用微信登录
    success: function(loginRes) {
      const code = loginRes.code;
      console.log("code", code);
      common_vendor.index.$u.http.post(`/api/user/login/${code}?appId=wx129a87c8f2c167ee`).then((res) => {
        res.item.user.username = `微信用户${res.item.user.id.substr(0, 4)}`;
        common_vendor.index.setStorageSync("user", res.item.user);
        console.log("user", res.item.user);
      });
    }
  });
};
const getProjectList = () => {
  return common_vendor.index.$u.http.get("/api/project/list");
};
const like = ({ userId, orderId }) => {
  return common_vendor.index.$u.http.post(`/api/user/collect/${userId}/${orderId}`);
};
const noLike = ({ userId, orderId }) => {
  return common_vendor.index.$u.http.put(`/api/user/collect/${userId}/${orderId}`);
};
const getCollectListByUserId = (userId) => {
  return common_vendor.index.$u.http.get(`/api/user/my/collect/${userId}`);
};
const cancleCollectByUser = (userId, orderId) => {
  return common_vendor.index.$u.http.put(`/api/user/collect/${userId}/${orderId}`);
};
const getPlaceList = () => {
  return common_vendor.index.$u.http.get(`api/project/list`);
};
const getDetail = (id) => {
  return common_vendor.index.$u.http.get(`/api/order/${id}`);
};
exports.cancleCollectByUser = cancleCollectByUser;
exports.getCollectListByUserId = getCollectListByUserId;
exports.getDetail = getDetail;
exports.getPlaceList = getPlaceList;
exports.getProjectList = getProjectList;
exports.like = like;
exports.login = login;
exports.noLike = noLike;
