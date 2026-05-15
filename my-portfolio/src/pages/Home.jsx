import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Resume from "../assets/my-resume.pdf";
import cardBackgroundOne from '../assets/card-bkg1.jpg';
import cardBackgroundTwo from '../assets/card-bkg2.jpg';
import cardBackgroundThree from '../assets/card-bkg3.jpg';
import cardBackgroundFour from '../assets/card-bkg4.jpg';

export default function Home() {
  
  return (
    <div>
      <div className="main-container">
        <div>
          <h1 id="welcome-text">Jenna Stover's Web Portfolio</h1>
        </div>
        <div className="sub-container">
          <div className="options-container">
            <div className="card-wrapper">
              <img src={cardBackgroundTwo} className="card-bg-svg" alt="" />
              <Link to="/projects" className="option-card">
              <div className="option-content">
                <div id="card-title">
                  <h3>Projects</h3>
                </div>
                <div id="card-subtitle">
                  <p>Explore my latest work</p>
                </div>
              </div>
            </Link>
            </div>
            
            <div className="card-wrapper">
              <img src={cardBackgroundThree} className="card-bg-svg" alt="" />
              <Link to="/about-me" className="option-card">
                  <div className="option-content">
                    <div id="card-title">
                      <h3>About Me</h3>
                    </div>
                    <div id="card-subtitle">
                      <p>Learn more about who I am</p>
                    </div>
                  </div>
              </Link>
            </div>
            <div className="card-wrapper">
              <img src={cardBackgroundOne} className="card-bg-svg" alt="" />
              <a href={Resume} target="_blank" rel="noopener noreferrer" className="option-card">
                <div className="option-content">
                  <div id="card-title">
                      <h3>Resume</h3>
                  </div>
                  <div id="card-subtitle">
                    <p>Check out my professional experience</p>
                  </div>
                </div>  
              </a>
            </div>
           
            <div className="card-wrapper">
              <img src={cardBackgroundFour} className="card-bg-svg" alt="" />
              <Link to="/contact-me" className="option-card">
              <div className="option-content">
                <div id="card-title">
                  <h3>Contact Me</h3>
                </div>
                <div id="card-subtitle">
                  <p>Send me any inquiries/feedback you have</p>
                </div>
              </div>
            </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div> 
  );
}
