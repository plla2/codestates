import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Text from './Text'
import { AiFillGithub, AiFillBook } from "react-icons/ai"
import "../../pages/style.css";
function Homepage() {
  return (
    <div className="homepagebackground">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="headtext">안녕하세요 !! <span className='wave'> 👋🏻 </span></h2>
            <h2 className="nametext">승현입니다 !</h2>
            <span></span>
            <Text />

            <button onClick={() => {
              window.open("https://github.com/plla2");
            }} className='socialmediabtn'><AiFillGithub className='icon' /></button>

            <button onClick={() => {
              window.open("https://jhbljs92.tistory.com/");
            }} className='socialmediabtn'><AiFillBook className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper"></div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Homepage