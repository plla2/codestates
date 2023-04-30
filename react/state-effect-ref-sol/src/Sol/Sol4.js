import React, { useRef, useState } from 'react'

function Sol4() {
  const [text, setText] = useState("")
  const textRef = useRef("");

  const inputHandler = (e) => {
    textRef.current = e.target.value
  }

  const clickHandler = () => {
    setText(textRef.current)
    console.log("렌더링 완료")
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