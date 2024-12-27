import '../styles/Home.css';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import AboutMe from '../components/AboutMe';


function Home() {
  return (
    <div className="App">
      <div className="about-me section">
        <AboutMe />
      </div>
      <div className="section-projects section">
        <Projects />
      </div>
      <div className="contact-skills section">
        <Skills />
      </div>
    </div>
  );
}

export default Home;