/*
 * @Author: yc
 * @Date: 2024-11-24 18:40:37
 * @LastEditors: yc
 * @LastEditTime: 2024-11-26 18:36:09
 * @Description: 路由
 */
import React, { lazy, useMemo } from "react"
import { useSelector } from "react-redux"
import { useRoutes } from "react-router-dom"
import lazyLoad from "./modules/lazyLoad"
import { staticRouter, errorRouter } from "./modules/staticRouter"
import { RouteObject, MenuItem } from "@/types"

// * 导入所有router
const modules: Record<string, () => Promise<any>> = import.meta.glob("@/views/**/*.tsx")

interface RootState {
  menu: {
    flatMenuList: MenuItem[]
  }
}

const Router: React.FC = () => {
	const flatMenuList = useSelector((state: RootState) => state.menu.flatMenuList)

	//生成扁平化菜单  使用 useMemo 缓存动态路由，只有 flatMenuList 变化时才重新生成
	const dynamicRouter = useMemo(() => {
		return flatMenuList.reduce<RouteObject[]>((previous, current) => {
			// 过滤掉有子项的菜单项
			if (current.element)
				previous.push({
					path: current.path,
					element: lazyLoad(lazy(modules[`/src/views${current.element}.tsx`])),
					meta: current.meta,
				})
			return previous
		}, [])
	}, [flatMenuList]) // 依赖于 flatMenuList，当其变化时重新计算

	//将动态路由插入到Layout中
	let index = staticRouter.findIndex((item) => item.meta?.key === "layout")
	if (index !== -1) {
		staticRouter[index].children = dynamicRouter
	}

	//合并路由
	const rootRoutes = [...staticRouter, ...errorRouter]
	const routes = useRoutes(rootRoutes)
	return routes
}

export default Router 