import React from 'react';
import { Button, Card } from 'react-bootstrap';

function ProjectCard(props) {
  return (
    <Card className='project-card-view'>
      <Card.Img variant='top' src={props.imgPath} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button className='viewBtn' variant='primary' href={props.ghLink} target='_blank'>
          코드보기
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button variant='primary' href={props.demoLink} target='_blank' style={{ marginLeft: "10px" }}>

            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default ProjectCard