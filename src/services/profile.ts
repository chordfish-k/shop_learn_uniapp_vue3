// 获取个人信息
// GET/member/profile

import type { ProfileDetail } from "@/types/member"
import { http } from "@/utils/http"

export const getMemberProfileAPI = () => {
    return http<ProfileDetail>({
        method: 'GET',
        url: '/member/profile',
    })
}