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

  // const renderAnimatedSVG = (projectName) => {
    
  //   const projectsToAnimate = ["Presence Master Thesis", "Sensorium Car Interior", "\"Feels Like Paper!\""];
  //   if (projectsToAnimate.includes(projectName)) {
    
  //     return (
  //       <svg className="star" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <path d="M4.72076 14.3561C4.63718 14.2619 4.47279 13.9942 4.48393 13.677C4.48979 13.5101 5.02339 12.091 5.28541 10.3943C5.64597 8.05954 5.76663 5.26147 5.77861 5.04303C5.7945 4.75332 5.93679 2.5477 6.0488 1.35488C6.05387 1.30085 6.12115 1.28018 6.15648 1.32138C7.16744 2.5004 9.03979 4.67978 9.12912 4.76673C9.24435 4.87888 11.001 6.95381 11.1007 7.1149C11.2003 7.27599 11.9113 8.19227 12.0696 8.36556C12.2279 8.53885 12.9698 9.10707 13.2965 9.48276C13.5272 9.74795 14.0716 10.5278 14.4023 11.012C14.4372 11.0631 14.3835 11.1276 14.3268 11.1031C13.6088 10.793 12.354 10.2729 11.8413 10.1426C11.1374 9.96377 9.12695 9.93591 8.71276 9.80834C8.29857 9.68077 5.10843 8.88922 4.56821 8.80561C4.028 8.72199 0.625162 7.35177 0.422687 7.27005V7.27005C0.369677 7.24865 0.351159 7.09131 0.402527 7.06623C0.728739 6.90693 1.12694 6.705 1.20291 6.63887C1.32802 6.52995 2.64176 6.43083 2.82843 6.31133C2.97776 6.21572 4.75581 5.28006 5.62616 4.82418C5.71326 4.78292 5.92244 4.69473 6.06241 4.67203C6.23736 4.64366 7.0481 4.56764 7.31954 4.47297C7.53669 4.39724 8.06546 4.09676 8.30269 3.95599C8.60263 3.96382 9.24787 3.97236 9.42931 3.9439C9.65612 3.90832 10.137 3.69708 10.325 3.67503C10.5131 3.65297 11.0095 3.86065 11.1811 3.82257C11.3527 3.7845 11.6194 3.58268 11.8791 3.57914C12.1388 3.5756 12.5826 3.72551 12.7347 3.6942C12.8869 3.66289 13.6778 3.56115 13.9105 3.48C14.0475 3.43223 14.2997 3.39532 14.4936 3.37346C14.5519 3.36689 14.5835 3.43723 14.5403 3.47693C13.9633 4.00767 12.9928 4.89987 12.8765 5.00486C12.7194 5.14671 11.7372 6.19651 11.5869 6.35776C11.4365 6.51901 10.6565 7.40036 10.5387 7.56117C10.4443 7.68981 10.2311 8.09277 10.1363 8.27817C10.0505 8.33349 9.8194 8.51057 9.58153 8.77633C9.2842 9.10852 9.24861 9.34943 9.07887 9.51744C8.90912 9.68545 8.24295 10.1136 7.96793 10.4163C7.69292 10.719 6.38205 11.9487 6.17352 12.1302C6.0067 12.2754 4.0507 13.3493 3.09355 13.8681" stroke="#27221f" strokeWidth="0.5" strokeLinecap="round"/>
  //       </svg>
  //     );
  //   }
    
  //   return null;
  // };

  return (
    <div className="container">
      <div className="text-block">
        <DayDate />

        <h1>Projects.</h1>

        <p className="spacer">⌘</p>
        <p>
          Projects and explorations worked on over the past years. My current
          favourites are{" "}
          <Link to="/presence" className="link">
            Presence
          </Link>
          ,{" "}
          <Link to="/paper" className="link">
            "Feels Like Paper!"
          </Link>
          , and{" "}
          <Link to="/sensorium" className="link">
            Sensorium
          </Link>
          .
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
                  {/* {renderAnimatedSVG(item.name)}  */}
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
            <p className="link">↳ Explorations</p>
          </Link>
        </div>
        <div className="bottom-work"></div>
        {isHovered && imgSrc && (
          <div
            className="mouse-follower"
            style={{ left: mousePosition.x + 20, top: mousePosition.y - 165 }}
          >
            <div className="mouse">
              <img alt="" src={imgSrc} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Work;
