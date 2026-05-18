import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Resume from "../assets/my-resume.pdf";
import cardBackgroundOne from '../assets/card-bkg1.jpg';
import cardBackgroundTwo from '../assets/card-bkg2.jpg';
import cardBackgroundThree from '../assets/card-bkg3.jpg';
import cardBackgroundFour from '../assets/card-bkg4.jpg';
import SplitText from '../components/SplitText';

export default function Home() {

  return (
    <div>
      <div className="main-container">
        <div>
          <SplitText
            text="Jenna Stover's Web Portfolio"
            className="welcome-text"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            showCallback
          />
        </div>
        <div className="sub-container">
          <div className="card-wrapper"> <img src={cardBackgroundTwo} className="card-bg-svg" alt="" />
              <Link to="/projects" className="option-card">
                <div id="card-title"><h3>Projects</h3></div>
                <div id="card-subtitle"><p>Explore my latest work</p></div>
            </Link>
          </div>
              
          <div className="card-wrapper"><img src={cardBackgroundThree} className="card-bg-svg" alt="" />
            <Link to="/about-me" className="option-card">
              <div id="card-title"><h3>About Me</h3></div>
              <div id="card-subtitle"><p>Learn more about who I am</p></div>
            </Link>
          </div>
          <div className="card-wrapper"><img src={cardBackgroundOne} className="card-bg-svg" alt="" />
            <a href={Resume} target="_blank" rel="noopener noreferrer" className="option-card">
              <div id="card-title"><h3>Resume</h3></div>
              <div id="card-subtitle"><p>Check out my professional experience</p></div>
            </a>
          </div>
            
          <div className="card-wrapper"><img src={cardBackgroundFour} className="card-bg-svg" alt="" />
            <Link to="/contact-me" className="option-card">
              <div id="card-title"><h3>Contact</h3></div>
              <div id="card-subtitle"><p>Send me any inquiries/feedback you have</p></div>
            </Link>
            </div>
          </div>
        </div>
      </div>
  );
}
