import "../styles/ContactSkills.css";
import linkedIn from '../assets/linkedin-icon.png';
import github from '../assets/github-icon.png';
import gmail from '../assets/gmail-icon.png';
import react from '../assets/react-logo.png';
import javascript from '../assets/javascript-logo.png';
import htmlcss from '../assets/html-css.png';

const ContactSkills = () => {
  return (
    <div>
      <div className="section-contact container">
        <div className="contact-container">
          <h2 id="contact-header">CONTACT ME</h2>
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

        <div className="skills-container">
          <h2 id="skills-header">TECHNICAL SKILLS</h2>
          <div className="skill-one skill">
            <img src={react} alt="react-logo" />
          </div>
          <div className="skill-two skill">
            <img src={javascript} alt="javascript-logo" />
          </div>
          <div className="skill-three skill">
            <img src={htmlcss} alt="html-css" />
          </div>
        </div>
      </div>
    </div>
    

  )
}

export default ContactSkills;

