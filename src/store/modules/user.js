import { reqCode,reqRegister,reqLogin, reqlogOut,requserInfo } from "@/api"
const actions={
    // 获取验证码接口
   async getCode({commit},phonenumber){
   //  console.log(phonenumber);
    let result=await reqCode(phonenumber);
    if (result.code===200) {
        commit('CODE',result.data);
        return "0k";
    }else return Promise.reject(new Error('falie!!!'));
   },
//    获取注册信息
   async getRigister({commit},code){
    // 没有返回的数据 不用保存
    let result=await reqRegister(code);
    console.log(result);
   if (result.code===200) {
     return 'ok';
   }else return Promise.reject(new Error("falies!!!"))
   },
//  获取登录页面信息  token :令牌操作 唯一标识符
   async userlogin({commit},data){
    let result =await reqLogin(data);
   //  console.log("login登录页面的token："+result.data.token);
    if(result.code===200){
        commit('LOGIN',result.data);
        localStorage.setItem('token',result.data.token);//本身就是字符串
        return 'ok';
    }else return Promise.reject(new Error("faile!!!"));

   },
//    登录成功  获取用户信息模块
   async getUserInfo({commit,state}){
        let result=await requserInfo();
      //   console.log(result);
        if (result.code==200) {
            commit('USERINFO',result.data);
            return "ok";
        }
        else return Promise.reject(new Error("faile!!"));
   },
//    退出登录 
   async logout({commit}){
    let result=await reqlogOut();
    if(result.code===200){
        commit('CLEARTOKEN');
        return "ok";
    }else return Promise.reject(new Error('退出登录失败！！'))
   // commit('CLEARTOKEN');
   },
}


const mutations={
   CODE(state,data){
    state.code=data;
   },
   LOGIN(state,data){
        state.loginInfo=data;
        state.token=data.token;
   },
   USERINFO(state,data){
    state.userinfo=data;
   },
//    把当地存储清空 服务器端清空
   CLEARTOKEN(state){
    state.token='';
    state.userinfo={},
    localStorage.removeItem('token');
   }
}
// vuex存储数据不是持久化
const state={
  code:'',
  loginInfo:{},
  userinfo:{},
  token:localStorage.getItem('token')
}
const getters={


}
export default{
    actions,
    mutations,
    state,
    getters
}