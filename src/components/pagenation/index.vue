<template>
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <div></div>
      <ul>
        <li class="prev disabled">
          <!-- 点击之后触发自定义事件 使用disabled确定是否显示-->
          <a :disabled="pageNo<=1" @click="setpage(pageNo-1)"><button :disabled="pageNo===1">«上一页</button></a>
        </li>
        <li   v-if="startEnd.start>1" @click="setpage(1)">
          <a >1</a>
        </li>
        <li class="dotted" v-if="startEnd.start>2"><span>...</span></li>
        <!-- 遍历数组，显示多少个页面 v-for="(page,index) in startEndArr" :key="index"-->
        <li v-for="(page,index) in startEndArr" :key="index" 
        :class="{active:page==pageNo}"
        @click="setpage(page)"
        >
          <a >{{page}}</a>
        </li>
        <li class="dotted" v-if="startEnd.end<totalpage-1"><span>...</span></li>
        <li>
          <a   v-if="startEnd.end<totalpage"  @click="setpage(totalpage)">{{totalpage}}</a>
        </li>
        <li class="next">
          <a  @click="setpage(pageNo+1)"><button :disabled="pageNo===totalpage">下一页»</button></a>
        </li>
      </ul>
      <div><span>一共：{{totalpage}}&nbsp;页</span></div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "PageNation",
  data() {
    return {
      mycurrentpage:this.pageNo||1,
    }
  },
  // 传递过来的参数 记得改变数据类型为数值型 'pageSize','total','pageNo','showpageSort'
  props:{
    pageNo:{
      type:Number,
    },
    total:{
      type:Number,
    },
    pageSize:{
      type:Number,
    },
    showpageSort:{
      type:Number,
    },
  },
  watch:{
    // 页面发生变化时，监听pageNo的变化
    pageNo(vulue){//value为新的值；
      this.pageNo=vulue;
    }
  },
  methods: {
    setpage(page){
      if(page===this.pageNo)return;
      this.mycurrentpage=page;
      this.$emit("getPageno",page)
    }
  },
  computed:{
    totalpage(){
      return Math.ceil(this.total/this.pageSize)
    },
    // 计算分页器起始和结束位置
    startEnd(){
     let start,end;
     start=this.mycurrentpage-Math.floor(this.showpageSort/2);
     if(start<1){
      start=1;
     } 
     end=start+this.showpageSort-1;
     if(end>this.totalpage){
      end=this.totalpage;
      start=end-this.showpageSort+1;
      if(start<1){
        start=1;
      }
     }
    
    return {start,end};
    },
    startEndArr(){
      const {start,end}=this.startEnd;
      const arr=[];
      for (let i = start; i <=end; i++) {
        arr.push(i);
      }
      return arr;
    }
  }
}

</script>

<style scoped>
 
 .page {
  width: 733px;
  height: 66px;
  overflow: hidden;
  float: right;
  text-align: center;
}

 .page .sui-pagination {
  margin: 18px 0;
}

 .page .sui-pagination ul {
  margin-left: 0;
  margin-bottom: 0;
  vertical-align: middle;
  width: 490px;
  float: left;
}
 .page .sui-pagination ul li {
  line-height: 18px;
  display: inline-block;
}
 .page .sui-pagination ul li a {
  position: relative;
  float: left;
  line-height: 18px;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #e0e9ee;
  margin-left: -1px;
  font-size: 14px;
  padding: 9px 18px;
  color: #333;
}
 .page .sui-pagination ul li.active a {
  background-color: #fff;
  color: #e1251b;
  border-color: #fff;
  cursor: default;
}
 .page .sui-pagination ul li.prev a {
  background-color: #fafafa;
}
 .page .sui-pagination ul li.disabled a {
  color: #999;
  cursor: default;
}
 .page .sui-pagination ul li.dotted span {
  margin-left: -1px;
  position: relative;
  float: left;
  line-height: 18px;
  text-decoration: none;
  background-color: #fff;
  font-size: 14px;
  border: 0;
  padding: 9px 18px;
  color: #333;
}
 .page .sui-pagination ul li.next a {
  background-color: #fafafa;
}
 .page .sui-pagination div {
  color: #333;
  font-size: 14px;
  float: right;
  width: 241px;
}
</style>