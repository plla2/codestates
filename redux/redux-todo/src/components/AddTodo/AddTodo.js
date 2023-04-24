import React, { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/TodoSlice';
import classes from "./AddTodo.module.css"

function AddTodo() {
  const [todoText, setTodoText] = useState("");
  const [reminder, setReminder] = useState(false)
  const dispatch = useDispatch();

  const submitTodo = (e) => {
    e.preventDefault();

    if (!todoText.trim()) {
      alert("Todo를 입력해주세요.")
    }

    const newTodo = {
      id: Math.random(),
      title: todoText,
      reminder
    }
    // 새로운 todo를 store에 dispatch한다.
    dispatch(addTodo(newTodo))

    // 제출 후 초기화
    setTodoText("");
    setReminder(false);
  }

  const getTodoText = (text) => {
    setTodoText(text)
  }

  return (
    <section className={classes.section}>
      <form onSubmit={submitTodo}>
        <div>
          <Input value={todoText} type="text" placeholder="Todo를 입력해주세요." getTodo={getTodoText} />
          <Button text="Todo 추가" type="submit" />
        </div>
        <div className={classes.reminder__label}>
          <input id="reminder" type="checkbox" checked={reminder} onChange={() => setReminder(!reminder)} />
          <label htmlFor="reminder">자동 알림 설정</label>
        </div>
      </form>
    </section>
  )
}
export default AddTodo