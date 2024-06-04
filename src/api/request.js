import axios from "axios";
// import { config } from "vue/types/umd";
// 利用axios进行二次封装
import nProgress from "nprogress";
//引入进度条  确定好进度条开始位置：请求发起时；请求结束时（在请求拦截器开始。相应拦截器结束）
import 'nprogress/nprogress.css'
// 引入总仓库 读取生成的uuid唯一标识符号
import store from "@/store";
// start:进度条开始 done：进度条结束 进度条颜色在nprogress里面修改


// console.log(nProgress);
const req=axios.create({
    // 指定路径（添加多的路径）
    baseURL:'/api',
    timeout:5000,

})
// 请求拦截器 可以在这里传入参数
req.interceptors.request.use((config)=>{
    if(store.state.detail.uuid_token){
        // 请求加一个字段在请求头部字段添加，和后端商量好了，
       config.headers.userTempId=store.state.detail.uuid_token;
    }
    // 添加 用户识别的唯一标识，传递给后端唯一的token进行登
    let token=store.state.user.token;
    // console.log(token);
    if(token)
        config.headers.token=token;
    // console.log(config.headers.token);
    nProgress.start();
    return config;
})
// 响应拦截器 成功回调和失败的回调
req.interceptors.response.use((res)=>{
    nProgress.done();//(进度条结束)
    return  res.data;
},(err)=>{
    return Promise.reject(new Error('请求失败！！！'))
})


export default req;
