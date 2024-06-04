<template>
    <!--selector-->
    <div class="clearfix selector">
                    <div class="type-wrap logo">
                        <div class="fl key brand">品牌</div>
                        <div class="value logos">
                            <ul class="logo-list">
                                <li v-for="(tm,index) in trademarkList" :key="tm.tmId" @click="tradehandler(tm.tmName)"><a>{{ tm.tmName }}</a></li>
                                <li><img src="./images/search/phone06.png" /></li>
                                <li><img src="./images/search/phone07.png" /></li>
                                <li><img src="./images/search/phone08.png" /></li>
                                <li><img src="./images/search/phone09.png" /></li>
                                <li><img src="./images/search/phone10.png" /></li>
                                <li><img src="./images/search/phone11.png" /></li>
                                <li><img src="./images/search/phone12.png" /></li>
                                <li><img src="./images/search/phone12.png" /></li>
                                <li><img src="./images/search/phone14.png" /></li>
                                <li><img src="./images/search/phone01.png" /></li>
                                <li><img src="./images/search/phone06.png" /></li>
                                <li><img src="./images/search/phone07.png" /></li>
                                <li><img src="./images/search/phone02.png" /></li>
                            </ul>
                        </div>
                        <div class="ext">
                            <a href="javascript:void(0);" class="sui-btn">多选</a>
                            <a href="javascript:void(0);">更多</a>
                        </div>
                    </div>
                    <!-- 平台售卖属性 -->
                    <div class="type-wrap" v-for="(attr,index) in attrslist" :key="attr.attrId">
                        <div class="fl key">{{attr.attrName}}</div>
                        <div class="fl value">
                            <ul class="type-list">
                              <!--把点击的属性值和归属属性列表传过去给后端服务器 -->
                                <li v-for="(attrValueList,index) in attr.attrValueList" :key="index" @click="attrinfo(attr,attrValueList)">
                                    <a>{{attrValueList}}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fl ext"></div>
                    </div>
                </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default{
    name:'SearchSeletor',
    computed:{
        ...mapGetters(["attrslist","trademarkList"])
    },
    methods:{
        tradehandler(t){
            // 触发自定义事件
            this.$emit('trademarkinfo',t)
        },
        attrinfo(attr,attrvalue){
          // console.log(attr,attrvalue);
          this.$emit('attrinfo',attr,attrvalue)
        }
    }
}
</script>
<style scoped>
.main .py-container .selector {
  border: 1px solid #ddd;
  margin-bottom: 5px;
  overflow: hidden;
}
  .main .py-container .selector .logo {
  border-top: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
}
  .main .py-container .selector .logo .key {
  padding-bottom: 87px!important;
}
  .main .py-container .selector .type-wrap {
  margin: 0;
  position: relative;
  border-top: 1px solid #ddd;
  overflow: hidden;
}
  .main .py-container .selector .type-wrap .key {
  width: 100px;
  background: #f1f1f1;
  line-height: 26px;
  text-align: right;
  padding: 10px 10px 0 15px;
  float: left;
}
  .main .py-container .selector .type-wrap .value {
  overflow: hidden;
  padding: 10px 0 0 15px;
  color: #333;
  margin-left: 120px;
  padding-right: 90px;
}
  .main .py-container .selector .type-wrap .value .logo-list li {
  float: left;
  border: 1px solid #e4e4e4;
  margin: -1px -1px 0 0;
  width: 105px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  color: #e1251b;
  font-style: italic;
  font-size: 14px;
}
  .main .py-container .selector .type-wrap .value .logo-list li img {
  max-width: 100%;
  vertical-align: middle;
}
  .main .py-container .selector .type-wrap .value .type-list li {
  float: left;
  display: block;
  margin-right: 30px;
  line-height: 26px;
}
  .main .py-container .selector .type-wrap .value .type-list li a {
  text-decoration: none;
  color: #666;
}
  .main .py-container .selector .type-wrap .ext {
  position: absolute;
  top: 10px;
  right: 10px;
}
  .main .py-container .selector .type-wrap .ext .sui-btn {
  display: inline-block;
  padding: 2px 14px;
  box-sizing: border-box;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  padding: 0 10px;
  background: #fff;
  border: 1px solid #d5d5d5;
}
  .main .py-container .selector .type-wrap .ext a {
  color: #666;
}
</style>