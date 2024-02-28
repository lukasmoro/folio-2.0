import React from "react";
import "./Projects.css";
import DayDate from "./DayDate.jsx";

import mediaData  from '../components/Data/listPresence.json';

const MediaElement = ({ type, src, alt, descriptions }) => {
  return (
    <div className="media-container">
      {type === 'video' ? (
        <video className="media" autoPlay loop muted src={src} alt={alt} />
      ) : (
        <img className="media" src={src} alt={alt} />
      )}
      <div className="description-overlay">
        {descriptions.map((descriptions, index) => (
          <span key={index} className="description-textbox">{descriptions}</span>
        ))}
      </div>
    </div>
  );
};

function Presence() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>
          Presence · Spatial Computing for Living in the Moment.
        </h1>
        <p className="spacer">⌘</p>
        <video
            className="header-image"
            src="img/work/presence/presence.mp4"
            alt=""
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
          />
        <ul className="tools"><li className="tool">UNITY</li><li className="tool">C#</li><li className="tool">URP</li><li className="tool">SHADERLAB</li><li className="tool">VFX GRAPH</li><li className="tool">META INTERACTION SDK</li><li className="tool">ARDUINO</li><li className="tool">PYTHON</li><li className="tool">QUEST 3</li></ul>
        <p>

         <em>Work in progress.</em> What makes virtual and physical realities interweave? What makes contextual interfaces with implicit input unobtrusive? What makes a reality perception gap, between people with different or no hardware smaller?
        </p>

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
            ↳ Download APKs for Quest 3
          </a>
        </div>
        <div className="line-projects"></div>
        <div className="grid">
            {mediaData.map((row, rowIndex) => (
              <div className="row" key={rowIndex}>
                {row.map((media, colIndex) => (
                  <div className="col" key={colIndex}>
                    <MediaElement type={media.type} src={media.src} alt={media.alt} descriptions={media.descriptions} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        <div className="bottom-work"></div>
      </div>
    </div>
  );
}

export default Presence;
