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
            <li>play</li>
          </Link>
        </BehaviourHover>
        <BehaviourHover rotation={20} timing={200}>
          <Link style={navStyle} to="/thought">
            <li>posts</li>
          </Link>
        </BehaviourHover>
      </ul>
    </nav>
  );
}

export default Dock;
