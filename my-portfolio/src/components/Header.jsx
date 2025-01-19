import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import Resume from "../assets/my-resume.pdf";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };  

  const handleScrollOrNav = (sectionId, path) => {
    const section = document.getElementById(sectionId);
    if (location.pathname == path) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(path);
    }
  }

  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="home-nav">
          <a href="/MyWebPortfolio">JENNA STOVER</a>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
        </button>
        <ul className={`nav-items ${menuOpen ? 'open' : ''}`}>
          <li><button onClick={() => handleScrollOrNav('project-header', '/')}>PROJECTS</button></li>
          <li><button onClick={() => navigate('/contact-me')}>CONTACT ME</button></li>
          <li><a id="resume" href={Resume} target="_blank" rel="noopener noreferrer">RESUME</a></li>
        </ul> 
      </nav>
    </header>
  );
}

export default Header;