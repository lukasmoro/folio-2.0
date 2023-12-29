import React from "react";
import "./Projects.css";
import DayDate from "/Users/lukasmoro/Documents/React/folio-2.0/folio-2.0/src/components/DayDate.jsx";

function Sensorium() {
  return (
    <div className="container">
      <div className="text-block">
        <body>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit libero quo deserunt aspernatur ipsa saepe, fugit sint eos officia quam corrupti recusandae maxime. Et dolorum fugit aperiam quibusdam reprehenderit dolorem!
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
        </body>
      </div>
    </div>
  );
}

export default Sensorium;
