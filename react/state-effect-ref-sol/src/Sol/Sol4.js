import React, { useRef, useState } from 'react'

function Sol4() {
  const [text, setText] = useState("")
  const textRef = useRef("");

  const inputHandler = (e) => {
    textRef.current = e.target.value
  }

  const clickHandler = () => {
    setText(textRef.current)
  }
  return (
    <div>
      <input onChange={inputHandler} type="text" />
      <button onClick={clickHandler}>전송</button>
      <h3>전송된 단어 : {text}</h3>
    </div>
  )
}

export default Sol4