import React, { useState } from 'react'

const Id = ({ infoHandler }) => {
  return (
    <div>
      <label htmlFor="userId">ID : </label>
      <input type="text" id="userId" name='id' onChange={infoHandler} />
    </div>
  )
}

const Pw = ({ infoHandler }) => {
  return (
    <div>
      <label htmlFor="userPw">PW : </label>
      <input type="text" id='userPw' name='pw' onChange={infoHandler} />
    </div>
  )
}

function Sol3() {
  const [info, setInfo] = useState({ id: "승현", pw: "1234" })
  const [inputInfo, setInputInfo] = useState({ id: "", pw: "" })

  const infoHandler = (e) => {
    setInputInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const checkInfo = () => {
    let isTrue = true
    for (let key in inputInfo) {
      if (info[key] !== inputInfo[key]) {
        isTrue = false
      }
    }
    isTrue ? alert("로그인 성공") : alert("로그인 실패")
  }

  return (
    <div>
      <Id infoHandler={infoHandler} />
      <Pw infoHandler={infoHandler} />
      <button onClick={checkInfo}>로그인</button>
    </div>
  )
}

export default Sol3