<template>
   <div>
    <div class="top-bar-wrapper">
        <div class="top-bar clearfix">
            <div>
               <div>苏赋商城欢迎您! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
               <div v-if="!userInfo.name"> 
                请<router-link to="/login">登录</router-link>
                <router-link to="register" class="last"> 免费注册</router-link>
                </div>
                <div v-else style="line-height: 10px;">
                    <img src="./12.jpg" alt="" style="width: 25px;border-radius: 12px;">
                    <a href="#">{{ userInfo.name}}</a>
                   <a href="#" class="last" @click="loginout">退出登录</a>
                </div>
            </div>
            <ul>
                <li><router-link to="/center">我的订单</router-link></li>
                <li><router-link to="/cart">我的购物车</router-link></li>
                <li><a href="">我的尚品汇</a></li>
                <li><a href="">尚品汇会员</a></li>
                <li><a href="">企业采购</a></li>
                <li><a href="">关注尚品汇</a></li>
                <li><a href="">合作招商</a></li>
                <li><a class="last" href="">商家后台</a></li>
            </ul>
        </div>
    </div>
   </div>
</template>
  
<script>
  export default {
    name: 'MySetion',
    data() {
        return {
            
        }
    },
    methods: {
        async loginout(){
            try {
                this.$store.dispatch("logout");
                this.$router.push('/home');
                // this.$message.success("退出登录成功！")
            } catch (error) {
                alert("err!!"+error.message);
            }
        },
    },
    computed:{
        userInfo(){
            // console.log(this.$store.state.user.userinfo);
          return this.$store.state.user.userinfo; 
        }
    }
  }
</script>
<style scoped>
  .top-bar-wrapper {
            width: 100%;
            min-width: 1200px;
            height: 30px;
            line-height: 30px;
            background-color: #eaeaea;
        }

        .top-bar {
            margin: 0 auto;
            width: 1200px;
            text-align: center;
        }

        .top-bar a {
            color: #666;
            border-right: 1px #b3aeae solid;
        }

        .top-bar a:hover {
            text-decoration: underline;
            color: rgb(20, 60, 221);
        }

        .top-bar .last {
            border-style: none;
        }

        .top-bar div {
            float: left;
        }

        .top-bar div a {
            padding-left: 5px;
            padding-right: 5px;
        }

        .top-bar ul {
            float: right;
        }

        .top-bar ul li {
            float: left;
        }

        .top-bar ul li a {
            padding-left: 10px;
            padding-right: 10px;
        }
</style>
  