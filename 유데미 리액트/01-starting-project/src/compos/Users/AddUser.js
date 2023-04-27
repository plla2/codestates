import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from "./AddUser.module.css"
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';


function AddUser(props) {

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'input 타당성 검사',
        message: "유효한 이름과 나이 (빈칸없이)를 적어주세요."
      })
      return;
    }
    if (Number(enteredAge) < 1) {
      setError({
        title: 'input 타당성 검사',
        message: "유효한 나이(1 이상)를 적어주세요"
      })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredAge("")
    setEnteredUsername("")
  }

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value)
  }
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value)
  }

  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <div>
          <form onSubmit={addUserHandler}>
            <label htmlFor='username'>사용자 이름</label>
            <input id='username' type="text" value={enteredUsername} onChange={usernameChangeHandler} />
            <label htmlFor='age'>나이</label>
            <input id='age' type="number" value={enteredAge} onChange={ageChangeHandler} />
            <Button type='submit'>사용자 추가</Button>
          </form>
        </div>
      </Card>
    </div>
  )
}

export default AddUser