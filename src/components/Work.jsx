import React, { useState } from 'react';
import useMousePosition from './UseMousePosition';
import { Link } from 'react-router-dom'; 
import WorkItem from '../components/Data/listWork'; 
import DayDate from './DayDate'; 

function Work() {
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const mousePosition = useMousePosition();

  const handleMouseEnter = (item) => {
    setImgSrc(item.src);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setImgSrc(null);
    setIsHovered(false);
  };

  return (
    <div className="container">
      <div className="text-block">
        <DayDate />
        <h1>Selected Projects.</h1>
        <p className="spacer">⌘</p>
        <p>
          A selection of projects and smaller explorations done over the past few years.
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
        {isHovered && imgSrc && (
          <div className="mouse-follower" style={{ left: mousePosition.x + 20, top: mousePosition.y -165 }}>
            <div className='mouse'><img alt='' src={imgSrc}/></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Work;
