import Vue from 'vue'
import App from './App.vue'
// 这里注册全局组件 (三级联动)
import Nav from '@/components/Nav'
import PageNation from './components/pagenation'
// Vue.component(Nav.name,Nav)
Vue.component(Nav.name,Nav);
Vue.component(PageNation.name,PageNation)

// 导入element-ui 按需加载，需要在babel修改文件
// import 'element-ui' pagination导入可以直接使用
import {Button, Message, MessageBox,Pagination,Form} from "element-ui"
Vue.component(Button.name,Button);
Vue.component(Pagination.name,Pagination);
Vue.component(Form.name,Form);
// element-ui 还有另外一种方法，挂载在原型上
Vue.prototype.$msgbox=MessageBox;
Vue.prototype.$alert=MessageBox.alert;
Vue.prototype.$message=Message;

// 使用图片懒加载，减少浏览器渲染负担
import VueLazyLoad from "vue-lazyload"
// use实则是安装插件
Vue.use(VueLazyLoad,{

});

// 自定义插件使用
// import plugins from './plugins';
// Vue.use(plugins);//一挂载就会使用里面的install方法
//这部分为路由模块，以及vuex实现路由切换
import store from '@/store'
import router from '@/router'
//使用一下模拟数据，证明调用过了
import '@/mock/mockServe'
// 引入swiper样式：
import 'swiper/css/swiper.css'
// 统一引入api接口 使用全局引入方法
import * as API from "@/api"
// 引入校验插件，这里封装一个组件，看起来没这么多
import '@/plugins/validate'



Vue.config.productionTip = false
// 调用接口接收后端的数据  测试数据是否可以传递过来使用
// import { reqCategoryList } from './api';
// reqCategoryList();//结果为true

new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate(){
    // 创建全局api接口
    Vue.prototype.$api=API;
     // 创建全局事件总线
    Vue.prototype.$bus=this;
  }
}).$mount('#app')
