import React from "react";
import DayDate from "./DayDate";
import "./Visual.css";

function Visual() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>Collection of sorts...</h1>
        <p className="spacer">⌘</p>
        <div className="grid">
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visual;
