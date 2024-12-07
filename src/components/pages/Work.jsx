import React from "react";
import "../styles/Work.css";

const Work = () => {
  return (
    <div className="container px-5">
      {/* Outer container with padding */}
      <div className="work-showcase-section" id="work">
        {/* Main section for the work showcase */}
        <h2 className="work-title">WORK SHOWCASE.</h2>
        {/* Title for the work showcase section */}

        <div className="work-flex">
          {/* Flexbox layout containing all work items */}

          <div className="work-item first">
            {/* First flex item */}
            <div className="artwork image-placeholder">
              {/* Artwork section inside the first flex item */}
              <h3>ARTWORK</h3>
              {/* Title for the artwork */}
              <p>BRANDING</p>
              {/* Subtext for the artwork */}
            </div>
            <div className="image-placeholder" id="image6">
              <img src="./Image/Image-4.jpg" alt="Artwork" />
              {/* Image for the first flex item */}
            </div>
          </div>

          <div className="work-item second">
            {/* Second flex item */}
            <div className="image-placeholder" id="image2">
              <img src="./Image/Image-2.jpg" alt="Second work item" />
              {/* Image for the first half of the second flex item */}
            </div>
            <div className="image-placeholder" id="image5">
              <img src="./Image/Image-5.jpg" alt="Second work item" />
              {/* Image for the second half of the second flex item */}
            </div>
          </div>

          <div className="work-item third">
            {/* Third flex item */}
            <div className="image-placeholder" id="image3">
              <img src="./Image/Image-3.jpg" alt="Third work item" />
              {/* Image for the first half of the third flex item */}
            </div>
            <div className="image-placeholder" id="image4">
              <img src="./Image/Image-6.jpg" alt="Third work item" />
              {/* Image for the second half of the third flex item */}
            </div>
          </div>
        </div>

        <button className="show-more-btn">SHOW ME MORE</button>
        {/* Button to load or display more work items */}
      </div>
    </div>
  );
};

export default Work;
