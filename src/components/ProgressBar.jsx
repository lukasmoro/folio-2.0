import React from "react";

const ProgressBar = ({ isComplete }) => (
    <div className="progress-bar-container">
      <div className={`progress-bar ${isComplete ? "complete" : ""}`}></div>
    </div>
  );

export default ProgressBar;
