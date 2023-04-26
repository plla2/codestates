import React, { useState } from 'react'

function Sol1() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1)
  }
  const ini = () => {
    setCounter(0)
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increase} onMouseOut={ini}>클릭</button>
    </div>
  )
}

export default Sol1