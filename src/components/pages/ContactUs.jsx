import React from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container px-5">
      {/* Main container with padding for layout */}
      <section className="contact-us" id="contact">
        {/* Title of the Contact Us section */}
        <h1 className="contact-title">CONTACT US</h1>

        {/* Subtext explaining the section */}
        <div className="contact-subtext">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt{" "}
          </p>
          ut labore et dolore magna aliqua.
        </div>

        {/* Container for the two-column layout */}
        <div className="contact-columns-container">
          {/* Left column for the contact form */}
          <div className="contact-form">
            {/* Heading for the form */}
            <h2 className="form-heading">Send Us Message</h2>

            {/* Input field for the user's name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="contact-input"
            />

            {/* Input field for the user's email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contact-input"
            />

            {/* Textarea for the message */}
            <textarea
              name="message"
              placeholder="Message"
              className="contact-textarea"
            ></textarea>

            {/* Submit button  */}
            <button className="contact-button">Send MESSAGE</button>
          </div>

          {/* Right column for the image */}
          <div className="contact-image">
            {/* Image placeholder */}
            <div className="image-placeholderContact">
              <img src="./Image/Image-9.jpg" alt="Placeholder" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
