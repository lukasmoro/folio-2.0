import React from "react";
import "./Dock.css";
import { NavLink, useLocation } from "react-router-dom"; 
import BehaviourClick from "./BehaviourClick";

function Dock() {

  const location = useLocation();
  const isHomeActive = location.pathname === '/' || location.pathname === '/me';
  const isWorkActive = location.pathname === '/work';
  const isWriteActive = location.pathname === '/write';
  const isProjectActive = location.pathname === '/presence' || location.pathname === '/sensorium' || location.pathname === '/podcasts' || location.pathname === '/rrmc' || location.pathname === '/slabs' || location.pathname === '/arch' || location.pathname === '/play';

  return (
    <nav className = {isProjectActive ? "project-dock" : "normal-dock"}>
      <ul className="nav-links">
        <BehaviourClick jumpHeight={8} timing={200}>
          <NavLink 
            to="/me"
            className={isHomeActive ? "active-link" : ""} 
          >
            <li>About</li>
          </NavLink>
        </BehaviourClick>
        <BehaviourClick jumpHeight={8} timing={200}>
        <NavLink to="/work" 
            className={isWorkActive ? "active-link" : ""} 
            >
          <li>Work</li>
        </NavLink>
        </BehaviourClick>
        <BehaviourClick jumpHeight={8} timing={200}>
        <NavLink to="/write" 
            className={isWriteActive ? "active-link" : ""} 
            >
          <li>Write</li>
        </NavLink>
        </BehaviourClick>
      </ul>
    </nav>
  );
}

export default Dock;