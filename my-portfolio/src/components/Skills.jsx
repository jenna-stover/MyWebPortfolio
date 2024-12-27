import "../styles/Skills.css";
import react from '../assets/react-logo.png';
import javascript from '../assets/javascript-logo.png';
import css from '../assets/css-logo.png';
import html from '../assets/html-logo.png';
import nodejs from '../assets/nodejs-logo.png';
import mongodb from '../assets/mongodb-logo.png';
import git from '../assets/git-logo.png';
import json from '../assets/json-logo.png';
import api from '../assets/api-logo.png';

const ContactSkills = () => {
  return (
    <div className="section-contact-skills container">

      <div className="skills-container">
        <h2 id="skills-header">Web-Dev Skills</h2>

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

          <div className="skill-four skill">
            <img src={nodejs} alt="nodejs-logo" />
          </div>

          <div className="skill-five skill">
            <img src={mongodb} alt="mongodb-logo" />
          </div>

          <div className="skill-six skill">
            <img src={git} alt="git-logo" />
          </div>

          <div className="skill-seven skill">
            <img src={json} alt="json-logo" />
          </div>

          <div className="skill-eight skill">
            <img src={api} alt="api-logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSkills;

