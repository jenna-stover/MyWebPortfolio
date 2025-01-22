import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Resume from "../assets/my-resume.pdf";
import Footer from "../components/Footer";

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
          <div className="options-title">
            <h2>Are you looking to...</h2>
          </div>
          <div className="options-container">
            <div className="option">
              <p>Check out my projects: </p>
              <p id="link"><Link to="/projects">click here!</Link></p>
            </div>
            <div className="option">
              <p>Learn more about me: </p>
              <p id="link"><Link to="/about-me">click here!</Link></p>
            </div>
            <div className="option">
              <p>View my resume: </p>
              <p id="link"><a id="resume" href={Resume} target="_blank" rel="noopener noreferrer">click here!</a></p>
            </div>
            
            <div className="option">
              <p>Contact me: </p>
              <p id="link"><Link to="/contact-me">click here!</Link></p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div> 
  );
}
