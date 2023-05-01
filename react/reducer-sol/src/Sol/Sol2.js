import React, { useReducer, useState } from 'react'

const accountReducer = (state, action) => {  // 1
  switch (action.type) {
    case "DEPOSIT":
      return state + Number(action.money)
    case "WITHDRAW":
      return state - Number(action.money)
    default:
      return state;
  }
}

function Sol2() {
  const [state, dispatch] = useReducer(accountReducer, 0)  // 2
  const [money, setMoney] = useState(0)  // 3

  const clickDeposit = () => {  // 4
    dispatch({ type: "DEPOSIT", money })
  }
  const clickWithdraw = () => {
    dispatch({ type: "WITHDRAW", money })
  }
  return (
    <div>
      <h1>금액을 입력하세요.</h1>
      <input type="number"
        step={1000}
        onChange={e => setMoney(e.target.value)}  // 5
      />
      <h2>입금 또는 출금 버튼을 클릭하세요.</h2>
      <button onClick={clickDeposit}>입금</button>
      <button onClick={clickWithdraw}>출금</button>
      <h3>현재 잔액 : {state}</h3>
    </div>
  )
}

export default Sol2