
<template>
	<web-view :src="src"></web-view>
</template>
<script>
	//此页面是复制的now页面  想改为->赛事回放页面
	export default{
		data(){
			return {
			src:`https://h5-1259813764.cos.ap-nanjing.myqcloud.com/now_2.html?userId=${uni.getStorageSync('user').id}`,
			// src:`http://127.0.0.1:5500/now.html?userId=${uni.getStorageSync('user').id}`
			}
		}, 
	
		onLoad(query){
			console.log(query.scene)
			
			if(query.scene==undefined){
				const obj = {
							 projectId:uni.getStorageSync('project').id,
							 userId:uni.getStorageSync('user').id,
							 appId:'wx129a87c8f2c167ee'
						 }
						 this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/now_2.html?query=${encodeURIComponent(JSON.stringify(obj))}`
						 console.log(this.src,11)
					// this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/now_2.html?userId=${uni.getStorageSync('user').id}`
			}
			else{
				this.src = `https://h5-1259813764.cos.ap-nanjing.myqcloud.com/now_2.html?userId=${uni.getStorageSync('user').id}&projectId=${query.scene}`
				console.log(this.src)
			}
			wx.getSystemInfo({
				  success: (res) => {
				  	// windows | mac为pc端
				  	// android | ios为手机端
				    console.log('getSystemInfo,', res.platform);
					if(res.platform=='android'||res.platform=='ios'){
						uni.switchTab({
							url:'/pages/index/index'
						})
					
						
					}
				  }
				});
		
		},
		onShareAppMessage(res){
				
			return {
				title: '思锐AI',
				path: `/pages/preVideo/preVideo`,
			}
		},
		
			
		
	}
</script>

<style>
</style>
