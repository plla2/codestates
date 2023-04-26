import React, { useState } from 'react'

function Sol2() {
  const [message, setMessage] = useState({ title: "제목", color: 'red' })
  const inputHandler = (e) => {
    let copy = { ...message, title: e.target.value }
    setMessage(copy)
  }
  const clickHandler = () => {
    alert(message.title)
  }

  return (
    <div>
      <h1 style={message.title !== '제목' ? { color: message.color } : null}>{message.title}</h1>
      <input type="text" placeholder='내용을 입력하세요.' onChange={inputHandler} />
      <button onClick={clickHandler}>클릭</button>
    </div>
  )
}

export default Sol2