import{ reqgoodsInfo,reqShopcarInfo} from '@/api/index'
// 生成一个随机的字符串
import {getuuid} from '@/utils/uuid_token'
const actions={
    async getgoodsInfo({commit},skuId){
        let result= await reqgoodsInfo(skuId);
        // console.log(result);
        if(result.code===200){
            // 返回的数据要么真的有，要么就返回空的对象或者数组（按照vuex里面的进行）
            commit("GOODS",result.data||{});
        }
    },
    // 将产品添加到购物车当中 结构赋值一定是名字和原来存在的名字一样 不能自己更换名字
    async addOrUpdateShopcar({commit},{skuId,skuNum}){
        // console.log(skuId,skuNum);
        let result=await reqShopcarInfo(skuId,skuNum);
        // console.log(result);
        // 服务器没有返回多余的数据 仅仅代表存储后台数据成功
        // return 返回的对象一定代表promise成功和失败的结果 
        // 这里返回的结果会返回到派发action的对象身上
        if(result.code===200){
            return result.message;
        }else{
            return Promise.reject(new Error("faile!!!"))
        }
    }
}
const mutations={
    GOODS(state,s){
        state.goodsinfo=s
    }
}
const state={
     goodsinfo:{},
    //  准备游客的临时身份 使用游客存储到本地存储当中即可
    uuid_token:getuuid()
}
// 为了简化数据而生。。。使得操作数据更加简单
const getters={
    categoryview(state){
        return state.goodsinfo.categoryView||{};
    },
    skuInfo(state){
        return state.goodsinfo.skuInfo ||{};
    }
    ,
    spuSaleAttrList(state){
        return state.goodsinfo.spuSaleAttrList ||[];
    }
    ,
    aluesSkuJson(state){
        return state.goodsinfo.valuesSkuJson ||{};
    }
}
export default{
    actions,
    state,
    mutations,
    getters
}