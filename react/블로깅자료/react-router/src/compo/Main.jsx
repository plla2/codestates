import React from 'react'
import { Link } from 'react-router-dom';

function Main(props) {
  return (
    <>
      <h3> 맛집들이 주루루루룩 나열될 메인페이지 !!</h3>
      <ul>
        <Link to="/place/1"><li>1번 맛집</li></Link>
        <Link to="/place/2"><li>2번 맛집</li></Link>
      </ul>
    </>
  )
}

export default Main;