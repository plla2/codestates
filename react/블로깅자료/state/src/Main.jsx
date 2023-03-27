import { useState } from "react"


function Main() {
  const [count, setCount] = useState(0);
  const updateCnt = () => setCount(count + 1);
  const clearCnt = () => setCount(0);

  return (
    <div>
      클릭한 횟수는 {count}번 입니다.
      <div>
        <button onClick={updateCnt}>누르면 +1이 됩니당~</button>
        <button onClick={clearCnt}>초기화 시키기~!</button>
      </div>
    </div>
  )
}

export default Main