/*
 * @Author: yc
 * @Date: 2024-11-22 19:34:21
 * @LastEditors: yc
 * @LastEditTime: 2025-04-11 15:23:53
 * @Description: App.tsx
 */

import { ConfigProvider } from "antd"
import { BrowserRouter } from "react-router-dom"
import AuthRouter from "@/router/modules/authRouter"
import Router from "@/router/index"
import React from "react"

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<ConfigProvider>
				<AuthRouter>
					<Router />
				</AuthRouter>
			</ConfigProvider>
		</BrowserRouter>
	)
}

export default App 