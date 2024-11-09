import './App.css';

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
          <a href="/">JENNA STOVER</a>
        </div>
        <ul className="nav-items">
          <li><button onClick={() => scrollToSection('section-projects')}>PROJECTS</button></li>
          <li><button onClick={() => scrollToSection('section-contact')}>CONTACT ME</button></li>
        </ul> 
      </nav>
      <div className="section-one section">
        <div className="image-container">
          <div className="tilted-background">
            <img id="profile-img" src="images/profile-pic.PNG" alt="avatar"></img>  
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
      <div className="section-projects section" id="section-projects">
        <h2>MY PROJECTS</h2>
      </div>
      <div className="section-contact section" id="section-contact">
        <h2>CONTACT ME</h2>
      </div>
      
    </div>
  );
}

export default App;
