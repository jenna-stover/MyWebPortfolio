import './App.css';
import profilePic from './assets/profile-pic.PNG';

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
          <li><button onClick={() => scrollToSection('section-projects')}>PROJECTS</button></li>
          <li><button onClick={() => scrollToSection('section-contact')}>CONTACT ME</button></li>
          <li><a href="https://jenna-stover.github.io/index.html">CLASSWORK</a></li>
        </ul> 
      </nav>
      <div className="section-one section">
        <div className="image-container">
          <div className="tilted-background">
            <img id="profile-img" src={profilePic} alt="profile"></img>
          </div>
        </div>
        <div id="about-me">
          <h1>Hello!</h1>
          <h1>My name is Jenna Stover</h1>
          <h2 id="job-title">{'•'} Front-end Web Developer and Designer {'•'}</h2>
          <h2 id="description">I have passion for front-end software engineering, and am currently in my senior year at the 
            University of South Carolina studying Computer Information Systems. I enjoy taking on challenging
            tasks and continuously pushing myself when it comes to enhancing my technical skills. I am looking
            forward to immersing myself into this field post-graduation and put my skills to use in a professional setting!</h2>
        </div>
      </div>
      <h2 id="project-header">~MY PROJECTS~</h2>
      <div className="section-projects section" id="section-projects">
        <div className="project-one project">  
          <div id="project-image">
            <img src="https://placehold.co/800x400" alt="Placeholder" />
          </div>
          <div id="overlay">
            <div id="text">
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
            </div>
          </div>
        </div>
        <div className="project-one project">  
          <div id="project-image">
            <img src="https://placehold.co/800x400" alt="Placeholder" />
          </div>
          <div id="overlay">
            <div id="text">
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
            </div>
          </div>
        </div>
        <div className="project-one project">  
          <div id="project-image">
            <img src="https://placehold.co/800x400" alt="Placeholder" />
          </div>
          <div id="overlay">
            <div id="text">
              <h3>Project 3</h3>
              <p>Description of Project 3</p>
            </div>
          </div>
        </div>
      </div>
      <h2 id="contact-header">~CONTACT ME~</h2>
      <div className="section-contact section" id="section-contact">
        <div id="linkedin">
          <img src="../images/linkedin.png" alt="linkedin" />
        </div>
      </div>
    </div>
  );
}

export default App;
