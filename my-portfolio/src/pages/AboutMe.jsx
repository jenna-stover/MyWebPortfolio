import "../styles/AboutMe.css";
import React, { useState, useEffect } from 'react';
import profilePic from '../assets/profile-pic.PNG';

const AboutMe = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < 7) { 
      const timeoutDuration = step === 0 ? 1000 : 1500;
      const timeout = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, timeoutDuration); 
      return () => clearTimeout(timeout); 
    }
  }, [step]);

  return (
    <div className="about-page">
        <div className="about-me-container">
        <div className="image-container">
          <img id="profile-img" src={profilePic} alt="profile"></img>
        </div>
        <div className="text-container">
          <div className="about-me-text">
            <h1 className={step > 0 ? 'show' : ''}>Hello!</h1>
            <h1 className={step > 1 ? 'show' : ''}>My name is Jenna Stover</h1>
            <div className="paragraphs">
              <div id="description" className={step > 2 ? 'show' : ''}>
                I graduated from the University of South Carolina in May 2025 with a B.S. in Computer Information Systems from the Molinaroli College of Engineering and Computing. </div>
              <div id="description" className={step > 3 ? 'show' : ''}>
                Since then, I have continued working my remote administrative job while actively pursuing opportunities to begin my career in web development.
                I am looking for something more in-tune with my skills and passions, where I can grow as a web developer and contribute to meaningful, creative projects alongside
                a team of like-minded individuals.
              </div>
              <div id="description" className={step > 4 ? 'show' : ''}>
                I have a focus in frontend development, where I specialize in using React and JSX to create dynamic
                and engaging user interfaces, along with CSS to bring my designs to life. However, I also have experience with backend development, and have successfully integrated MongoDB databases, as well as APIs, into my full-stack projects. 
              </div>
              <div id="description" className={step > 5 ? 'show' : ''}>
                Thank you for visiting my portfolio. I look forward to the opportunity to work with you!
              </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
    
  );
};

export default AboutMe;