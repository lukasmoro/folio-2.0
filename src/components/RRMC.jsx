import React from "react";
import DayDate from "./DayDate.jsx";

import mediaData  from '../components/Data/listRRMC.json';

const MediaElement = ({ type, src, alt, descriptions }) => {
  return (
    <div className="media-container">
      {type === 'video' ? (
        <video className="media" autoPlay loop muted playsInline src={src} alt={alt} />
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
        <h1>Rolls-Royce Motorcars · Prototyping Luxury Virtual Experiences.</h1>
        <p className="spacer">⌘</p>
        <video
            className="banner"
            src="img/work/rrmc/rrmcthumbnail.mp4"
            alt=""
            controls={false}
            autoPlay={true}
            loop={false}
            muted={true}
            playsInline={true}
          />
        <ul className="tools"><li className="tool">UNITY</li><li className="tool">C#</li><li className="tool">URP</li><li className="tool">HDRP</li><li className="tool">ARDUINO</li><li className="tool">BLENDER</li><li className="tool">VIVE</li><li className="tool">STEAM VR</li><li className="tool">AUTOMOTIVE SOC</li></ul>
        <p>
          At Rolls-Royce Motorcars I worked on bespoke virtual experiences and helped to define processes and system-architecture in close collaboration with engineering and design. 
          I prototyped virtual experiences for general purpose operating systems and embedded systems.
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
          <div className="bottom-work"></div>
      </div>
    </div>
  );
}

export default RRMC;
