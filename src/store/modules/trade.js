import { reqTrade,reqoderInfo} from "@/api"

const actions={
    async getTradeInfo({commit}){
        let result=await reqTrade();
        // console.log(result);
        if(result.code==200){
            commit("TRADE",result.data);
            return "成功";
        }else return Promise.reject(new Error("faile!!"))
    },
    // 获取商品清单数据
    async getorderInfo({commit}){
        let result=await reqoderInfo();
        // console.log(result);
        if(result.code==200){
            commit("ORDERINFO",result.data);
            return "成功";
        }else return Promise.reject(new Error("faile!!"))
    }
}

const mutations={
    TRADE(state,data){
        state.addresslist=data;
    },
    ORDERINFO(state,data){
        state.orderinfo=data;
    }
}

const state={
   addresslist:[],
   orderinfo:{}
}
const getters={
    detailArrayList(state){
        return state.orderinfo.detailArrayList;
    },
    orderDetailVoList(state){
        return state.orderinfo.orderDetailVoList;
    }

}
export default{
    actions,
    mutations,
    state,
    getters
}