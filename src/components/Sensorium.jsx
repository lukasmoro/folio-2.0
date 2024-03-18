import React from "react";
import DayDate from "./DayDate.jsx";

import mediaData from '../components/Data/listSensorium.json';

function Sensorium() {

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

  return (
    <div className="container"  >
      <div className="text-block">
           <DayDate /> 
          <h1>
            Sensorium · Real-time Vehicle Interface Prototype
          </h1>
          <p className="spacer">⌘</p>
          <video
            className="banner"
            src="img/work/sensorium/sensorium.mp4"
            alt=""
            controls={true}
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
          />
           <ul className="tools"><li className="tool">UNITY</li><li className="tool">C#</li><li className="tool">URP</li><li className="tool">BLENDER</li><li className="tool">ARDUINO</li><li className="tool">FIGMA UNITY BRIDGE</li><li className="tool">ULTRALEAP SDK</li><li className="tool">TCP/IP</li><li className="tool">GPGPU</li><li className="tool">RHINO 3D</li><li className="tool">TABLESAW</li><li className="tool">WOODGLUE</li><li className="tool">PRUSA</li></ul>
          <p> 
            This project was created during a 10-weeks course, together with Regina Gensinger, Rohit Dongre and Charlotte Philippe. My contribution was the technical sketching & prototyping. <br /> <br />
            Sensorium is a vehicle interior prototype, where all input like distance sensor, pulse sensor, leap motion & rfid reader, and output like spatial projections of shaders, music, haptic feedback on wearable & servos on seatbelts is processed and controlled in real-time by a centralised virtual twin. This enables a curated continious user experience blending virtual and physical domains.
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

export default Sensorium;
