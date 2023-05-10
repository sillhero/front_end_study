import React, { useEffect, useState } from "react";

export default function EffectCom() {
	// 函数式组件内部调用useState函数

	let [count, setCount] = useState(100);
	let [count2, setCount2] = useState(0);

	//声明事件回调函数
	let fn = () => {
		//更新状态
		setCount(count + 1);
	};

	// // componentDidMount 的模拟实现
	// useEffect(() => {
	//     console.log('组件加载完成');
	// }, []); // 第二个参数是一个数组，如果数组里面有值，那么就是监听这个值的变化，如果数组里面没有值，那么就是监听组件的挂载和卸载

	// // componentDidUpdate 的模拟实现
	// useEffect(() => {
	//     // 返回的函数相当于是 componentWillUnmount
	//     return () => {
	//         console.log('组件将要卸载');
	//     }
	// }, []);

	//模拟 componentDidUpdate 生命周期
	useEffect(() => {
		//做一个判断
        console.log('每次都要来');
		if (count === 100) return;
		console.log("run run run 2");
	}, [count]);
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={fn}>新增</button>
			<hr />
			<h1>{count2}</h1>
			<button
				onClick={() => {
					setCount2(count2 + 2);
				}}
			>
				新增
			</button>
			<hr />
			<button
				onClick={() => {
					setCount(count + 10);
					setCount2(count2 + 10);
				}}
			>
				更新两个状态
			</button>
		</div>
	);
}
