import React, { useState } from "react";
import "../styles/Navbar.css"; // External CSS for desktop styling

const Navbar = () => {
  // Here we using useState hook to change design of navbar based on the screen size
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // This function is called when screen size is small
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="container px-5">
      {/* Main navigation bar container */}
      <div className="navbar">
        {/* Logo section */}
        <div className="logo">
          <img
            src="/Image/Main-Logo.png"
            alt="Logo"
            className="img-fluid" // Ensures the image scales within its container
            style={{ height: "80px", width: "auto" }}
          />
        </div>

        {/* Desktop navigation links */}
        <ul className="nav d-none d-md-flex">
          {/* Desktop navigation (Bootstrap hides this on small screens) */}
          <li className="nav-item">
            <a className="nav-link" href="#work">
              WORK
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#blog">
              BLOG
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>

        {/* Hamburger button for mobile screens ( visible on small screens) */}
        <button
          className="navbar-toggler d-md-none"
          type="button"
          onClick={toggleMobileNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Mobile navigation menu */}
        {isMobileNavOpen && (
          <div className="mobile-nav d-md-none">
            {/* Mobile navigation links ( visible only on small screens) */}
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#work">
                  WORK
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
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
