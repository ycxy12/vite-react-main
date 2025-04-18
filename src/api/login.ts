/*
 * @Author: yc
 * @Date: 2024-11-24 18:24:36
 * @LastEditors: yc
 * @LastEditTime: 2024-11-24 20:33:54
 * @Description: 描述
 */
import request from "@/common/axios"
import routes from "@/router/routes.json"
import { MenuItem } from "@/types"

/**
 * @name 登录模块
 */

interface LoginParams {
  username: string
  password: string
  remember?: boolean
}

interface LoginResponse {
  access_token: string
  userName: string
  userId: string
}

// * 用户登录接口
export const loginApi = (params: LoginParams) => {
	return request.post<LoginResponse>("/api/login", params)
}

// 路由类型可能与 MenuItem 不匹配，使用断言进行强制转换
// * 获取菜单列表
export const getMenuList = () => {
	return routes as unknown as { data: MenuItem[] }
} 