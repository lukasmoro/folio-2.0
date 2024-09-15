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
        <h1>Projects.</h1>
        <p className="spacer">⌘</p>
        <p>
          Projects and explorations worked on over the past years. My favourites are{" "} 
          <a
              href="https://www.rolls-roycemotorcars.com/en_GB/home.html"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Presence
            </a>,{" "}
            <a
              href="https://www.rolls-roycemotorcars.com/en_GB/home.html"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
             "Feels Like Paper!"{" "}
            </a>  
            and{" "} 
            <a
              href="https://www.rolls-roycemotorcars.com/en_GB/home.html"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
             Sensorium
            </a>.
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
