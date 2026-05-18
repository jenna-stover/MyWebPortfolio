import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import Resume from "../assets/my-resume.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };  

  return (
    <>
      <header className="header">
        <div className="home-nav">
          <a href="/MyWebPortfolio">Jenna's Portfolio</a>

          <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
        <nav className="nav-bar">
          
          <ul className={`nav-items ${menuOpen ? 'open' : ''}`}>
          <li onClick={() => { setMenuOpen(false); navigate('/about-me'); }} className="nav-item about">
            <span>About Me</span>
          </li>
          <li onClick={() => { setMenuOpen(false); navigate('/projects'); }} className="nav-item project">
            <span>Projects</span>
          </li>
          <li onClick={() => { setMenuOpen(false); navigate('/contact-me'); }} className="nav-item contact">
            <span>Contact</span>
          </li>
          <li onClick={() => window.open(Resume, '_blank')} className="nav-item resume">
            <span>Resume</span>
          </li>
          </ul> 
        </nav>
      </header>
    </>
    
  );
}

export default Header;