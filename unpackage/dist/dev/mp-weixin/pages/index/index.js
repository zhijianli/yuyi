"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_suitable_item2 = common_vendor.resolveComponent("suitable-item");
  _easycom_suitable_item2();
}
const _easycom_suitable_item = () => "../../components/suitable-item/suitable-item.js";
if (!Math) {
  _easycom_suitable_item();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const items = common_vendor.ref([
      {
        isSuitable: true,
        bgColor: "#F9F4DC",
        color: "杏仁黃",
        imageArray: ["女装2.jpg", "女装4.jpg", "女装6.jpg"]
      },
      {
        isSuitable: false,
        bgColor: "#503E2A",
        color: "橄榄灰",
        imageArray: ["女装8.jpg", "女装10.jpg", "女装12.jpg"]
      }
    ]);
    const swiperChange = (event) => {
      const currentIndex = event.detail.current;
      const currentBgColor = items.value[currentIndex].bgColor;
      console.log("当前背景颜色:", currentBgColor);
      setTimeout(() => {
        common_vendor.index.setNavigationBarColor({
          backgroundColor: currentBgColor,
          // 设置背景颜色
          animation: {
            duration: 300,
            // 动画时间
            timingFunc: "easeIn"
          }
        });
      }, 300);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(items.value, (item, index, i0) => {
          return {
            a: "1cf27b2a-0-" + i0,
            b: common_vendor.p({
              isSuitable: item.isSuitable,
              bgColor: item.bgColor,
              color: item.color,
              imageArray: item.imageArray
            }),
            c: index
          };
        }),
        b: common_vendor.o(swiperChange)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
