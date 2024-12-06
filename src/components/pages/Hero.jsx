import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="container px-5">
      {/* Hero section: Includes both text and image */}
      <div className="row hero-section">
        {/* Left Column: Contains text and a button */}
        <div className="col-12 col-lg-6 hero-text">
          {/* Main title with multiple lines */}
          <h1 className="hero-title">
            <span>Hello!!!</span>
            <span>We Are Creative</span>
            <span>Digital Agency.</span>
          </h1>

          {/* Subtext paragraph */}
          <p className="hero-subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Call-to-action button */}
          <button className="hero-btn">SEND MESSAGE</button>
        </div>

        {/* Right Column: Contains the image */}
        <div className="col-12 col-lg-6 hero-image">
          {/* Placeholder div for image */}
          <div className="image-placeholder">
            {/* Hero image */}
            <img src="./Image/Image-1.png" alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
