import React from "react";
import "./Dock.css";
import "/Users/lukasmoro/Desktop/Portfolio 2.0/folio-2.0/src/App.css";
import { Link } from "react-router-dom";

function Dock() {
  const navStyle = {
    color: "#000000",
    textDecoration: "none",
  };

  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/me">
          <li>me</li>
        </Link>
        <Link style={navStyle} to="/work">
          <li>work</li>
        </Link>
        <Link style={navStyle} to="/visual">
          <li>visual</li>
        </Link>
        <Link style={navStyle} to="/thought">
          <li>thought</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Dock;
