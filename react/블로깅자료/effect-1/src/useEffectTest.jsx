import React, { useEffect, useState } from 'react'

function useEffectTest() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("승현");
  const countUp = () => setCount(count + 1);
  const handleChangeName = (e) => setName(e.target.value)

  useEffect(() => {
    console.log("useEffect!!", count);

    return () => {
      console.log("clean up!!", count);
    }
  }, [count]);

  return (
    <div>
      <p>안녕하세요. {name}입니다!</p>
      <input onChange={handleChangeName} />
      <p>{count}번 클릭!!</p>
      <button onClick={countUp}>Click me!!</button>
    </div>
  )
}

export default useEffectTest;

