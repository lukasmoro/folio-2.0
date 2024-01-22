import React from "react";
import { motion } from 'framer-motion';
import { useResetScroll } from "./ResetScroll";
import "./Projects.css";
import DayDate from "./DayDate.jsx";
import mediaData from '../components/Data/listSensorium.json';

function Sensorium() {


  useResetScroll();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: "100vh" 
    },
    in: {
      opacity: 1,
      y: 0 
    },
    out: {
      opacity: 0,
      y: "-100vh" 
    }
  };
  

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
    <motion.div className="container"   
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={{ type: "tween", duration: 0.5 }}>
      <div className="text-block">
           <DayDate /> 
          <h1>
            Sensorium · Multi-sensory, spatial, real-time Vehicle Interface
          </h1>
          <p className="spacer">⌘</p>
          <img
            className="header-image"
            src="img/work/placeholdersensorium2.png"
            alt=""
          />
           <ul className="tools"><li className="tool">UNITY</li><li className="tool">C#</li><li className="tool">URP</li><li className="tool">BLENDER</li><li className="tool">ARDUINO</li><li className="tool">FIGMA UNITY BRIDGE</li><li className="tool">ULTRALEAP SDK</li><li className="tool">TCP/IP</li><li className="tool">GPGPU</li><li className="tool">RHINO 3D</li><li className="tool">TABLESAW</li><li className="tool">WOODGLUE</li><li className="tool">PRUSA</li></ul>
          <p>
            Sensorium is a vehicle/spaceship interior prototype, where all sensory input, haptic actuation output and display output is processed and controlled in real-time by a centralised virtual twin. This enables a curated continious user experience blending virtuality and physicality.
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
          <div className="line-projects"></div>
          </div>
          <div className="video-container">
            <video
              className="video"
              src="videos/sensoriumroughcut.mp4"
              width="100%"
              height="100%"
              controls={false}
              autoPlay={true}
              loop={true}
              muted={true}
            />
          </div>
          
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
    </motion.div>
  );
}

export default Sensorium;
