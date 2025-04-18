/*
 * @Author: yc
 * @Date: 2024-11-24 17:06:14
 * @LastEditors: yc
 * @LastEditTime: 2024-11-24 17:07:35
 * @Description: 描述
 */
import React from "react"
import { Button, Result } from "antd"
import { useNavigate } from "react-router-dom"
import { HOME_URL } from "@/common/config"
import "./index.less"

const NotAuth: React.FC = () => {
	const navigate = useNavigate()
	const goHome = (): void => {
		navigate(HOME_URL)
	}
	return (
		<Result
			status="403"
			title="403"
			subTitle="很抱歉, 您无权访问此页面!"
			extra={
				<Button type="primary" onClick={goHome}>
					返回首页
				</Button>
			}
		/>
	)
}

export default NotAuth 