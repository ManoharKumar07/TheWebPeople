import React from "react";
import "../styles/Work.css";

const Work = () => {
  return (
    <div className="container px-5">
      {" "}
      {/* Container for the whole section with some padding */}
      <div className="work-showcase-section">
        {" "}
        {/* Main section holding the work showcase */}
        <h2 className="work-title">WORK SHOWCASE.</h2>{" "}
        {/* Section title for the work showcase */}
        <div className="work-grid">
          {" "}
          {/* Grid layout to hold work items */}
          <div className="work-item first">
            {" "}
            {/* First work item */}
            <div className="artwork image-placeholder">
              <h3>ARTWORK</h3> {/* Title for the first item */}
              <p>BRANDING</p> {/* Subtext for the first item */}
            </div>
            <div className="image-placeholder" id="image6">
              <img src="./Image/Image-4.jpg" /> {/* Image for the first item */}
            </div>
          </div>
          <div className="work-item second">
            {" "}
            {/* Second work item */}
            <div className="image-placeholder" id="image2">
              <img src="./Image/Image-2.jpg" />{" "}
              {/* Image for the second item */}
            </div>
            <div className="image-placeholder" id="image5">
              <img src="./Image/Image-5.jpg" />{" "}
              {/* Image for the second item */}
            </div>
          </div>
          <div className="work-item third">
            {" "}
            {/* Third work item */}
            <div className="image-placeholder" id="image3">
              <img src="./Image/Image-3.jpg" /> {/* Image for the third item */}
            </div>
            <div className="image-placeholder" id="image4">
              <img src="./Image/Image-6.jpg" /> {/* Image for the third item */}
            </div>
          </div>
        </div>
        <button className="show-more-btn">SHOW ME MORE</button>{" "}
        {/* Button to show more work */}
      </div>
    </div>
  );
};

export default Work;
