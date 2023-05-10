import React from "react";
import './TodoFooter.css'
export default function TodoFooter(props) {
	let {todos, checkAllTodo, removeDoneTodos} = props;
	return (
		<div className="todo-footer">
			<label>
				<input type="checkbox"
					   checked={todos.every(item => item.isDone) && todos.length > 0}
					   onChange={(e) => {
						   checkAllTodo(e.target.checked);
					   }}/>
			</label>
			<span>
          		<span>已完成 {todos.filter(item => item.isDone).length}</span>
        	</span>
			<button className="btn btn-danger" onClick={removeDoneTodos}>清除已完成任务</button>
		</div>
	)
}