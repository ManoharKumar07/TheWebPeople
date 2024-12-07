import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container px-5">
      <section className="about-us">
        <h1 className="about-title">ABOUT US</h1>
        <div className="about-subtext">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          ut labore et dolore magna aliqua.
        </div>
        <div className="about-columns">
          <div className="about-column">
            <div className="image-placeholderAbout">
              <img src="/Image/Image-7.jpg" alt="Luke Skywalker" />
            </div>
            <div className="caption-box">
              <p className="caption-name">Luke Skywalker</p>
              <p className="caption-role">Web Designer</p>
            </div>
          </div>
          <div className="about-column">
            <div className="image-placeholderAbout">
              <img src="/Image/Image-8.jpg" alt="Leia Organa" />
            </div>
            <div className="caption-box">
              <p className="caption-name">Luke Skywalker</p>
              <p className="caption-role">Web Designer</p>
            </div>
          </div>
          <div className="about-column about-text">
            <h2 className="text-title">Little About Us</h2>
            <p className="text-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="read-more">
              Read More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
