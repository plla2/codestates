import React, { ChangeEvent, FormEvent, useState } from "react";
import { AddTodo } from "../types";

interface TodoFormProps {
  addTodo: AddTodo;
}

const TodoForm: React.FC<TodoFormProps> = () => {
  const [newTodo, setNewTodo] = useState<string>("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const submitHandler = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setNewTodo("");
  };
  return (
    <div>
      <form className="todo-form">
        <input
          type="text"
          value={newTodo}
          className="todo-input"
          placeholder="입력하세요."
          onChange={changeHandler}
        />
        <button type="submit" className="todo-btn" onSubmit={submitHandler}>
          할일 추가
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
