<template>
    <div>
        <!-- 使用全局组件，应用的是组件名 -->
       <MyNav></MyNav>
       <ListContainer></ListContainer>
       <TodayRommend></TodayRommend>
       <MyRank></MyRank>
       <MyBanner></MyBanner>
       <MyFloor v-for="(f,index) in floor" :key="f.id" :list="f"></MyFloor>
       <!-- <MyFloor></MyFloor> -->
       <MyBottom></MyBottom>
    </div>
</template>
<script>
import ListContainer from '@/pages/Home/ListContianer'
import  TodayRommend from '@/pages/Home/TodayRecom'
import MyBanner from './Banner'
// import Nav from '@/components/Nav'
import MyRank from './Rank'
import MyFloor from './Floor'
import MyBottom from './bottomNavList'
import { mapState } from 'vuex'
export default{
    name:"MyHome",
    components:{ListContainer,TodayRommend,MyRank,MyBanner,MyFloor,MyBottom},
    computed:{
        ...mapState({
            floor:(state)=>state.Home.FloorList
        }),
    },
}
</script>
