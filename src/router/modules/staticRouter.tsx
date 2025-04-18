/*
 * @Author: yc
 * @Date: 2024-11-24 09:35:15
 * @LastEditors: yc
 * @LastEditTime: 2024-11-26 17:20:13
 * @Description: 静态路由
 */
import React, { lazy } from "react"
import { Navigate } from "react-router-dom"
import lazyLoad from "@/router/modules/lazyLoad"
import Layout from "@/layout/index.tsx"
import Login from "@/views/login/index.tsx"
import { RouteObject } from "@/types"

/**
 * staticRouter (静态路由)
 */
export const staticRouter: RouteObject[] = [
	// {
	// 	path: "/",
	// 	element: <Navigate to="/login" />,
	// },
	{
		path: "/login",
		element: <Login />,
		meta: {
			key: "login",
			title: "登录",
		},
	},
	{
		path: "/",
		element: <Layout />,
		meta: {
			key: "layout",
		},
		children: [],
	},
	{
		path: "*",
		element: <Navigate to="/404" />,
	},
]

/**
 * errorRouter (错误页面路由)
 */
export const errorRouter: RouteObject[] = [
	{
		path: "/403",
		element: lazyLoad(lazy(() => import("@/components/ErrorMessage/403.jsx"))),
		meta: {
			key: "403",
			title: "403页面",
		},
	},
	{
		path: "/404",
		element: lazyLoad(lazy(() => import("@/components/ErrorMessage/404.jsx"))),
		meta: {
			key: "404",
			title: "404页面",
		},
	},
	{
		path: "/500",
		element: lazyLoad(lazy(() => import("@/components/ErrorMessage/500.jsx"))),
		meta: {
			key: "500",
			title: "500页面",
		},
	},
] 