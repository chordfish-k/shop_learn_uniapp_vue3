<template name="skeleton">
    <view class="sk-container">
        <view class="navbar"
              style="padding-top:20px">
            <view class="wrap">
                <navigator class="back icon-home sk-pseudo sk-pseudo-circle"
                           open-type="switchTab"></navigator>
                <view class="title sk-transparent sk-text-14-2857-521 sk-text">订单详情</view>
            </view>
        </view>
        <scroll-view :scroll-y="true"
                     class="viewport"
                     id="scroller"
                     :enable-back-to-top="true">
            <view class="overview sk-image"
                  style="padding-top:40px">
                <view class="status sk-transparent sk-text-0-0000-437 sk-text">已取消</view>
                <view class="button-group">
                    <navigator class="button sk-transparent sk-text-28-1250-346 sk-text"
                               hover-class="none"
                               style="background-position-x: 50%;"> 再次购买 </navigator>
                </view>
            </view>
            <view class="shipment">
                <view class="item sk-image">
                    <view class="message sk-transparent sk-text-14-2857-381 sk-text"> 您已在广州市天河区黑马程序员完成取件，感谢使用菜鸟驿站，期待再次为您服务。
                    </view>
                    <view class="date sk-transparent sk-text-14-2857-77 sk-text"> 2023-04-14 13:14:20 </view>
                </view>
                <view class="locate sk-image">
                    <view class="user sk-transparent sk-text-14-2857-539 sk-text">牛子豪 13777777777</view>
                    <view class="address sk-transparent sk-text-14-2857-442 sk-text">北京市 北京市 东城区哼哼啊啊啊啊</view>
                </view>
            </view>
            <view class="goods">
                <view class="item">
                    <navigator class="navigator"
                               hover-class="none">
                        <image class="cover sk-image"></image>
                        <view class="meta">
                            <view class="name ellipsis sk-transparent sk-text-14-2857-784 sk-text">居家旅行常备家用医疗包（含医疗用品）</view>
                            <view class="type sk-transparent sk-text-22-2222-235 sk-text">加冰袋款</view>
                            <view class="price">
                                <view class="actual">
                                    <text class="symbol sk-transparent sk-opacity">¥</text>
                                    <text class="sk-transparent sk-text-14-2857-671 sk-text">59.00</text>
                                </view>
                            </view>
                            <view class="quantity sk-transparent sk-opacity">x1</view>
                        </view>
                    </navigator>
                    <view class="action">
                        <view class="sk-transparent sk-text-28-3333-258 sk-text"
                              style="background-position-x: 50%;">申请售后</view>
                        <navigator class="sk-transparent sk-text-28-3333-448 sk-text"
                                   style="background-position-x: 50%;"> 去评价 </navigator>
                    </view>
                </view>
                <view class="total">
                    <view class="row">
                        <view class="text sk-transparent sk-text-0-0000-869 sk-text">商品总价: </view>
                        <view class="symbol sk-transparent sk-text-0-0000-286 sk-text sk-pseudo sk-pseudo-circle">59.00
                        </view>
                    </view>
                    <view class="row">
                        <view class="text sk-transparent sk-text-0-0000-36 sk-text">运费: </view>
                        <view class="symbol sk-transparent sk-text-0-0000-738 sk-text sk-pseudo sk-pseudo-circle">6.00
                        </view>
                    </view>
                    <view class="row">
                        <view class="text sk-transparent sk-text-0-0000-744 sk-text">应付金额: </view>
                        <view class="symbol primary sk-transparent sk-text-0-0000-20 sk-text sk-pseudo sk-pseudo-circle">
                            65.00</view>
                    </view>
                </view>
            </view>
            <view class="detail">
                <view class="title sk-transparent sk-text-0-0000-287 sk-text">订单信息</view>
                <view class="row">
                    <view class="item sk-transparent"> 订单编号: 1693844391866667010
                        <text class="sk-transparent sk-text-0-0000-53 sk-text">复制</text>
                    </view>
                    <view class="item sk-transparent sk-text-0-0000-872 sk-text">下单时间: 2023-08-22 12:35:48</view>
                </view>
            </view>
            <view is="components/XtxGuess"
                  class="r">
                <view class="caption XtxGuess--caption"></view>
            </view>
            <view class="toolbar"
                  style="padding-bottom:0px">
                <view class="sk-transparent sk-text-14-2857-135 sk-text"> 去支付 </view>
                <view class="sk-transparent sk-text-14-2857-962 sk-text"> 取消订单 </view>
            </view>
        </scroll-view>
    </view>
</template>

<style>
.sk-transparent {
    color: transparent !important;
}

.sk-text-14-2857-521 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-0-0000-437 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 36.0000rpx;
    position: relative !important;
}

.sk-text-28-1250-346 {
    background-image: linear-gradient(transparent 28.1250%, #EEEEEE 0%, #EEEEEE 71.8750%, transparent 0%) !important;
    background-size: 100% 64.0000rpx;
    position: relative !important;
}

.sk-text-14-2857-381 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-77 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-539 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-442 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-784 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-22-2222-235 {
    background-image: linear-gradient(transparent 22.2222%, #EEEEEE 0%, #EEEEEE 77.7778%, transparent 0%) !important;
    background-size: 100% 43.2000rpx;
    position: relative !important;
}

.sk-opacity {
    opacity: 0 !important;
}

.sk-text-14-2857-671 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-28-3333-258 {
    background-image: linear-gradient(transparent 28.3333%, #EEEEEE 0%, #EEEEEE 71.6667%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
}

.sk-text-28-3333-448 {
    background-image: linear-gradient(transparent 28.3333%, #EEEEEE 0%, #EEEEEE 71.6667%, transparent 0%) !important;
    background-size: 100% 60.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-869 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-286 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-36 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-738 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-744 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-20 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 36.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-287 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 30.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-53 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 20.0000rpx;
    position: relative !important;
}

.sk-text-0-0000-872 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
}

.sk-text-14-2857-135 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-962 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-image {
    background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #EFEFEF !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
    border-radius: 50% !important;
}

.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
}
</style>