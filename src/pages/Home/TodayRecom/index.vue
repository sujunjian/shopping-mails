<template>
    <div class="recom-column">
         <div>
             <i class="iconfont">&#xe8c4;</i>
             <span>今日推荐</span>
         </div>
         <ul>
             <li>
                 <a href="#">
                     <img src="./img/today01.a73b6422.png" alt="">
                 </a>
             </li>
             <li>
                 <a href="#">
                     <img src="./img/today02.5fea2d9f.png" alt="">
                 </a>
             </li>
             <li>
                 <a href="#">
                     <img src="./img/today03.64379233.png" alt="">
                 </a>
             </li>
             <li>
                 <a href="#">
                     <img src="./img/today04.8d34fdb9.png" alt="">
                 </a>
             </li>
         </ul>
     </div>
 </template>
   
 <script>
 //   import { mapState } from 'vuex';
   
   export default {
     name: "TodayRommend",
   }    
   </script>
 
   <style scoped>
 .recom-column{
             width: 1200px;
             height: 165px;
             margin: 0 auto;
         }
 
         .recom-column div{
             width: 200px;
             height: 110px;
             padding-top: 27.5px;
             padding-bottom: 27.5px;
             background-color: #5c5251;
             float: left;
             position: relative;
         }
 
         .recom-column div i,.recom-column div span{
             color: #ffffff;
             position: absolute;
             display: inline-block; 
         }
 
         .recom-column div i{
             font-size: 65px;
             margin-top: -14px;
             margin-left: 68px;
         }
 
         .recom-column div span{
             font-size: 18px;
             margin-top: 76px;
             margin-left: 63px; 
             font-weight: bold;
         }
 
         .recom-column ul{
             width: 1000px;
             height: 165px;
             box-sizing: border-box;
             float: right;
         }
 
         .recom-column ul li a{
             float: left;
         }
 
         .recom-column ul li a img{
             width: 250px;
         }
 
         .recom-column ul li a img:hover{
             opacity: .7;
         }
   </style>
   