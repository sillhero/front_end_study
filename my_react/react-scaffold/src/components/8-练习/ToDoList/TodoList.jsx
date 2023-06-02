import React, {useEffect, useState} from 'react'
import './index.css'
import TodoHeader from './TodoHeader/TodoHeader'
import TodoMain from './TodoMain/TodoMain'
import TodoFooter from "./TodoFooter/TodoFooter";
import localAction from "../until/myAxios";
import Swal from "sweetalert2";
export default function TodoList() {
	let [todos, setTodos] = useState([])

	// 声明一个函数 用来新增任务
	let addTodo = async (title) => {
		try{
			let result = await localAction.post('/todo', {
				title: title,
				isDone: false
			});
			// 新增任务
			setTodos([...todos, result.data]);
			await Swal.fire({
				title: 'success!',
				text: '新增任务成功',
				icon: 'success',
				confirmButtonText: 'OK'
			});
		}catch (e) {
			console.log(e);
		}
	}
	// useEffect(() => {
	//
	// });
	useEffect(()=> {
		//测试 addTodo 函数是否可用
		// addTodo('测试');

		// 测试批量状态更新
		// checkAllTodo(false);
		// axios
		async function fetchData() {
			try {
				let result = await localAction('/todo');
				setTodos(result.data);
			} catch (e) {
				console.log(e);
			}
		}
		fetchData();
	}, [])

	/**
	 * 选中
	 * @param id 当前选中的任务ID
	 * @param done
	 */
	// let checkTodo = async (id, done) => {
	// 	try{
	// 		await localAction.patch('/todo/' + id, {done: done});
	// 	}catch (e){
	//
	// 	}
	// 	let newTodos = todos.map(item => {
	// 		// 判断当前选中的任务ID是否等于当前遍历的任务ID
	// 		if (item.id === id) {
	// 			item.isDone = done;
	// 		}
	// 		return item;
	// 	})
	// 	setTodos(newTodos); // 更新所有任务的状态
	// }

		let checkTodo = async (id, done) => {
			try {
				await localAction.patch('/todo/' + id, {isDone: done});
				let newTodos = todos.map(item => {
					// 判断当前选中的任务ID是否等于当前遍历的任务ID
					if (item.id === id) {
						item.isDone = done;
					}
					return item;
				})
				setTodos(newTodos); // 更新所有任务的状态
			}catch (e) {
				await Swal.fire({
					title: 'error!',
					text: '修改任务状态失败',
					icon: 'error'
				});
			}
		}

	let checkAllTodo = async (done) => {
		// let requests = todos.map(item => {
		// 	return localAction.patch('/todo/' + item.id, {isDone: done});
		// });
		// 防止请求过快
		let requests = todos.map((item, index) => {
			return new Promise((resolve, reject) => {
				try {
					setTimeout(async () => {
						await localAction.patch('/todo/' + item.id, {isDone: done});
					});
					resolve();
				} catch (e) {
					reject();
				}
			}, index * 50);
		});

		await Promise.all(requests); // 等待所有请求都完成 发送多个请求来进行全选
		let newTodos = todos.map(item => {
			// 修改任务的状态值
			item.isDone = done;
			return item;
		});
		// 更新状态
		setTodos(newTodos);
	}

	// 删除任务
	let removeTodo = async (id) => {
		// 确认是否要删除
		let res = await Swal.fire({
			title: "您确定要删除该条记录么?",
			icon: "info",
			showCancelButton: true,
			confirmButtonText: "确定",
			cancelButtonText: "取消",
		});
		// 如果点击的是取消按钮, 则直接return
		if (!res.isConfirmed) return;

		// 筛选任务, 将id等于要删除id的任务过滤掉
		try {
			let result = await localAction.delete('/todo/' + id);
			console.log(result.data);
			await Swal.fire({
				title: "恭喜! 删除成功",
				icon: "success",
			});
			let newTodos = todos.filter(item => item.id !== id);
			setTodos(newTodos);
		} catch (e){
			await Swal.fire({
				title: "(*>﹏<*) 删除失败",
				icon: "error",
			});
		}

	}

	// 删除已经完成的工作
	let removeDoneTodo = () => {
		// 过滤掉那些已经完成的任务
		let newTodos = todos.filter(item => !item.isDone);
		setTodos(newTodos);
	}

	return (
		<div className="todo-container">
			<div className="todo-wrap">
				<TodoHeader addTodo={addTodo}></TodoHeader>
				<TodoMain todos={todos}
						  checkTodo={checkTodo}
						  removeTodo={removeTodo}></TodoMain>
				<TodoFooter
					checkAllTodo={checkAllTodo}
					todos={todos} removeDoneTodos={removeDoneTodo}></TodoFooter>
			</div>
		</div>
	)
}