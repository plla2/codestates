import React, { useReducer } from 'react'

const priceReducer = (state, action) => {
  switch (action.type) {
    case "HAMBURGER":
      return state + 4000
    case "POTATO":
      return state + 2000
    case "BEER":
      return state + 3000
    default:
      return state;
  }
}

function Sol1() {
  const [state, dispatch] = useReducer(priceReducer, 0)

  const clickHamburger = () => {
    dispatch({ type: "HAMBURGER" })
  }
  const clickPotato = () => {
    dispatch({ type: "POTATO" })
  }
  const clickBeer = () => {
    dispatch({ type: "BEER" })
  }

  return (
    <div>
      <h1>🍔 햄버거 가게 🍔</h1>
      <h2>지불할 금액 : {state}</h2>
      <button onClick={clickHamburger}>🍔</button>
      <button onClick={clickPotato}>🍟</button>
      <button onClick={clickBeer}>🍺</button>
    </div>
  )
}

export default Sol1