import '../styles/Projects.css';
import { useRef, useEffect, useState } from 'react';
import Project from '../components/Project';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';

const Projects = () => {
  const projectOneRef = useRef();
  const projectTwoRef = useRef();
  const projectThreeRef = useRef();
  const projectFourRef = useRef();
  const projectFiveRef = useRef();

  const [projectOneVisible, setProjectOneVisible] = useState(false);
  const [projectTwoVisible, setProjectTwoVisible] = useState(false);
  const [projectThreeVisible, setProjectThreeVisible] = useState(false);
  const [projectFourVisible, setProjectFourVisible] = useState(false);
  const [projectFiveVisible, setProjectFiveVisible] = useState(false);

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
            } else if (entry.target === projectFourRef.current) {
              setProjectFourVisible(true);
            } else if (entry.target === projectFiveRef.current) {
              setProjectFiveVisible(true);
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
    const projectFour = projectFourRef.current;
    const projectFive = projectFiveRef.current;

    if (projectOne) observer.observe(projectOne);
    if (projectTwo) observer.observe(projectTwo);
    if (projectThree) observer.observe(projectThree);
    if (projectFour) observer.observe(projectFour);
    if (projectFive) observer.observe(projectFive);

    return () => {
        if (projectOne) observer.unobserve(projectOne);
        if (projectTwo) observer.unobserve(projectTwo);
        if (projectThree) observer.unobserve(projectThree);
        if (projectFour) observer.unobserve(projectFour);
        if (projectFive) observer.unobserve(projectFive);
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
          <h3 id="project-header2">click on the image to view the project</h3>
          <div className={`project-one ${projectOneVisible ? 'visible' : 'hidden'}`} ref={projectOneRef}>
            <Project
              link="https://www.youtube.com/watch?v=Q6Rl8kQCoVc"
              name="VacationPlanner- Senior Capstone Project (Capgemini)"
              image={project1}
              description={<span><u>Description:</u><br/>This team project was for Capgemini, and required significant effort being a full‑stack web application that integrated APIs, 
              OpenAI, and backend databases while following RESTful principles and HTTPS methods. Throughout the development, I learned a lot about how the 
              frontend and backend interact, spending substantial time working on both sides and ensuring the frontend was grabbing all of the necessary data from the 
              backend databases/APIs and also displaying them nicely. I also took the lead on deployment, successfully launching the frontend 
              and backend through Microsoft Azure and connecting them through our GitHub repository.</span>}
              techstack={<span><u>Technologies Used:</u><br/>React, JSX, CSS, Axios, React Router DOM(frontend), and Java, Spring Boot(backend), Git</span>} 
              linkText={{ text: <span><u>External Links:</u><br/>RollingCapstones Github Repo</span>, href: 'https://github.com/SCCapstone/RollingCapStones' }}
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
          <div className={`project-four ${projectFourVisible ? 'visible' : 'hidden'}`} ref={projectFourRef}>
            <Project
              link="https://node-final-project-cgfy.onrender.com"
              name="Application Organizer"
              image={project4}
              description={<span><u>Description:</u><br/>This project expanded from my final project for CSCE 242 - Web Applications, where I developed a full-stack Internship Organizer integrating MongoDB for seamless data management. I enhanced 
                the UI, added more features such as a progress bar and separate forms for adding/editing prospects, and improved overall functionality by ensuring proper GET, POST, PUT, and DELETE methods to the database. </span>}
              techstack={<span><u>Technologies Used:</u><br/>Javascript, HTML, CSS, Node.js, Express, MongoDB, Mongoose</span>} 
              linkText={{ text: <span><u>External Links:</u><br/>CSCE 242 - Web Applications (project below)</span>, href: 'https://jenna-stover.github.io/index.html' }}
            />
          </div>
          <div className={`project-five ${projectFiveVisible ? 'visible' : 'hidden'}`} ref={projectFiveRef}>
            <Project
              link="https://jenna-stover.github.io/"
              name="CSCE 242 Website Applications"
              image={project5}
              description={<span><u>Description:</u><br/>This website was created specifically for my CSCE 242 Web Applications course, to showcase all assignments and projects done through the class. 
              The repository and deployment were both through github, and this website only required a frontend to build. I also used Web3Form's free API for the contact form (no backend needed), which sends the message directly to my personal email.</span>}
              techstack={<span><u>Technologies Used:</u><br/>React, JSX, CSS, and Git (updated from initial project; Javascript & HTML → React Framework)</span>}
              linkText={{ text: <span><u>External Links:</u><br/>Github Repo</span>, href: 'https://github.com/jenna-stover/jenna-stover.github.io' }}
            />
          </div>
        </div>
    </div>
  );
}

export default Projects;