import "../styles/ContactSkills.css";
import linkedIn from '../assets/linkedin-icon.png';
import github from '../assets/github-icon.png';
import gmail from '../assets/gmail-icon.png';
import react from '../assets/react-logo.png';
import javascript from '../assets/javascript-logo.png';
import css from '../assets/css-logo.png';
import html from '../assets/html-logo.png';

const ContactSkills = () => {
  return (
    <div>
      <div className="section-contact-skills container">
        <div className="contact-container">
          <h2 id="contact-header">Contact Me!</h2>
          <div className="contact-list">
            <div className="linkedin contact">
              <img src={linkedIn} alt="linkedin" />
              <p><a href="https://www.linkedin.com/in/jenna-stover-usc/">LinkedIn Profile</a></p>
            </div>
            <div className="github contact">
              <img src={github} alt="github" />
              <p><a href="https://github.com/jenna-stover">GitHub Profile</a></p>
            </div>
            <div className="gmail contact">
              <img src={gmail} alt="gmail" />
              <p>Jenna.Stover810@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="skills-container">
          <h2 id="skills-header">Technical Skills</h2>
          <div className="skills-list">
            <div className="skill-one skill">
              <img src={react} alt="react-logo" />
            </div>
            <div className="skill-two skill">
              <img src={javascript} alt="javascript-logo" />
            </div>
            <div className="skill-three skill">
              <img src={css} alt="css-logo" />
            </div>
            <div className="skill-three skill">
              <img src={html} alt="html-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
    

  )
}

export default ContactSkills;

