import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css'

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <div className="container-fluid navbar">
        <Navbar.Brand href="/">Alexander Flaherty Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Projects">Projects</Nav.Link>
            <Nav.Link href="Contact">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;