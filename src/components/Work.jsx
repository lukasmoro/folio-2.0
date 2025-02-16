import React, { useState } from 'react';
import useMousePosition from './UseMousePosition';
import { Link } from 'react-router-dom'; 
import WorkItem from '../components/Data/listWork'; 
import DayDate from './DayDate'; 
import LazyLoadImage from './LazyLoadImage';

function Work() {
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const [alt, setAlt] = useState('');
  const [placeholder, setPlaceholder] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const mousePosition = useMousePosition();

  const handleMouseEnter = (item) => {
    setImgSrc(item.src);
    setAlt(item.name);
    setPlaceholder(item.placeholder);
    setIsHovered(true);
    setIsImageLoaded(false);
  };

  const handleMouseLeave = () => {
    setImgSrc(null);
    setIsHovered(false);
    setIsImageLoaded(false);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="container">
      <div className="text-block">
        
        <DayDate />

        <h1>Lukas Moro · Designer & Prototyper</h1>

        <p className="spacer"></p>

        <p>Building experiences to look for clarity and beauty in interfaces with technologies.
            More on{" "} 
            <a 
              href="https://github.com/lukasmoro"  
              target="_blank"
              rel="noreferrer"
              className="link">GitHub
            </a>,
            {" "} 
            <a 
              href="https://github.com/lukasmoro"  
              target="_blank"
              rel="noreferrer"
              className="link">Substack
            </a>
            {" "}and{" "} 
            <a 
              href="https://read.cv/moro"  
              target="_blank"
              rel="noreferrer"
              className="link">CV
            </a>.

            Contact via{" "}
            <a
              href="https://x.com/lukas_moro"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
            Twitter
            </a>,{" "}
            <a
              href="https://www.linkedin.com/in/lukasmoro/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
            LinkedIn
            </a>
            {" "}or
            <a
              href="mailto:lukas.moro@me.com"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
            {" "}Mail
            </a>.
            </p>
        
        <div className="line"></div>

        {WorkItem.map((item) => {
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
          
          <p>
            Worked with{" "}
            <a 
              href="https://fluid.so/"  
              target="_blank"
              rel="noreferrer"
              className="link">Fluid</a>, {" "} 
            <a
              href="https://www.rolls-roycemotorcars.com/en_GB/home.html"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
            Rolls-Royce Motorcars
            </a>, 
            <a
              href="https://www.slabs.one"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
            {" "}Spatial Labs
            </a> and
            <a
              href="https://www.alfredo-haeberli.com"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
            {" "}Studio Alfredo Häberli
            </a>
            . 
            <br />Graduated from Interaction Design at
            <a
              href="https://www.umu.se/en/umea-institute-of-design/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
            {" "}Umeå Institute of Design
            </a>
            .
            </p>

        <div className="bottom-work"></div>
        {isHovered && imgSrc && (
        <div
          className="mouse-follower"
          style={{ 
            left: mousePosition.x + 20, 
            top: mousePosition.y - 165,
            opacity: isImageLoaded ? 1 : 0,
            transition: 'opacity 0.2s ease-in-out'
          }}
        >
          <div className="mouse">
            <LazyLoadImage 
              alt={alt} 
              src={imgSrc} 
              placeholder={placeholder}
              onLoad={handleImageLoad} 
            />
          </div>
        </div>
      )}
      </div>

      {isHovered && imgSrc && (
        <div
          className="mouse-follower"
          style={{ 
            left: mousePosition.x + 20, 
            top: mousePosition.y - 165,
            opacity: isImageLoaded ? 1 : 0,
            transition: 'opacity 0.2s ease-in-out'
          }}
        >
          <div className="mouse">
            <LazyLoadImage 
              alt={alt} 
              src={imgSrc} 
              placeholder={placeholder}
              onLoad={handleImageLoad} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Work;
