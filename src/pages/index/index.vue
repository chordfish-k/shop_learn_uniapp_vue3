<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { BannerItem, CategoryItem } from '@/types/home';
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue';

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// 用的是uniapp的onLoad而不是小程序
onLoad(()=>{
  getHomeBannerData()
  getHomeCategoryData()
})
</script>

<template>
  <!--自定义导航栏-->
  <CustomNavbar />
  <!--自定义轮播图-->
  <XtxSwiper :list="bannerList"/>
  <!--分类面板-->
  <CategoryPanel :list="categoryList"/>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
