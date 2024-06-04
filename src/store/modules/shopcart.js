import { reqCarList,reqDeleteCartshop,reqisCheckCartshop } from "@/api"
const actions={
    // 获取商品信息列表
    async getcartinfo({commit}){
        let result=await reqCarList();
        // console.log(result);
        if (result.code==200) {
            let temp=result.data[0]||{};
            commit('CARTLIST',temp.cartInfoList||[]);
        }
    },
    //删除购物车中的一条数据
    async deletecartshop({commit},id){
      let result=  await reqDeleteCartshop(id);
      if (result.code==200) {
        return "ok";
      }
      else return Promise.reject(new Error("faile!!!"));
    },
    // 更新·购物车 某一商品是否勾选
    async IsCheckshopcart({commit},{skuId,checked}){
        let result=await reqisCheckCartshop(skuId,checked);
        // console.log(result);
        if (result.code==200) {
            return "ok";
        }else return Promise.reject(new Error("faile!!"));
    },
    async updateAllcheck({dispatch,state},checked){
        // console.log(state);//映射商品列表中的数据  
        let promiseAll=[];
        state.shopcartlist.forEach(item => {
            // 更新商品勾选数据  如果相同则不更新数据
            if(item.isCheck===checked)return 
            else{
                let promise= dispatch("IsCheckshopcart",{skuId:item.skuId,checked});
            // 重新派发action，获取商品更新后的数据
                promiseAll.push(promise);
            }
        });
        // 返回的是promise对象上的全部属性，使用all方法
        return Promise.all(promiseAll);
    },
    delAllcheckedproducts({dispatch,state}){
        let promiseall=[];//使用一个数组接收返回的所有promise
        state.shopcartlist.forEach(item=>{
            if(item.isChecked===1){
               promiseall.push(dispatch("deletecartshop",item.skuId));
            }
        })
//返回一个promise对象的全部的成功，或者失败的结果
        return Promise.all(promiseall);
    }
}
const mutations={
    CARTLIST(state,result){
        state.shopcartlist=result;
    }
}

const state={
    shopcartlist:[]
}
const getters={
    cartInfoList(state){
        // 数组的第0项才是
        return state.shopcartlist||{}  }

}
export default{
    actions,
    mutations,
    state,
    getters
}