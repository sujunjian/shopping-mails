<template>
  <div>
    <MyNav></MyNav>
    <div class="main">
      <div class="py-container">
        <!--bread 导航显示-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-if="searchparams.categoryname">
              {{ searchparams.categoryname }} <i @click="removeName"> x</i>
            </li>
            <li class="with-x" v-if="searchparams.keyword">
              {{ searchparams.keyword }} <i @click="removekeyword"> x</i>
            </li>
            <li class="with-x" v-if="searchparams.trademark">
              {{ searchparams.trademark }} <i @click="removetrademark"> x</i>
            </li>
            <li class="with-x" v-for="(prop, index) in searchparams.props">
              {{ prop.split(":")[1] }} <i @click="removeprops(index)"> x</i>
            </li>
          </ul>
        </div>
        <!--selector-->
        <SearchSeletor
          @trademarkinfo="trademarkInfo"
          @attrinfo="attrinfo"
        ></SearchSeletor>
        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li
                  :class="{ active: orderinfo[0] == '1' }"
                  @click="changeorder('1')"
                >
                  <a href="#"
                    >综合
                    <i
                      class="iconfont"
                      :class="orderinfo[1] === 'desc' ? 'icon-down' : 'icon-up'"
                    ></i>
                  </a>
                </li>
                <li :class="{ active: orderinfo[0] === '3' }">
                  <a href="#">销量</a>
                </li>
                <li :class="{ active: orderinfo[0] == '4' }">
                  <a href="#">新品</a>
                </li>
                <li :class="{ active: orderinfo[0] === '5' }">
                  <a href="#">评价</a>
                </li>
                <li
                  :class="{ active: orderinfo[0] === '2' }"
                  @click="changeorder('2')"
                >
                  <a href="#"
                    >价格
                    <i
                      class="iconfont"
                      :class="orderinfo[1] === 'desc' ? 'icon-down' : 'icon-up'"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 商品列表 最大的那个列表 -->
          <div class="goods-list">
            <ul class="yui3-g">
              <li
                class="yui3-u-1-5"
                v-for="(goods, index) in goodslist"
                :key="goods.id"
              >
                <div class="list-wrap">
                  <div class="p-img">
                    <router-link  :to="`/detail/${goods.id}`">
                      <img :src="goods.defaultImg" />
                    </router-link>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ goods.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >{{ goods.title }}</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 分页器  这里传递过去的值"默认为字符串型??不一定"-->
          <PageNation
            :pageNo="searchparams.pageNo"
            :pageSize="searchparams.pageSize"
            :total="total"
            :showpageSort="5"
            @getPageno="getPageno"
          ></PageNation>
        </div>
        <!--hotsale-->
        <div class="clearfix hot-sale">
          <h4 class="title">热卖商品</h4>
          <div class="hot-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-4">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/search/like_01.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>4088.00</i>
                    </strong>
                  </div>
                  <div class="commit">
                    <i class="command">已有700人评价</i>
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-4">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/search/like_03.png" />
                  </div>
                  <div class="attr">
                    <em>金属A面，360°翻转，APP下单省300！</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>4088.00</i>
                    </strong>
                  </div>
                  <div class="commit">
                    <i class="command">已有700人评价</i>
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-4">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/search/like_04.png" />
                  </div>
                  <div class="attr">
                    <em>256SSD商务大咖，完爆职场，APP下单立减200</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>4068.00</i>
                    </strong>
                  </div>
                  <div class="commit">
                    <i class="command">已有20人评价</i>
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-4">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/search/like_02.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>4088.00</i>
                    </strong>
                  </div>
                  <div class="commit">
                    <i class="command">已有700人评价</i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import SearchSeletor from "./searchSeletor.vue";

export default {
  name: "MySearch",
  components: { SearchSeletor },
  data() {
    return {
      searchparams: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        // 关键字
        keyword: "",
        // 排序
        order: "1:aesc",
        // // 页面
        pageNo: 1,
        pageSize: 10,
        // // 平台售卖属性
        props: [],
        // 品牌数据
        trademark: "",
      },
    };
  },
  beforeMount() {
    // 发送请求之前把params数据更改，发送服务器的时候带params参数过去，修改参数
    // 使用assign会把他原本没有的数据赋值过来（es6语法里面有）
    Object.assign(this.searchparams, this.$route.params, this.$route.query);
  },
  watch: {
    $route() {
      // 合并参数之前会把之前多余的参数带过去 重新制空值 方便下次申请数据不带多余的数据过去
      (this.searchparams.category1Id = ""),
        (this.searchparams.category2Id = ""),
        (this.searchparams.category3Id = ""),
        Object.assign(this.searchparams, this.$route.params, this.$route.query);
      // console.log(this.searchparams);
      this.getdata();
    },
  },
  mounted() {
    // 组件挂载前发送一次请求获取数据
    this.getdata();
  },
  methods: {
    // 把请求封装为函数 因为客户点击的数据不同更新的数据不同
    getdata() {
      // 派发actions 传递params参数 参数里面不可以带有空值的数值，要不然申请后端数据会失败
      this.$store.dispatch("getSearchlist", this.searchparams);
    },
    removeName() {
      (this.searchparams.category1Id = ""),
        (this.searchparams.category2Id = ""),
        (this.searchparams.category3Id = ""),
        (this.searchparams.categoryname = undefined);
      this.$router.push({ name: "search", params: this.$route.params });
    },
    removekeyword() {
      this.searchparams.keyword = undefined;
      this.getdata();
      this.$bus.$emit("clearkeyword");
      if (this.$route.query) {
        this.$router.push({ name: "search", query: this.$route.query });
      }
    },
    //  绑定自定义事件
    trademarkInfo(data) {
      this.searchparams.trademark = data;
      this.getdata();
    },
    removetrademark() {
      // 因为更新的params参数，需要重新像后端发送请求
      this.searchparams.trademark = undefined;
      this.getdata();
    },
    attrinfo(attr, attrvalue) {
      // console.log(attr,attrvalue);
      let props = `${attr.attrId}:${attrvalue}:${attr.attrName}`;
      // 数组去重 使用indeof（属性名）方法检查原数组是否有这个参数 等于-1代表没有该属性
      if (this.searchparams.props.indexOf(props) == -1) {
        this.searchparams.props.push(props);
      }
      this.getdata();
    },
    // 删除售卖属性prop里面删除
    removeprops(index) {
      // 调用splice方法删除数组中的属性值 从index开始，删除一个元素
      this.searchparams.props.splice(index, 1);
      this.getdata();
    },
    changeorder(flag) {
      // flag形参，代表用户点击的是综合还是价格
      let originflag = this.orderinfo[0];
      let originSort = this.orderinfo[1];
      let newOrder = "";
      if (flag === originflag) {
        newOrder = `${originflag}:${originSort == "desc" ? "asc" : "desc"}`;
      } else {
        newOrder = `${flag}:${"desc"}`;
      }
      // 赋值后重新发送请求 因为更改了params数据
      this.searchparams.order = newOrder;
      this.getdata();
    },
    getPageno(pageNO) {
      // 整理参数，发送请求即可
      this.searchparams.pageNo = pageNO;
      this.getdata();
    },
  },

  computed: {
    ...mapGetters([
      // 里面传递的是数组 拿出来直接使用即可
      "goodslist",
      "attrslist",
      "trademarkList",
    ]),
    isdesc() {
      return this.searchparams.order.indexOf("desc") !== -1;
    },
    orderinfo() {
      return this.searchparams.order.split(":");
    },
    ...mapState({
      total: (state) => state.Search.searchlist.total,
    }),
  },
};
</script>
<style>
.main {
  margin: 10px 0;
}
.main .py-container {
  width: 1200px;
  margin: 0 auto;
}
.main .py-container .bread {
  margin-bottom: 5px;
  overflow: hidden;
}
.main .py-container .bread .sui-breadcrumb {
  padding: 3px 15px;
  margin: 0;
  font-weight: 400;
  border-radius: 3px;
  float: left;
}
.main .py-container .bread .sui-breadcrumb li {
  display: inline-block;
  line-height: 18px;
}
.main .py-container .bread .sui-breadcrumb li a {
  color: #666;
  text-decoration: none;
}
.main .py-container .bread .sui-breadcrumb li a:hover {
  color: #4cb9fc;
}
.main .py-container .bread .sui-tag {
  margin-top: -5px;
  list-style: none;
  font-size: 0;
  line-height: 0;
  padding: 5px 0 0;
  margin-bottom: 18px;
  float: left;
}
.main .py-container .bread .sui-tag .with-x {
  font-size: 12px;
  margin: 0 5px 5px 0;
  display: inline-block;
  overflow: hidden;
  color: #000;
  background: #f7f7f7;
  padding: 0 7px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #dedede;
  white-space: nowrap;
  transition: color 400ms;
  cursor: pointer;
}
.main .py-container .bread .sui-tag .with-x i {
  margin-left: 10px;
  cursor: pointer;
  font: 400 14px tahoma;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.main .py-container .bread .sui-tag .with-x:hover {
  color: #28a3ef;
}
.main .py-container .details {
  margin-bottom: 5px;
}
.main .py-container .details .sui-navbar {
  overflow: visible;
  margin-bottom: 0;
}
.main .py-container .details .sui-navbar .filter {
  min-height: 40px;
  padding-right: 20px;
  background: #fbfbfb;
  border: 1px solid #e2e2e2;
  padding-left: 0;
  border-radius: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
}
.main .py-container .details .sui-navbar .filter .sui-nav {
  position: relative;
  left: 0;
  display: block;
  float: left;
  margin: 0 10px 0 0;
}
.main .py-container .details .sui-navbar .filter .sui-nav li {
  float: left;
  line-height: 18px;
}
.main .py-container .details .sui-navbar .filter .sui-nav li a {
  display: block;
  cursor: pointer;
  padding: 11px 15px;
  color: #777;
  text-decoration: none;
}
.main .py-container .details .sui-navbar .filter .sui-nav li.active a {
  background: #e1251b;
  color: #fff;
}
.main .py-container .details .goods-list {
  margin: 20px 0;
}
.main .py-container .details .goods-list ul {
  display: flex;
  flex-wrap: wrap;
}
.main .py-container .details .goods-list ul li {
  height: 100%;
  width: 20%;
  margin-top: 10px;
  line-height: 28px;
}
.main .py-container .details .goods-list ul li .list-wrap .p-img {
  padding-left: 15px;
  width: 215px;
  height: 255px;
}
.main .py-container .details .goods-list ul li .list-wrap .p-img a {
  color: #666;
}
.main .py-container .details .goods-list ul li .list-wrap .p-img a img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
.main .py-container .details .goods-list ul li .list-wrap .price {
  padding-left: 15px;
  font-size: 18px;
  color: #c81623;
}
.main .py-container .details .goods-list ul li .list-wrap .price strong {
  font-weight: 700;
}
.main .py-container .details .goods-list ul li .list-wrap .price strong i {
  margin-left: -5px;
}
.main .py-container .details .goods-list ul li .list-wrap .attr {
  padding-left: 15px;
  width: 85%;
  overflow: hidden;
  margin-bottom: 8px;
  min-height: 38px;
  cursor: pointer;
  line-height: 1.8;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.main .py-container .details .goods-list ul li .list-wrap .attr a {
  color: #333;
  text-decoration: none;
}
.main .py-container .details .goods-list ul li .list-wrap .commit {
  padding-left: 15px;
  height: 22px;
  font-size: 13px;
  color: #a7a7a7;
}
.main .py-container .details .goods-list ul li .list-wrap .commit span {
  font-weight: 700;
  color: #646fb0;
}
.main .py-container .details .goods-list ul li .list-wrap .operate {
  padding: 12px 15px;
}
.main .py-container .details .goods-list ul li .list-wrap .operate .sui-btn {
  display: inline-block;
  padding: 2px 14px;
  box-sizing: border-box;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 0;
  background-color: transparent;
  margin-right: 15px;
}
.main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-bordered {
  min-width: 85px;
  background-color: transparent;
  border: 1px solid #8c8c8c;
  color: #8c8c8c;
}
.main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-bordered:hover {
  border: 1px solid #666;
  color: #fff !important;
  background-color: #666;
  text-decoration: none;
}
.main .py-container .details .goods-list ul li .list-wrap .operate .btn-danger {
  border: 1px solid #e1251b;
  color: #e1251b;
}
.main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-danger:hover {
  border: 1px solid #e1251b;
  background-color: #e1251b;
  color: white !important;
  text-decoration: none;
}

.main .py-container .hot-sale {
  margin-bottom: 5px;
  border: 1px solid #ddd;
}
.main .py-container .hot-sale .title {
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  border-bottom: 1px solid #ddd;
  background: #f1f1f1;
  color: #333;
  margin: 0;
  padding: 5px 0 5px 15px;
}
.main .py-container .hot-sale .hot-list {
  padding: 15px;
}
.main .py-container .hot-sale .hot-list ul {
  display: flex;
}
.main .py-container .hot-sale .hot-list ul li {
  width: 25%;
  height: 100%;
}
.main .py-container .hot-sale .hot-list ul li .list-wrap .p-img,
.main .py-container .hot-sale .hot-list ul li .list-wrap .price,
.main .py-container .hot-sale .hot-list ul li .list-wrap .attr,
.main .py-container .hot-sale .hot-list ul li .list-wrap .commit {
  padding-left: 15px;
}
.main .py-container .hot-sale .hot-list ul li .list-wrap .p-img img {
  max-width: 100%;
  vertical-align: middle;
  border: 0;
}
.main .py-container .hot-sale .hot-list ul li .list-wrap .attr {
  width: 85%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 8px;
  min-height: 38px;
  cursor: pointer;
  line-height: 1.8;
}
.main .py-container .hot-sale .hot-list ul li .list-wrap .price {
  font-size: 18px;
  color: #c81623;
}
.main .py-container .hot-sale .hot-list ul li .list-wrap .price strong {
  font-weight: 700;
}
.main .py-container .hot-sale .hot-list ul li .list-wrap .price strong i {
  margin-left: -5px;
}
.main .py-container .hot-sale .hot-list ul li .list-wrap .commit {
  height: 22px;
  font-size: 13px;
  color: #a7a7a7;
}
</style>