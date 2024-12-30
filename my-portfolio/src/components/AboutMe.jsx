import "../styles/AboutMe.css";
import React, { useState, useEffect } from 'react';
import profilePic from '../assets/profile-pic.png';

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
    <div className="about-me-container">
      <div className="image-container">
        <div className="tilted-background">
          <img id="profile-img" src={profilePic} alt="profile"></img>
        </div>
      </div>

      <div className="text-container">
        <div className="about-me-text">
          <h1 className={step > 0 ? 'show' : ''}>Hello!</h1>
          <h1 className={step > 1 ? 'show' : ''}>My name is Jenna Stover</h1>
          <h2 id="job-title" className={step > 2 ? 'show' : ''}>
            {'•'} Web Developer {'•'}
          </h2>
          <div className="paragraphs">
            <div id="description" className={step > 3 ? 'show' : ''}>
              Currently, I am in my senior year at the University of South Carolina, pursuing a degree in Computer 
              Information Systems, with graduation set for May 2025. </div>
            <div id="description" className={step > 4 ? 'show' : ''}>
              As I approach graduation, I am actively seeking job opportunities that will allow me to apply my skills 
              in a professional setting and help fulfill my long-term goal of becoming a full-stack web developer.
            </div>
            <div id="description" className={step > 5 ? 'show' : ''}>
              My  current focus is on frontend development, where I specialize in using React and JSX to create dynamic
              and engaging user interfaces, along with CSS to bring my designs to life. However, I also have experience with server-side 
              JavaScript using Node.js and have successfully integrated applications with databases, primarily MongoDB.
            </div>
            <div id="description" className={step > 6 ? 'show' : ''}>
              Thank you for visiting my portfolio. I look forward to the opportunity to work with you!
            </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutMe;