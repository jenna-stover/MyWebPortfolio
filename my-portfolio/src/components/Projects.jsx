import '../styles/Projects.css';
import project1 from '../assets/project-1.png';

const Projects = () => {
  return (
    <div>
      <h2 id="project-header">MY PROJECTS</h2>
      <div className="projects-container">
        <a id="project-link" href="https://jenna-stover.github.io/PersonalProject1/">
          <div className="project-one project">  
            <div id="project-image">
              <img src={project1} alt="project-1" />
            </div>
            <div id="overlay">
              <div id="text">
                <h3>Project 1</h3>
                <p>Description of Project 1</p>
              </div>
            </div>
          </div>
        </a>

        <div className="project-two project">  
          <div id="project-image">
            <img src="https://placehold.co/800x400" alt="Placeholder" />
          </div>
          <div id="overlay">
            <div id="text">
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
            </div>
          </div>
        </div>

        <div className="project-three project">  
          <div id="project-image">
            <img src="https://placehold.co/800x400" alt="Placeholder" />
          </div>
          <div id="overlay">
            <div id="text">
              <h3>Project 3</h3>
              <p>Description of Project 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
 