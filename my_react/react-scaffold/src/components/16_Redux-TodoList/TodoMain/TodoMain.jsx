import React from "react";
import './TodoMain.css';
import store from "../../../redux/store";
import { asyncCheckTodo, asyncRemoveTodo } from "../../../redux/reducers/todoReducer";


export default function TodoMain() {

  // 声明函数
  let change = (id) => {
    // 返回一个函数
    return e => {
      // 分发异步更新状态的任务
      store.dispatch(asyncCheckTodo(id, e.target.checked));
    }
  }

  // 声明删除函数
  let remove = (id) => {
    return () => {
      // 显示一个确认框
      if (!window.confirm('您确定要删除该任务吗？')) return;
      // 如果点击确定再发送请求 更新状态
      store.dispatch(asyncRemoveTodo(id));
    }
  }

  return (
    <ul className="todo-main">
      {
        store.getState().todo.map(item => {
          return  <li key={item.id}>
          <label>
            <input type="checkbox" checked={item.isDone} onChange={change(item.id)}/>
            <span className={item.isDone ? 'done' : undefined}>{item.title}</span>
          </label>
          <button className="btn btn-danger" onClick={remove(item.id)}>删除</button>
        </li>
        })
      }
     
      <li>
        <label>
          <input type="checkbox"/>
          <span className="done">yyyy</span>
        </label>
        <button className="btn btn-danger">删除</button>
      </li>
    </ul>
  );
}
