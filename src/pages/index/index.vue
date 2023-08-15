<script setup lang="ts">
import { 
  getHomeBannerAPI, 
  getHomeCategoryAPI, 
  getHomeHotAPI } from '@/services/home';
import type { BannerItem, CategoryItem, HotItem } from '@/types/home';
import type { XtxGuessInstance } from '@/types/components'
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue';
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue';

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
  console.log(res)
}

// 加载中标记
const isLoading = ref(false)

// 用的是uniapp的onLoad而不是小程序
onLoad(async ()=>{
  isLoading.value = true
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryData(),
    getHomeHotData(),
  ])
  isLoading.value = false
})


//猜你喜欢组件的实例
const guessRef = ref<XtxGuessInstance>()

// 滚动触底事件
const onScrolltolower = () => {
  guessRef.value?.getMore()
}

// 下拉刷新状态
const isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh =async () => {
  // 开启动画
  isTriggered.value = true
  // 重置猜你喜欢组件数据
  guessRef.value?.resetData() // 加载猜你喜欢组件数据
  await Promise.all([ // 加载其他组件数据
    getHomeBannerData(), 
    getHomeCategoryData(), 
    getHomeHotData()
  ])

  //等待数据更新后关闭动画
  isTriggered.value = false
}
</script>

<template>
  <!--自定义导航栏-->
  <CustomNavbar />
  <!--滚动容器-->
  <scroll-view 
    scroll-y 
    class="scroll-view"
    @scrolltolower="onScrolltolower"
    @refresherrefresh="onRefresherrefresh"
    refresher-enabled
    :refresher-triggered="isTriggered"
  >
    <PageSkeleton v-if="isLoading"/>
    <template v-else>
      <!--自定义轮播图-->
      <XtxSwiper :list="bannerList"/>
      <!--分类面板-->
      <CategoryPanel :list="categoryList"/>
      <!--热门推荐-->
      <HotPanel :list="hotList"/>
      <!--猜你喜欢-->
      <XtxGuess ref="guessRef"/>
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
