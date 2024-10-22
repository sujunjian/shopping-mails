const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭语法检查
  lintOnSave: false,
  // 项目打包时不打包map文件（该文件用来检查报错在哪一行代码）
  productionSourceMap:false,
  devServer: {
    // 小写的 proxy, 别被代码提示带偏
    proxy: {
      // 自定义代理名,请求时使用
      '/api': {
        // /dy 要映射到 target 域名
        // 要跨域到的网址
        target: 'http://gmall-h5-api.atguigu.cn', //结尾没有 / , 千万别多写
        changeOrigin: true, //关键点: 代表需要跨域
        // pathRewrite: {
        // 	// ^ : 正则的字符串开头
        // 	'^/api': '',
        // },
      },
    },
  },
})
