import React from "react";
import "../styles/SocialIcon.css";
const SocialIcon = () => {
  return (
    <div className="container px-5">
      <div className="Social-row">
        <div>
          <img
            src="./Image/Icon-1.png"
            alt="Client Logo 1"
            className="Social-logo"
          />
        </div>
        <div>
          <img
            src="./Image/Icon-2.png"
            alt="Client Logo 2"
            className="Social-logo"
          />
        </div>
        <div>
          <img
            src="./Image/Icon-3.png"
            alt="Client Logo 3"
            className="Social-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialIcon;
