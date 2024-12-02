import './App.css';
import Projects from './components/Projects';
import ContactSkills from './components/ContactSkills';
import AboutMe from './components/AboutMe';


function App() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
    console.log(`No section found with ClassName: ${sectionId}`);
  }
  };

  return (
    <div className="App">
      <nav className="nav-bar">
        <div className="home-nav">
          <a href="/MyWebPortfolio">JENNA STOVER</a>
        </div>
        <ul className="nav-items">
          <li><button onClick={() => scrollToSection('project-header')}>PROJECTS</button></li>
          <li><button onClick={() => scrollToSection('contact-header')}>CONTACT ME</button></li>
          <li><button onClick={() => scrollToSection('skills-header')}>SKILLS</button></li>
          <li><a href="https://jenna-stover.github.io/index.html">CLASSWORK</a></li>
        </ul> 
      </nav>
      <div className="about-me section">
        <AboutMe />
      </div>
      <div className="section-projects section">
        <Projects />
      </div>
      <div className="contact-skills section">
        <ContactSkills />
      </div>

    </div>
  );
}

export default App;
