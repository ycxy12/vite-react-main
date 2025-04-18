import { useReducer } from "react"

// 1️⃣ 定义状态类型
interface State {
	count: number
}

// 2️⃣ 定义动作类型（联合类型）
type Action = { type: "increment" } | { type: "decrement" }

// 3️⃣ 初始状态
const initialState: State = {
	count: 0,
}

// 4️⃣ reducer 函数
const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1 }
		case "decrement":
			return { count: state.count - 1 }
		default:
			// TypeScript 会确保这里永远不会出错
			throw new Error("Unsupported action type")
	}
}

// 5️⃣ 组件
function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const increment = () => {
		dispatch({ type: "increment" })
	}

	const decrement = () => {
		dispatch({ type: "decrement" })
	}

	return (
		<div>
			<p>Count: {state.count}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	)
}

export default Counter
