import React from 'react'
import Card from 'react-bootstrap/Card';

function ContactComponent(props) {
  return (
    <div className="row d-flex">
    <Card className="vertical-card col">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
      </Card.Body>
      <Card.Body>
        <Card.Link href={props.link}>{props.linktext}</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ContactComponent;