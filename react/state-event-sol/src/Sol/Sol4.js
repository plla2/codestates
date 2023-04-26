import React, { useState } from 'react'

function Sol4() {

  const [regions, setRegions] = useState([
    { kor: '서울', eng: 'Seoul' },
    { kor: '부산', eng: 'Busan' },
    { kor: '제주', eng: 'Jeju' },
  ])

  const [select, setSelect] = useState('')

  const changeHandler = e => {
    setSelect(e.target.value)
  }

  return (
    <div>
      <p>라디오 버튼을 클릭하면 value값을 출력</p>
      <p>조건: map() 함수를 이용해야함</p>
      <h1>라디오 버튼의 value 출력</h1>
      <select onChange={changeHandler}>
        {regions.map(region => (
          <option>
            {region.kor}
          </option>
        ))}
      </select>
      <button onClick={() => alert(select)}>출력</button>
    </div>
  )
}

export default Sol4