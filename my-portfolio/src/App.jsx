import './App.css';
import React, { useState } from 'react';
import Projects from './components/Projects';
import ContactSkills from './components/ContactSkills';
import AboutMe from './components/AboutMe';
import Resume from "./assets/my-resume.pdf";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };  

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
    console.log(`No section found with ClassName: ${sectionId}`);
  }
  };

  return (
    <div className="App">
      <nav className="nav-bar">
        <div className="home-nav">
          <a href="/MyWebPortfolio">JENNA STOVER</a>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
        </button>
        <ul className={`nav-items ${menuOpen ? 'open' : ''}`}>
          <li><button onClick={() => scrollToSection('project-header')}>PROJECTS</button></li>
          <li><button onClick={() => scrollToSection('contact-header')}>CONTACT ME</button></li>
          <li><button onClick={() => scrollToSection('skills-header')}>SKILLS</button></li>
          <li><a id="resume" href={Resume} target="_blank" rel="noopener noreferrer">RESUME</a></li>
        </ul> 
      </nav>
      <div className="about-me section">
        <AboutMe />
      </div>
      <div className="section-projects section">
        <Projects />
      </div>
      <div className="contact-skills section">
        <ContactSkills />
      </div>
      <footer className="footer">@jenna-stover.github.io/MyWebPortfolio/</footer>

    </div>
  );
}

export default App;
