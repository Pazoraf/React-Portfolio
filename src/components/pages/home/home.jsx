import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './home.css'

function Home() {
  return (
    <Card className="text-center">
      <Card.Header className="header">Alexander Flaherty</Card.Header>
      <Card.Body className="main">
        <Image src="src/assets/images/headshot.png"/>
        <Card.Title>Welcome to my portfolio page!</Card.Title>
        <Card.Text>
        Hello there! I'm Alexander Flaherty, a passionate web developer with a penchant for creating dynamic and engaging web experiences. As a beginner in this vast digital landscape, I've delved into the realms of JavaScript, including Vanilla, ES6, React, JSON, and Node.js, 
Within these pages, you'll find a showcase of my projects. 

From sleek and responsive user interfaces crafted with React to robust backend systems powered by Node.js. So, take a moment to explore my work, and feel free to reach out—I'm always eager to collaborate, share ideas, and embark on new adventures in the ever-evolving world of web development.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Home;