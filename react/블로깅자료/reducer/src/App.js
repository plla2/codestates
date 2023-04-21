import React, { useState, useReducer } from 'react'

// reducer : state를 업데이트 하는 역할 (은행)
// dispatch : state 업데이트를 위한 요구
// action : 요구의 내용

// useReducer를 통해 money라는 state를 만들고, money라는 state는 아래의 reducer라는 함수에 의해서만 수정이된다.
// 그런 reducer는 useReducer의 인자로 전달된다.
// 따라서 reducer를 이용하여 money라는 state를 수정하고 싶을때 마다 dispatch를 불러준다.
// dispatch라는 함수에 action이라는 인자를 넣어준다.

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw"
}

const reducer = (state, action) => {
  console.log("reducer가 일을 합니다!", state, action)
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};
function App() {

  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button onClick={() => dispatch({ type: ACTION_TYPES.deposit, payload: number })}>예금</button>
      <button onClick={() => dispatch({ type: ACTION_TYPES.withdraw, payload: number })}>출금</button>
    </div>
  )
}

export default App