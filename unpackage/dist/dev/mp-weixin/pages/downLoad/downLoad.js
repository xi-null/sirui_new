"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tempFilePath: "",
      progress: 0,
      currentRate: 30,
      adVideo: null,
      item: {},
      isSave: false,
      isStart: false,
      isDownLoad: false,
      showLoading: true
    };
  },
  onLoad(option) {
    const manager = common_vendor.index.getFileSystemManager();
    let basepath = common_vendor.wx$1.env.USER_DATA_PATH;
    manager.readdir({
      dirPath: basepath,
      /// 获取文件列表
      success(res) {
        console.log(res);
        res.files.forEach((val) => {
          console.log(val);
          manager.unlinkSync(basepath + "/" + val);
        });
      },
      fail(err) {
        console.log(err);
      },
      complete() {
        console.log("complete");
      }
    });
    manager.getSavedFileList({
      success: (res) => {
        console.log(res);
        res.fileList.forEach((val) => {
          common_vendor.wx$1.removeSavedFile({
            filePath: val.filePath
          });
        });
      }
    });
    common_vendor.index.authorize({
      scope: "scope.writePhotosAlbum",
      success: () => {
        console.log("success,授权文件权限成功");
      },
      fail: () => {
        common_vendor.index.openSetting({
          success: (res) => {
            console.log(res);
          }
        });
      }
    });
    console.log(option);
    this.item = option;
    if (option.isAd == "1") {
      this.createAd();
      this.startDown();
    } else {
      this.startDown();
      let timer = setInterval(() => {
        if (this.isDownLoad) {
          clearInterval(timer);
          common_vendor.index.authorize({
            scope: "scope.writePhotosAlbum",
            success: () => {
              common_vendor.index.showToast({
                title: "获取授权"
              });
              common_vendor.index.saveVideoToPhotosAlbum({
                filePath: this.tempFilePath,
                success: (res) => {
                  console.log(res, "success");
                  this.isSave = true;
                  common_vendor.index.showToast({
                    title: "已保存到相册"
                  });
                  setTimeout(() => {
                    common_vendor.index.navigateBack();
                  }, 1e3);
                },
                fail: (err) => {
                  console.log(this.tempFilePath);
                  common_vendor.index.showToast({
                    title: JSON.stringify(err)
                  });
                  setTimeout(() => {
                    common_vendor.index.navigateBack();
                  }, 1e3);
                  clearInterval(timer);
                }
              });
            },
            fail(err) {
              common_vendor.index.showToast({
                title: "未授权文件权限，无法保存"
              });
            }
          });
        }
      }, 3e3);
    }
  },
  methods: {
    startDown() {
      this.isStart = true;
      let fileName = new Date().valueOf();
      common_vendor.wx$1.env.USER_DATA_PATH + "/" + fileName + ".mp4";
      const downloadTask = common_vendor.index.downloadFile({
        url: this.item.url,
        //仅为示例，并非真实的资源
        timeout: 1e3 * 60 * 30,
        success: (res) => {
          if (res.statusCode === 200) {
            console.log("下载成功");
            this.currentRate = 100;
            this.tempFilePath = res.tempFilePath;
            this.isDownLoad = true;
          }
        },
        fail: (err) => {
          console.log(err);
          this.showLoading = false;
          common_vendor.index.hideLoading();
          common_vendor.index.showModal({
            title: "下载提示",
            content: JSON.stringify(err),
            success: (res) => {
              if (res.confirm) {
                common_vendor.index.setClipboardData({
                  data: this.item.url,
                  success: (res2) => {
                    common_vendor.index.showToast({
                      title: "复制成功"
                    });
                  },
                  complete: (res2) => {
                    console.log(res2);
                  }
                });
                common_vendor.index.navigateBack();
              } else if (res.cancel) {
                console.log("用户点击取消");
                common_vendor.index.navigateBack();
              }
            }
          });
        }
      });
      const updateTime = setInterval(() => {
        if (this.currentRate > 0) {
          clearInterval(updateTime);
        }
        downloadTask.onProgressUpdate((res) => {
          this.currentRate = res.progress;
        });
      }, 1e3);
    },
    createAd() {
      if (common_vendor.index.createRewardedVideoAd) {
        this.adVideo = common_vendor.index.createRewardedVideoAd({
          adUnitId: "adunit-e2d1bf46158bf61e"
        });
        this.adVideo.onLoad(() => {
          console.log("激励视频 广告加载成功 load");
        });
        this.adVideo.onError((err) => {
          console.log("onError event emit", err);
        });
        this.adVideo.onClose((res) => {
          console.log("close", res);
          if (res && res.isEnded) {
            this.adVideo.offClose();
            let timer = setInterval(() => {
              if (this.isDownLoad) {
                clearInterval(timer);
                common_vendor.index.authorize({
                  scope: "scope.writePhotosAlbum",
                  success: () => {
                    common_vendor.index.showToast({
                      title: "获取授权"
                    });
                    common_vendor.index.saveVideoToPhotosAlbum({
                      filePath: this.tempFilePath,
                      success: (res2) => {
                        console.log(res2, "success");
                        this.isSave = true;
                        common_vendor.index.showToast({
                          title: "已保存到相册"
                        });
                        setTimeout(() => {
                          common_vendor.index.navigateBack();
                        }, 1e3);
                      },
                      fail: (err) => {
                        console.log(this.tempFilePath);
                        common_vendor.index.showToast({
                          title: JSON.stringify(err)
                        });
                        setTimeout(() => {
                          common_vendor.index.navigateBack();
                        }, 1e3);
                        clearInterval(timer);
                      }
                    });
                  },
                  fail(err) {
                    common_vendor.index.showToast({
                      title: "未授权文件权限，无法保存"
                    });
                  }
                });
              }
            }, 3e3);
          } else {
            common_vendor.index.showToast({
              title: "未看完视频，无法下载"
            });
            setTimeout(() => {
              common_vendor.index.navigateBack();
            }, 1e3);
          }
        });
      }
      if (this.adVideo) {
        this.adVideo.show().then(() => {
        }).catch((e) => {
          console.log(e);
          this.adVideo.load().then(() => {
            this.adVideo.show();
          }).catch((err) => {
            console.log("激励视频 广告显示失败", err);
            const timer = setInterval(() => {
              console.log(this.isDownLoad);
              if (this.isDownLoad) {
                clearInterval(timer);
                common_vendor.index.saveVideoToPhotosAlbum({
                  filePath: this.tempFilePath,
                  success: (res) => {
                    console.log(res, "success");
                    this.isSave = true;
                    common_vendor.index.showToast({
                      title: "已保存到相册"
                    });
                    setTimeout(() => {
                      common_vendor.index.navigateBack();
                    }, 1e3);
                  },
                  fail: (err2) => {
                    console.log(this.tempFilePath);
                    console.log(err2);
                    common_vendor.index.showLoading({
                      title: "处理视频中"
                    });
                    common_vendor.index.saveFile({
                      tempFilePath: this.tempFilePath,
                      success: (res) => {
                        this.tempFilePath = res.savedFilePath;
                        common_vendor.index.saveVideoToPhotosAlbum({
                          filePath: this.tempFilePath,
                          success: (res2) => {
                            common_vendor.index.showToast({
                              title: "已保存到相册"
                            });
                            setTimeout(() => {
                              common_vendor.index.navigateBack();
                            }, 1e3);
                            let fileMgr = common_vendor.index.getFileSystemManager();
                            fileMgr.unlink({
                              filePath: this.tempFilePath,
                              success: function(r) {
                                console.log("unlink-getFileSystemManager");
                              }
                            });
                          },
                          fail: (err3) => {
                            console.log(err3);
                            common_vendor.index.showModal({
                              title: "下载提示",
                              content: "检测到视频过大，请按确定复制链接到浏览器下载",
                              success: (res2) => {
                                if (res2.confirm) {
                                  common_vendor.index.setClipboardData({
                                    data: this.item.url,
                                    success: (res3) => {
                                      common_vendor.index.showToast({
                                        title: "复制成功"
                                      });
                                    },
                                    complete: (res3) => {
                                      console.log(res3);
                                    }
                                  });
                                  common_vendor.index.navigateBack();
                                } else if (res2.cancel) {
                                  console.log("用户点击取消");
                                  common_vendor.index.navigateBack();
                                }
                              }
                            });
                          }
                        });
                      }
                    });
                    clearInterval(timer);
                  }
                });
              }
            }, 1e3);
          });
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_u_line_progress2 = common_vendor.resolveComponent("u-line-progress");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_line_progress2 + _easycom_u_popup2)();
}
const _easycom_u_line_progress = () => "../../uni_modules/uview-plus/components/u-line-progress/u-line-progress.js";
const _easycom_u_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_line_progress + _easycom_u_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      percentage: $data.currentRate,
      activeColor: "#ff0000"
    }),
    b: common_vendor.p({
      show: true,
      mode: "center"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/项目/西二外包/sirui_new/sirui_new/pages/downLoad/downLoad.vue"]]);
wx.createPage(MiniProgramPage);
