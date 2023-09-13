import React, { useState } from "react";

const Popup = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 5000); // Hide after 5 seconds
  };

  return (
    <div className={`toast ${isActive ? "active" : ""}`}>
      <div className="toast-content">
        <i className="fas fa-check check"></i>
        <div className="message">
          <span className="text text-1">Success</span>
          <span className="text text-2">Your changes have been saved</span>
        </div>
      </div>
      <i className="fa-xmark close"></i>
      <div className="progress active"></div>
    </div>
  );
};

export default Popup;
