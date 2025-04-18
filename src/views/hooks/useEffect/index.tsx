import React, { useState, useEffect, useRef, memo } from "react"

// 使用 React.memo 实现类似 shouldComponentUpdate 的优化，
// React.memo 只对 props 进行浅比较
const UseEffectExample = memo((props) => {
	console.log("===== UseStateExample render=======")
	// 声明一个叫 "count" 的 state 变量。
	const [count, setCount] = useState(0)
	const [count2, setCount2] = useState(0)
	const [fatherCount, setFatherCount] = useState(props.fatherCount)

	console.log(props)

	// 模拟 getDerivedStateFromProps
	useEffect(() => {
		// props.fatherCount 有更新，才执行对应的修改，没有更新执行另外的逻辑
		if (props.fatherCount == fatherCount) {
			console.log("======= 模拟 getDerivedStateFromProps=======")
			console.log(props.fatherCount, fatherCount)
		} else {
			setFatherCount(props.fatherCount)
			console.log(props.fatherCount, fatherCount)
		}
	})

	// 模拟 componentDidMount
	useEffect(() => {
		console.log("=======只渲染一次(相当于DidMount)=======")
		console.log(count)
	}, [])

	// 模拟 componentDidUpdate
	// useRef 返回一个可变的 ref 对象,其 .current 属性被初始化为传入的参数
	// useRef 在组件的整个生命周期内保持不变,可以用来存储任何可变值
	// 主要用于:
	// 1. 访问DOM元素
	// 2. 保存任意可变值(类似于类组件的实例属性)
	// 3. 不会触发组件重新渲染
	const mounted = useRef()
	useEffect(() => {
		console.log(mounted)
		if (!mounted.current) {
			mounted.current = true
		} else {
			console.log("======count 改变时才执行(相当于DidUpdate)=========")
			console.log(count)
		}
	}, [count])

	// 模拟 componentDidMount 和 componentDidUpdate、componentWillUnmount
	useEffect(() => {
		// 在 componentDidMount，以及 count 更改时 componentDidUpdate 执行的内容
		console.log("======初始化、或者 count 改变时才执行(相当于Didmount和DidUpdate)=========")
		console.log(count)
		return () => {
			console.log("====unmount=======")
			console.log(count)
		}
	}, [count])

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>

			<button onClick={() => setCount2(count2 + 1)}>Click me2</button>
		</div>
	)
})

// 添加displayName属性来解决eslint的display-name警告
UseEffectExample.displayName = "UseEffectExample"

export default UseEffectExample
