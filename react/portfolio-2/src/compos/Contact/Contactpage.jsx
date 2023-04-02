import React from 'react'
import { Container } from 'react-bootstrap'
import "../../pages/style.css";
function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">후 엠 아이</h2>
        <p className="contactpara">주절 주절 주절</p>
        <button className='contactbtn' onClick={() => {
          window.open("https://jhbljs92.tistory.com/")
        }}>안 농 반 가 워</button>
        <span></span>
      </Container>
    </div>
  )
}

export default Contactpage