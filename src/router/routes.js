// 导入方式可以全部替换成路由懒加载 可以使用这种方式 更加高效
const home=()=>()=>{return import('@/pages/Home')}


// import Home from '@/pages/Home'
// import Login from '@/pages/Login'
// import Register from '@/pages/register'
// import Search from '@/pages/search'
// import Detail from "@/pages/Detail"
// import Cart from '@/pages/cart'
// import addCartsuccess from '@/pages/addcartsuccess'
// import trade from '@/pages/Trade'
// import pay from "@/pages/Pay"
// import paysuccess from "@/pages/PaySuccess"
// import center from '@/pages/Center'
import myorder from '@/pages/Center/MyOrder'
import grouporder from '@/pages/Center/goupOrder'


export default [
    // 也可以暴露一个数组，使用路由
    {
        path: '/cart/:skuNum?',
        name: 'Cart',
        component:()=>import('@/pages/cart'),
        meta: { show: true }
    },
    {
        path: '/pay',
        name: 'pay',
        component:()=>import('@/pages/Pay'),
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path=='/trade') {//如果从购物车来，则放行
               next(); 
            }else{
                // 从当前页直接调转，不允许，仍然留在当前页
                next(false)
            }
        }
    },
    {
        path: '/paysuccess',
        name: 'paysuccess',
        // @/pages/addcartsuccess
        component:()=>import('@/pages/PaySuccess'),
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if (from.path=='/pay') {//如果从购物车来，则放行
               next(); 
            }else{
                // 从当前页直接调转，不允许，仍然留在当前页
                next(false)
            }
        }
    },
    {
        path: '/center',
        name: 'center',
        component: ()=>import('@/pages/Center'),
        meta: { show: true },
        children:
            [
                // 二级路由，我的订单 不用写/ ,自动补全/
                {
                    path: 'myorder',
                    name: 'myorder',
                    component: myorder,
                },
                {
                    path: 'grouporder',
                    name: 'grouporder',
                    component: grouporder,
                },
                {

                    path: '/center',
                    redirect: '/center/myorder',
                    // meta: { show: true },
                }
            ]
    },
    {
        path: '/trade',
        name: 'trade',
        component: ()=>import('@/pages/Trade'),
        meta: { show: true },
        // 利用路由独享守卫确定该路由是否可以直接跳转到，那个可以放行，那个不允许放行
        beforeEnter: (to, from, next) => {
            if (from.path=='/cart') {//如果从购物车来，则放行
               next(); 
            }else{
                // 从当前页直接调转，不允许，仍然留在当前页
                next(false)
            }
        }
    },
    {
        path: '/addcartsuccess',
        name: 'addCartsuccess',
        component: ()=>import('@/pages/addcartsuccess'),
        meta: { show: true }
    },
    {
        path: '/detail/:id?',
        name: "Detail",
        component:()=>import('@/pages/Detail'),
        meta: { show: true },
    },
    {
        name: "search",
        // 传递params参数时候占位  ?代表可传递可不传递 
        path: '/search/:keyword?',
        component:()=>import('@/pages/search'),
        meta: { show: true },
        // 路由组件能不能传递props参数？
        //第一种： 使用props传递（布尔值写法，true or false
        // props:true
        // 第二种，对象写法:额外的路由组件传递参数（多传）
        // props:{a:1,b:2}
        // 第三种写法：函数写法，params、query都可以听过props传递给组件
        // 一般都是直接使用$route.params.xxx,或者$route.query.xxx,不用再写这一步
        // props:($route)=>{
        //     return {keyword:$route.params.keyword,k:$route.query.k}
        // }
    } ,
    {
        path: '/home',
        component: ()=>import('@/pages/Home'),
        meta: { show: true }

    },
    {
        name: "Login",
        path: "/login",
        component: ()=>import('@/pages/Login')
    },
    {
        // name:Register,
        path: "/register",
        component: ()=>import('@/pages/register')
    },


    // 默认位置为home主页
    {
        path: '*',
        redirect: 'home',
        meta: { show: true },
    },
]
