import { useState, useEffect } from "react";
import "../index.css"; // Ensure to import your CSS file for styling

function About(props) {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    try {
      const response = await fetch(props.URL + "about");
      const data = await response.json();
      setAbout(data);
    } catch (error) {
      console.error("Error fetching the about data:", error);
    }
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <div className="about-container">
      <img src={about.headshot} alt={about.name} className="about-headshot" />
      <h2 className="about-name">{about.name}</h2>
      <h3 className="about-email">{about.email}</h3>
      <div className="about-bio">
        <p>{about.bio}</p>
        <p>
          I'm an active individual who loves staying engaged with various sports. In my free time, you'll often find me playing golf, tennis, or volleyball. You can also catch me playing spikeball with my friends and family. I also enjoy playing video games, a pastime that allows me to unwind and have fun.
        </p>
        <p>
          I've always been interested in the sciences, and this curiosity naturally extended to the tech industry. The rapid growth and innovation in technology fascinate me, driving me to constantly learn and explore new advancements in the field.
        </p>
      </div>
      <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>TailwindCSS</li>
          <li>Django</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>React</li>
          <li>Express</li>
          <li>Node.js</li>
          <li>Mongoose</li>
          <li>VScode</li>
        </ul>
      </div>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;