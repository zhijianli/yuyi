"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "suitable-item",
  props: {
    isSuitable: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: "#FFF"
    },
    color: {
      type: String,
      default: "無顔色"
    },
    imageArray: {
      // 定义一个数组类型的属性
      type: Array,
      default() {
        return ["女装2.jpg", "女装4.jpg", "女装6.jpg"];
      }
    }
  },
  setup(__props) {
    common_vendor.ref(["女装2.jpg", "女装4.jpg", "女装6.jpg"]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !__props.isSuitable
      }, !__props.isSuitable ? {
        b: common_assets._imports_0
      } : {}, {
        c: __props.isSuitable
      }, __props.isSuitable ? {} : {}, {
        d: !__props.isSuitable
      }, !__props.isSuitable ? {} : {}, {
        e: common_vendor.f(__props.imageArray, (item, k0, i0) => {
          return {
            a: `../../common/images/${item}`
          };
        }),
        f: common_vendor.t(_ctx.pingyin),
        g: common_vendor.t(__props.color),
        h: __props.isSuitable
      }, __props.isSuitable ? {
        i: common_assets._imports_1
      } : {}, {
        j: __props.bgColor
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b7a0a06d"]]);
wx.createComponent(Component);
