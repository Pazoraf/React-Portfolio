import React from 'react';
import { Card } from 'react-bootstrap';
import './ProjectGallery.css';

function ProjectGallery(props) {
  return (
    <div className="row d-flex">
      <Card className="vertical-card col">
        <Card.Img variant="top" src={props.image} className="img-fluid" alt="Card image" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectGallery;