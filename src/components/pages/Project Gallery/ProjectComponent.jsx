import React from 'react';
import Card from 'react-bootstrap/Card'

function ProjectComponent(props) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href={props.github}>Github Repository</Card.Link>
          <Card.Link href={props.deployed}>Deployment</Card.Link>
        </Card.Body>
      </Card>
    );
  }


export default ProjectComponent