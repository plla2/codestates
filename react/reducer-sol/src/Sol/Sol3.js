import React, { useReducer, useState } from 'react'
import "./Sol3.css"

const uId = () => {  // 1
  let a = new Uint32Array(3)
  window.crypto.getRandomValues(a)
  return (
    performance.now().toString(36) +
    Array.from(a)
      .map(A => A.toString(36)).join("")
  ).replace(/\./g, "")
}

const personReducer = (state, action) => {  // 2
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        member: [...state.member, { ...action.info }],
        count: ++state.count,
      }
    case "DELETE":
      let filterMembers = state.member.filter(one => one.id !== action.idx)
      return {
        ...state,
        member: [...filterMembers],
        count: --state.count,
      }
    default:
      return state
  }
}
function Sol3() {
  const [state, dispatch] = useReducer(personReducer, {  // 3
    count: 0,
    member: [],
  })
  const [info, setInfo] = useState({})  // 4

  const changeHandler = (e) => {  // 5
    setInfo({ ...info, id: uId(), [e.target.name]: e.target.value })
  }
  const addPerson = () => {  // 6
    dispatch({ type: "ADD", info })
  }
  const deletePerson = (e) => {  // 7
    dispatch({ type: "DELETE", idx: e.target.value })
  }
  return (
    <div>
      <div>
        <h1>전체 회원 수 : {state.count}</h1>  // 8
        <div>
          <label>이름 : </label>
          <input type="text" name='name' onChange={changeHandler} /> // 9
        </div>
        <div>
          <label>나이 : </label>
          <input type="number" name='age' onChange={changeHandler} /> // 9
        </div>
        <div>
          <label>주소 : </label>
          <input type="text" name='address' onChange={changeHandler} /> // 9
        </div>
        <button onClick={addPerson}>추가</button>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>지역</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.member.map((person, idx) => ( // 10
            <tr key={idx}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.address}</td>
              <td>
                <button onClick={deletePerson} value={person.id}>❌</button> // 11
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Sol3