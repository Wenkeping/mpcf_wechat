<template>
	<modal :show="visible" custom padding="0" width="90%" radius="18rpx">
		<view class="header">
			<image src="/static/images/index/menupopup_btn_share_normal.png"></image>
			<image src="/static/images/index/round_close_btn.png" @tap="$emit('cancel')"></image>
		</view>
		<swiper :duration="1000" indicator-dots class="swiper" autoplay :interval="3000">
			<swiper-item v-for="(image, index) in productData.images" :key="index" class="swiper-item">
				<image :src="image.url" class="w-100 h-100"></image>
			</swiper-item>
		</swiper>
		<scroll-view scroll-y class="content">
			<view class="wrapper">
				<view class="title">{{ productData.name }}</view>
				<view class="labels">
					<view class="label" v-for="(label, index) in productData.labels" :key="index" 
						:style="{color: label.label_color, background: $util.hexToRgba(label.label_color, 0.2)}">
						{{ label.name }}
						<image :src="label.label_img" v-for="num in label.label_img_count"  style="width: 20rpx;height: 20rpx;margin-bottom: -2rpx;" ></image> 
					</view>
				</view>
				<!-- <view class="mb-10">产品描述</view>
				<view class="mb-20">{{ productData.description }}</view> -->
				<view style="margin-bottom: 30rpx;"></view>
				<view class="mb-10" style="font-size: 27rpx;">主料食材</view>
				<view class="flex-container">
				  <view class="flex-item">
					 <image src="../../../../static/images/category/ddgg.png" style="width: 100rpx;height: 100rpx;"></image>
				  </view>
				  <view class="flex-item"  style="line-height: 50rpx">
					  <view >猪五花肉</view>
					  <view >250g</view>
				  </view>  
				  <view class="flex-item"  style="line-height: 150rpx">
				  	  <view >￥13.5</view>
				  </view> 
				</view>
				<view class="flex-container">
				  <view class="flex-item">
					 <image src="../../../../static/images/category/jiushui.png" style="width: 100rpx;height: 100rpx;"></image>
				  </view>
				  <view class="flex-item"  style="line-height: 50rpx">
					  <view >湖南青椒</view>
					  <view >20g</view>
				  </view>  
				  <view class="flex-item"  style="line-height: 150rpx">
					  <view >￥2.8</view>
				  </view> 

				</view>
				<view class="mb-10" style="margin-top: 50rpx;font-size: 27rpx;">辅料食材</view>
				<view class="flex-container">
				  <view class="flex-item">
					 <image src="../../../../static/images/category/ddgg.png" style="width: 100rpx;height: 100rpx;"></image>
				  </view>
				  <view class="flex-item"  style="line-height: 50rpx">
					  <view >猪五花肉</view>
					  <view >250g</view>
				  </view>  
				  <view class="flex-item"  style="line-height: 150rpx">
				  	  <view >￥13.5</view>
				  </view> 
				</view>
				<view class="flex-container">
				  <view class="flex-item">
					 <image src="../../../../static/images/category/jiushui.png" style="width: 100rpx;height: 100rpx;"></image>
				  </view>
				  <view class="flex-item"  style="line-height: 50rpx">
					  <view >湖南青椒</view>
					  <view >20g</view>
				  </view>  
				  <view class="flex-item"  style="line-height: 150rpx">
				  	  <view >￥2.8</view> 
				  </view> 
				</view>
				<view class="flex-container"  style="height: 50rpx;margin-top: 20rpx;">
				  <view class="flex-item"></view>
				  <view class="flex-item">猫仆厨房</view>
				  <view class="flex-item">￥3</view>
				</view>
				<view class="flex-container" style="height: 50rpx;">
				  <view class="flex-item"></view>
				  <view class="flex-item">合计</view>
				  <view class="flex-item">￥25</view> 
				</view>
				<view style="margin-top: 50rpx;font-size: 27rpx;">烹饪步骤</view>
				
				<view style="margin-top: 20rpx;">
					<view class="flex-container-step">
                        <view class="flex-item-step" style="background-color: #DBA871;width: 50rpx;border-radius: 5px;">
						  <text style="color:#FFFFFF;margin-left: 10rpx;">1</text>
					      <text style="font-size:5rpx;color:#999999">/9</text> 
						</view>
						 <view class="flex-item-step">莴笋去皮洗净。</view> 
					</view>
					<view style="margin-top: 20rpx;">
						<image src="../../../../static/images/category/ads/scy03.png" style="width: 520rpx;height: 350rpx;margin-left: 80rpx;border-radius: 5px;"></image>
					</view>
					
					<view class="flex-container-step">
					    <view class="flex-item-step" style="background-color: #DBA871;width: 50rpx;border-radius: 5px;">
						  <text style="color:#FFFFFF;margin-left: 10rpx;">2</text>
					      <text style="font-size:5rpx;color:#999999">/9</text> 
						</view>
						 <view class="flex-item-step">切成1cm左右的粗条。</view> 
					</view>
					<view style="margin-top: 20rpx;">
						<image src="../../../../static/images/category/ads/scy03.png" style="width: 520rpx;height: 350rpx;margin-left: 80rpx;border-radius: 5px;"></image>
					</view>
					
					<view class="flex-container-step">
					    <view class="flex-item-step" style="background-color: #DBA871;width: 50rpx;border-radius: 5px;">
						  <text style="color:#FFFFFF;margin-left: 10rpx;">3</text>
					      <text style="font-size:5rpx;color:#999999">/9</text> 
						</view>
						 <view class="flex-item-step">加入盐拌匀。</view> 
					</view>
					<view style="margin-top: 20rpx;">
						<image src="../../../../static/images/category/ads/scy03.png" style="width: 520rpx;height: 350rpx;margin-left: 80rpx;border-radius: 5px;"></image>
					</view>
				</view>			
				
			</view>
		</scroll-view>
		<view class="bottom" :style="{height: !productData.is_single ? '250rpx' : '200rpx'}">
			<view class="d-flex align-items-center">
				<view class="price-and-materials">
					<view class="price">￥{{ productData.price }}</view>
					<view class="materials" v-show="getProductSelectedMaterials">{{ getProductSelectedMaterials }}</view>
				</view>
				<actions :number="productData.number" @add="add" @minus="minus"></actions>
			</view>
			<button type="primary" class="add-cart-btn" @tap="addToCart">加入购物袋</button>
		</view>
		
		
	</modal>
</template>

<script>
	import Modal from '@/components/modal/modal.vue'
	import Actions from '../actions/actions.vue'
	
	export default {
		name: 'ProductModal',
		components: {
			Modal,
			Actions
		},
		props: {
			visible: {
				type: Boolean,
				default: false
			},
			product: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {
				productData: {}
			}
		},
		watch: {
			product(val) {
				this.productData = JSON.parse(JSON.stringify(val))
				this.$set(this.productData, 'number', 1)
			}
		},
		computed: {
			getProductSelectedMaterials() {
				if(!this.productData.is_single && this.productData.materials) {
					let materials = []
					this.productData.materials.forEach(({values}) => {
						values.forEach(value => {
							if(value.is_selected) {
								materials.push(value.name)
							}
						})
					})
					return materials.length ? materials.join('，') : ''
				}
				return ''
			}
		},
		methods: {
			changeMaterialSelected(index, key) {
				const currentMaterial = this.productData.materials[index].values[key]
				if(!currentMaterial.is_exclusive) {
					if(currentMaterial.is_selected) return
					this.productData.materials[index].values.forEach(value => this.$set(value, 'is_selected', 0))
					currentMaterial.is_selected = 1
					this.productData.number = 1
				} else {
					currentMaterial.is_selected = !currentMaterial.is_selected
					this.productData.number = 1
				}
			},
			add() {
				this.productData.number += 1
			},
			minus() {
				if(this.productData.number == 1) {
					return
				}
				this.productData.number -= 1
			},
			addToCart() {
				const product = {...this.productData, 'materials_text': this.getProductSelectedMaterials}
				this.$emit('add-to-cart', product)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		padding: 20rpx 30rpx;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: flex-end;
		z-index: 11;
		
		image {
			width: 60rpx;
			height: 60rpx;
			
			&:nth-child(1) {
				margin-right: 30rpx;
			}
		}
	}
	
	.swiper {
		height: 426rpx;
	}
	
	.content {
		display: flex;
		flex-direction: column;
		font-size: $font-size-sm;
		color: $text-color-assist;
		min-height: 1vh;
		max-height: calc(100vh - 100rpx - 426rpx - 250rpx);
		
		.wrapper {
			width: 100%;
			height: 100%;
			overflow: hidden;
			padding: 30rpx 30rpx 20rpx;
		}
		
		.title {
			font-size: $font-size-extra-lg;
			color: $text-color-base;
			font-weight: bold;
			margin-bottom: 10rpx;
		}
		
		.labels {
			display: flex;
			font-size: 20rpx;
			margin-bottom: 10rpx;
			overflow: hidden;
			flex-wrap: wrap;
			
			.label {
				max-width: 40%;
				padding: 6rpx 10rpx;
				margin-right: 10rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		
		.materials {
			width: 80%;
			margin-bottom: 20rpx;
			
			.group-name {
				padding: 10rpx 0;
			}
			
			.values {
				display: flex;
				flex-wrap: wrap;
				overflow: hidden;
				
				.value {
					background-color: #f5f5f7;
					color: $font-size-base;
					padding: 10rpx 20rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					margin-right: 20rpx;
					margin-bottom: 20rpx;
					border-radius: $border-radius-lg;
					
					&.selected {
						background-color: $color-primary;
						color: $bg-color-white;
					}
				}
			}
		}
	}
	
	.bottom {
		padding: 20rpx 40rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-top: 1rpx solid rgba($color: $border-color, $alpha: 0.3);
		background-color: $bg-color-white;
		position: relative;
		z-index: 11;
		
		.price-and-materials {
			flex: 1;
			display: flex;
			flex-direction: column;
			overflow: hidden;
			margin-right: 10rpx;
			
			.price {
				color: $color-primary;
				font-size: $font-size-extra-lg;
				font-weight: bold;
			}
			
			.materials {
				font-size: $font-size-sm;
				color: $text-color-assist;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
		}
		
		.add-cart-btn {
			margin-top: 20rpx;
			font-size: $font-size-lg;
			border-radius: $border-radius-base;
		}
	}
	
	.flex-container {
	    display: -webkit-flex;
	    display: flex;
	    width: auto;
	    height:auto;
		margin-top: 20rpx;
		justify-content:space-between;
		 
	}
	
	.flex-item {
	    margin: 10rpx;
		width: 100rpx;
		height: 100rpx;
	}
	
	.flex-container-step {
	    display: -webkit-flex;
	    display: flex;
	    width: auto;
	    height:auto;
		margin-top: 20rpx;
		justify-content:flex-start;
		 
	}
	
	.flex-item-step {
	    margin: 10rpx;
	}
	

</style>
