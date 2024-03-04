import React from "react";
import DayDate from "./DayDate.jsx";

import mediaData from '../components/Data/listArch.json';

function Arch() {

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

  return (
    <div className="container"  >
      <div className="text-block">
           <DayDate /> 
          <h1>
            Arch · Health Room for Remote Areas
          </h1>
          <p className="spacer">⌘</p>
          <video
            className="banner"
            src="img/work/arch/arch.mp4"
            alt=""
            controls={true}
            autoPlay={true}
            loop={true}
            muted={true}
          />
           <ul className="tools"><li className="tool">BLENDER</li><li className="tool">RESEARCH</li><li className="tool">FILMING</li><li className="tool">AR KIT</li><li className="tool">PRUSA</li><li className="tool">CNC</li><li className="tool">RHINO 3D</li></ul>
          <p>
          This project was created during a 10-weeks course, together with Kay Van Den Aker, Tianyi Wang and Josie Reilly. My contribution was the CGI, model-making and parts of the prototyping.<br /><br />
          Arch bridges the remote gap by bringing the patient to the doctor's office through augmented reality, making the remote consultation more intuitive and engaging. Arch also lets the doctor feel the patient's vitals through haptics on the device. The central and collaborative interface of Arch allows both doctor and patient to stay focused on each other.
          </p>
          <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lukasmoro"
          >
            ↳ GitHub Repository
          </a>
          </div>
          <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="pdf/sensorium.pdf"
          >
            ↳ In-Depth PDF
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

export default Arch;
