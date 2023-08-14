/**
 * 首页-广告区域 数据类型
 */
export type BannerItem = {
    /** 跳转链接 */
    hrefUrl: string
    /** id */
    id: string
    /** 图片链接 */
    imgUrl: string
    /** 跳转类型 */
    type: number
}

/**
 * 首页-前台分类 数据类型
 */
export interface CategoryItem {
    /**
     * 展示图标
     */
    icon: string;
    /**
     * id
     */
    id: string;
    /**
     * 分类名称
     */
    name: string;
}