import '../styles/Projects.css';
import { useRef, useEffect, useState } from 'react';
import Project from '../components/Project';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
  const projectOneRef = useRef();
  const projectTwoRef = useRef();
  const projectThreeRef = useRef();

  const [projectOneVisible, setProjectOneVisible] = useState(false);
  const [projectTwoVisible, setProjectTwoVisible] = useState(false);
  const [projectThreeVisible, setProjectThreeVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === projectOneRef.current) {
                setProjectOneVisible(true);
            } else if (entry.target === projectTwoRef.current) {
                setProjectTwoVisible(true);
            } else if (entry.target === projectThreeRef.current) {
                setProjectThreeVisible(true);
            }
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
      }
    );

    const projectOne = projectOneRef.current;
    const projectTwo = projectTwoRef.current;
    const projectThree = projectThreeRef.current;

    if (projectOne) observer.observe(projectOne);
    if (projectTwo) observer.observe(projectTwo);
    if (projectThree) observer.observe(projectThree);

    return () => {
        if (projectOne) observer.unobserve(projectOne);
        if (projectTwo) observer.unobserve(projectTwo);
        if (projectThree) observer.unobserve(projectThree);
    };
}, []);

  useEffect(() => {
      document.body.classList.add('projects-page');
      return () => {
        document.body.classList.remove('projects-page'); 
      };
    }, []);

  return (
    <div className="projects">
        <div className="projects-container">
          <h2 id="project-header">MY PROJECTS</h2>
          <div className={`project-one ${projectOneVisible ? 'visible' : 'hidden'}`} ref={projectOneRef}>
            <Project
              link="https://node-final-project-cgfy.onrender.com"
              name="Application Organizer"
              image={project1}
              description={<span><u>Description:</u><br/>This project expanded from my final project for CSCE 242 - Web Applications, where I developed a full-stack Internship Organizer integrating MongoDB for seamless data management. I enhanced 
                the UI, added more features such as a progress bar and separate forms for adding/editing prospects, and improved overall functionality by ensuring proper GET, POST, PUT, and DELETE methods to the database. </span>}
              techstack={<span><u>Technologies Used:</u><br/>Javascript, HTML, CSS, Node.js, Express, MongoDB, Mongoose</span>} 
              linkText={{ text: <span><u>External Links:</u><br/>CSCE 242 - Web Applications (Website I created to host all assignments & projects for this course)</span>, href: 'https://jenna-stover.github.io/index.html' }}
            />
          </div>
          <div className={`project-two ${projectTwoVisible ? 'visible' : 'hidden'}`} ref={projectTwoRef}>
            <Project
              link="https://jenna-stover.github.io/PersonalProject1/"
              name="Project List with Cart"
              image={project2}
              description={<span><u>Description:</u><br/>This project is one of the Junior Challenges from Frontend Mentor. I developed a robust product list with cart functionality, and utilized the provided JSON file 
              to dynamically populate the UI, ensuring a seamless and interactive experience.</span>}
              techstack={<span><u>Technologies Used:</u><br/>React, JSX, CSS, JSON, Axios, React Router DOM</span>} 
              linkText={{ text: <span><u>External Links:</u><br/>Frontend Mentor Challenge</span>, href: 'https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d' }}
            />
          </div>
          <div className={`project-three ${projectThreeVisible ? 'visible' : 'hidden'}`} ref={projectThreeRef}>
            <Project
              link="https://www.youtube.com/watch?v=aoFu3jlZSMA"
              name="DegreePlanner"
              image={project3}
              description={<span><u>Description:</u><br/>This was my semester project for CSCE 247- Software Engineering, where I worked alongside a team to brainstorm and carry out how we would recreate UofSC's 'DegreeWorks' site.
              For the design phase of this project, we created comprehensive use-cases, crafted a UML class diagram using LucidChart, and designed a wireframe with Mockitt. Then, through the development stage, these ideas came to life by creating
              and integrating JSON files to pull data from, utilizing Scenebuilder & JavaFX to create our UI, and coding all logic with Java. </span>}
              techstack={<span><u>Technologies Used:</u><br/>SceneBuilder, JavaFX, FXML(UI development), Java, and Git</span>} 
              linkText={[
                { text: <span><u>External Links:</u><br/>UML Class Diagram</span>, href: 'https://lucid.app/lucidchart/f25ba9d0-e301-444e-be7f-bdc82d0b76b7/edit?viewport_loc=-754%2C-1484%2C2826%2C1369%2C0_0&invitationId=inv_8692d64c-6580-4524-a084-5d26541c9c65' },
                { text: <span>Mockitt Wireframe</span>, href: 'https:mockitt.com/proto/aPcmsqWsb2k46vQ6OYIQ/sharing?view_mode=read_only #Prototype Presentation-分享' }
              ]}
            />
          </div>
        </div>
    </div>
  );
}

export default Projects;