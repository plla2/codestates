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