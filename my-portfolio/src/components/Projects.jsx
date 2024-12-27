import '../styles/Projects.css';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';

const Projects = () => {
  return (
    <div>
      <h2 id="project-header">MY PROJECTS</h2>
      <div className="projects-container">

        <a href="https://jenna-stover.github.io/PersonalProject1/" target="_blank" rel="noreferrer">
          <div className="project-one project">  
            <div id="project-image">
              <img src={project1} alt="project-1" />
            </div>
            <div id="overlay">
              <div id="text">
                <h3>Project 1</h3>
                <p>This project is one of the Junior Challenges from <a href="https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d">Frontend Mentor</a>.</p>
                <p>I developed a robust product list with cart functionality, and utilized 
                  the provided JSON file to dynamically populate the UI, ensuring a 
                  seamless and interactive experience.</p>
                <p><strong>Technologies Used:</strong> React, JSX, CSS, JSON, Axios, React Router DOM</p>
              </div>
            </div>
          </div>
        </a>

        <a href="https://node-final-project-cgfy.onrender.com" target="_blank" rel="noreferrer">
          <div className="project-two project">  
            <div id="project-image">
              <img src={project2} alt="project-2" />
            </div>
            <div id="overlay">
              <div id="text">
                <h3>Project 2</h3>
                <p>This project expanded from my final project for <em>CSCE 242 - Web Applications</em>, 
                where I developed a full-stack "Internship Organizer" integrating MongoDB for seamless data management. 
                I enhanced the UI, added more features such as a progress bar and separate forms for adding/editing prospects, 
                and improved overall functionality by ensuring proper GET, POST, PUT, and DELETE methods to the database.</p>

                <p>You can also check out the site I developed for <a href="https://jenna-stover.github.io/index.html"><em>CSCE 242 - Web Applications</em></a>, 
                which showcases my original "Internship Organizer" project and hosts each assignment for the course.</p>

                <p><strong>Technologies Used: </strong>Javascript, HTML, CSS, Node.js, Express, MongoDB, Mongoose</p>
              </div>
            </div>
          </div>
        </a>

        <div className="project-three project">  
          <div id="project-image">
            <img src={project3} alt="Placeholder" />
          </div>
          <div id="overlay">
            <div id="text">
              <h3>Projects 3 & 4: Coming Soon</h3>
              <p>I am currently in the process of deploying my DegreePlanner project and continuing the development of
                my Capstone project. These exciting projects will be available soon. In the meantime, you can explore my GitHub
                repositories or refer to my resume for more details.
              </p>
              <p>Thank you for your patience. I look forward to sharing these projects with you soon. Stay tuned for updates!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
 