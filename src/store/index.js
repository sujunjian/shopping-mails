import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

// 导入模块  引入小仓库,每个小仓库存储各自后端传过来的数据
import Home from './modules/home'
import Search from './modules/search'
import detail from './modules/detail'
import shopcart from './modules/shopcart'
import user from './modules/user'
import trade from './modules/trade'
export default new vuex.Store({
    modules:{
        Home,
        Search,
        detail,
        shopcart,
        user,
        trade
    }
})
