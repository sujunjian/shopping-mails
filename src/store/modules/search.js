import { reqGetSearchInfo } from "@/api"
const actions={
    //提交里面的commit是解构赋值出来的对象
    async getSearchlist({commit},params){
        // params是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        // 删除传过来的空数据，不传给后端
        params={...params}
        Object.keys(params).forEach(key=>{
            if(params[key]==''||(params[key] instanceof Array && params[key].length===0)){
                delete params[key];
            }
        })
        // console.log(params);
         let result=await reqGetSearchInfo(params)
        //  ;console.log(result);
         commit("SEARCHLIST",result.data)
    }
}

const mutations={
    SEARCHLIST(state,result){
        state.searchlist=result;
    }

}
const state={
    searchlist:[]
}
// getters计算属性：在项目中，为了简化数据而生（state里面的数据）
const getters={
    goodslist(state){
        //如果接口有误或者没网络 goodlist不存在，会报错
        // 假如没有网络，返回的至少是一个空对象，undifine 无法遍历
        return state.searchlist.goodsList || [];
    },
    attrslist(state){
        return state.searchlist.attrsList || [];
    },
    trademarkList(state){
        return state.searchlist.trademarkList || [];
    }
}
export default{
    actions,
    mutations,
    state,
    getters
}