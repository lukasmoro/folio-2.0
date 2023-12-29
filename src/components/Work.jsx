import React, { useState } from "react";
import { motion } from 'framer-motion';
import { useResetScroll } from "./ResetScroll";
import { Link } from "react-router-dom";
import TriggerRouteChange from "./TriggerRouteChange";
import ListItem from "../components/Data/listWork";
import DayDate from "./DayDate";
import "./Work.css";

function Work() {
  useResetScroll();

  const style = {
    color: "#898989",
  };
  const [video, setVideo] = useState("videos/aliens_NOTCOMPRESSED.mp4");

  function handleMouseState(videoPath) {
    return () => {
      setVideo(videoPath);
      console.log(videoPath);
    };
  }
  
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

  return (
    <TriggerRouteChange navigateToTop={'/me'} navigateToBottom={'/visual'}>
    <motion.div 
      className="container"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ type: "tween", duration: 0.5 }}
    >
      <div className="text-block">
        <DayDate />
        <h1>Selected projects.</h1>
        <p className="spacer">⌘</p>
        <video 
          style={{
            width: '100%',   
            height: '350px', 
            objectFit: 'cover',
            borderRadius: '7px',
            marginBottom: '20px'
          }}
          className="header-video"
          src={video}
          alt="Sorry, something went wrong."
          autoPlay
          loop
          muted 
        />

        <a>
          {ListItem.map((item) => {
            return (
              <Link
                to={item.to}
                className="item-work"
                onMouseOver={handleMouseState(item.src)}
                onMouseOut={handleMouseState("videos/oscars.mp4")}
              >
                <ul className="list-item" key={item.id}>
                  <li style={style} className="item">
                    {item.date}
                  </li>
                  <a href="" className="link">
                    <li className="item">{item.name}</li>
                  </a>
                </ul>
              </Link>
            );
          })}
        </a>
      </div>
    </motion.div>
    </TriggerRouteChange>
  );
}

export default Work;
