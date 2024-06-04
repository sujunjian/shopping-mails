<template>
  <div class="spec-preview">
    <img :src="skuImageList[currentindex].imgUrl" />
    <!-- 鼠标事件 放大镜位置-->
    <div class="event" @mousemove="handler">
    </div>
    <div class="big"  >
      <img :src="skuImageList[currentindex].imgUrl"  ref="big"/>
    </div>
    <!-- 遮罩层  定义一个获取dom元素节点的ref对象-->
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props:["skuImageList"],
    data() {
      return {
        currentindex:0
      }
    },
    methods: {
      handler(event){
        let mask=this.$refs.mask;
        let left=event.offsetX-mask.offsetWidth/2;
        let top=event.offsetY-mask.offsetWidth/2;
        if(top<=0)top=0;
        if (top>=mask.offsetHeight)top= mask.offsetHeight
        if(left<=0)left=0;
       if (left>=mask.offsetWidth)left= mask.offsetWidth;
        // 修改dom元素的top 和left
        mask.style.left=left+'px';
        mask.style.top=top+"px";
   // 获取的位置应该是图片所在的位置的大图，而不是她的父元素
       let big=this.$refs.big;
       big.style.left=left*-2+'px';
       big.style.top=top*-2+'px';
      }
    },
    computed:{
      // ...mapGetters(["skuInfo"]),
       // 如果服务器的数据还没有回来，数据为空
    skuImagelist(){
      return this.skuImageList[this.currentindex]||{}
     }
    },
    mounted() {
      this.$bus.$on('changeindex',(index)=>{
      this.currentindex=index;
      })
    }
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(66, 208, 233, 0.4);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>