import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from "./AddUser.module.css"
import Button from '../UI/Button'


function AddUser(props) {

  const [enteredUsername, setEnteredUsername] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault()
  }

  const usernameChangeHandler = (e) => {

  }
  return (
    <Card className={classes.input}>
      <div>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>사용자 이름</label>
          <input id='username' type="text" />
          <label htmlFor='age'>나이</label>
          <input id='age' type="number" />
          <Button type='submit'>사용자 추가</Button>
        </form>
      </div>
    </Card>
  )
}

export default AddUser