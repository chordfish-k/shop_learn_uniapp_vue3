import type { CategoryTopItem } from "@/types/category"
import { http } from "@/utils/http"

/**
 * 通用热门推荐API
 * @param url 请求地址
 * @param data 请求参数
 */
export const getCategoryTopAPI = () => {
    return http<CategoryTopItem[]>({
        method: 'GET',
        url: '/category/top',
    })
}