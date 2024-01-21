import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from 'framer-motion';
import { useResetScroll } from "./ResetScroll";
import { Link } from "react-router-dom";
import OtherItem from "../components/Data/listOther";
import WorkItem from "../components/Data/listWork";
import DayDate from "./DayDate";
import "./Work.css";

function Work() {

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
  
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [video, setVideo] = useState(WorkItem[currentVideoIndex].src);
  const [shouldLoop, setShouldLoop] = useState(false);
  const [progress, setProgress] = useState(new Array(WorkItem.length).fill(0));
  const [isResettingBars, setIsResettingBars] = useState(false);
  const totalDuration = 6700;
  const timerRef = useRef(null);
  const debounceRef = useRef(null);
  

  const handleVideoEnd = useCallback(() => {
    const nextIndex = (currentVideoIndex + 1) % WorkItem.length;
    setCurrentVideoIndex(nextIndex);
    setVideo(WorkItem[nextIndex].src);

    if (nextIndex === 0) {
      setIsResettingBars(true);
      setProgress(new Array(WorkItem.length).fill(0));
      setTimeout(() => {
        setIsResettingBars(false);
      }, 100);
    }
  }, [currentVideoIndex]);
  

  const handleMouseState = useCallback((videoPath, index) => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current); 
      
      debounceRef.current = setTimeout(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setVideo(videoPath);
        setCurrentVideoIndex(index);
        setShouldLoop(true);
        updateProgressBarsToIndex(index);

        timerRef.current = setTimeout(() => {
          handleVideoEnd();
        }, totalDuration);
      }, 100); 
    };
  }, [handleVideoEnd, totalDuration]);

  const handleMouseOut = () => {
    setShouldLoop(false); 
    if (timerRef.current) clearTimeout(timerRef.current); 
    timerRef.current = setTimeout(() => {
      handleVideoEnd();
    }, totalDuration);
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
    timerRef.current = setTimeout(() => {
      handleVideoEnd();
    }, totalDuration);
    const interval = setInterval(() => {
      updateProgress(currentVideoIndex);
    }, 100);

    return () => {
      clearTimeout(timerRef.current);
      clearInterval(interval);
    };
  }, [currentVideoIndex, handleVideoEnd, totalDuration]);

  return (
     <motion.div 
      className="container"   
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ type: "tween", duration: 0.5 }}>
        <div className="text-block">
          <DayDate />
          <h1>Selected Projects.</h1>
          <p className="spacer">⌘</p>
          <div className="video-area">
          <div className="progress-area">
            {WorkItem.map((item, index) => (
              <div 
                key={item.id}
                className="progress-container"
                style={{ width: `${100 / WorkItem.length}%` }}
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
        {WorkItem.map((item, index) => {
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
          <div className="line-projects"></div>
         <h1>Other Projects.</h1>
          <p className="spacer">⌘</p>
          {OtherItem.map((item, index) => {
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
        <div className="bottom-work"></div>
      </div>
    </motion.div>
  );
}

export default Work;
