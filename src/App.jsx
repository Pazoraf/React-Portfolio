import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/nav'
import Home from './components/pages/home/home';
import ProjectComponent from './components/pages/Project Gallery/ProjectComponent';
import projects from './projects.json'
import './App.css'

function App() {

  return (
    <Router>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Projects" element={
          projects.map((projects) => (
            <ProjectComponent
            id={projects.id}
            name={projects.name}
            description={projects.description}
            github={projects.github}
            deployed={projects.deployed}
            image={projects.image}
            />
          ))
        } />
      </Routes>
    </Router>

  )
}

export default App
