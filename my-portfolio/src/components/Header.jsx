import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import '../styles/Header.css';
import Resume from "../assets/my-resume.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };  

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
          <li><Link to="/about-me">ABOUT ME</Link></li>
          <li><Link to="/projects">PROJECTS</Link></li>
          <li><Link to="/contact-me">CONTACT ME</Link></li>
          <li><a id="resume" href={Resume} target="_blank" rel="noopener noreferrer">RESUME</a></li>
        </ul> 
      </nav>
    </header>
  );
}

export default Header;