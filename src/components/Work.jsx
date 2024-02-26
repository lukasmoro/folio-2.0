import React, { useState } from 'react';
import useMousePosition from './UseMousePosition';
import { Link } from 'react-router-dom'; 
import WorkItem from '../components/Data/listWork'; 
import DayDate from './DayDate'; 
import './Work.css';

function Work() {
  const [isHovered, setIsHovered] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);
  const mousePosition = useMousePosition();

  const handleMouseEnter = (item) => {
    setVideoSrc(item.src);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setVideoSrc(null);
    setIsHovered(false);
  };

  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>Selected Projects.</h1>
        <p className="spacer">⌘</p>
        <p>
          Selected projects and smaller explorations of the past few years. Done in academic and professional context.
        </p>
        <div className="line"></div>
        {WorkItem.map((item, index) => {
          return (
            <Link
              to={item.to}
              className="item-work"
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
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
        {isHovered && videoSrc && (
          <div className="mouse-follower" style={{ left: mousePosition.x + 20, top: mousePosition.y -165 }}>
            <div className='mouse'><video src={videoSrc} autoPlay controls /></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Work;
