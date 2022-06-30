import React, { useMemo, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import todo from "../../store/Todo";
import "./todoAdd.scss";

const TodoSetting = observer(() => {
  const [inputValue, setInputValue] = useState("");
  const [select, setSelect] = useState("all");

  const addPost = () => {
    if (inputValue.length > 0) {
      const total = {
        id: new Date(),
        title: inputValue,
        completed: false,
      };
      todo.addTodo(total);
    } else {
      alert("Пусто!");
    }
    setInputValue("");
  };
  useEffect(() => {
    todo.current = select;
    todo.sortedTodo(select);
  }, [select]);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") addPost();
  };

  return (
    <div className="setting">
      <select
        className="todo-select"
        onChange={(e) => setSelect(e.target.value)}
      >
        <option className="todo-option" value="all">
          Все
        </option>
        <option className="todo-option" value="end">
          Выполненные
        </option>
        <option className="todo-option" value="process">
          Не выполненные
        </option>
      </select>

      <input
        className="add-todo"
        type="text"
        placeholder="введите ToDo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="todo-btn" onClick={addPost}>
        Добавить
      </button>
    </div>
  );
});
export default TodoSetting;
