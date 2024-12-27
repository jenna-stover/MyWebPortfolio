import React, { useState } from 'react';
import '../styles/Header.css';
import Resume from "../assets/my-resume.pdf";

const Header = () => {
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
  }

  return (
    <div className="header">
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
    </div>
  );
}

export default Header;