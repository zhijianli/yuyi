<template>
   <view class="layout">
	   <!-- v-for="item in arrayList" -->
		<swiper  @change="swiperChange" circular class="swiper" vertical>
			<swiper-item v-for="(item, index) in items" :key="index">
				<suitable-item :isSuitable="item.isSuitable" :bgColor="item.bgColor" :color="item.color" :imageArray="item.imageArray" :pingyin="item.pingyin" :lunar="lunar"></suitable-item>
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
	// console.log(lunarStr+lunarYear+lunarMonth+lunarDay)
	
	const lunar = ref({
		lunarStr,
		lunarYear,
		lunarMonth,
		lunarDay
	});
	
	const items = ref([{
		isSuitable:true,
		bgColor:'#F9F4DC',
		color:'杏仁黃',
		pingyin:'Xingrenhuang',
		imageArray:['女装2.jpg','女装4.jpg','女装6.jpg']
	},
	{
		isSuitable:false,
		bgColor:'#503E2A',
		color:'橄榄灰',
		pingyin:'Ganlanhui',
		imageArray:['女装8.jpg','女装10.jpg','女装12.jpg']
	}]);

	const swiperChange = (event) => {
		const currentIndex = event.detail.current; // 获取当前滑块的索引
		const currentBgColor = items.value[currentIndex].bgColor; // 根据索引获取 bgColor
		console.log('当前背景颜色:', currentBgColor);

	    // 使用 setTimeout 来延迟导航栏颜色切换
	    setTimeout(() => {
		  uni.setNavigationBarColor({	    
			backgroundColor: currentBgColor,  // 设置背景颜色
		    animation: {
			  duration: 300,  // 动画时间
			  timingFunc: 'easeIn'
		    }
		  });
	    }, 300); // 延迟300毫秒，确保滑块切换动画完成后再改变颜色
	}
	
	
	onLoad((e)=>{	


      
    })

</script>

<style lang="scss" scoped>
  .layout{
	  width: 750rpx;
	  height: 100vh;
	  
	  .swiper{
		  width: 100%;
		  height: 100%;
	  }
  }
</style>
