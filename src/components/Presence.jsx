import React from "react";
import "./Projects.css";
import DayDate from "./DayDate.jsx";

function Presence() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>
          Presence · Spatial Computing for Living in the Moment.
        </h1>
        <p className="spacer">⌘</p>
        <img
          className="header-image"
          src="img/work/presence/placeholderpresence2.png"
          alt=""
        />
        <ul className="tools"><li className="tool">UNITY</li><li className="tool">C#</li><li className="tool">URP</li><li className="tool">SHADERLAB</li><li className="tool">VFX GRAPH</li><li className="tool">META INTERACTION SDK</li><li className="tool">ARDUINO</li><li className="tool">PYTHON</li><li className="tool">QUEST 3</li></ul>
        <p>
        How can mixed reality become a <em>balanced blended space?</em> What makes interfaces with <em>implicit input unobtrusive?</em> What makes a reality perception gap, between people with different hardware <em>smaller?</em>
        </p>

        <div className="line"></div>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="pdf/presencebrief.pdf"
          >
            ↳ Brief PDF
          </a>
        </div>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="pdf/presencebrief.pdf"
          >
            ↳ Research Gateway PDF
          </a>
        </div>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="pdf/presencebrief.pdf"
          >
            ↳ Figma
          </a>
        </div>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://chrome.google.com/webstore/category/extensions?hl=de"
          >
            ↳ GitHub Mono Repository
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
        <div className="bottom-work"></div>
      </div>
    </div>
  );
}

export default Presence;
