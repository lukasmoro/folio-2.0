import React from "react";
import "./Projects.css";
import DayDate from "./DayDate.jsx";

function RRMC() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>Rolls Royce Motorcars · Prototyping bespoke luxury virtual experiences.</h1>
        <p className="spacer">⌘</p>
        <img
          className="header-image"
          src="img/work/placeholderrrmc.png"
          alt=""
        />
        <ul className="tools"><li className="tool">UNITY</li><li className="tool">C#</li><li className="tool">URP</li><li className="tool">HDRP</li><li className="tool">ARDUINO</li><li className="tool">BLENDER</li><li className="tool">VIVE</li><li className="tool">STEAM VR</li><li className="tool">AUTOMOTIVE SOC</li></ul>
        <p>
          During my time at Rolls-Royce Motorcars I was working on the future of
          bespoke virtual experiences and helping to define processes and creating
          toolchains to enable those. 
          I prototyped for general purpose operating systems as well as embedded systems.
        </p>
      </div>
    </div>
  );
}

export default RRMC;
