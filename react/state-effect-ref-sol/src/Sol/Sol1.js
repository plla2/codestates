import React, { useState } from 'react'

function Sol1() {
  const [eating, SetEating] = useState(['초콜렛', '사탕'])
  const [value, setValue] = useState("")

  const inputHandler = (e) => {
    setValue(e.target.value)
  }
  const clickHandler = () => {
    SetEating(prev => [value, ...prev])
  }
  return (
    <div>
      <input onChange={inputHandler} type="text" />
      <button onClick={clickHandler}>추가</button>
      <ul>
        {eating.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sol1