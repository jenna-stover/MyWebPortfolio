import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import Resume from "../assets/my-resume.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };  

  const handleNavClick = () => {
    setMenuOpen(false); 
  };

  return (
    <header className="header">
      <div className="home-nav">
        <a href="/MyWebPortfolio">Jenna's Portfolio</a>
      </div>
      <nav className="nav-bar">
        <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
        </button>
        <ul className={`nav-items ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/about-me" onClick={handleNavClick} className="nav-item about">About Me</Link>
          </li>
          <li>
            <Link to="/projects" onClick={handleNavClick} className="nav-item project">Projects</Link>
          </li>
          <li>
            <Link to="/contact-me" onClick={handleNavClick} className="nav-item contact">Contact</Link>
          </li>
          <li>
            <a className="nav-item resume" onClick={handleNavClick} href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul> 
      </nav>
    </header>
  );
}

export default Header;