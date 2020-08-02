<template>
	<view class="container">
		<swiper class="banner-swiper" circular autoplay :interval="5000" :duration="1000">
			<swiper-item class="banner-swiper-item" v-for="(item, index) in swipers" :key="index">
				<image :src="item" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		<view class="content">
			<view class="section">
				<navigator class="item" open-type="switchTab" url="/pages/index/index" hover-class="none">
					<image src="/static/images/home/home_icon_waimai1.png" mode="widthFix"></image>
					<view class="wenyue-font">开始点餐</view>
				</navigator>
				<navigator class="item" open-type="switchTab" url="/pages/my/my" hover-class="none">
					<image src="https://wx.qlogo.cn/mmopen/vi_32/Hx7MFkCEmZVHziaTTiaHSiaCs4ApnH5CD0nYOhOg1nYUUMYtxMXkL6L4VL5icRfO5w4LGzW5ib0FZicwj2MficyYfZgCw/132" class="avatar" mode="widthFix"></image>
					<view class="wenyue-font">个人中心</view>
				</navigator>	
			</view>
		</view>
		<view>
			<image class="xc" src="https://go.cdn.heytea.com/storage/ad/2020/05/24/49f9b50738dd47878cf1ab54c2eee2e0.jpg"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: [
					"https://go.cdn.heytea.com/storage/ad/2020/05/21/bfd57914d80d4671b19f5d0ccc176cd5.jpg",
					"https://go.cdn.heytea.com/storage/ad/2020/05/24/49f9b50738dd47878cf1ab54c2eee2e0.jpg",
					"https://go.cdn.heytea.com/storage/ad/2020/05/01/e1c6915022c849fd9492377021aef454.jpg",
					"https://go.cdn.heytea.com/storage/ad/2020/04/27/db60b797c1cd4afabe9666e7df958ffd.jpg",
					"https://go.cdn.heytea.com/storage/ad/2020/05/21/4ba53dda599345bdaf28a08420dd1b6f.jpg"
				]
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	page {
		max-height: 100%;
	}
	
	.banner-swiper {
		width: 100%;
		height: 600rpx;
		
		.banner-swiper-item {
			image {
				width: 100%;
			}
		}
	}
	
	.content {
		width: 100%;
		padding: 0 30rpx;
		position: relative;
	}
	
	.section {
		position: relative;
		background-color: $bg-color-white;
		margin-top: -60rpx;
		border-radius: $border-radius-lg;
		padding: 60rpx 0;
		display: flex;
		margin-bottom: 30rpx;
		box-shadow: $box-shadow;
		
		
		.item {
			flex: 1;
			flex-shrink: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			position: relative;
			
			&:nth-child(1):after {
				content: '';
				position: absolute;
				right: 0;
				top: 0;
				bottom: 0;
				width: 2rpx;
				background-color: $border-color;
			}
			
			image {
				width: 100rpx;
				margin-bottom: 20rpx;
			}
			
			.wenyue-font {
				font-size: 48rpx;
				margin-bottom: 10rpx;
			}	
			
			.avatar {
				width: 100rpx;
				height: 100rpx;
				border-radius: 100%;
			}
		}
	}
	
	.xc {
		width: 690rpx;
		height: 420rpx;
		margin-left: 30rpx;
		border-radius: 5%;
	}
</style>
