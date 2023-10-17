<template>
	<view class="vedio" @tap.stop="stop">
		<live-player
		   v-if="src"
		  :src="src"
		  @statechange="statechange"
		  @error="error"
		  style="width: 90vw; height: 300rpx;"
		  id="player"
		  class="player"
		 @click="show"
		 autoplay
		>
		<u-icon name="play-circle"  size="28" class="center"  v-if="!isStart"  @click.stop="start"></u-icon>
		<view class="control" v-if="isShow">
			<u-icon name="pause-circle"  size="28" class="center"  @click.stop="start" v-if="isStart" ></u-icon>
			<view class="bottom" @tap.stop="stop">
				<u-icon name="volume"  size="28" class="mute"  v-if="!isMuted"  @click.self.stop="mute"></u-icon>
				<u-icon name="volume-off"  size="28" class="mute"  v-if="isMuted"  @click.self.stop="mute"></u-icon>
				<u-icon name="scan"  size="28" class="scan"    @click.self.stop="full"></u-icon>


			</view>
			
		</view>
	
		
		</live-player>
		
	
	</view>
</template>

<script>
	export default {
		name:"player",
		props:['src'],
		data() {
			return {
				player:{},
				isStart:false, //是否播放
				isShow:false,// 是否显示控制
				isMuted:false, //是否静音
				isFull:false, //是否全屏
				 
			};
		},
		mounted(){
		         this.player = uni.createLivePlayerContext("player",this)
				// this.player.play({
				// })
				// setTimeout(()=>{
				// 	this.player.pause()
				// },2000)
				
				
				
			
		},
		methods:{
			statechange(e){
			           console.log('live-player code:', e.detail.code)
					   if(e.detail.code==2033){
						   this.player.pause()
					   }
			       },
			       error(e){
			           console.error('live-player error:', e.detail.errMsg)
			       },
				   start(){
						   this.isStart = !this.isStart
						   	if(this.isStart){
								this.player.resume()
						   		this.player.play({
									success:()=>{  
										console.log(this.src)
									   this.player.mute()
									   this.player.mute()
									}
								})
								
						   		
						   	}
							else{
								this.player.pause({
									success:()=>{
										console.log('pause')
									}
								})
							}
						   	
						   	
						   
					   },
					   show(){
						 
							   this.isShow = !this.isShow
						   
					   },
					   mute(){
						   // 有问题
						   console.log('mute')
						   this.isMuted = !this.isMuted
						  
							   this.player.mute()
							 
						   
						  
						   
						   
					   },
					   full(){
						   this.isFull = !this.isFull
						   if(this.isFull){ 
							   console.log('full-begin')
							   this.player.requestFullScreen({
							   direction:90,
							   success:()=>{
								   console.log('full')
							   },
							   fail:()=>{
								   cosole.log('fail')
							   },
							   complete:()=>{
								   console.log('complete')
							   }
						   })
						   }
						   else{
							   this.player.exitFullScreen(
							   {
							   	 direction:90,
								 success:()=>{
									 console.log('unfull')
								 }
							   })
						   }
						  
					   }
					   
				   
		},
		
	}
</script>

<style lang="scss" scoped>
.vedio{
	.player{
		position: relative;
		
		.center{
			position: absolute;
		     left: 50%;
			 top: 50%;
			 transform: translate(-50%,-50%);
		}
		
		.control{
			.bottom{
				display: flex;
				position: absolute;
				bottom: 20rpx;
				justify-content: space-between;
				right: 20rpx;
				width: 150rpx;
				
				
			}
		}
	}
}
</style>