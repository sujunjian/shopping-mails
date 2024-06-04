<template>
    <div class="banner">
        <div class="top-banner">
            <h3>猜你喜欢</h3>
            <a href="">
                <span>换一换</span>
                <i class="iconfont" style="font-size: 20px; color: #ff713f;">&#xe7a9;</i>
            </a>
        </div>
        <ul class="sub-banner">
            <li>
                <a href="">
                    <img src="./img/like_02.f9bad374.png" alt="">
                    <div>
                        <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                        <strong>￥116.00</strong>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="./img/下载.png" alt="">
                    <div>
                        <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                        <strong>￥116.00</strong>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="./img/like_01.2dfb0454.png" alt="">
                    <div>
                        <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                        <strong>￥116.00</strong>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="./img/like_02.f9bad374.png" alt="">
                    <div>
                        <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                        <strong>￥116.00</strong>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="./img/下载.png" alt="">
                    <div>
                        <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                        <strong>￥116.00</strong>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="./img/like_01.2dfb0454.png" alt="">
                    <div>
                        <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                        <strong>￥116.00</strong>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'MyBanner'
}
</script>
<style scoped>
/* banner开始 */
.banner {
    width: 1200px;
    height: 281.6px;
    margin: 10px auto;
}

.banner .top-banner {
    height: 29.6px;
    line-height: 29.6px;
}

.banner .top-banner h3 {
    float: left;
    margin: 0;
    font-size: 20px;
}

.banner .top-banner a {
    width: 66px;
    height: 25px;
    line-height: 25px;
    float: right;
}

.banner .top-banner a:hover span {
    color: #e1251b;
}

.banner .sub-banner {
    height: 250px;
    padding: 0 5px;
    border: 1px solid #e4e4e4;
}

.banner .sub-banner li {
    width: 198px;
    float: left;
    box-sizing: border-box;
    text-align: center;
}

.banner .sub-banner li a {
    width: 142px;
    height: 250px;
    display: inline-block;
}

.banner .sub-banner li a:hover img {
    animation-name: zzz;
    animation-duration: 1s;
    animation-direction: alternate;
    animation-timing-function: linear;
}

@keyframes zzz {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    100% {
        transform: scale(1.1);
        opacity: .4;
    }
}

.banner .sub-banner li a div {
    width: 142px;
    border-right: 1px solid #e4e4e4;
    text-align: left;
}

.banner .sub-banner li a div strong {
    font-size: 20px;
    color: #df3033;
    line-height: 30px;
    margin: 9px 0;
}

/* banner结束 */
</style>