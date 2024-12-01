import "../styles/AboutMe.css";
import profilePic from '../assets/profile-pic.png';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="image-container">
        <div className="tilted-background">
          <img id="profile-img" src={profilePic} alt="profile"></img>
        </div>
      </div>

      <div className="text-container">
        <h1>Hello!</h1>
        <h1>My name is Jenna Stover</h1>
        <h2 id="job-title">{'•'} Front-end Web Developer and Designer {'•'}</h2>
        <div id="description">I have passion for front-end software engineering, and am currently in my senior year at the 
          University of South Carolina studying Computer Information Systems. I enjoy taking on challenging
          tasks and continuously pushing myself when it comes to enhancing my technical skills. I am looking
          forward to immersing myself into this field post-graduation and putting my skills to use in a professional setting!</div>
      </div>
    </div>
  )
}

export default AboutMe;