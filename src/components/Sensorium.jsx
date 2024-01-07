import React from "react";
import "./Projects.css";
import DayDate from "./DayDate.jsx";

function Sensorium() {
  return (
    <div className="container">
      <div className="text-block">
           <DayDate /> 
          <h1>
            Sensorium · Multi-sensory, spatial, real-time vehicle interface
          </h1>
          <p className="spacer">⌘</p>
          <img
            className="header-image"
            src="img/work/placeholdersensorium2.png"
            alt=""
          />
           <ul className="tools"><li className="tool">UNITY</li><li className="tool">C#</li><li className="tool">URP</li><li className="tool">BLENDER</li><li className="tool">ARDUINO</li><li className="tool">FIGMA UNITY BRIDGE</li><li className="tool">ULTRALEAP SDK</li><li className="tool">TCP/IP</li><li className="tool">GPGPU</li></ul>
          <p>
            Sensorium is a vehicle interior prototype, where all sensory input, haptic actuation output and display output is processed and controlled in real-time by a centralised virtual twin. This enables a curated continious user experience blending virtuality and physicality.
          </p>
          <div className="line"></div>
          <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://chrome.google.com/webstore/category/extensions?hl=de"
          >
            ↳ GitHub Repository
          </a>
          </div>
          <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://chrome.google.com/webstore/category/extensions?hl=de"
          >
            ↳ In-Depth PDF
          </a>
          </div>
      </div>
    </div>
  );
}

export default Sensorium;
