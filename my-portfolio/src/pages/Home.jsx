import '../styles/Home.css';
import { FaProjectDiagram, FaUser, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Resume from "../assets/my-resume.pdf";

export default function Home() {
  
  return (
    <div>
      <header className="home-header">
        <a href="/MyWebPortfolio">JENNA STOVER</a>
      </header>
      <div className="main-container">
        <div>
          <h1 id="welcome-text">Welcome to My Portfolio!</h1>
        </div>
        <div className="sub-container">
          <div id="options-title">
            <h2>Are you looking to...</h2>
          </div>
          <div className="options-container">
            <Link to="/projects" className="option-card">
              <div className="option-content">
                <FaProjectDiagram size={30} />
                <h3>Projects</h3>
                <p>Explore my latest work!</p>
              </div>
            </Link>
            <Link to="/about-me" className="option-card">
              <div className="option-content">
                <FaUser size={30} />
                <h3>About Me</h3>
                <p>Learn more about who I am.</p>
              </div>
            </Link>
            <a href={Resume} target="_blank" rel="noopener noreferrer" className="option-card">
              <div className="option-content">
                <FaFileAlt size={30} />
                <h3>Resume</h3>
                <p>Check out my professional experience.</p>
              </div>  
            </a>
            <Link to="/contact-me" className="option-card">
              <div className="option-content">
                <FaEnvelope size={30} />
                  <h3>Contact Me</h3>
                  <p>Send me any inquiries/feedback you have!</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div> 
  );
}
