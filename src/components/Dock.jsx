import React from "react";
import "./Dock.css";
import { NavLink } from "react-router-dom"; 
import BehaviourHover from "./BehaviourHover";

function Dock() {

  return (
    <nav>
      <ul className="nav-links">
        <BehaviourHover jumpHeight={8} timing={200}>
          <NavLink 
            to="/me"
            className={({ isActive }) => (isActive ? "active-link" : "")} 
          >
            <li>About</li>
          </NavLink>
        </BehaviourHover>
        <BehaviourHover jumpHeight={8} timing={200}>
        <NavLink to="/work" 
            className={({ isActive }) => (isActive ? "active-link" : "")} 
            >
          <li>Work</li>
        </NavLink>
        </BehaviourHover>
        <BehaviourHover jumpHeight={8} timing={200}>
        <NavLink to="/mind" 
            className={({ isActive }) => (isActive ? "active-link" : "")} 
            >
          <li>Write</li>
        </NavLink>
        </BehaviourHover>
      </ul>
    </nav>
  );
}

export default Dock;