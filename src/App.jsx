import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CardGroup, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/nav';
import Home from './components/pages/home/home';
import ProjectGallery from './components/pages/Project Gallery/ProjectGallery';
import projects from './projects.json';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <div className="container-fluid">
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;