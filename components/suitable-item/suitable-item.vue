<template>
	<view class="layout" :style="{ backgroundColor: bgColor }">
		
		<!-- 上拉图片区域 -->
		<view class="dropup-indicator"  >
		  <image v-if="!isSuitable" src="../../static/上拉.png" mode="aspectFit" class="dropup-image"></image>
		</view>
		
		<view class="suitable">
			<view class="isSuitable" v-if="isSuitable">
				宜
			</view>
			<view class="isNSuitable" v-if="!isSuitable">
				忌
			</view>
		</view>

		<view class="viewPhoto">
			<view class="left">
				<swiper  autoplay interval="3000" duration="300" circular>
					<swiper-item v-for="item in imageArray">
					    <image :src="`../../common/images/${item}`" mode="aspectFit" class="image"></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<view class="pingyin">
					 {{pingyin}}
				</view>
				<view class="color">
				   {{color}}
				</view>
			</view>
		</view>
		<view class="lunar">
			<view class="date">{{lunar.lunarStr}}</view>
			<view class="year">{{lunar.lunarYear}}</view>
			<view class="monthday">{{lunar.lunarMonth}} {{lunar.lunarDay}}</view>
		</view>
		
		
		<!-- 下拉图片区域 -->
		<view class="dropdown-indicator"  >
		  <image v-if="isSuitable" src="../../static/下拉.png" mode="aspectFit" class="dropdown-image"></image>
		</view>
		
	</view>
</template>

<script setup>
import { ref } from 'vue';
	
defineProps({
	isSuitable:{
		type:Boolean,
		default:false
	},
	bgColor:{
		type:String,
		default:"#FFF"
	},
	color:{
		type:String,
		default:"無顔色"
	},
	pingyin:{
		type:String,
		default:"pingyin"
	},
	imageArray: {  // 定义一个数组类型的属性
	    type: Array,
	    default() {
	      return ["女装2.jpg","女装4.jpg","女装6.jpg"];
	    }
	},
	lunar:{
		type: Object,
		default(){
		  return {
				lunarStr: '',
				lunarYear: '',
				lunarMonth: '',
				lunarDay: ''
		  }
		}
	}
})



</script>

<style lang="scss" scoped>
	@font-face {
	  font-family: 'HldFont'; /* 自定义字体的名称 */
	  src: url('@/common/fonts/黄令东齐伋复刻（Combo）.ttf') format('truetype'); /* 字体文件的路径 */
	}
     
	.layout{
		font-family: 'HldFont', sans-serif;
	    display: flex;
	    flex-direction: column; /* 垂直排列子元素 */
	    justify-content: space-between; /* 在容器内分布空间，确保.lunar在底部 */
	    // height: 100vh; /* 100% 的视口高度 */
		width: 750rpx;
		position: relative;
		.suitable{
			font-size: 150rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			
			.isSuitable,.isNSuitable{
				width: 150rpx;  /* 宽度和高度相同，确保是个正方形 */
				height: 150rpx;
				border-radius: 50%; /* 圆形 */
				// border: 10rpx solid #000; /* 给圆形添加边框 */
				margin: 0 auto; /* 如果需要将圆形居中，可以使用 auto margin */
				color: #FFF;
				// margin-top: 50rpx;
			}
			
			.isSuitable{
                // margin-top: 50rpx;
				background-color: red; /* 背景色可以根据需要调整 */
			
			}
			.isNSuitable{
                // margin-top: -100rpx;
				background-color: black; /* 背景色可以根据需要调整 */
		
			}
		    
		}
		.viewPhoto{
			
			display: flex;
			justify-content: space-between; /* 子元素之间留空，一个居左，一个居右 */
			align-items: center; /* 如果需要垂直居中对齐，可以使用这个属性 */
			.left{
				width: 100%;;
				height: 100%;
				.image{
					width: 100%;
					height: 100%;
				}
				flex:1;
				swiper{
					height: 100%;
					&-item{
						height: 100%;
						font-size: 30rpx;
						color:#666;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}
				
			.right{
				writing-mode: vertical-rl; /* 将文字垂直排列，从右到左 */
				text-orientation: upright; /* 确保文字保持正向直立显示 */
				margin-right: 105rpx;
				.pingyin{
					font-size: 56rpx;
					margin-top: 20rpx;
					color: #c4ada7;
					
				}
				.color{
					font-size: 112rpx;
					margin-right: 30rpx;
					
				}
			}
			
		}
	    .lunar{
			width: 750rpx;
			height: 200rpx;
			
			text-align: right; /* 将文字靠右对齐 */
			.date{
				font-size: 56rpx;
				padding-right: 50rpx; /* 添加右边的间距 */
			}
			.year{
				font-size: 56rpx;
				padding-right: 50rpx; /* 添加右边的间距 */
			}
			.monthday{
				font-size: 31rpx;
				padding-right: 50rpx; /* 添加右边的间距 */
			}
			
			
		}
		
		/* 下拉图片区域 */
		.dropdown-indicator {
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  margin-bottom: 100rpx;
		  
		  .dropdown-image {
		    width: 50rpx;
		    height: 50rpx;
		  }
		}
		
		/* 上拉图片区域 */
		.dropup-indicator {
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  
		  .dropup-image {
		    width: 50rpx;
		    height: 50rpx;
		  }
		}
		
	}

</style>
