/*
 * @Author: yc
 * @Date: 2024-11-24 17:08:37
 * @LastEditors: yc
 * @LastEditTime: 2025-04-14 13:57:11
 * @Description: 测试
 */
import { Table, Button, Form, Input } from "antd"
import style from "./index.modules.less"

interface dataType {
	key: string
	name: string
	age: number
	address: string
}

//表格数据
const dataSource = [
	{ key: "1", name: "胡彦斌", age: 32, address: "西湖区湖底公园1号" },
	{ key: "2", name: "胡彦祖", age: 42, address: "西湖区湖底公园1号" },
]
//表格列
const columns = [
	{ title: "姓名", dataIndex: "name", key: "name" },
	{ title: "年龄", dataIndex: "age", key: "age" },
	{ title: "住址", dataIndex: "address", key: "address" },
]

const crudTable = () => {
	return (
		<>
			<div className="{style.form}">
				<Form
					name="wrap"
					labelCol={{ flex: "110px" }}
					labelAlign="left"
					labelWrap
					wrapperCol={{ flex: 1 }}
					colon={false}
					style={{ maxWidth: 600 }}
				>
					<Form.Item label="姓名" name="username">
						<Input />
					</Form.Item>

					<Form.Item label="年龄" name="age">
						<Input />
					</Form.Item>

					<Form.Item label=" ">
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
			<Table dataSource={dataSource} columns={columns} />;
		</>
	)
}

export default crudTable
