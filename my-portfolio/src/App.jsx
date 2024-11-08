import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <div className="home-nav">
          <a href="/">JENNA STOVER</a>
        </div>
        <ul className="nav-items">
          <li><a href="/pages/Projects.jsx">PROJECTS</a></li>
          <li><a href="/pages/Contact.jsx">CONTACT ME</a></li>
        </ul> 
      </nav>
      <div className="section">
        <div id="about-me">
          <h1>Hello!</h1>
          <h1>My name is Jenna Stover</h1>
          <h2 id="job-title">{'•'} Front-end Web Developer and Designer {'•'}</h2>
          <h2>I have passion for front-end software engineering, and am currently in my senior year at the 
            University of South Carolina studying Computer Information Systems. I enjoy taking on challenging
            tasks and continuously pushing myself when it comes to enhancing my technical skills. I am looking
            to immerse myself into this field post-graduation and put my skills to use in a professional setting.</h2>
        </div>
        <img id="avatar-img" src="images/avatar-transparent.png" alt="avatar"></img>
      </div>
      
    </div>
  );
}

export default App;
