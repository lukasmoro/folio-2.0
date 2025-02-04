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

        <p>Building experiences blurring digital and physical interactions for fricitonless integration of computing into <i>perceivable reality</i>.</p>
        
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
            Available for freelancing gigs and permanent opportunities.
            <br />
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
            <br />Graduated in Interaction Design at
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

            <p>
            Find more information on{" "} 
            <a 
              href="https://github.com/lukasmoro"  
              target="_blank"
              rel="noreferrer"
              className="link">GitHub
            </a>
            {" "}and{" "} 
            <a 
              href="https://read.cv/moro"  
              target="_blank"
              rel="noreferrer"
              className="link">CV
            </a>.

            Reach me via{" "}
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
  
            {/* <p>Take care.</p>
  
            <svg className="signature" width="80" height="44" viewBox="0 0 272 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 136.786C1.73218 141.216 5.00651 149.848 12.2463 148.933C19.4862 148.017 24.9278 78.1358 26.7436 43.3095C27.8272 49.2948 30.6622 61.864 33.3332 64.2581C36.672 67.2507 39.5714 67.6028 42.6466 71.1236C45.7218 74.6443 54.2444 98.9376 59.1647 101.93C64.0849 104.923 74.7162 110.116 79.988 107.916C84.2053 106.155 87.6027 95.857 88.7742 90.9279C90.3264 94.6834 94.6433 101.86 99.4933 100.522C105.556 98.8496 110.889 75.3485 103.508 74.9964C97.4457 74.7072 98.5001 80.5064 101.312 81.4218C104.826 82.5661 118.472 74.9964 121.195 74.9964C123.919 74.9964 127.433 83.7983 135.429 82.126C141.825 80.7881 145.064 71.4757 145.884 66.9867C149.721 70.126 154.407 77.4235 161.524 74.9964C168.641 72.5693 181.029 44.7456 163.457 44.7456C150.805 44.7456 152.65 54.3397 156.516 54.3397C162.578 54.3397 180.678 42.281 184.807 40.0805C188.937 37.8801 193.594 37.8801 197.459 36.4718C201.325 35.0634 212.22 28.1979 218.283 25.7334C224.345 23.2689 235.592 17.8117 244.378 13.9388C251.407 10.8405 265.055 4.02199 271 1" stroke="#27221f" strokeWidth="2" strokeLinecap="round"/>
            </svg> */}

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
