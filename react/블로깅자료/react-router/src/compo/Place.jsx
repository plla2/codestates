import React from 'react'
import { useNavigate } from 'react-router-dom';


function Place(props) {
  const navigate = useNavigate()
  return (
    <>
      <h3> 해당 맛집의 상세 정보들이 있을 페이지 !!!</h3>
      <ul>
        <li><button onClick={() => navigate(-1)}>뒤로 가기</button></li>
        <li><button onClick={() => navigate(1)}>앞으로 가기</button></li>
        <li><button onClick={() => navigate("/")}>첫화면 가기</button></li>
      </ul>
    </>
  )
}

export default Place;