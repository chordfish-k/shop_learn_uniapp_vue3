import type { OrderCreateParams, OrderCreateResult, OrderPreResult } from "@/types/order"
import { http } from "@/utils/http"

/**
 * 填写订单-获取预付订单
 */
export const getMemberOrderPreAPI = () => {
    return http<OrderPreResult>({
        method: 'GET',
        url: '/member/order/pre'
    })
}

/**
 * 填写订单-获取立即购买订单
 */
export const getMemberOrderPreNowAPI = (data: {
    skuId: string,
    count: string,
    address?: string
}) => {
    return http<OrderPreResult>({
        method: 'GET',
        url: '/member/order/pre/now',
        data,
    })
}

/**
 * 提交订单
 */
export const postMemberOrderAPI = (data: OrderCreateParams) => {
    return http<OrderCreateResult>({
        method: 'POST',
        url: '/member/order',
        data,
    })
}