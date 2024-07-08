import React from 'react';
import '../index.css';

function Home(props) {
  return (
    <div className="home-container">
      <div className="intro-section">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Harman Gill, a software engineer with a background in kinesiology and sales. 
          I recently graduated from General Assembly's Software Engineering Bootcamp in July 2024.
          Here, you can find my projects, learn more about my background, and get in touch.
        </p>
      </div>
      <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Python</li>
          <li>Django</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className="projects-overview">
        <h2>Recent Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <h3>Careershift</h3>
            <p>A website designed for those looking to make a career change</p>
          </div>
          <div className="project-card">
            <h3>Tennis Pro Shop</h3>
            <p>A place to find all your tennis essentials</p>
          </div>
          <div className="project-card">
            <h3>A Knights Adventure</h3>
            <p>A two player RPG game made using JavaScript</p>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <h2>Contact</h2>
        <p>
          Feel free to reach out to me via email at <a href="mailto:harman97gill@gmail.com">harman97gill@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}

export default Home;