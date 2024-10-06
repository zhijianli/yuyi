<template>
	<view class="layout" :style="{ backgroundColor: pageBgColor }">
		
		<!-- 上拉图片区域 -->
		<view class="dropup-indicator"  >
		  <image v-if="isSuitable === '忌'" src="../../static/上拉.png" mode="aspectFit" class="dropup-image"></image>
		</view>
		
		<view class="isSuitable" v-if="isSuitable === '吉'">
			吉
		</view>
		<view class="isNSuitable" v-if="isSuitable === '忌'">
			忌
		</view>
		<view class="isCSuitable" v-if="isSuitable === '次吉'">
			次吉
		</view>

		<view class="viewPhoto">
			<view class="left">
				<swiper  autoplay interval="3000" duration="300" circular>
					<swiper-item v-for="item in clothesArray">
					    <image :src="`../../common/images/${item}`" mode="aspectFit" class="image"></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="center">
				 {{colorName}}
			</view>
			<view class="right">
				<!-- -->
				<view class="colorBall" v-for="(item,index) in bgColor" :key="index"  :style="{backgroundColor: item}"  @click="handleClick(index)" ></view>
			</view>
		</view>
		<view class="lunar">
			<view class="date">{{lunar.lunarStr}}</view>
			<view class="year">{{lunar.lunarYear}}</view>
			<view class="monthday">{{lunar.lunarMonth}} {{lunar.lunarDay}}</view>
		</view>
		
		
		<!-- 下拉图片区域 -->
		<view class="dropdown-indicator"  >
		  <image v-if="isSuitable === '吉' || isSuitable === '次吉'" src="../../static/下拉.png" mode="aspectFit" class="dropdown-image"></image>
		</view>
		
	</view>
</template>

<script setup>
import { ref } from 'vue';

const pageBgColor = ref("")
const colorName = ref("")
const clothesArray = ref([])
const isSuitable = ref("")
	
const props = defineProps({
	isSuitable:{
		type:String,
		default:'吉'
	},
	bgColor:{
		type:Array,
		default:['#F9F4DC','#EF6F48','#B0D5DF']
	},
	color:{
		type:Array,
		default:['杏仁黃','草莓红','湖水蓝']
	},
	pingyin:{
		type:String,
		default:"pingyin"
	},
	imageArray: {  // 定义一个数组类型的属性
	    type: Array,
	    default() {
	      return [['女装2.jpg','女装4.jpg','女装6.jpg'],['女装8.jpg','女装10.jpg','女装12.jpg'],['女装8.jpg','女装10.jpg','女装12.jpg']];
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

pageBgColor.value = props.bgColor[0]
colorName.value = props.color[0]
clothesArray.value = props.imageArray[0]
isSuitable.value = props.isSuitable

function handleClick(index) {
  
  pageBgColor.value = props.bgColor[index]
  colorName.value = props.color[index]
  clothesArray.value = props.imageArray[index]
}


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

		.isSuitable,.isNSuitable{
			font-size: 150rpx;
			// margin-top: -100rpx;
			width: 150rpx;  /* 宽度和高度相同，确保是个正方形 */
			height: 150rpx;
			border-radius: 50%; /* 圆形 */
			// border: 10rpx solid #000; /* 给圆形添加边框 */
		    margin: 0 auto; /* 如果需要将圆形居中，可以使用 auto margin */
			color: #FFF;
			// display: flex;
			// align-items: center;
			// justify-content: center;
			// text-align: center; // 新增的样式，确保文本居中
			line-height: 150rpx; // 新增的样式，用于确保在正方形中垂直居中
		}
		
		.isSuitable{
			background-color: red; /* 背景色可以根据需要调整 */
		
		}
		.isNSuitable{
			background-color: black; /* 背景色可以根据需要调整 */	
		}
		.isCSuitable{
			font-size: 85rpx;
			width: 150rpx;  /* 宽度和高度相同，确保是个正方形 */
			height: 150rpx;
			border-radius: 50%; /* 圆形 */
			margin: 0 auto; /* 如果需要将圆形居中，可以使用 auto margin */
			color: #FFF;
			line-height: 150rpx; // 新增的样式，用于确保在正方形中垂直居中
			background-color: #894E54;
		}
		.viewPhoto{
			display: flex;
			justify-content: space-between; /* 子元素之间留空，一个居左，一个居右 */
			align-items: center; /* 如果需要垂直居中对齐，可以使用这个属性 */
			height: 770rpx;
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
				
			.center{
				font-size: 112rpx;
				margin-right: 50rpx;
				writing-mode: vertical-rl; /* 将文字垂直排列，从右到左 */
				text-orientation: upright; /* 确保文字保持正向直立显示 */
			}
			.right{
				margin-right: 100rpx;
				.colorBall{
					width: 66rpx;  /* 宽度和高度相同，确保是个正方形 */
					height: 66rpx;
					border-radius: 50%; /* 圆形 */
					border: 5rpx solid #000; /* 给圆形添加边框 */
					margin: 90rpx 0rpx;
					
				}
				
			}
			
		}
	    .lunar{
			width: 750rpx;
			height: 200rpx;
			
			margin-bottom: -150rpx;
			
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
		  margin-bottom: 50rpx;
		  
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
		  margin-top: 50rpx;
		  
		  .dropup-image {
		    width: 50rpx;
		    height: 50rpx;
		  }
		}
		
	}

</style>
