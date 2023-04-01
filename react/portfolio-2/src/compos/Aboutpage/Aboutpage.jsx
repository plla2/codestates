import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className='textbackground'>
          <Col md={7}>
            <h3 className="aboutmetext">About <span>Me</span></h3>
            <p className="aboutdetails">솰라 솰라</p>
            <ul className='skilllist'>
              <Row>
                <h3>Skills</h3>
                <Col md={7}>
                  <li>HTML / CSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>Git</li>
                </Col>
                <Col md={5}>
                  <li>React</li>
                  <li>Github</li>
                  <li>난 몰루</li>
                  <li>아무것도 몰루</li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container >
    </div >
  )
}

export default Aboutpage