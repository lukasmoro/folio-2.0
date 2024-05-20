import React from "react";
import DayDate from "./DayDate.jsx";

import mediaData  from '../components/Data/listPresence.json';

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

function Presence() {
  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>
          Presence · Spatial Computing for Staying in the Moment.
        </h1>
        <p className="spacer">⌘</p>
        <video
            className="banner"
            src="img/work/presence/presencenew.mp4"
            alt=""
            controls={true}
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
          />
        <ul className="tools"><li className="tool">UNITY</li><li className="tool">C#</li><li className="tool">URP</li><li className="tool">SHADERLAB</li><li className="tool">VFX GRAPH</li><li className="tool">META INTERACTION SDK</li><li className="tool">NETCODE</li><li className="tool">ARDUINO</li><li className="tool">PYTHON</li><li className="tool">YOLO V8</li><li className="tool">OPENAI API</li><li className="tool">QUEST 3</li></ul>
          <p>
          This project explores how integration between virtual and physical spaces could lead towards more meaningful embodiment of software in the world. 
          </p>

          {/* <p>ADD BLENDED SPACE GRAPHICS</p> */}

          <p>A virtual representation of the physical space including geometry, lighting, semantics and networking is used to simulate virtual objects that interact with the physical world in terms of physics, light, occlusion and controlling. While physical objects acknowledge our existence fully, virtual objects occupy mostly our mental space. This leads to a disconnection where mental presence in the virtual space diminishes mental presence in the physical one.</p>

          {/* <p>ADD PRESENCE GRAPHICS DISCONNECTION</p>   */}
            
          <p><em>The goal is to achieve presence in a blended space where virtuality and physicality mix to leverage advantages of both. This should lead to physical objects that are more fluid and accessible in their nature and virtual objects that satisfy our senses and acknowledge us as physical beings.</em></p>
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
        {/* <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="pdf/presencebrief.pdf"
          >
            ↳ Research Paper
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
        </div> */}
        {/*
        <div className="socials">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://chrome.google.com/webstore/category/extensions?hl=de"
          >
            ↳ Download APKs for Quest 3
          </a>
        </div> */}
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
