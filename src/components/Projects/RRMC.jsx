import React from "react";
import "./Projects.css";
// import DayDate from "/Users/lukasmoro/Desktop/Portfolio 2.0/folio-2.0/src/components/DayDate.jsx";

function RRMC() {
  return (
    <div className="container">
      <div className="text-block">
        {/* <DayDate /> */}
        <h1>Rolls Royce - Bespoke Luxury Digital Experiences.</h1>
        <p className="spacer">⌘</p>

        <img
          className="header-image"
          src="img/work/placeholderrrmc.png"
          alt=""
        />
        <p>
          I am currently working at Rolls Royce Motorcars on the future of
          digital bespoke experiences and define processes & and create
          toolchains to enable bespoke digital solutions.
        </p>
        <p>
          My used stack is Unity, Blender, HLSL Shaders and VFX Graph. For
          prototyping I use automotive media controllers and Kinect V2.
        </p>
      </div>
    </div>
  );
}

export default RRMC;
