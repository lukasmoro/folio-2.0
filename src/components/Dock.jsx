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
            <li>me</li>
          </Link>
        </BehaviourHover>
        <BehaviourHover rotation={20} timing={200}>
          <Link style={navStyle} to="/work">
            <li>work</li>
          </Link>
        </BehaviourHover>
        <BehaviourHover rotation={20} timing={200}>
          <Link style={navStyle} to="/visual">
            <li>visual</li>
          </Link>
        </BehaviourHover>
        <BehaviourHover rotation={20} timing={200}>
          <Link style={navStyle} to="/thought">
            <li>thought</li>
          </Link>
        </BehaviourHover>
      </ul>
    </nav>
  );
}

export default Dock;
