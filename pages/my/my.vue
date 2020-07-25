<template>
	<view class="container">
		<image class="w-100" src="https://go.cdn.heytea.com/storage/products/2019/12/18/01954797f3fb470cb6ba1606476c658c.png" mode="widthFix"></image>
		<view class="content">	
			<!-- member card begin -->
			<view class="member-card">
				<view class="info">
					<image @tap="info" src="https://wx.qlogo.cn/mmopen/vi_32/Hx7MFkCEmZVHziaTTiaHSiaCs4ApnH5CD0nYOhOg1nYUUMYtxMXkL6L4VL5icRfO5w4LGzW5ib0FZicwj2MficyYfZgCw/132" class="avatar"></image>
					<view class="welcome">
						<view>您好, Moteay</view>
						<view class="font-size-base">猫仆厨房，欢聚一堂</view>
					</view>
				</view>
			</view>
			<!-- member card end -->
		</view>
		
		<list-cell hover arrow @click="addresses" style="width: 690rpx;margin-left: 30rpx;border-radius: 5px;">
			<view class="list-cell-wrapper">
				<view view="title">收货地址</view>
			</view>
		</list-cell>
		
	</view>
</template>

<script>
	import listCell from '@/components/list-cell/list-cell.vue'
	
	export default {
		components: {
			listCell
		},
		data() {
			return {
				
			}
		},
		async onLoad() {
			
		},
		methods: {
			info() {
				uni.navigateTo({
					url: '/pages/my/info'
				})
			},
			addresses() {
				uni.navigateTo({
					url: '/pages/addresses/addresses'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
/* #ifdef H5 */
page {
	height: auto;
	min-height: 100%;
}
/* #endif */

.content {
	padding: 0 30rpx;
}

.welcome {
	margin-left: 136rpx;
	font-size: $font-size-lg;
	color: $text-color-warning;
	line-height: 50rpx;
}

.member-card {
	margin-top: -100rpx;
	background-color: $bg-color-white;
	padding: 20rpx;
	display: flex;
	flex-direction: column;
	border-radius: $border-radius-base;
	margin-bottom: 40rpx;
	
	.info {
		position: relative;
		margin-top: -50rpx;
		display: flex;
		align-items: center;
		position: relative;
		padding: 20rpx 0;
		
		.avatar {
			width: 150rpx;
			height: 150rpx;
			border-radius: 100%;
		}
	}
	
}


.list-cell-wrapper {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	.title {
		font-size: $font-size-lg;
	}
	
	.subtitle {
		font-size: $font-size-sm;
		color: $text-color-assist;
	}
}
</style>
