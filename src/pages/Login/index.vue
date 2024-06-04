<template>
  <div class="login-wrap">
    <div class="login">
      <div class="loginform">
        <ul class="tab clearFix">
          <li>
            <a href="##" style="border-right: 0">扫描登录</a>
          </li>
          <li>
            <a href="##" class="current">账户登录</a>
          </li>
        </ul>

        <div class="content">
          <!-- form有默认行为，不能直接跳转 把action干掉就行了 -->
          <form>
            <div class="input-text clearFix">
              <i></i>
              <input type="text" placeholder="手机号" v-model="phoneNumber" />
              <span class="error-msg" v-if="agree">密码或者账号错误！！！</span>
            </div>

            <div class="input-text clearFix">
              <i class="pwd"></i>
              <input type="text" placeholder="请输入密码" v-model="password" />
              <span class="error-msg"></span>
            </div>

            <div class="setting clearFix">
              <label class="checkbox inline">
                <input name="m1" type="checkbox" value="2" checked="" />
                自动登录
              </label>
              <span class="forget">忘记密码？</span>
            </div>
            <button class="btn" @click="userLogin">登&nbsp;&nbsp;录</button>
          </form>
          <div class="call clearFix">
            <ul>
              <li><img src="./images/qq.png" alt="" /></li>
              <li><img src="./images/sina.png" alt="" /></li>
              <li><img src="./images/ali.png" alt="" /></li>
              <li><img src="./images/weixin.png" alt="" /></li>
            </ul>
            <a href="##" class="register">立即注册</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyLogin",
  data() {
    return {
      phoneNumber: "",
      password: "",
      agree: false,
    };
  },
  methods: {
    async userLogin() {
      try {
        const { phoneNumber, password } = this;
        if (password && phoneNumber)
          await this.$store.dispatch("userlogin", {
            phone: phoneNumber,
            password,
          });
        this.$store.dispatch("userlogin", { phone: phoneNumber, password });
        let topath = this.$route.query.redirect || "home";
        this.$router.push(topath); //默认跳到home 但是可以跳转到传递过来的query参数
      } catch (error) {
        this.agree = true;
        this.password = "";
        this.phoneNumber = "";
      }
    },
  },
};
</script>
<style>
.login-wrap {
  height: 487px;
  background-color: #e93854;
}
.login-wrap .login {
  width: 1200px;
  height: 487px;
  margin: 0 auto;
  background: url(./images/loginbg.png) no-repeat;
}
.login-wrap .loginform {
  width: 420px;
  height: 406px;
  box-sizing: border-box;
  background: #fff;
  float: right;
  top: 45px;
  position: relative;
  padding: 20px;
}
.login-wrap .loginform .tab li {
  width: 50%;
  float: left;
  text-align: center;
}
.login-wrap .loginform .tab li a {
  width: 100%;
  display: block;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: 700;
  color: #333;
  border: 1px solid #ddd;
  box-sizing: border-box;
  text-decoration: none;
}
.login-wrap .loginform .tab li .current {
  border-bottom: none;
  border-top-color: #28a3ef;
  color: #e1251b;
}
.login-wrap .loginform .content {
  width: 380px;
  height: 316px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-top: none;
  padding: 18px;
}
.login-wrap .loginform .content form {
  margin: 15px 0 18px 0;
  font-size: 12px;
  line-height: 18px;
}
.login-wrap .loginform .content form .input-text {
  margin-bottom: 22px;
  position: relative;
}
.login-wrap .loginform .content form .input-text i {
  float: left;
  width: 37px;
  height: 32px;
  border: 1px solid #ccc;
  background: url(./images/icons.png) no-repeat -10px -201px;
  box-sizing: border-box;
  border-radius: 2px 0 0 2px;
}
.login-wrap .loginform .content form .input-text .pwd {
  background-position: -72px -201px;
}
.login-wrap .loginform .content form .input-text input {
  width: 302px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-left: none;
  float: left;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 14px;
  line-height: 22px;
  padding-right: 8px;
  padding-left: 8px;
  border-radius: 0 2px 2px 0;
  outline: none;
}
.login-wrap .loginform .content form .input-text .error-msg {
  position: absolute;
  top: 100%;
  left: 40px;
  color: red;
}
.login-wrap .loginform .content form .setting label {
  float: left;
}
.login-wrap .loginform .content form .setting .forget {
  float: right;
}
.login-wrap .loginform .content form .btn {
  background-color: #e1251b;
  padding: 6px;
  border-radius: 0;
  font-size: 16px;
  font-family: 微软雅黑;
  word-spacing: 4px;
  border: 1px solid #e1251b;
  color: #fff;
  width: 100%;
  height: 36px;
  margin-top: 25px;
  outline: none;
}
.login-wrap .loginform .content .call {
  margin-top: 30px;
}
.login-wrap .loginform .content .call ul {
  float: left;
}
.login-wrap .loginform .content .call ul li {
  float: left;
  margin-right: 5px;
}
.login-wrap .loginform .content .call .register {
  float: right;
  font-size: 15px;
  line-height: 38px;
}
.login-wrap .loginform .content .call .register:hover {
  color: #4cb9fc;
  text-decoration: underline;
}
.copyright {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  line-height: 24px;
}
.copyright ul li {
  display: inline-block;
  border-right: 1px solid #e4e4e4;
  padding: 0 20px;
  margin: 15px 0;
}
</style>
