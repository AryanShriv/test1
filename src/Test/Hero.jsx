import React from "react";
import "./Hero.css"; 
import BG from "../slider.mp4"
const HeroSection = () => {
  return (
    <div className="hero-container">
      <video className="hero-video" playsInline autoPlay loop muted>
        <source src={BG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Your Heading</h1>
        <p>Your subheading or other content</p>
      </div>
    </div>
  );
};

export default HeroSection;
