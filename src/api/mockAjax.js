import axios from "axios";
// import { config } from "vue/types/umd";
// 利用axios进行二次封装
import nProgress from "nprogress";
//引入进度条  确定好进度条开始位置：请求发起时；请求结束时（在请求拦截器开始。相应拦截器结束）
import 'nprogress/nprogress.css'
// start:进度条开始 done：进度条结束 进度条颜色在nprogress里面修改
// 创建一个模拟数据的接口  axios的二次封装
// console.log(nProgress);
const mockajax=axios.create({
    // 指定路径（添加多的路径）
    baseURL:'/mock',
    timeout:5000,

})
// 请求拦截器
mockajax.interceptors.request.use((config)=>{
    nProgress.start();
    return config;
})
// 响应拦截器 成功回调和失败的回调
mockajax.interceptors.response.use((res)=>{
    nProgress.done();//(进度条结束)
    return  res.data;
},(err)=>{
    return Promise.reject(new Error('请求失败！！！'+err.message))
})


export default mockajax;
