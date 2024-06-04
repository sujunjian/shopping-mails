<template>
   <div class="cart">
            <h4>全部商品</h4>
            <div class="cart-main">
                <div class="cart-th">
                <div class="cart-th1">全部</div>
                <div class="cart-th2">商品</div>
                <div class="cart-th3">单价（元）</div>
                <div class="cart-th4">数量</div>
                <div class="cart-th5">小计（元）</div>
                <div class="cart-th6">操作</div>
                </div>
                <div class="cart-body">
                <ul class="cart-list"  v-for="(cart,index) in cartInfoList" :key="index">
                    <li class="cart-list-con1">
                      <!-- event 事件对象上存在该勾选框是否已经勾选上 -->
                    <input type="checkbox" name="chk_list" id="" value="" 
                    :checked="cart.isChecked==1"
                    @change="updateCheck(cart.skuId,$event)"
                    >
                    </li>
                    <li class="cart-list-con2">
                    <img :src="cart.imgUrl">
                    <div class="item-msg">{{ cart.skuName }}</div>
                    </li>
                    <li class="cart-list-con3">
                    <div class="item-txt"></div>
                    </li>
                    <li class="cart-list-con4">
                    <span class="price">{{ cart.skuPrice }}</span>
                    </li>
                    <li class="cart-list-con5">
                    <a href="javascript:void(0)" class="mins" @click="handler('minus',-1,cart)">-</a>
                     <!-- v-model.number="cart.skuNum"  -->
                    <input autocomplete="off" type="text"  minnum="1" class="itxt" 
                    :value="cart.skuNum"
                    @change="handler('change',$event.target.value*1,cart)">
                    <a href="javascript:void(0)" class="plus" @click="handler('add',1,cart)">+</a>
                    </li>
                    <li class="cart-list-con6">
                    <span class="sum">{{cart.skuNum*cart.skuPrice}}</span>
                    </li>
                    <li class="cart-list-con7">
                    <a class="sindelet" style="color: red;" @click="deletecart(cart.skuId)">删除</a>
                    <br>
                    <a>移到收藏</a>
                    </li>
                </ul>
                </div>
            </div>
            <div class="cart-tool">
                <div class="select-all">
                <input class="chooseAll" type="checkbox" 
                :checked="allchecked&&cartInfoList.length>0" 
               @change="isallCheck($event)">
                <span >全选</span>
                </div>
                <div class="option">
                <a  @click="delAllcheckedproducts">删除选中的商品</a>
                <a href="#none">移到我的关注</a>
                <a href="#none">清除下柜商品</a>
                </div>
                <div class="money-box">
                <div class="chosed">已选择
                    <span>0</span>件商品</div>
                <div class="sumprice">
                    <em>总价（不含运费） ：</em>
                    <i class="summoney">{{ totalprice }}</i>
                </div>
                <div class="sumbtn">
                    <a class="sum-btn" target="_blank" @click="$router.push('/trade')">结算</a>
                </div>
                </div>
            </div>
        </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import {throttle} from 'lodash';
export default {
    name:'MyCart',
    mounted(){
      this.getshopcartData();
    },
    methods: {
      getshopcartData(){
        return this.$store.dispatch("getcartinfo");
      },
      deletecart:throttle(async function(id){
       try {
          await  this.$store.dispatch("deletecartshop",id);
        // 不知道为什么，必须得发两次请求才会返回数据
        this.getshopcartData();//重新发送商品信息请求，重新获取数据
        this.getshopcartData();
       } catch (error) {
        alert(error.message);
       }
      },1000),
      handler:throttle(async function(value,num,cart){
        // value为了接收区分是哪一个元素传过来的
        // 对于num形参：变化量为（）-原来的量
        // cart确定哪一个产品，身上有id
        // 修改一个数值就向服务器发送一次请求
        switch(value){
          // 带给服务器变化的量 可以多次赋值
          case 'add':
            num=1;
          break;
          case 'change':
            // console.log(num);
            isNaN(num)||num<1?num=0: num=parseInt(num)-cart.skuNum;
          break;
          case 'minus'://小于1就不要带值了
            num=cart.skuNum>1?-1:0;
          break;
        }
        // 向服务器派发action 然后直接在发送一次更新shopcart页面
        try {
         await this.$store.dispatch('addOrUpdateShopcar',{
          skuId:cart.skuId,
          skuNum:num})
          this.getshopcartData();
          // this.getshopcartData();
        } catch (error) {
          alert(error.message)
        }
    },1000),
     async updateCheck(skuId,event){
      try {
        // console.log(event.target.checked); //返回的是布尔值，true or false
      let  checked=event.target.checked?"1":"0";
      await this.$store.dispatch("IsCheckshopcart",{skuId,checked})
      this.getshopcartData();//再次获取服务器的数据 更新服务器信息
        } catch (error) {
          alert(error.message);
        }
    },
     async isallCheck(event){
      try {
        let allchecked=event.target.checked?'1':'0';
        await this.$store.dispatch('updateAllcheck',allchecked);
        this.getshopcartData();//重新获取商品信息
      } catch (error) {
        alert(error.message);
      }
    },
    // 该回调函数没办法搜集到游泳的数据
   async delAllcheckedproducts(){
      try {
        this.$store.dispatch('delAllcheckedproducts');
        this.getshopcartData();
      } catch (error) {
        alert(error.message);
    }
   }
  },
    computed:{
      ...mapGetters(["cartInfoList"]),
      totalprice(){
        let sum=0;
        // 遍历该元素中每一个对象，item 元素对象
        this.cartInfoList.forEach(item => {
          if (item.isChecked=='1'||item.isChecked==1) {
            sum+=item.skuNum*item.skuPrice;
          }
        });
        // console.log(sum);
        return sum;
      },
      allchecked(){
        // 使用数组上的every方法遍历对象上的某个值是否都相同
        return this.cartInfoList.every(item=>item.isChecked==1)
      },
    }

}
</script>

<style scoped>
.cart {
  width: 1200px;
  margin: 0 auto;
}
.cart h4 {
  margin: 9px 0;
  font-size: 14px;
  line-height: 21px;
}
.cart .cart-main .cart-th {
  background: #f5f5f5;
  border: 1px solid #ddd;
  padding: 10px;
  overflow: hidden;
}
.cart .cart-main .cart-th > div {
  float: left;
}
.cart .cart-main .cart-th .cart-th1 {
  width: 25%;
}
.cart .cart-main .cart-th .cart-th1 input {
  vertical-align: middle;
}
.cart .cart-main .cart-th .cart-th1 span {
  vertical-align: middle;
}
.cart .cart-main .cart-th .cart-th2 {
  width: 25%;
}
.cart .cart-main .cart-th .cart-th3,
.cart .cart-main .cart-th .cart-th4,
.cart .cart-main .cart-th .cart-th5,
.cart .cart-main .cart-th .cart-th6 {
  width: 12.5%;
}
.cart .cart-main .cart-body {
  margin: 15px 0;
  border: 1px solid #ddd;
}
.cart .cart-main .cart-body .cart-list {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
}
.cart .cart-main .cart-body .cart-list > li {
  float: left;
}
.cart .cart-main .cart-body .cart-list .cart-list-con1 {
  width: 15%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con2 {
  width: 35%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con2 img {
  width: 82px;
  height: 82px;
  float: left;
}
.cart .cart-main .cart-body .cart-list .cart-list-con2 .item-msg {
  float: left;
  width: 150px;
  margin: 0 10px;
  line-height: 18px;
}
/* .cart .cart-main .cart-body .cart-list .cart-list-con3 {
  width: 20.8333%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con3 .item-txt {
  text-align: center;
} */
.cart .cart-main .cart-body .cart-list .cart-list-con4 {
  width: 10%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 {
  width: 17%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 .mins {
  border: 1px solid #ddd;
  border-right: 0;
  float: left;
  color: #666;
  width: 6px;
  text-align: center;
  padding: 8px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 input {
  border: 1px solid #ddd;
  width: 40px;
  height: 33px;
  float: left;
  text-align: center;
  font-size: 14px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 .plus {
  border: 1px solid #ddd;
  border-left: 0;
  float: left;
  color: #666;
  width: 6px;
  text-align: center;
  padding: 8px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con6 {
  width: 10%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con6 .sum {
  font-size: 16px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con7 {
  width: 13%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con7 a {
  color: #666;
}
.cart .cart-tool {
  overflow: hidden;
  border: 1px solid #ddd;
}
.cart .cart-tool .select-all {
  padding: 10px;
  overflow: hidden;
  float: left;
}
.cart .cart-tool .select-all span {
  vertical-align: middle;
}
.cart .cart-tool .select-all input {
  vertical-align: middle;
}
.cart .cart-tool .option {
  padding: 10px;
  overflow: hidden;
  float: left;
}
.cart .cart-tool .option a {
  float: left;
  padding: 0 10px;
  color: #666;
}
.cart .cart-tool .money-box {
  float: right;
}
.cart .cart-tool .money-box .chosed {
  line-height: 26px;
  float: left;
  padding: 0 10px;
}
.cart .cart-tool .money-box .sumprice {
  width: 200px;
  line-height: 22px;
  float: left;
  padding: 0 10px;
}
.cart .cart-tool .money-box .sumprice .summoney {
  color: #c81623;
  font-size: 16px;
}
.cart .cart-tool .money-box .sumbtn {
  float: right;
}
.cart .cart-tool .money-box .sumbtn a {
  display: block;
  position: relative;
  width: 96px;
  height: 52px;
  line-height: 52px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: "Microsoft YaHei";
  background: #e1251b;
  overflow: hidden;
}

</style>