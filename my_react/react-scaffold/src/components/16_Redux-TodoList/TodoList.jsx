import React, { useEffect } from "react";
import './TodoList.css';
import TodoHeader from "./TodoHeader/TodoHeader";
import TodoMain from "./TodoMain/TodoMain";
import TodoFooter from "./TodoFooter/TodoFooter";
import store from "../../redux/store";
import { asyncGetTodos } from "../../redux/reducers/todoReducer";
export default function TodoList() {

  useEffect(() => {
    store.dispatch(asyncGetTodos());
  }, [])

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <TodoHeader />
        <TodoMain />
        <TodoFooter />
      </div>
    </div>
  );
}
