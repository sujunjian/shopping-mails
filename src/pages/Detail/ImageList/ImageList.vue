<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- v-for="(sku,index) in skuInfo.skuImageList" :key="sku.id" -->
      <div
        class="swiper-slide"
        v-for="(sku, index) in skuImageList"
        :key="sku.id"
      >
        <img :src="sku.imgUrl"  :class="{active:currentindex==index}" @click="changeindex(index)"/>
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "@/pages/Home/ListContianer/js/swiper";
export default {
  name: "ImageList",
  data() {
    return {
      currentindex:0,
    }
  },
  props: ["skuImageList"],
  watch: {
    // 数据监听：监听数据是否发生变化，后端传过来的数据使得页面更新
    skuImageList: {
      handler(newvalue, oldvalue) {
        this.$nextTick(() => {
          new Swiper(".swiper-container", {
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            // 定义界面多少个为一组，一次切换图片的个数
            slidesPerView:4
          });
        });
      },
    },
  },
  methods: {
    changeindex(index){
      this.currentindex=index;
      this.$bus.$emit('changeindex',index);
    }
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      // &:hover {
      //   border: 2px solid #f60;
      //   padding: 1px;
      // }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>