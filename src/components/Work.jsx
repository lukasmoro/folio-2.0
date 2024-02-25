import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom"; // For navigation without page reloads
import WorkItem from "../components/Data/listWork"; // Importing data for work items
import DayDate from "./DayDate"; // Component to display the current day and date
import "./Work.css"; // Styling for the Work component

function Work() {
  
  // // State to manage current video, loop status, progress of video loading bars, and reset status of bars
  // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  // const [video, setVideo] = useState(WorkItem[currentVideoIndex].src);
  // const [image, setImage] = useState(WorkItem[currentVideoIndex].preview);
  // const [shouldLoop, setShouldLoop] = useState(false);
  // const [progress, setProgress] = useState(new Array(WorkItem.length).fill(0));
  // const [isResettingBars, setIsResettingBars] = useState(false);
  
  // // Constants for video playback and refs for managing timeouts
  // const totalDuration = 6000; // Total duration for video autoplay before switching
  // const timerRef = useRef(null);
  // const debounceRef = useRef(null);

  // // Handles video end event to loop through videos or reset
  // const handleVideoEnd = useCallback(() => {
  //   const nextIndex = (currentVideoIndex + 1) % WorkItem.length; // Calculate the next video index
  //   setCurrentVideoIndex(nextIndex); // Update the current video index
  //   setImage(WorkItem[nextIndex].preview);
  //   setVideo(WorkItem[nextIndex].src); // Update the video source
    

  //   // Reset progress bars if starting over the list of videos
  //   if (nextIndex === 0) {
  //     setIsResettingBars(true);
  //     setProgress(new Array(WorkItem.length).fill(0));
  //     setTimeout(() => {
  //       setIsResettingBars(false);
  //     }, 100);
  //   }
  // }, [currentVideoIndex]);

  // // Handles mouse over events on video items to change video and loop
  // const handleMouseState = useCallback((videoPath, index) => {
  //   return () => {
  //     if (debounceRef.current) clearTimeout(debounceRef.current); // Clear previous timeout
      
  //     debounceRef.current = setTimeout(() => { // Debounce to avoid rapid switching
  //       if (timerRef.current) clearTimeout(timerRef.current);
  //       setImage("img/preview/preview.jpg")
  //       setVideo(videoPath);
  //       setCurrentVideoIndex(index);
  //       setShouldLoop(true);
  //       updateProgressBarsToIndex(index); // Update progress bars based on the hovered index

  //       // Set a timeout to automatically switch video after total duration
  //       timerRef.current = setTimeout(() => {
  //         handleVideoEnd();
  //       }, totalDuration);
  //     }, 100); // Debounce delay
  //   };
  // }, [handleVideoEnd, totalDuration]);

  // // Resets looping state and triggers video end after total duration
  // const handleMouseOut = () => {
  //   setShouldLoop(false);
  //   if (timerRef.current) clearTimeout(timerRef.current);
  //   timerRef.current = setTimeout(() => {
  //     handleVideoEnd();
  //   }, totalDuration);
  // };
  
  // // Function to incrementally update the progress of the current video's loading bar
  // const updateProgress = (index) => {
  //   setProgress(oldProgress => {
  //     const newProgress = [...oldProgress];
  //     const delta = 100 / totalDuration;
  //     newProgress[index] = newProgress[index] + delta > 1 ? 1 : newProgress[index] + delta;
  //     return newProgress;
  //   });
  // };

  // // Resets and updates progress bars based on the hovered video index
  // const updateProgressBarsToIndex = (hoveredIndex) => {
  //   setIsResettingBars(true);
  //   setProgress(oldProgress => {
  //     return oldProgress.map((progress, idx) => idx < hoveredIndex ? 1 : idx === hoveredIndex ? progress : 0);
  //   });
  //   setTimeout(() => setIsResettingBars(false), 100);
  // };

  // // Effect hook to manage video autoplay and progress bar updates
  // useEffect(() => {
  //   timerRef.current = setTimeout(() => {
  //     handleVideoEnd();
  //   }, totalDuration);
  //   const interval = setInterval(() => {
  //     updateProgress(currentVideoIndex);
  //   }, 100);

  //   return () => {
  //     clearTimeout(timerRef.current);
  //     clearInterval(interval);
  //   };
  // }, [currentVideoIndex, handleVideoEnd, totalDuration]);
  

  // Render the Work component with motion animations, videos, and progress bars
  return (
     <div 
      className="container">
        <div className="text-block">
          <DayDate />
          <h1>Selected Projects.</h1>
          <p className="spacer">⌘</p>
          <p>
            Selected projects and smaller explorations of the past few years. Done in academic and professional context.
          </p>
          <div className="line"></div>
          {/* <div className="video-area">
            <div className="progress-area">
              {WorkItem.map((item, index) => (
                <div 
                  key={item.id}
                  className="progress-container"
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
              poster={image}
              autoPlay
              muted
            />
          </div>    */}
          {WorkItem.map((item, index) => {
            return (
              <Link
                to={item.to}
                className="item-work"
                // onMouseOver={handleMouseState(item.src, index)}
                // onMouseOut={handleMouseOut} 
                key={item.id}
              >
                <ul className="list-item">
                  <li className="item" id="year">
                    {item.date}
                  </li>
                  <div className="link">
                    <li className="item">{item.name}</li>
                  </div>
                </ul>
              </Link>
            );
          })}
          <div className="line-projects"></div>
          <div className="socials">
            <Link to="/play">
              <p className="link">↳ Smaller Explorations</p>
            </Link>
          </div>
        <div className="bottom-work"></div>
      </div>
    </div>
  );
}

export default Work;
