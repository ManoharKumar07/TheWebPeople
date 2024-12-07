import React from "react";
import "../styles/ClientPartner.css";

const ClientPartner = () => {
  return (
    <div className="container px-5">
      <div className="client-partners-row">
        <div>
          <img
            src="./Image/Logo-1.png"
            alt="Client Logo 1"
            className="client-logo"
          />
        </div>
        <div>
          <img
            src="./Image/Logo-2.png"
            alt="Client Logo 2"
            className="client-logo"
          />
        </div>
        <div>
          <img
            src="./Image/Logo-3.png"
            alt="Client Logo 3"
            className="client-logo"
          />
        </div>
        <div>
          <img
            src="./Image/Logo-4.png"
            alt="Client Logo 4"
            className="client-logo"
          />
        </div>
        <div>
          <img
            src="./Image/Logo-5.png"
            alt="Client Logo 5"
            className="client-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientPartner;
