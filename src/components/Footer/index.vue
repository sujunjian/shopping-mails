<template>
    <div>
        <div class="footer">
        <div class="top-footer">
            <dl>
                <dt>购物指南</dt>
                <dd>购物流程</dd>
                <dd>会员介绍</dd>
                <dd>生活旅行/团购</dd>
                <dd>常见问题</dd>
                <dd>购物指南</dd>
            </dl>
            <dl>
                <dt>配送方式</dt>
                <dd>上门自提</dd>
                <dd>211限时达</dd>
                <dd>配送服务查询</dd>
                <dd>配送费收取标准</dd>
                <dd>海外配送</dd>
            </dl>
            <dl>
                <dt>支付方式</dt>
                <dd>货到付款</dd>
                <dd>在线支付</dd>
                <dd>分期付款</dd>
                <dd>邮局汇款</dd>
                <dd>公司转账</dd>
            </dl>
            <dl>
                <dt>售后服务</dt>
                <dd>售后政策</dd>
                <dd>价格保护</dd>
                <dd>退款说明</dd>
                <dd>返修/退换货</dd>
                <dd>取消订单</dd>
            </dl>
            <dl>
                <dt>特色服务</dt>
                <dd>夺宝岛</dd>
                <dd>DIY装机</dd>
                <dd>延保服务</dd>
                <dd>尚品汇E卡</dd>
                <dd>尚品汇通信</dd>
            </dl>
            <dl>
                <dt>帮助中心</dt>
                <dd>
                    <img src="./images/wx_cz.7cc5834b.jpg" alt="">
                </dd>
            </dl>
        </div>
        <div class="sub-footer">
            <ul>
                <li>关于我们</li>
                <li>联系我们</li>
                <li>商家入驻</li>
                <li>营销中心</li>
                <li>友情链接</li>
                <li>关于我们</li>
                <li>联系我们</li>
                <li>商家入驻</li>
                <li>营销中心</li>
                <li>友情链接</li>
            </ul>
            <p class="site">地址: 北京市昌平区宏福科技园综合楼6层</p>
            <p>京ICP备19006430号</p>
        </div>
    </div>
    </div>
</template>
<script>
export default({
    name:'MyFooter',
})

</script>
<style scoped>
.footer{
            width: 1519.2px;
            height: 315.2px;
            background-color: #eaeaea;
        }

        .footer .top-footer{
            min-width: 1519.2px;
            width: 100%;
            height: 162.6px;
            border: 1px solid #e4e1e1;
            padding-top: 20px;
            padding-bottom: 20px;
            margin-top: 10px;
        }

        .footer .top-footer dl{
            float: left;
            margin-left: 87.5px;
            margin-right: 87.5px;
        }

        .footer .top-footer dl dt{
            font-weight: bold;
            font-size: 14px;
        }

        .footer .top-footer dl dd{
            margin-left: 0;
            font-size: 12px;
        }

        .footer .sub-footer{
            width: 100%;
            padding: 20px 0;
            text-align: center;
        }

        .footer .sub-footer ul{
            text-align: center;
            margin-bottom: 15px;
        }

        .footer .sub-footer ul li{
            display: inline-block;
            padding-right: 10px;
            border-right: 1px solid #333333;
            margin-right: 10px;
        }

        .footer .sub-footer .site{
            margin-bottom: 10px;
        }
</style>