import React from "react";
import './TodoMain.css'
export default function TodoMain(props) {
	let {todos, checkTodo, removeTodo} = props;
	// 声明一个移除任务的函数
	let remove = id => { // 这里的闭包是为了让remove函数可以接收到id
		return () => {
			removeTodo(id);
		}
	}
	return (
		<ul className="todo-main">
			{
				todos.map(item => {
					return (
						<li key={item.id}>
							<label>
								<input type="checkbox" checked={item.isDone}
									   onChange={(e) => {
									   	//  调用checkTodo函数
										   console.log('点击的状态值：' + e.target.checked);
										   checkTodo(item.id, e.target.checked)
									   }}/>
								<span className={item.isDone ? "done" : ""}>{item.title}</span>
							</label>
							<button className="btn btn-danger" onClick={remove(item.id)}>删除</button>
						</li>
					)
				})
			}
			{todos.length === 0 ? <li className="empty">恭喜你，没有任务了</li> : null}
		</ul>
	)
}