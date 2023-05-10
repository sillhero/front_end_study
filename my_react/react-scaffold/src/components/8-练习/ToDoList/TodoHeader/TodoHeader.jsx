import React from "react";
import {useState} from "react";
import './TodoHeader.css'
export default function TodoHeader(props) {
	let[v, setV] = useState('');
	return (
		<div className="todo-header">
			<input
				type="text"
				placeholder="请输入你的任务名称，按回车键确认"
				value={v}
				onChange={
					(e) => {
						setV(e.target.value)
					}
				}
				// 键盘抬起事件
				onKeyUp = {(e) => {
					// 判断是否按下了回车键
					if (e.code === "Enter") {
						props.addTodo(v);
						setV(''); // 清空输入框
					}
				}}
			/>
		</div>
	)
}