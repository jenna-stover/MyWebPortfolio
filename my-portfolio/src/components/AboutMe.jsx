import "../styles/AboutMe.css";
import React, { useState, useEffect } from 'react';
import profilePic from '../assets/profile-pic.png';

const AboutMe = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < 4) { 
      const timeoutDuration = step === 0 ? 1000 : 1500;
      const timeout = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, timeoutDuration); 
      return () => clearTimeout(timeout); 
    }
  }, [step]);

  return (
    <div className="about-me-container">
      <div className="image-container">
        <div className="tilted-background">
          <img id="profile-img" src={profilePic} alt="profile"></img>
        </div>
      </div>

      <div className="text-container">
      <h1 className={step > 0 ? 'show' : ''}>Hello!</h1>
      <h1 className={step > 1 ? 'show' : ''}>My name is Jenna Stover</h1>
      <h2 id="job-title" className={step > 2 ? 'show' : ''}>
        {'•'} I'm a Front-end Web Developer and Designer {'•'}
      </h2>
      <div id="description" className={step > 3 ? 'show' : ''}>
        I have a passion for front-end software engineering, and am currently in my senior year at the
        University of South Carolina studying Computer Information Systems. I enjoy taking on challenging
        tasks and continuously pushing myself when it comes to enhancing my technical skills. I am looking
        forward to immersing myself into this field post-graduation and putting my skills to use in a
        professional setting!
      </div>
    </div>
    </div>
  );
};

export default AboutMe;