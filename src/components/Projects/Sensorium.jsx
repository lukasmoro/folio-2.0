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
        </body>
      </div>
    </div>
  );
}

export default Sensorium;
