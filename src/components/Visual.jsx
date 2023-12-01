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
            <div className="col">
              <video
                className="video"
                src="videos/oscars.mp4"
                width="100%"
                height="100%"
                autoPlay={true}
                loop={true}
              />
            </div>
            <div className="col">
              <img src="img/grid/3dme.png" alt="Oops, image missing!" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img src="img/grid/BlueMoon.png" alt="Oops, image missing!" />
            </div>
            <div className="col">
              <img src="img/grid/speedform.png" alt="Oops, image missing!" />
            </div>
            <div className="col">
              <video
                className="video"
                src="videos/browserar1.mp4"
                width="100%"
                height="100%"
                autoPlay={true}
                loop={true}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src="img/grid/spotifydatavisualisation.png"
                alt="Oops, image missing!"
              />
            </div>
            <div className="col">
              <video
                className="video"
                src="videos/lucit.mp4"
                width="100%"
                height="100%"
                autoPlay={true}
                loop={true}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src="img/grid/materialofdesire.png"
                alt="Oops, image missing!"
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <img src="img/grid/matsumoto.png" alt="Oops, image missing!" />
            </div>
            <div className="col">
              <video
                className="video"
                src="videos/vrexploration.mp4"
                width="100%"
                height="100%"
                autoPlay={true}
                loop={true}
              />
            </div>
            <div className="col">
              <img
                src="img/grid/orangescreenprint.png"
                alt="Oops, image missing!"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src="img/grid/taigaiterations.png"
                alt="Oops, image missing!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visual;
