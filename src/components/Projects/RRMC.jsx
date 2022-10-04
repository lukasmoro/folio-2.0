import React from "react";
import "./Projects.css";
import DayDate from "/Users/lukasmoro/Desktop/Portfolio 2.0/folio-2.0/src/components/DayDate.jsx";

function RRMC() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>
          Rolls Royce - Luxury digital experiences and toolsets to create them.
        </h1>
        <p className="spacer">⌘</p>

        <img
          className="header-image"
          src="img/work/placeholderrrmc.png"
          alt=""
        />
        <p>
          This project is an exploration of how upcoming technologies might
          shape the future of remote healthcare consultation. The intention is
          not presenting this as a final concept but more as an inspiration for
          further explorations in this area. We believe that bridging remote
          situations through mixed reality is very promising and that
          accompanying tangible interfaces are a good way to emulate physical
          encounters and bring people closer together.
        </p>
      </div>
    </div>
  );
}

export default RRMC;
