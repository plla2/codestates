import React from 'react'
import carregi from "../../images/car-regi.png"
import empcrud from "../../images/crud-emp.png"
import kakaomap from "../../images/kakaomap.png"
import menu from "../../images/menu.png"
import space from "../../images/space.png"
import todo from "../../images/todo.png"
import { Col, Container, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard';

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className='project-section'>
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className='project-card'>
              <ProjectCard imgPath={carregi} isBlog={false} title="Car-Register" description="주차등록을 따로 하거나 주차비를 미리 지불한 차들을 리스트화 하여 차이름,회사,번호를 입력하여 확인할 수 있는 사이트입니다."
                ghLink="https://github.com/plla2/car-register" />
            </Col>

            <Col md={4} className='project-card'>
              <ProjectCard imgPath={kakaomap} isBlog={false} title="Kakaomap-Clone" description="검색창을 만들어 그곳에 장소나 도로 주소 등을 입력하면 지도상에 마크업되는 형태로 만들었습니다. React + kakao API + styled-components를 활용하였습니다."
                ghLink="https://github.com/plla2/kakao-map" />
            </Col>

            <Col md={4} className='project-card'>
              <ProjectCard imgPath={menu} isBlog={false} title="Menu-Recommend" description="날씨 api로 그날의 날씨와장소, 시간을 받아오고 메뉴 api로 지역별 음식, 재료별 음식, 좋아하는 재료의 검색을 통해 메뉴를 추천해주는 앱이다. React와 api를 활용하여 제작하였다. 스타일은 styled components를 활용하였다."
                ghLink="https://github.com/plla2/menu-recommend" />
            </Col>

            <Col md={4} className='project-card'>
              <ProjectCard imgPath={todo} isBlog={false} title="Todo-App" description="바닐라 자바스크립트를 활용하여 다크모드 토글버튼과 CRUD를 활용하여 리스트에 할일을 추가, 삭제, 체크를 할 수 있는 사이트입니다."
                ghLink="https://github.com/plla2/todo-js" />
            </Col>

            <Col md={4} className='project-card'>
              <ProjectCard imgPath={empcrud} isBlog={false} title="Employee-Register" description="react + JSON-server 고용자들의 정보 확인,추가,삭제를 할 수 있다, db.json에 있는 고용자들의 명단을 추가,삭제 등 상태 표시를 할 수 있는 사이트입니다."
                ghLink="https://github.com/plla2/React-crud" />
            </Col>

            <Col md={4} className='project-card'>
              <ProjectCard imgPath={space} isBlog={false} title="Space-Tour" description="react + react-router-dom을 활용하여 우주여행 소개 사이트로 행성들과 크루원들을 소개하고 우주기술을 설명해주는 사이트입니다."
                ghLink="https://github.com/plla2/space-react" />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Projectlist