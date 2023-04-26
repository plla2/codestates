import React, { useState } from 'react'

function CheckBox({ cap, shoes, bag }) {

  const [items, setItems] = useState([
    { value: cap, text: "모자 1만원" },
    { value: shoes, text: "신발 3만원" },
    { value: bag, text: "가방 8만원" },
  ])

  const [total, setTotal] = useState(0)

  const changeHandler = checkbox => {
    if (checkbox.checked) {
      setTotal(total => total + parseInt(checkbox.value))
    } else {
      setTotal(total => total - parseInt(checkbox.value))
    }
  }

  return (
    <div>
      <p>{total}</p>
      {items.map((item, idx) => (
        <div key={idx}>
          <input type="checkbox" value={item.value} onChange={e => changeHandler(e.target)} />
          <label htmlFor="">{item.text}</label>
        </div>
      ))}
    </div>
  )
}
const Sol5 = () => {
  return (
    <div>
      <CheckBox cap={10000} shoes={30000} bag={80000}></CheckBox>
      <CheckBox cap={10000} shoes={30000} bag={80000}></CheckBox>
      <CheckBox cap={10000} shoes={30000} bag={80000}></CheckBox>
    </div>
  )
}
export default Sol5