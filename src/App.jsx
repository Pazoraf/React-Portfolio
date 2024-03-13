import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CardGroup, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/nav';
import Home from './components/pages/home/home';
import ProjectGallery from './components/pages/Project Gallery/ProjectGallery';
import ContactComponent from './components/pages/Contact me/contact'
import projects from './projects.json';
import contact from './contact.json'
import './styles.css'

function App() {
  return (
    <Router>
      <NavbarComponent />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Projects" element={
            <CardGroup>
              <Row xs={1} md={2} lg={4} className="g-4">
                {projects.map((project) => (
                  <Col key={project.id}>
                    <ProjectGallery
                      id={project.id}
                      name={project.name}
                      description={project.description}
                      github={project.github}
                      deployed={project.deployed}
                      image={project.image}
                    />
                  </Col>
                ))}
              </Row>
            </CardGroup>
          } />
          <Route path="Contact" element={            
          <CardGroup>
              <Row xs={1} md={2} lg={4} className="g-4">
                {contact.map((contact) => (
                  <Col key={contact.id}>
                    <ContactComponent
                    image={contact.image}
                    description={contact.decription}
                    link={contact.link}
                    linktext={contact.linktext}
                    />
                  </Col>
                ))}
              </Row>
            </CardGroup>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;