import { useRef, useEffect, useState } from 'react';
import '../styles/Home.css';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';
import Project from '../components/Project';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';

export default function Home() {
  const projectOneRef = useRef();
  const projectTwoRef = useRef();
  const skillsRef = useRef();
  
  const [projectOneVisible, setProjectOneVisible] = useState(false);
  const [projectTwoVisible, setProjectTwoVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry => {
          if (entry.target === projectOneRef.current) {
            setProjectOneVisible(entry.isIntersecting);
          } else if (entry.target === projectTwoRef.current){
            setProjectTwoVisible(entry.isIntersecting);
          } else if (entry.target === skillsRef.current) {
            setSkillsVisible(entry.isIntersecting);
          }
        }))
      },
    );

    if (projectOneRef.current) observer.observe(projectOneRef.current); 
    if (projectTwoRef.current) observer.observe(projectTwoRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (projectOneRef.current) observer.unobserve(projectOneRef.current); 
      if (projectTwoRef.current) observer.unobserve(projectTwoRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    }
  }, []);

  console.log('projectOneVisible', projectOneVisible); 
  console.log('projectTwoVisible', projectTwoVisible); 
  console.log('skillsVisible', skillsVisible);
  
  return (
    <div className="App">
      <div className="about-me section">
        <AboutMe />
      </div>
      <div className="skills section">
        <div className={`skills-container ${skillsVisible ? 'visible' : 'hidden'}`} ref={skillsRef}>
          <h2 id="skills-header">Web-Dev Skills</h2>
          <Skills />
        </div>
      </div>
      <div className="projects">
        <div className="projects-container">
          <h2 id="project-header">MY PROJECTS</h2>
          <div className={`project-one ${projectOneVisible ? 'visible' : 'hidden'}`} ref={projectOneRef}>
            <Project
              link="https://jenna-stover.github.io/PersonalProject1/"
              name="Project List with Cart"
              image={project1}
              description={<span><u>Description:</u><br/>This project is one of the Junior Challenges from Frontend Mentor. I developed a robust product list with cart functionality, and utilized the provided JSON file 
              to dynamically populate the UI, ensuring a seamless and interactive experience.</span>}
              techstack={<span><u>Technologies Used:</u><br/>React, JSX, CSS, JSON, Axios, React Router DOM</span>} 
              linkText={{ text: <span><u>Links:</u><br/>Frontend Mentor Challenge</span>, href: 'https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d' }}
            />
          </div>
          <div className={`project-two ${projectTwoVisible ? 'visible' : 'hidden'}`} ref={projectTwoRef}>
            <Project
              link="https://node-final-project-cgfy.onrender.com"
              name="Application Organizer"
              image={project2}
              description={<span><u>Description:</u><br/>This project expanded from my final project for CSCE 242 - Web Applications, where I developed a full-stack Internship Organizer integrating MongoDB for seamless data management. I enhanced 
                the UI, added more features such as a progress bar and separate forms for adding/editing prospects, and improved overall functionality by ensuring proper GET, POST, PUT, and DELETE methods to the database. 
                You can also check out the site I developed for CSCE 242 - Web Applications, which showcases my original Internship Organizer project and hosts each assignment for the course.</span>}
              techstack={<span><u>Technologies Used:</u><br/>Javascript, HTML, CSS, Node.js, Express, MongoDB, Mongoose</span>} 
              linkText={{ text: <span><u>Links:</u><br/>CSCE 242 - Web Applications (hosts all assignments & projects for this course)</span>, href: 'https://jenna-stover.github.io/index.html' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
