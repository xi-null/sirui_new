<template>
	<view class="list">
		<u-list @scrolltolower="more">
			<u-list-item v-for="(item, index) in list" :key="index" class="item">
				<view class="main" v-if="item.url" @click="detail(item)">
					<view class="title">{{item.title}}</view>
					<view class="title">{{item.time}}</view>
					<player :src="item.url" v-if="!isEnd"></player>
					<view @tap.stop="stop">
						<video :src="item.url" v-if="isEnd" style="width: 90vw; height: 300rpx"></video>
					</view>

					<view class="bottom" v-if="isEnd">
						<bottom :item="item" @refresh="$emit('refresh')"></bottom>

					</view>
				</view>
			</u-list-item>
		</u-list>
	</view>
</template>


<script>
	import player from '/components/player/player.vue'
	import bottom from '/components/bottom/bottom.vue'
	export default {
		comments: [player, bottom],
		props: ['isEnd', 'list'],
		data() {
			return {
			}
		},
		mounted() {
			console.log(this.list[0].url,"this.listthis.list")
		},
		methods: {
			detail(item) {
				console.log(item)
				uni.navigateTo({
					url: `/pages/detail/detail?userId=${item.userId}&orderId=${item.orderId}&isLike=${item.isLike}`
				})
			},
			statechange(e) {
				console.log('live-player code:', e.detail.code)
			},
			error(e) {
				console.error('live-player error:', e.detail.errMsg)
			},
			more() {
				this.$emit('getMore')
			},



		},
	}
</script>
<style lang="scss" scoped>
	.list {
		width: 100vw;
		height: 100vh;
		background-color: #f4f4f4;

		.item {
			background-color: white;
			margin-top: 20rpx;
			padding: 10rpx;
		}

		.main {
			margin: auto;
			display: flex;
			flex-direction: column;
			margin-bottom: 20rpx;



			.title {
				color: black;
				width: 90vw;
				margin-bottom: 20rpx;




			}
		}
	}
</style>
