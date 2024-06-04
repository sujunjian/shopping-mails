import { reqCategoryList, reqGetbannerlist,reqgetFloorlist } from "@/api"
// import req from "@/api/request"
const actions={
    //提交里面的commit是解构赋值出来的对象
    async categoryList({commit}){
      let result=await reqCategoryList(); 
      if(result.code==200){
        commit('CATEGORYLIST',result.data);//一般使用大写便于区分
      }
    },
    // 实现异步操作使用使用async 和await搭配使用
    async getBannerlist({commit}){
        let result=await reqGetbannerlist()
        if (result.code==200) {
            commit('BANNERLSIT',result.data);
        }
    },
    async getFloorlist({commit}){
        let result=await reqgetFloorlist()
        if(result.code==200){
            commit('Floor',result.data)
        }
    }
}

const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList;//保存后端传过来的数据
    },
    BANNERLSIT(state,data){
        state.Bannerlist=data
    },
    Floor(state,data){
        state.FloorList=data
    },
}

const state={
    categoryList:[],
    Bannerlist:[],
    FloorList:[]
}
const getters={


}
export default{
    actions,
    mutations,
    state,
    getters
}