import React from "react";
import "./Projects.css";
import DayDate from "./DayDate.jsx";
import mediaData  from '../components/Data/listRRMC.json';

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

function RRMC() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>Rolls-Royce Motorcars · Prototyping bespoke luxury virtual experiences.</h1>
        <p className="spacer">⌘</p>
        <img
          className="header-image"
          src="img/work/placeholderrrmc.png"
          alt=""
        />
        <ul className="tools"><li className="tool">UNITY</li><li className="tool">C#</li><li className="tool">URP</li><li className="tool">HDRP</li><li className="tool">ARDUINO</li><li className="tool">BLENDER</li><li className="tool">VIVE</li><li className="tool">STEAM VR</li><li className="tool">AUTOMOTIVE SOC</li></ul>
        <p>
          During my time at Rolls-Royce Motorcars I worked on the future of
          bespoke virtual experiences and helped to define processes and
          toolchains to enable those. 
          I prototyped for general purpose operating systems as well as embedded systems together with engineering.
        </p>
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://www.rolls-roycemotorcars.com/en_GB/home.html"
          >
            ↳ Rolls-Royce Motorcars
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
      </div>
    </div>
  );
}

export default RRMC;
