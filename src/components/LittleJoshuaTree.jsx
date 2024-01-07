import React from "react";
import "./Projects.css";
import DayDate from "./DayDate.jsx";

function LittleJoshuaTree() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>
          Little Joshua Tree · Virtual object as weather interface.
        </h1>
        <p className="spacer">⌘</p>

        <img
          className="header-image"
          src="img/work/placeholderarch.png"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quasi assumenda vitae doloremque at magnam, quos voluptatum asperiores iure animi libero necessitatibus amet. Quas ad obcaecati nulla, a quae aspernatur.
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
            ↳ Download Built for Quest 3
          </a>
        </div>
      </div>
    </div>
  );
}

export default LittleJoshuaTree;
