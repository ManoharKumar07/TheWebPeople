import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="container px-3">
      {/* Main container for the hero section */}
      <div className="hero-container">
        {/* Flex container: switches between column and row layout based on screen size */}
        <div className="hero-section">
          {/* Left Column: Text content with a title, subtext, and a button */}
          <div className="hero-text">
            <h1 className="hero-title">
              <span>Hello!!!</span>
              <span>We Are Creative</span>
              <span>Digital Agency.</span>
            </h1>
            <p className="hero-subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="hero-btn">SEND MESSAGE</button>
          </div>

          {/* Right Column: Displays the image */}
          <div className="hero-image">
            <img src="./Image/Image-1.png" alt="Hero" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
