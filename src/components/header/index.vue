<template>
    <div>
        <div class="head">
        <div class="log">
           <router-link to="/home">
            <img src="./images/Logo.png" alt="">
           </router-link>
        </div>
        <form action="">
            <div class="search">
            <input type="text" name="search" v-model="keyword" >
            <button @click="Gosearch">搜索</button>
        </div>
        </form>
    </div>
    </div>
</template>
<script>
export default{
    name:"MyHeader",
    data() {
        return {
            keyword:''
        }
    },
    methods:{
        Gosearch(){
            // 路由传参的三种方式
            // 第一种：字符串形式
            // this.$router.push('/search/'+this.Keyword+"?k="+this.Keyword.toUpperCase());
            //第二种： 路由传参第二种.使用es6语法，模板字符串形式
            // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toupperCase()}`)
            // 第三种：对象形式（开发项目中常用）
            let location={
                name:'search',
                params:{keyword:this.keyword||undefined,}
            }
            if(this.$route.query){
                location.query=this.$route.query
            }
            this.$router.push(location)
        }
    },
    mounted() {
        this.$bus.$on('clearkeyword',function(){
            this.keyword=""
        });
    },       
}
</script>
<style scoped>
.head {
            width: 1200px;
            height: 106px;
            margin: 0 auto;
        }

        .head .log {
            width: 265px;
            height: 106px;
            line-height: 106px;
            text-align: center;
            float: left;
        }

        .head .log img {
            vertical-align: middle;
        }

        .head .search {
            float: right;
            line-height: 106px;
            font-size: 0;
        }

        .head .search input {
            width: 490px;
            height: 32px;
            padding-left: 4px;
            padding-right: 4px;
            outline: none;
            border: 2px solid #ea4a36;
            box-sizing: border-box;
            font-size: 12px;
        }

        .head .search button {
            width: 68px;
            height: 32px;
            background-color: #ea4a36;
            font-size: 12px;
            color: #fff;
            border-style: none;
            cursor: pointer;
        }



</style>