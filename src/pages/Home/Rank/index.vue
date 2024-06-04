<template>
     <div class="rank">
        <div class="hot">
            <a class="active" href="#">
                <i class="iconfont">&#xe709;</i>
                <p>热卖排行</p>
            </a>
            <a href="#">
                <i class="iconfont">&#xe709;</i>
                <p>特价排行</p>
            </a>
            <a href="#">
                <i class="iconfont">&#xe709;</i>
                <p>新品排行</p>
            </a>
        </div>
        <div class="sub-rank">

            <div class="box1">
                <a href=""><img src="./img/1.08947ef2.jpg" alt=""></a>
                <div class="box2">
                    <a href="">
                        <p>【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
                    </a>
                    <span>定金：￥100.00</span>
                </div>
            </div>
            <div class="box1">
                <a href=""><img src="./img/1.08947ef2.jpg" alt=""></a>
                <div class="box2">
                    <a href="">
                        <p>【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
                    </a>
                    <span>定金：￥100.00</span>
                </div>
            </div>
            <div class="box1">
                <a href=""><img src="./img/1.08947ef2.jpg" alt=""></a>
                <div class="box2">
                    <a href="">
                        <p>【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
                    </a>
                    <span>定金：￥100.00</span>
                </div>
            </div>
            <div class="box1">
                <a href=""><img src="./img/1.08947ef2.jpg" alt=""></a>
                <div class="box2">
                    <a href="">
                        <p>【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
                    </a>
                    <span>定金：￥100.00</span>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name:'MyRank'
}
</script>
<style scoped>

.rank{
            width: 1200px;
            margin: 10px auto;
        }

        .rank .hot{
            width: 312px;
            height: 78px;
            margin: 0 auto;
        }

        .rank .hot a{
            float: left;
            text-align: center;
        }

        .rank .hot a i{
            font-size: 40px;
            color: #dcdcdc;
        }

        .rank .hot a p{
            margin: 0;
            font-size: 16px;
            color: #999;
        }

        .rank .hot a:hover i{
            color: #ff713f;
        }

        .rank .hot a:hover p{
            color: #e60012;
        }

        .rank .hot a:nth-child(2){
            margin-left: 60px;
            margin-right: 60px;
        }
        /* hot结束 */

        /* sub-rank开始 */
        .rank .sub-rank{
            width: 1180px;
            height: 340px;
            margin: 10px auto;
        }

        .rank .sub-rank .box1{
            width: 269px;
            height: 328px;
            border: 1px solid #e1251b;
            margin: 0 12px 10px 12px;
            float: left;
        }

        .rank .sub-rank .box1 img{
            width: 200px;
            margin: 5px 34.5px 25px;
        }

        .rank .sub-rank .box2{
            height: 95px;
            background-color: #fafafa;
        }

        .rank .sub-rank .box2 a p{
            height: 50px;
            line-height: 28px;
            margin: 0;
            padding-left: 10px;
        }

        .rank .sub-rank .box2 span{
            display: block;
            height: 35px;
            font-size: 20px;
            color:#e1251b;
            padding-left: 10px;
            margin-top: 10px;
        }
        /* sub-rank结束 */
</style>