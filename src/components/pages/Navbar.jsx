import React, { useState } from "react";

const Navbar = () => {
  // State to control the visibility of the mobile navigation menu
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Toggles the visibility of the mobile menu when the button is clicked
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="container px-5">
      {/* Main navigation bar container */}
      <div className="navbar d-flex justify-content-between align-items-center">
        {/* Logo section */}
        <div className="logo h-5">
          <img
            src="/Image/Main-Logo.png" // Path to the logo image
            alt="Logo" // Alternate text displayed if the image fails to load
            className="img-fluid" // Ensures the image scales within its container
            style={{ height: "80px", width: "auto" }} // Fixes the height to 80px and maintains aspect ratio
          />
        </div>

        {/* Desktop navigation links */}
        <ul className="nav d-none d-md-flex">
          {/* Links are arranged horizontally and hidden on smaller screens */}
          <li className="nav-item">
            <a className="nav-link fw-medium text-black" href="#work">
              WORK
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium text-black" href="#about">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium text-black" href="#blog">
              BLOG
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-medium text-black" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>

        {/* Hamburger button for mobile screens */}
        <button
          className="navbar-toggler d-md-none" // Visible only on small screens, hidden on medium and larger screens
          type="button"
          onClick={toggleMobileNav} // Toggles the mobile menu visibility
        >
          <span className="navbar-toggler-icon"></span>{" "}
          {/* Displays the hamburger icon */}
        </button>

        {/* Mobile navigation menu */}
        {isMobileNavOpen && (
          <div className="mobile-nav d-md-none">
            {/* Links are stacked vertically for mobile screens */}
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link fw-medium text-black" href="#work">
                  WORK
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium text-black" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium text-black" href="#blog">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-medium text-black" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
