import { useState, useEffect } from "react";
import '../index.css'; // Import the CSS file

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    try {
      //make api call and get response
      const response = await fetch(props.URL + "projects");
      // turn response into javascript object
      const data = await response.json();
      // set the projects state to the data
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects data:", error);
    }
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getProjectsData();
    // Optional cleanup function if needed
    return () => {
      // No cleanup needed in this example
    };
  }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return (
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
            <h1 className="project-title">{project.name}</h1>
            <img className="project-image" src={project.image} alt={project.name} />
            <div className="project-links">
              <a href={project.git}>
                <button className="project-button">Github</button>
              </a>
              <a href={project.live}>
                <button className="project-button">Live Site</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;