import React from "react";
import './TodoFooter.css';
import store from "../../../redux/store";
import { asyncCheckAllTodo } from "../../../redux/reducers/todoReducer";

export default function TodoFooter() {
  // 声明函数
  let checkAllTodo = (e) => {
    // 分发异步任务
    store.dispatch(asyncCheckAllTodo(e.target.checked));
  }
  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" onChange={checkAllTodo} checked={store.getState().todo.every(item => item.isDone)} />
      </label>
      <span>
        <span>已完成 {store.getState().todo.filter(item => item.isDone).length}</span> / 全部{store.getState().todo.length}
      </span>
      <button className="btn btn-danger">清除已完成任务</button>
    </div>
  );
}
