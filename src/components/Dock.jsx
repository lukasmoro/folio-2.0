import React from "react";
import "./Dock.css";
import { Link } from "react-router-dom";
import BehaviourHover from "./BehaviourHover";

function Dock() {
  const navStyle = {
    color: "#000000",
    textDecoration: "none",
  };

  return (
    <div className="flex">
      <nav>
        <ul className="nav-links">
          <BehaviourHover rotation={20} timing={200}>
            <Link style={navStyle} to="/me">
              <li>about</li>
            </Link>
          </BehaviourHover>
          <BehaviourHover rotation={20} timing={200}>
            <Link style={navStyle} to="/work">
              <li>works</li>
            </Link>
          </BehaviourHover>
          <BehaviourHover rotation={20} timing={200}>
            <Link style={navStyle} to="/visual">
              <li>views</li>
            </Link>
          </BehaviourHover>
          <BehaviourHover rotation={20} timing={200}>
            <Link style={navStyle} to="/thought">
              <li>writing</li>
            </Link>
          </BehaviourHover>
        </ul>
      </nav>
    </div>
  );
}

export default Dock;
