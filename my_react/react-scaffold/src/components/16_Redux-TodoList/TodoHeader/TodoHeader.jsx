import React, { useState } from "react";
import './TodoHeader.css';
import store from '../../../redux/store';
import { asyncAddTodo } from "../../../redux/reducers/todoReducer"; 
import Swal from 'sweetalert2';

export default function TodoHeader() {
  let [v, setV] = useState("");
  // 声明 keyup的事件回调
  let keyup = async (e) => {
    // 判断是否按下了回车键
    if (e.code === 'Enter') {
      // 发送请求 增加任务状态
      // store.dispatch(asyncAddTodo(v));

      // dispatch 函数的返回值就是异步 action 回调函数的返回值
      await store.dispatch(asyncAddTodo(v));
      // 成功的提醒
      Swal.fire({
        title: '添加成功',
        icon: 'success',
      })
      setV(''); // 清空输入框的内容
    }
  }

  return (
    <div className="todo-header">
      <input type="text" onKeyUp={keyup} onChange={(e) => {setV(e.target.value)}} value={v} placeholder="请输入你的任务名称，按回车键确认" />
    </div>
  );
}
