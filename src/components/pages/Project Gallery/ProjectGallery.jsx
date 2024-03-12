import React from 'react';
import { Card } from 'react-bootstrap';
import './ProjectGallery.css';

function ProjectGallery(props) {
  return (
    <div className="row d-flex">
    <Card className="vertical-card col">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href={props.deploy}>Link to deployment</Card.Link>
        <Card.Link href={props.github}>Link to GitHub repo.</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProjectGallery;