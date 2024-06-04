import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)//使用插件
import zh_CN from 'vee-validate/dist/locale/zh_CN'
//   表单验证
VeeValidate.Validator.localize('zh_CN',{
    //  中文提示信息
    messages:{
        ...zh_CN.messages,
        is:(field)=>`${field}必须与密码相同` //修改内置规则的message
        },
        attributes:{
            phone:'手机号',
            code:'验证码',
            password:'密码',
            repassword:'确认密码',
            isCheck:'协议',
            agree:'协议'
        }
})