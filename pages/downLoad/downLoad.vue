<template>
	<view class="wra">
		
		<u-popup :show="true" mode="center" >
			 <div class="progress"></div>
		       <u-line-progress :percentage="currentRate" activeColor="#ff0000"></u-line-progress>
			</u-popup>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tempFilePath:'',
				progress:0,
				currentRate:30,
				adVideo:null,
				item:{},
				isSave:false,
				isStart:false,
				isDownLoad:false,
				showLoading:true
			};
		},
			
		onLoad(option){
		 const manager = uni.getFileSystemManager()
		
			  let basepath = wx.env.USER_DATA_PATH 
			  manager.readdir({
			  
			  dirPath: basepath,/// 获取文件列表
			  
			  success(res) {
			  
			  console.log(res)
			  
			  res.files.forEach((val) => { // 遍历文件列表里的数据
			  
			  console.log(val)
			  
			  manager.unlinkSync(basepath + '/' +val);
			  
			  })
			  
			  },fail(err){
			  
			  console.log(err)
			  
			  },complete(){
			  
			  console.log('complete')
			  
			  }
			  
			  })
			  manager.getSavedFileList({
				  success:res=>{
					  console.log(res)
					res.fileList.forEach((val) => { // 遍历文件列表里的数据
					
					        // 删除存储的垃圾数据
					
					        wx.removeSavedFile({
					
					            filePath: val.filePath
					
					        });

				  })
				  }
				  
			  })
			uni.authorize({
			    scope: 'scope.writePhotosAlbum',
			    success:()=>{
					console.log('success,授权文件权限成功')
			        
			    },
				fail:()=>{
					uni.openSetting({
					  success:(res)=> {
					    console.log(res)
					  }
					});
				}
			})
			console.log(option)
			this.item = option
		
			
			if(option.isAd=='1'){
				this.createAd()
				this.startDown()
		
				
			}
	       else{
			
			   	this.startDown()
				let timer = setInterval(()=>{
					if(this.isDownLoad){
						clearInterval(timer)
						uni.authorize({
						  scope: 'scope.writePhotosAlbum',
						  success:()=> {
							  uni.showToast({
							  	title:'获取授权'
							  })
						  uni.saveVideoToPhotosAlbum({
						  	filePath:this.tempFilePath,
						  	success:(res)=>{
						  		console.log(res,'success')
						  		this.isSave = true
						  		uni.showToast({
						  			title:'已保存到相册'
						  		})
						  	
						  		
						  	
						  		setTimeout(()=>{
						  			
						  			 uni.navigateBack()
						  		},1000)
						  	
						  	},
						  	fail:(err)=>{
						  		console.log(this.tempFilePath)
						  		uni.showToast({
						  			title:JSON.stringify(err)
						  		})
						  	setTimeout(()=>{
						  		
						  		 uni.navigateBack()
						  	},1000)
						           clearInterval(timer)
						  				}
						  				})
						  },
						  fail(err) {
						    uni.showToast({
						    	title:'未授权文件权限，无法保存'
						    });
						  }
						});
					}
				},3000)
									
									
		   }

	
	
		},
		methods:{
			startDown(){
		
				
				
				
				this.isStart = true
				 let fileName = new Date().valueOf();
				let filePath1 = wx.env.USER_DATA_PATH + '/' + fileName + '.mp4'
											// console.log(filePath1)
				const downloadTask = uni.downloadFile({
					url: this.item.url,//仅为示例，并非真实的资源
					timeout:1000*60*30,
					success: (res) => {
						if (res.statusCode === 200) {
							console.log('下载成功')
							this.currentRate = 100
				      this.tempFilePath = res.tempFilePath
					  this.isDownLoad = true
					  
						}
					},
					fail:(err)=>{
					 console.log(err)
					 this.showLoading = false
					 uni.hideLoading()
					 uni.showModal({
					 	title: '下载提示',
					 	content:JSON.stringify(err),
					 	success:  (res)=>{
					 		if (res.confirm) {
					 			uni.setClipboardData({
					 			data: this.item.url,
					 			success: (res) => {
					 			uni.showToast({
					 			title: '复制成功'
					 			})
					 			},
					 			complete: (res) => {
					 			console.log(res)
					 			}
					 			}); 
					 			uni.navigateBack()
					 		} else if (res.cancel) {
					 			console.log('用户点击取消');
					 			uni.navigateBack()
					 		}
					 	}
					 });
						
			
					},
				});
				    const updateTime = setInterval(()=>{
						if(this.currentRate>0){
							clearInterval(updateTime)
						}
						downloadTask.onProgressUpdate((res) => {
						       
						        this.currentRate = res.progress
						
						});
					},1000)
			
			},
			createAd(){
				if (uni.createRewardedVideoAd) {
								this.adVideo = uni.createRewardedVideoAd({
									adUnitId: 'adunit-e2d1bf46158bf61e'
								})
								this.adVideo.onLoad(() => {
								
									 console.log('激励视频 广告加载成功 load')
									 
								})
								this.adVideo.onError((err) => {
									console.log('onError event emit',err)
								})
								this.adVideo.onClose((res) => {
									console.log('close',res)
									// 用户点击了【关闭广告】按钮
									if (res && res.isEnded) {
										
										// 正常播放结束，可以下发游戏奖励
					                    this.adVideo.offClose()
						               let timer = setInterval(()=>{
						               					if(this.isDownLoad){
						               						clearInterval(timer)
															  uni.authorize({
															    scope: 'scope.writePhotosAlbum',
															    success:()=> {
																	uni.showToast({
																		title:'获取授权'
																	})
															    uni.saveVideoToPhotosAlbum({
															    	filePath:this.tempFilePath,
															    	success:(res)=>{
															    		console.log(res,'success')
															    		this.isSave = true
															    		uni.showToast({
															    			title:'已保存到相册'
															    		})
															    	
															    		
															    	
															    		setTimeout(()=>{
															    			
															    			 uni.navigateBack()
															    		},1000)
															    	
															    	},
															    	fail:(err)=>{
															    		console.log(this.tempFilePath)
															    		uni.showToast({
															    			title:JSON.stringify(err)
															    		})
															    	setTimeout(()=>{
															    		
															    		 uni.navigateBack()
															    	},1000)
															             clearInterval(timer)
															    				}
															    				})
															    },
															    fail(err) {
															      uni.showToast({
															      	title:'未授权文件权限，无法保存'
															      });
															    }
															  });
						               					
						               					}
						               				},3000)
						               									
						               									
						               }
												
											 
										
										
									 else {
										uni.showToast({
											title:'未看完视频，无法下载'
										})
										setTimeout(()=>{
											uni.navigateBack()
										},1000)
										// 播放中途退出，不下发游戏奖励
									}
								})
							}
				      if (this.adVideo) {
					this.adVideo.show().then(()=>{
					
						
						 
					})
					.catch((e) => {
						console.log(e)
						// 失败重试
						this.adVideo.load()
							.then(() => {
								
								
								 
								this.adVideo.show()})
							.catch(err => {
								console.log('激励视频 广告显示失败',err)
								
								const timer = setInterval(()=>{
									console.log(this.isDownLoad)
										         if(this.isDownLoad){
													 clearInterval(timer)
													
								uni.saveVideoToPhotosAlbum({
									filePath:this.tempFilePath,
									success:(res)=>{
										console.log(res,'success')
										this.isSave = true
										uni.showToast({
											title:'已保存到相册'
										})
									
										
									
										setTimeout(()=>{
											
											 uni.navigateBack()
										},1000)
									
									},
									fail:(err)=>{
										console.log(this.tempFilePath)
										console.log(err)
										uni.showLoading({
											title:'处理视频中'
										})
										uni.saveFile({
											tempFilePath:this.tempFilePath,
											success:(res)=>{
												this.tempFilePath = res.savedFilePath
												uni.saveVideoToPhotosAlbum({
													filePath:this.tempFilePath,
													success:res=>{
														uni.showToast({
															title:'已保存到相册'
														})
														setTimeout(()=>{
															
															 uni.navigateBack()
														},1000)
														let fileMgr = uni.getFileSystemManager();
														            // 删除本地文件
														            fileMgr.unlink({
														              filePath: this.tempFilePath,
														              success: function(r) {
														                console.log('unlink-getFileSystemManager')
														                
														              },
														            })
													},
													fail:(err)=>{
														console.log(err)
														uni.showModal({
															title: '下载提示',
															content:'检测到视频过大，请按确定复制链接到浏览器下载',
															success:  (res)=>{
																if (res.confirm) {
																	uni.setClipboardData({
																	data: this.item.url,
																	success: (res) => {
																	uni.showToast({
																	title: '复制成功'
																	})
																	},
																	complete: (res) => {
																	console.log(res)
																	}
																	}); 
																	uni.navigateBack()
																} else if (res.cancel) {
																	console.log('用户点击取消');
																	uni.navigateBack()
																}
															}
														});
													}
												})
											}
										})
								         clearInterval(timer)
												}
												})
												}
													 },1000)
								
								})
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.progress{
		width: 80vw;
	}
	</style>
