import React from "react";
import "./Projects.css";
// import DayDate from "/Users/lukasmoro/Documents/React/folio-2.0/folio-2.0/src/components/Projects/Spatial.jsx";

function Spatial() {
  return (
    <div className="container">
      <div className="text-block">
        {/* <DayDate /> */}
        <h1>
          Spatial Responsiveness - A different approach to Responsiveness.
        </h1>
        <p className="spacer">⌘</p>

        <img
          className="header-image"
          src="img/work/placeholderarch.png"
          alt=""
        />
        <p>
          This experiment leverages the ability of setting camera perspective
          and positioning in WebGL to approach responsiveness for different
          browser widths. The next instance would be smooth transitioning
          between conventional browser-based 3D-applications and WebXR.
        </p>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://chrome.google.com/webstore/category/extensions?hl=de"
          >
            ↳ Launch Experiment
          </a>
        </div>
      </div>
    </div>
  );
}

export default Spatial;
