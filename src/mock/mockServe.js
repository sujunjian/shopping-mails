import mockjs from "mockjs"
//json数据格式、图片引入默认对外暴露 
import banner from './mockdata/bannnerlist.json'
import floor from './mockdata/floor.json'

// 第一个参数为：请求地址 第二个参数为：请求数据
mockjs.mock('/mock/banner',{code:200,data:banner})
mockjs.mock('/mock/floor',{code:200,data:floor})

