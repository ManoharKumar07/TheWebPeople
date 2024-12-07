import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container px-5">
      <section className="about-us">
        {/* Section for About Us content */}

        <h1 className="about-title">ABOUT US</h1>
        {/* Heading for the About Us section */}

        <div className="about-subtext">
          {/* Subtext section */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          ut labore et dolore magna aliqua.
        </div>

        <div className="about-columns">
          {/* Container for the 3 columns */}

          <div className="about-column">
            {/* First column */}

            <div className="image-placeholderAbout">
              {/* Image wrapper */}
              <img src="/Image/Image-7.jpg" alt="Luke Skywalker" />
              {/* Image for the first person */}
            </div>
            <div className="caption-box">
              {/* Caption box for the name and role */}
              <p className="caption-name">Luke Skywalker</p>
              {/* Name of the person */}
              <p className="caption-role">Web Designer</p>
              {/* Role of the person */}
            </div>
          </div>

          <div className="about-column">
            {/* Second column */}

            <div className="image-placeholderAbout">
              <img src="/Image/Image-8.jpg" alt="Leia Organa" />
              {/* Image for the second person */}
            </div>
            <div className="caption-box">
              {/* Caption box for the name and role */}
              <p className="caption-name">Luke Skywalker</p>

              <p className="caption-role">Web Designer</p>
            </div>
          </div>

          <div className="about-column about-text">
            {/* Third column for text */}
            <h2 className="text-title">Little About Us</h2>
            {/* Title for the text */}
            <p className="text-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <a href="#" className="read-more">
              Read More
            </a>
            {/* Link to read more about the team */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
