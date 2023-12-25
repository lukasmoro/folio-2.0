import React from "react";
import "./Projects.css";
import DayDate from "/Users/lukasmoro/Documents/React/folio-2.0/folio-2.0/src/components/DayDate.jsx";

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
        <p>
          At Rolls Royce I was working on the future of
          bespoke virtual experiences and helping to define processes and create
          toolchains to enable those. I prototyped for general purpose operating systems as well as embedded systems.
        </p>
      </div>
    </div>
  );
}

export default RRMC;
