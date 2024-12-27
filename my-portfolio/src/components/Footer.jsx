import '../styles/Footer.css'
import linkedIn from '../assets/linkedin-icon.png';
import github from '../assets/github-icon.png';
import gmail from '../assets/gmail-icon.png';

const Footer = () => {
    return (
      <footer className="footer">
        <div id="contact-links">
          <a href="https://www.linkedin.com/in/jenna-stover-usc/" target="_blank" rel="noreferrer">
            <img src={linkedIn} alt="LinkedIn" />
          </a>
          <a href="https://github.com/jenna-stover" target="_blank" rel="noreferrer">
            <img src={github} alt="Github" />
          </a>
          <a href="mailto:Jenna.Stover810@gmail.com" target="_blank" rel="noreferrer">
            <img src={gmail} alt="Gmail"/>
          </a>
        </div>

        <div>@jenna-stover.github.io/MyWebPortfolio/</div>
    </footer>
    )
}

export default Footer;