import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes.js'
import store from "@/store/index.js";
import { indexOf } from "lodash";
// 重写replace方法和push方法：防止编程式导航重复提交导致原型错误
// 1、先备份vuerouter对象上的原型push和原型replace方法:在原型对象上修改属性值，是否传递参数修该属性值
let originpush = VueRouter.prototype.push;
let originreplace = VueRouter.prototype.replace;
// 2、重写push方法 这里面的this是vuerouter实例
// 这里的参数：第一个参数是告诉push方法往哪里跳转
VueRouter.prototype.push = function (location, resolve, reject) {
    // 成功则传递成功和失败，失败
    if (resolve && reject) {
        // call和apply：都可以修改上下文一次，
        // call传递参数使用逗号隔开，apply使用传递数组
        originpush.call(this, location, resolve, reject);
    } else {
        originpush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    // 成功则传递成功和失败，失败
    if (resolve && reject) {
        // call和apply：都可以修改上下文一次，
        // call传递参数使用逗号隔开，apply使用传递数组
        originreplace.call(this, location, resolve, reject);
    } else {
        originreplace.call(this, location, () => { }, () => { })
    }
}


Vue.use(VueRouter)
let router = new VueRouter({
    routes,
    // 添加滚动条的滚动行为，默认为顶部展示
    scrollBehavior(to, from, savePosition) {
        return { y: 0 }
    }
})
// 使用全局前置守卫判断是否能跳转到另外一个页面
router.beforeEach(async (to, from, next) => {
    // to:去到的下一个页面 from：从当前页面 next：放行到指定的路由next(路由信息，到那个路由)
    // to.path 去到的路径名称 from.path 从那个路由路径去
    let token = store.state.user.token
    let name = store.state.user.userinfo.name;
    if (token) {
        // 如果登陆了，去的是login
        if (to.path == "/login") {//如果要跳转带登录页面，不允许
            next('/');//不允许放行，仍然还在用户主页，只有home才能获取用户信息
        } else {
            // 登录了，但是去的不是login,拥有用户信息 直接放行
            if (name) {
                next();
            } else {
                // 没有用户信息，派发action，获取用户信息；然后放行
                try {
                    await store.dispatch("getUserInfo");
                    next();
                } catch (error) {//token过期了，获取不到用户信息，重新登陆
                    await store.dispatch("logout")//重新登录，放行
                    // alert('信息已经失效，请重新登录！！')
                    next('/login')//去到登录页面重新登录
                }
            }
        }
    }
    else {
        // if (to.path == '/cart') {
        //     console.log('cart');
        //     // 跳转到登录页面，并且记住当前路径，登录回来直接到该路径下面
        //     next("/login?redirect=" + to.path);
        // }
        // 如果没有登录，要去到交易、付款页面，个人中心，不允许
        if(to.path.indexOf('/trade')!=-1||to.path.indexOf('/pay')!=-1||to.path.indexOf('center')!=-1){
            // 在去到的路径上加上query参数，方便回来的时候直接返回进入登录页面的位置
            next('/login?redirect='+to.path);
//路径上加上redirect（query参数）带上去到的路径，方便登录的时候直接到该页面
        }
        next();
    }
})
export default router