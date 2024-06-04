// 这个模块：统一管理api
import req from "./request";

import mockajax from "./mockAjax";
// 三级联动api 使用get请求
// http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList

export const reqCategoryList=()=>{
    // 发请求，返回的是promise对象
    return req({
 
        url:'/product/getBaseCategoryList',
        method:'get'})
}
export  const reqGetbannerlist=()=>{
    return mockajax({url:'/banner',method:'get'})
}

export  const reqgetFloorlist=()=>{
    return mockajax({url:'/floor',method:'get'})
}

// search模块 派发真实接口 使用post发送请求
// 给服务器传递的一个参数必须是一个空对象

export  const reqGetSearchInfo=(params)=>{
    return req({url:'/list',method:'post',data:params})
}

// 获取商品详情的具体信息
export  const reqgoodsInfo=(skuId)=>{
    return req({url:`/item/${skuId}`,method:'get'})
}
// 添加产品进入购物车中，显示数据
export  const reqShopcarInfo=(skuId,skuNum)=>{
     return req({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})
}

// 购物车列表 获取购物车详情信息
export  const reqCarList=()=>{
    return req({url:"/cart/cartList",method:'get'})
}

// 删除购物产品接口 在商品列表删除
export  const reqDeleteCartshop=(skuId)=>{
    return req({url:`/cart/deleteCart/${skuId}`,method:'delete'});
}

// 编写产品 选中状态信息的接口
export  const reqisCheckCartshop=(skuid,ischecked)=>{
    return req({url:`/cart/checkCart/${skuid}/${ischecked}`,method:'get'});
}

// 获取验证码接口
export  const reqCode=(phonenumber)=>{
    return req({url:`/user/passport/sendCode/${phonenumber}`,method:'get'});
}

// 获取注册成功接口
export  const reqRegister=(data)=>{
    return req({url:`/user/passport/register`,data,method:'post'});
}
// 登录 获取页面信息 
export  const reqLogin=(data)=>{
    return req({url:`/user/passport/login`,data,method:'post'});
}

// 获取用户信息接口 
export  const requserInfo=()=>{
    return req({url:`/user/passport/auth/getUserInfo`,method:'get'});
}
// 退出登录接口
export  const reqlogOut=()=>{
    return req({url:`/user/passport/logout`,method:'get'});
}

// 进入交易接口，获取购买地址
export  const reqTrade=()=>{
    return req({url:`/user/userAddress/auth/findUserAddressList`,method:'get'});
}
// 获取商品清单
export  const reqoderInfo=()=>{
    return req({url:`/order/auth/trade`,method:'get'});
}

// 获取提交订单信息  地址，商品 不用vuex
export  const reqsubmitOrder=(tradeNo,data)=>{
    // console.log('我是api里面的数据：',data,tradeNo);
    return req({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'});
}
// 带着订单号，获取支付信息
export  const reqpayinfo=(orderId)=>{
    // console.log('我是api里面的数据：',data,tradeNo);
    return req({url:`/payment/weixin/createNative/${orderId}`,method:'get'});
}
// 订单支付状态 客户扫描二维码
export  const reqpayStatus=(orderId)=>{
    // console.log('我是api里面的数据：',data,tradeNo);
    return req({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});
}
//获取用户中心信息 :只含有我的订单信息
export  const reqCenterInfo=(page,limit)=>{
    // console.log('我是api里面的数据：',data,tradeNo);
    return req({url:`/order/auth/${page}/${limit}`,method:'get'});
}