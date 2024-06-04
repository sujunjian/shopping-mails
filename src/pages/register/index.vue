<template>
  <div class="w">
    <div class="registerarea">
      <h3>
        注册新用户
        <i style="font-size: 14px; float: right"
          >已经有账号，<router-link to="/login" style="color: red"
            >登录</router-link
          ></i
        >
      </h3>

      <div class="reg-form">
        <form action="">
          <ul>
            <!-- 输入手机号  -->
            <li>
              <label for="">手机号：</label>
              <input
                style="height: 30px; width: 240px"
                type="text"
                placeholder="请输入你的手机号"
                v-model="phoneNumber"
                name="phone"
                v-validate="{ required: true, regex: /^1\d{10}$/ }"
                :class="{ invalid: errors.has('phone') }"
              />
              <span class="error">
                <span class="error-msg"> {{ errors.first("phone") }}</span>
                <!-- <i class="error_icon"></i>
                手机号码格式不正确，请从新输入 -->
              </span>
            </li>
            <!-- 获取验证码部分 -->
            <li>
              <label for="">短信验证码：</label>
              <input
                style="height: 30px; width: 240px"
                type="text"
                placeholder="请输入你的验证码"
                v-model="code"
                name="code"
                v-validate="{ required: true, regex: /^\d{6}$/ }"
                :class="{ invalid: errors.has('code') }"
              />
              <span class="success">
                <i class="success_icon"></i>
                <!-- <button style="height: 35px" @click="reqCODE">
                  获取验证码
                </button> -->
                <a
                  style="
                    display: inline-block;
                    width: 80px;
                    height: 30px;
                    background-color: #32c9c2;
                    text-align: center;
                    line-height: 30px;
                  "
                  @click="reqCODE"
                  >获取验证码
                </a>
                <span class="error-msg"> {{ errors.first("code") }}</span>
              </span>
            </li>
            <!-- 设置密码部分 -->
            <li>
              <label for="">登录密码：</label>
              <input
                style="height: 30px; width: 240px"
                type="text"
                placeholder="请输入你的密码"
                v-model="password"
                name="password"
                v-validate="{ required: true, regex: /^[0-9A-Za-z]{8,20}$/ }"
                :class="{ invalid: errors.has('password') }"
              />
              <span class="error">
                <i class="error_icon"></i>
                <span class="error-msg"> {{ errors.first("password") }}</span>
              </span>
            </li>
            <!-- 确认密码安全等级部分 -->
            <!-- <li class="safe">
              安全程度：<em class="r">弱</em> <em class="z">中</em>
              <em class="q">强</em>
            </li> -->
            <!-- 确认密码部分 -->
            <li>
              <label for="">确认密码：</label>
              <input
                style="height: 30px; width: 240px"
                type="text"
                placeholder="请再次确认你的密码"
                v-model="repassword"
                name="repassword"
                v-validate="{ required: true, is: password }"
                :class="{ invalid: errors.has('repassword') }"
              />
              <span class="error">
                <i class="error_icon"></i>
                <span class="error-msg"> {{ errors.first("repassword") }}</span>
              </span>
            </li>
            <li class="agree">
              <input type="checkbox" checked />
              <!-- <input
                type="checkbox"
                :checked="agree"
                name="repassword"
                v-validate="{ required: true, }"
                :class="{ invalid: errors.has('agree') }"
              /> -->
              同意协议并注册
              <a href="#">《知果果用户协议》</a>
              <!-- <span class="error-msg"> {{ errors.first("agree") }}</span> -->
            </li>
            <li>
              <input
                type="submit"
                value="完成注册"
                class="btn"
                @click="userRigister"
              />
            </li>
          </ul>
        </form>
      </div>
    </div>
    <footer>
      <div class="mod_copyright">
        <div class="links">
          <a href="#">关于我们</a> | <a href="#">联系我们</a> |
          <a href="#">联系客服</a> | <a href="#">商家入驻</a> |
          <a href="#">营销中心</a> | <a href="#">手机品优购</a> |
          <a href="#">友情链接</a> | <a href="#">销售联盟</a> |
          <a href="#">品优购社区</a> | <a href="#">品优购公益</a> |
          <a href="#">English Site</a> | <a href="#">Contact U</a>
        </div>
        <div class="copyright">
          地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096
          电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn <br />
          京ICP备08001421号京公网安备110108007702
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
// import { mapState } from "vuex";
export default {
  name: "MyRigister",
  data() {
    return {
      phoneNumber: "",
      code: "",
      password: "",
      repassword: "",
      agree: true, //同意不同意规则
    };
  },
  methods: {
    async reqCODE(event) {
      try {
        console.log(this.phoneNumber);
        await this.$store.dispatch("getCode", this.phoneNumber);
        this.code = this.$store.state.user.code;
        console.log(this.code);
      } catch (error) {
        alert(error.message);
      }
    },
    userRigister() {
      try {
        const { phoneNumber, password, repassword, code } = this;
        // 要给后台传递四个参数
        if (password === repassword && phoneNumber && code)
          this.$store.dispatch("getRigister", {
            phone: phoneNumber,
            code,
            password,
          });
          console.log(code);
        this.$router.push("/login");
        this.$router.push("/login");
      } catch (error) {
        alert(err.message);
      }
    },
  },
};
</script >
<style scoped>
.w {
  width: 1200px;
  margin: 0 auto;
}
.style-red {
  color: #c81623;
}
header {
  margin-top: 15px;
  border-bottom: 2px solid #b1191a;
}
.registerarea {
  height: 522px;
  border: 1px solid #ccc;
  margin-top: 20px;
}
.registerarea h3 {
  height: 42px;
  border-bottom: 1px solid #ccc;
  background-color: #ececec;
  font-size: 18px;
  font-weight: normal;
  line-height: 42px;
  padding: 0 12px;
}
.login {
  float: right;
  font-size: 14px;
}
.reg-form {
  width: 600px;
  margin: 0 auto;
  margin-top: 50px;
}
.reg-form ul li .inp {
  width: 240px;
  height: 36px;
  border: 1px solid #ccc;
}
.reg-form ul li:nth-child(-n + 4) {
  margin-bottom: 20px;
}
.reg-form ul li label {
  display: inline-block;
  width: 88px;
  text-align: right;
}
.error {
  color: #c81623;
}
.error_icon,
.success_icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  /* background: url(../images/error.png) no-repeat; */
}
.success {
  color: green;
}
.success_icon {
  /* background: url(../images/success.png) no-repeat; */
}
.safe {
  padding-left: 155px;
}
.safe em {
  padding: 0 12px;
  color: #fff;
  background-color: #40b83f;
}
.safe .r {
  background-color: #c81623;
}
.safe .z {
  background-color: #40b83f;
}
.safe .q {
  background-color: #f79100;
}
.agree {
  margin-top: 40px;
  padding-left: 95px;
}
.agree input {
  vertical-align: middle;
}
.agree a {
  color: #1ba1e6;
}
.reg-form ul li .btn {
  margin-top: 50px;
  margin-left: 100px;
  width: 200px;
  height: 34px;
  color: #fff;
  background-color: #c81623;
}
/* footer */
.mod_copyright {
  text-align: center;
  padding-top: 20px;
}
.links {
  margin-bottom: 15px;
}
.links a {
  margin: 0 3px;
}
.copyright {
  line-height: 20px;
}
</style>