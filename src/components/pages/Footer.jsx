import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container px-5">
        {/* The container to show main logo and copyright text on the left side  */}
        <div className="logoandtext">
          <img
            src="./Image/Main-Logo-Footer.png"
            alt="Footer Logo"
            className="footer-logo"
          />
          <p>© 2020 - thewebpeople. All Rights Reserved.</p>
        </div>
        {/* Container to show the back to top button on the right end */}
        <div>
          <a href="#top" className="back-to-top">
            ^ BACK TO TOP
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
