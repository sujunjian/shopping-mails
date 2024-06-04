<template>
    <!-- 商品分类导航 -->
    <div class="type-nav">
      <div class="container">
        <!-- 利用事件委派实现鼠标经过和离开在h2上显示 -->
       <div @mouseleave="hideshow" @mouseenter="entershow" >
        <h2 class="all">全部商品分类</h2>
       <transition>
        <div class="sort" v-show="isshow">
          <!-- 利用事件委派+编程式导航实现路由跳转 -->
          <div class="all-sort-list2" @click="gosearch">
            <!-- 使用v-for遍历创建出来的列表信息 根据key的唯一性遍历数组 -->
            <!-- 一级分类列表 -->
            <div class="item bo" 
            v-for="(c1,index) in categoryList" 
            :key="c1.categoryId" 
            :class="{cur:currentindex==index}">
             <!-- 如果为真：则添加cur这个类 -->
              <!-- 鼠标移动到谁就传index -->
              <h3 @mouseenter="cahngeIndex(index)">
                <!-- <router-link to="/search">{{c1.categoryName}}</router-link> -->
                <a href="#" :data-categoryname="c1.categoryName" :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
                 </h3>
              <div class="item-list clearfix" :style="{display:currentindex==index?'block':'none'}">
                <!-- 二级分类列表 -->
                <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a href="#" :data-categoryname="c2.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                      <!-- <router-link to="/search">{{ c2.categoryName }}</router-link> -->
                    </dt>
                    <dd >
                      <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                        <a href="#" :data-categoryname="c3.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                        <!-- <router-link to="/search">{{ c3.categoryName }}</router-link> -->
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            
          </div>
        </div>
       </transition>
       </div>
        <nav class="nav">
          <a href="###">服装城</a>
          <a href="###">美妆馆</a>
          <a href="###">尚品汇超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  // 该方式把lodash里面所有函数引入 增大内存，按需引入最好
  import {throttle} from 'lodash';
  export default {
    name: 'MyNav',
    data() {
      return {
        currentindex:'-1',
        isshow:true
        // entershow:true
      }
    },
    mounted(){
      // 组件挂载前调用 给服务器后端发送请求
      // this.$store.dispatch('categoryList');
      // 组件挂在完毕之前隐藏三级分类列表
      if(this.$route.path=='/home'){
        this.isshow=true;
      }
      if(this.$route.path!=='/home'){
        this.isshow=false;
      }
    },
    methods: {
      hideshow(){
        this.currentindex=-1;
        if(this.$route.path!=='/home'){
          this.isshow=false;
        }
      },
      entershow(){
        this.isshow=true;
      },
      gosearch(event){
        let element=event.target;
        // console.log(element);  被点击的对象会具有自己命名的数据
        // 解构赋值解构出来事件对象上存在的元素对象 使用到dataset属性
        // 记住别命名重复了  上面的cateforyid
        let {categoryname,category1id,category2id,category3id}=element.dataset
        // 标签身上拥有categoryname则一定是a标签
        if(categoryname){
          let location ={name:'search'}
          let query={categoryname:categoryname}
          // a标签存在 一级分类、二级分类、三级分类
          if (category1id) {
        query.category1Id = category1id;
      } else if (category2id) {
        query.category2Id = category2id;
      } else if (category3id) {
        query.category3Id = category3id;
      }
      if(this.$route.params){//如果存在params参数，也要携带过去，合并参数
        location.params=this.$route.params;
      }
          location.query=query;//把需要传递过去的路由参数赋值给location对象
          this.$router.push(location);
          // console.log(location);
          //合并参数带过去更加节省代码量,更加方便读取数据
          // console.log('指向位置：',location,'需要传递过去的参数：',query);
        }
        // this.$router.push('/search');
      },
      // cahngeIndex(index){
      //  this.currentindex=index;
      // },
      // 采用节流阀的方式 实现节流
      cahngeIndex:throttle(function(index){
        this.currentindex=index;
      },30),
      // leaveindex(index){//兄弟啊！一行代码是不是用methods多余了
      //   this.currentindex=-1;
      // }
    },
    computed:{
  //将后端返回的在仓库里面的数据s映射出来使用
      ...mapState({
        //对象写法： 这个是个函数，调用才可以显示
        categoryList:(state)=>{
          return state.Home.categoryList
        }
      })
    }
  }
  </script>
  
  <style  lang="less" scoped>
  .type-nav {
    // background-color: red;
    border-bottom: 2px solid #e1251b;
  
    .container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      position: relative;
  
      .all {
        width: 210px;
        height: 35px;
        background-color: #e1251b;
        line-height: 30px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
      }
  
      .nav {
        a {
          // background-color: red;
          height: 45px;
          margin: 0 22px;
          line-height: 45px;
          font-size: 16px;
          color: #333;
        }
      }
  
      .sort {
        position: absolute;
        left: 0;
        top: 45px;
        width: 210px;
        height: 461px;
        position: absolute;
        background: #fafafa;
        z-index: 999;
  
        .all-sort-list2 {
          .item {
            h3 {
              line-height: 30px;
              font-size: 14px;
              font-weight: 400;
              overflow: hidden;
              padding: 0 20px;
              margin: 0;
              // &:hover{
              //   background-color: red;
              // }
              a {
                color: #333;
              }
            }
  
            .item-list {
              display: none;
              position: absolute;
              width: 734px;
              min-height: 460px;
              _height: 200px;
              background: #f7f7f7;
              left: 210px;
              border: 1px solid #ddd;
              top: 0;
              z-index: 9999 !important;
  
              .subitem {
                float: left;
                width: 650px;
                padding: 0 4px 0 8px;
  
                dl {
                  border-top: 1px solid #eee;
                  padding: 6px 0;
                  overflow: hidden;
                  zoom: 1;
  
                  &.fore {
                    border-top: 0;
                  }
  
                  dt {
                    float: left;
                    width: 54px;
                    line-height: 22px;
                    text-align: right;
                    padding: 3px 6px 0 0;
                    font-weight: 700;
                  }
  
                  dd {
                    float: left;
                    width: 415px;
                    padding: 3px 0 0;
                    overflow: hidden;
  
                    em {
                      float: left;
                      height: 14px;
                      line-height: 14px;
                      padding: 0 8px;
                      margin-top: 5px;
                      border-left: 1px solid #ccc;
                    }
                  }
                }
              }
            }
  
            // &:hover {
            //   .item-list {
            //     display: block;
            //   }
            //  }
          }
          .cur{
            background-color: red;
          }
        }
      }
      .v-enter{
        height: 0px;
      }
      .v-enter-to{
        height: 461px;
      }
      .v-enter-active{
        transition: all .6s linear;
      }
    }
  }
  </style>
  