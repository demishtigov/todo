import React from "react";
import { observer } from "mobx-react-lite";
import "./todoList.scss";
import TodoSetting from "../todoAdd/TodoAdd";
import TodoTodos from "../todos/Todos";

const TodoList = observer(() => {
  return (
    <div>
      <div className="title">
         <h2>ToDo</h2>
      </div>
      <div className="todo-list">
        <TodoSetting />
        <TodoTodos />
      </div>
    </div>
  );
});

export default TodoList;
