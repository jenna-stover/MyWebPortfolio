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
      <nav className="nav-bar">
        <div className="home-nav">
          <a href="/MyWebPortfolio">JENNA STOVER</a>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
        </button>
        <ul className={`nav-items ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/about-me" onClick={handleNavClick} className="nav-item">ABOUT ME</Link></li>
          <li><Link to="/projects" onClick={handleNavClick} className="nav-item">PROJECTS</Link></li>
          <li><Link to="/contact-me" onClick={handleNavClick} className="nav-item">CONTACT ME</Link></li>
          <li><a className="nav-item" onClick={handleNavClick} href={Resume} target="_blank" rel="noopener noreferrer">RESUME</a></li>
        </ul> 
      </nav>
    </header>
  );
}

export default Header;