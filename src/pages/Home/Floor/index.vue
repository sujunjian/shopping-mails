<template>
    <div class="floor">
        <!--  -->
        <div class="top-floor">
            <span>{{ list.name }}</span>
            <ul>
                <li v-for="(navlist, index) in list.navList" :key="index"><a href="">{{ navlist.text }}</a></li>
            </ul>
        </div>
        <!--  -->
        <div class="sub-floor">

            <div class="floor-left-column">
                <ul>
                    <li v-for="(k, index) in list.keywords" :key="index">{{ k }}</li>
                </ul>
                <img src="./img/a.img/floor-1-1.png" alt="">
            </div>
            <!-- 轮播图 -->
            <div class="floor-lunbo">
                <div class="f-pic">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(carousel, index) in list.carouselList" :key="carousel.id">
                                <img :src="carousel.imageUrl" alt="">
                            </div>

                        </div>
                        <!-- 如果需要分页器 -->
                        <div class="swiper-pagination"></div>

                        <!-- 如果需要导航按钮 -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>

                    </div>
                </div>
            </div>

            <div class="box3">
                <img src="./img/a.img/floor-1-2.png" alt="">
                <img src="./img/a.img/floor-1-3.png" alt="">
            </div>

            <div class="box4">
                <img src="./img/a.img/floor-1-4.png" alt="">
            </div>

            <div class="box5">
                <img src="./img/a.img/floor-1-5.png" alt="">
                <img src="./img/a.img/floor-1-6.png" alt="">
            </div>

        </div>
    </div>
</template>
<script>
import Swiper from '../ListContianer/js/swiper';
export default {
    name: 'MyFloor',
    props: ['list'],
    mounted() {
    },
    watch: {
        list: {
            immediate: true,
            deep: true,
            handler() {
                this.$nextTick(()=>{
                    var mySwiper = new Swiper('.swiper-container', {
                        // direction: 'vertical', // 垂直切换选项
                        loop: true, // 循环模式选项

                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        },

                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },

                    })
                })
            }
        }
    }
}
</script>
<style scoped>
.floor {
    width: 1200px;
    height: 410.6px;
    margin: 15px auto;
}

.floor .top-floor {
    width: 100%;
    height: 47.6px;
    border-bottom: 2px solid #c81623;
}

.floor .top-floor span {
    float: left;
    margin: 9px 0;
    font-size: 20px;
    line-height: 30px;
    color: #c81623;
    font-weight: 700;
}

.floor .top-floor ul {
    float: right;
    width: 464.562px;
    height: 30.8px;
    padding: 1px;
    margin-top: 13.4px;
}

.floor .top-floor ul li {
    float: left;
    margin-left: 5px;
    margin-right: 5px;
}

.floor .top-floor ul li::after {
    content: '|';
    color: #c81623;
    margin-left: 9px;
    margin-right: 2px;
}

.floor .top-floor ul #gaoduan::after {
    content: none;
}

.floor .top-floor ul li a {
    color: #c81623;
}

.floor .top-floor ul li a:hover {
    text-decoration: underline;
}

.floor .sub-floor {
    width: 100%;
    height: 360px;
}

.floor .sub-floor .floor-left-column {
    width: 209.35px;
    float: left;
    background-color: #f7f7f7;
}

.floor .sub-floor .floor-left-column ul {
    height: 79.8px;
    padding: 12px 0;
}

.floor .sub-floor .floor-left-column ul li {
    float: left;
    height: 25.6px;
    line-height: 25.6px;
    width: 83.737px;
    margin: 0 10px;
    text-align: center;
    border-bottom: 1px solid #e4e4e4;
}

.floor .sub-floor .floor-left-column img {
    width: 209.35px;
}

.floor .sub-floor .floor-lunbo {
    width: 329px;
    float: left;
    position: relative;
}

.floor .sub-floor .floor-lunbo .f-pic {
    height: 360px;
    position: relative;
}

.floor .sub-floor .floor-lunbo .f-pic a {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
}

.floor .sub-floor .floor-lunbo .f-pic a img {
    width: 100%;
    height: 100%;
}

.floor .sub-floor .floor-lunbo .f-pic a:first-child {
    z-index: 1;
}

.floor .sub-floor .floor-lunbo .f-pic a:target {
    z-index: 2;
}

.floor .sub-floor .floor-lunbo .left-arrow {
    width: 27px;
    height: 44px;
    background-image: url(./img/icon-slides.png);
    background-position: -89px;
    position: absolute;
    z-index: 999;
    top: 50%;
    margin-top: -22px;
    left: 0;
}

.floor .sub-floor .floor-lunbo:hover .left-arrow {
    background-image: url(./img/icon-slides.png);
    background-position: -6px;
}

.floor .sub-floor .floor-lunbo .right-arrow {
    width: 27px;
    height: 44px;
    background-image: url(./img/icon-slides.png);
    background-position: -132px;
    position: absolute;
    z-index: 999;
    top: 50%;
    margin-top: -22px;
    right: 0;
}

.floor .sub-floor .floor-lunbo:hover .right-arrow {
    background-image: url(./img/icon-slides.png);
    background-position: -50px;
}

.floor .sub-floor .floor-lunbo ul {
    position: absolute;
    z-index: 999;
    top: 330px;
    left: 50%;
    margin-left: -27px;
}

.floor .sub-floor .floor-lunbo ul li {
    float: left;
}

.floor .sub-floor .floor-lunbo ul div {
    width: 8px;
    height: 8px;
    margin: 0 4px;
    border-radius: 50%;
    background-color: #9c94a4;
}

.floor .sub-floor .floor-lunbo ul div:hover {
    background-color: #007aff;
}

.floor .sub-floor .box3 {
    width: 219.33px;
    height: 360px;
    float: left;
}

.floor .sub-floor .box3 img {
    height: 180px;
    float: left;
    border-bottom: 1px solid #e4e4e4;
}

.floor .sub-floor .box3 img:hover {
    opacity: .7;
}

.floor .sub-floor .box4 {
    float: left;
}

.floor .sub-floor .box4 img {
    width: 220px;
    height: 360px;
    border: 1px solid #e4e4e4;
}

.floor .sub-floor .box5 {
    width: 220px;
    height: 360px;
    float: left;
}

.floor .sub-floor .box5 img {
    width: 100%;
    height: 180px;
    float: left;
    border-bottom: 1px solid #e4e4e4;
}

.floor .sub-floor .box5 img:hover {
    opacity: .7;
}
</style>