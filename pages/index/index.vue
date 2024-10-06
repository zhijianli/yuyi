<template>
   <view  class="layout">
	   <!-- v-for="item in arrayList" -->
		<swiper  @change="swiperChange" circular class="swiper" vertical>
			<swiper-item v-for="(item, index) in items" :key="index">
				<suitable-item :isSuitable="item.isSuitable" :bgColor="item.bgColor" :color="item.color" :imageArray="item.imageArray"  :lunar="lunar"></suitable-item>
			</swiper-item>
		</swiper>
   </view>
   
</template>

<script setup>
	import {onLoad} from "@dcloudio/uni-app"
	import { ref } from 'vue'
	import solarLunar from 'solarlunar-es';
	
	// 获取当前日期
	const currentDate = new Date();
	const year = currentDate.getFullYear(); // 获取当前年份
	const month = currentDate.getMonth() + 1; // 获取当前月份（月份从0开始，所以加1）
	const day = currentDate.getDate(); // 获取当前日期
	
	const solar2lunarData = solarLunar.solar2lunar(year, month, day); // 输入的日子为公历
	let lunarStr = "农历"+solar2lunarData.yearCn+solar2lunarData.monthCn+solar2lunarData.dayCn+"日"
	let lunarYear = solar2lunarData.gzYear+solar2lunarData.animal+"年"
	let lunarMonth = solar2lunarData.gzMonth+"月"
	let lunarDay = solar2lunarData.gzDay+"日"
	console.log(lunarStr+lunarYear+lunarMonth+lunarDay)
	
	const lunar = ref({
		lunarStr,
		lunarYear,
		lunarMonth,
		lunarDay
	});
	
	const items = ref([{
		isSuitable:'吉',
		bgColor:['#F9F4DC','#55BB8A','#B0D5DF'],
		color:['杏仁黃','麦苗绿','湖水蓝'],
		pingyin:'Xingrenhuang',
		imageArray:[['杏仁黄2.jpg','杏仁黄4.jpg','杏仁黄6.jpg'],['麦苗绿2.jpg','麦苗绿4.jpg','麦苗绿6.jpg'],['湖水蓝1.jpg','湖水蓝2.jpg','湖水蓝3.jpg']]
	},{
		isSuitable:'次吉',
		bgColor:['#3D3B4F','#177CB0'],
		color:['玄色','青色'],
		pingyin:'Xingrenhuang',
		imageArray:[['玄色1.jpg','玄色2.jpg','玄色3.jpg'],['青色1.jpg','青色2.jpg','青色3.jpg']]
	},{
		isSuitable:'忌',
		bgColor:['#E4DFD7','#D42517','#FFFEF8'],
		color:['珍珠灰','鹤顶红','象牙白'],
		pingyin:'Ganlanhui',
		imageArray:[['珍珠灰1.jpg','珍珠灰2.jpg','珍珠灰3.jpg'],['鹤顶红1.jpg','鹤顶红2.jpg','鹤顶红3.jpg'],['象牙白1.jpg','象牙白2.jpg','象牙白3.jpg']]
	}]);

	// const swiperChange = (event) => {
	// 	const currentIndex = event.detail.current; // 获取当前滑块的索引
	// 	const currentBgColor = items.value[currentIndex].bgColor; // 根据索引获取 bgColor
	// 	console.log('当前背景颜色:', currentBgColor);

	//     // 使用 setTimeout 来延迟导航栏颜色切换
	//     setTimeout(() => {
	// 	  uni.setNavigationBarColor({	    
	// 		backgroundColor: currentBgColor,  // 设置背景颜色
	// 	    animation: {
	// 		  duration: 300,  // 动画时间
	// 		  timingFunc: 'easeIn'
	// 	    }
	// 	  });
	//     }, 300); // 延迟300毫秒，确保滑块切换动画完成后再改变颜色
	// }

</script>

<style lang="scss" scoped>
	
	page {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}

   .layout{

	  width: 750rpx;
	  height: 100vh;
	  
	  .swiper{
  
		  width: 100%;
		  height: 100%;
	  }
   }

</style>


