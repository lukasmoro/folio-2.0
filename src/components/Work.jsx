import React, { useState, useEffect, useContext } from "react";
import { motion } from 'framer-motion';
import { useResetScroll } from "./ResetScroll";
import { Link } from "react-router-dom";
import TriggerRouteChange from "./TriggerRouteChange";
import ListItem from "../components/Data/listWork";
import DayDate from "./DayDate";
import { NavigationContext } from './NavigationContext';
import "./Work.css";

function Work() {

  useResetScroll();

  const { navigationDirection } = useContext(NavigationContext);
  
  const pageVariants = {
    initial: 
    {
      opacity: 0,
      y: navigationDirection === 'top' ? "-100vh" : "100vh"
    },
    in: 
    {
      opacity: 1,
      y: 0 
    },
    out: 
    {
      opacity: 0,
      y: navigationDirection === 'top' ? "100vh" : "-100vh"
    }
  };
  
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [video, setVideo] = useState(ListItem[currentVideoIndex].src);
  const [timer, setTimer] = useState(null);
  const [shouldLoop, setShouldLoop] = useState(false);
  const [progress, setProgress] = useState(new Array(ListItem.length).fill(0));
  const [isResettingBars, setIsResettingBars] = useState(false);
  const totalDuration = 6700;
  

  const handleVideoEnd = () => {
    const nextIndex = (currentVideoIndex + 1) % ListItem.length;
    setCurrentVideoIndex(nextIndex);
    setVideo(ListItem[nextIndex].src);
  
    if (nextIndex === 0) {
      setIsResettingBars(true); // Disable animation for the reset
      setProgress(new Array(ListItem.length).fill(0));
  
      setTimeout(() => {
        setIsResettingBars(false); // Re-enable animation after a short delay
      }, 100);
    }
  };
  

  const handleMouseState = (videoPath, index) => {
    return () => {
      if (timer) clearTimeout(timer);
      setVideo(videoPath);
      setCurrentVideoIndex(index);
      setShouldLoop(true);
      updateProgressBarsToIndex(index);
    };
  };

  const handleMouseOut = () => {
    setShouldLoop(false); 
    const newTimer = setTimeout(() => {
      handleVideoEnd();
    }, totalDuration);
    setTimer(newTimer);
  };

  const updateProgress = (index) => {
    setProgress(oldProgress => {
      const newProgress = [...oldProgress];
      const delta = 100 / totalDuration;
      newProgress[index] = newProgress[index] + delta > 1 ? 1 : newProgress[index] + delta;
      return newProgress;
    });
  };

  const updateProgressBarsToIndex = (hoveredIndex) => {
    setIsResettingBars(true); 
    setProgress(oldProgress => {
      return oldProgress.map((progress, idx) => {
        if (idx < hoveredIndex) {
          return 1;
        } else if (idx === hoveredIndex) {
          return progress;
        } else {
          return 0;
        }
      });
    });
    setTimeout(() => setIsResettingBars(false), 100); 
  };

  useEffect(() => {
    const newTimer = setTimeout(() => {
      handleVideoEnd(); 
    }, totalDuration);
  
    setTimer(newTimer);
  
    const interval = setInterval(() => {
      updateProgress(currentVideoIndex);
    }, 100);

    return () => {
      clearTimeout(newTimer);
      clearInterval(interval);
    };
  }, [currentVideoIndex]);

  return (
    <TriggerRouteChange navigateToTop={'/me'} navigateToBottom={'/play'}>
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
          <h1>Selected work.</h1>
          <p className="spacer">⌘</p>
          <div className="video-area">
          <div className="progress-area">
            {ListItem.map((item, index) => (
              <div 
                key={item.id}
                className="progress-container"
                style={{ width: `${100 / ListItem.length}%` }}
              >
                <div className="progress-bar-bg"></div>
                <div 
            className="progress-bar"
            style={{ 
              width: `${progress[index] * 100}%`,
              transition: isResettingBars ? 'none' : 'width 0.1s ease-in-out'
            }}
          ></div>
              </div>
            ))}
          </div>
            <video 
              className="header-video"
              src={video}
              onEnded={handleVideoEnd}
              loop={shouldLoop}
              alt="Sorry, something went wrong."
              autoPlay
              muted 
            />
          </div>   
        {ListItem.map((item, index) => {
          return (
            <Link
              to={item.to}
              className="item-work"
              onMouseOver={handleMouseState(item.src, index)}
              onMouseOut={handleMouseOut} 
              key={item.id}
            >
              <ul className="list-item">
                <li className="item" id="year">
                  {item.date}
                </li>
                <div href="" className="link">
                  <li className="item">{item.name}</li>
                </div>
              </ul>
            </Link>
          );
        })}
      </div>
      
    </motion.div>
    </TriggerRouteChange>
  );
}

export default Work;
